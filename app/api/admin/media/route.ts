import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { getAllMedia, getMediaByFolder, searchMedia } from "@/lib/media-store";
import { isSupabaseConfigured } from "@/lib/supabase/server";

interface SessionData {
  isAdmin?: boolean;
}

const SESSION_OPTIONS = {
  password: process.env.SESSION_SECRET ?? "change-me-to-32-char-secret-key-!!",
  cookieName: "ss_admin_session",
};

export async function GET(request: NextRequest) {
  // Auth check
  const session = await getIronSession<SessionData>(await cookies(), SESSION_OPTIONS);
  if (!session.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!isSupabaseConfigured()) {
    return NextResponse.json({ assets: [] });
  }

  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q")?.trim() ?? "";
    const folder = searchParams.get("folder")?.trim() ?? "";

    let assets;
    if (q) {
      assets = await searchMedia(q);
      if (folder) assets = assets.filter((a) => a.folder === folder);
    } else if (folder) {
      assets = await getMediaByFolder(folder);
    } else {
      assets = await getAllMedia();
    }

    return NextResponse.json({ assets });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
