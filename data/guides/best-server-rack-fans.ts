export const guideSlug = "best-server-rack-fans";
export const guideTitle = "5 Best Server Rack Fans in 2026";
export const metaTitle = "Best Server Rack Fans 2026";
export const metaDescription = "We compared server rack fans by documented weight rating, mounting depth, and post configuration rather than ranking by U-height alone.";
export const mainKeyword = "server rack fans";
export const introParagraphs = [
  "The real test for server rack fans comes down to checking documented CFM and dBA at actual operating speed, not just a peak airflow number, not a glance at the listing photo.",
  "Rather than trust listing photos, we checked documented weight rating and mounting depth plus checking documented CFM and dBA at actual operating speed, not just a peak airflow number for every rack on this list."
];
export const lastUpdated = "2026-08-20";
export const readTime = "7 min";
export const heroImage = "https://m.media-amazon.com/images/I/41Gxf0E+crL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-server-rack-fans-1",
    rank: 1,
    badge: "Best Overall",
    name: "AC Infinity Rack Roof Fan Kit, Quiet Dual-Fans",
    price: "$69.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41Gxf0E+crL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07FQLHCXL?tag=deskfinds0d-20",
    description: "AC Infinity is one of the more recognized names in quiet cooling, and this roof fan kit brings a PWM speed controller that adjusts fan speed without generating extra electrical noise.\n\nAt 26 dBA it's genuinely quiet for a dual-fan setup, and it's specifically compatible with AC Infinity's CLOUDPLATE fan series if you want to link multiple units under one control scheme.",
    specs: ["2x 120mm fans, 200 CFM total","26 dBA noise rating","PWM speed controller included"],
    pros: ["26 dBA is genuinely quiet for a dual-fan kit","PWM control avoids the noise of cheaper speed dials","Links with CLOUDPLATE fans for shared programming"],
    cons: ["200 CFM may not be enough for a dense sealed rack","Roof mount only, not a 1U front-facing option"],
    bestFor: "buyers prioritizing 2x 120mm fans, 200 cfm total",
  },
  {
    id: "best-server-rack-fans-2",
    rank: 2,
    badge: "Runner-Up",
    name: "AC Infinity CLOUDPLATE T2, Rack Mount Fan 1U",
    price: "$149.00",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31rUFp7gIIL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07B4MTFC9?tag=deskfinds0d-20",
    description: "This is AC Infinity's programmable 1U rack fan, with a thermostat controller that automates speed based on temperature rather than requiring manual adjustment.\n\nAirflow scales from 60 to 300 CFM depending on the speed setting, and the premium anodized aluminum housing looks noticeably more finished than typical rack fan trays.",
    specs: ["1U, top exhaust, 60-300 CFM","12-38 dBA noise range","Programmable thermostat controller"],
    pros: ["Programmable thermostat adjusts speed automatically by heat","300 CFM max airflow handles dense equipment loads","Anodized aluminum housing looks genuinely premium"],
    cons: ["Costs more than basic manual-speed rack fans","38 dBA at max speed is audible in quiet rooms"],
    bestFor: "buyers prioritizing 1u, top exhaust, 60-300 cfm",
  },
  {
    id: "best-server-rack-fans-3",
    rank: 3,
    badge: "Also Great",
    name: "Rack Mount Fan, 4 Fans 1U 19in with Digital Display",
    price: "$98.00",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31k5qGlXIQL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07NW127BN?tag=deskfinds0d-20",
    description: "A budget four-fan cooling tray with a digital temperature display, letting you monitor and set your target temperature directly from the rack front rather than guessing.\n\nTop exhaust design pushes hot air up and out of the cabinet, and the compact 1U footprint means it doesn't eat into your usable rack space significantly.",
    specs: ["1U, 4 fans, top exhaust","Adjustable temperature control","LCD digital display"],
    pros: ["LCD display lets you monitor temperature at a glance","Four fans provide more airflow than single-fan trays","Only takes up 1U of rack space"],
    cons: ["Louder than premium fan kits at full speed","No programmable thermostat like pricier alternatives"],
    bestFor: "buyers prioritizing 1u, 4 fans, top exhaust",
  },
  {
    id: "best-server-rack-fans-4",
    rank: 4,
    badge: "Strong Alternative",
    name: "Rack Mount Fan, 3 Fans 1U 19in with Digital Display",
    price: "$88.00",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31cTeDPMnEL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0B99SVPW9?tag=deskfinds0d-20",
    description: "The 3-fan sibling to the 4-fan model above, still moving a genuinely strong 225 CFM through three 120mm ball bearing fans in the same compact 1U footprint.\n\nA programmable thermostat sensor triggers the fans based on your set parameters rather than running constantly, which helps keep noise down when the rack isn't running hot.",
    specs: ["1U, 3 fans, 225 CFM total","Programmable thermostat sensor","Ball bearing fan construction"],
    pros: ["225 CFM from just three fans is strong airflow","Thermostat trigger avoids constant fan noise","Ball bearing fans last longer than sleeve bearings"],
    cons: ["One fan fewer than the 4-fan version above","Still audible at higher fan speeds"],
    bestFor: "buyers prioritizing 1u, 3 fans, 225 cfm total",
  },
  {
    id: "best-server-rack-fans-5",
    rank: 5,
    badge: "Budget Pick",
    name: "AmRunJe 4X 120mm Server Rack Fan with Speed Control",
    price: "$56.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/51DIN09bAgL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CNKLP31B?tag=deskfinds0d-20",
    description: "A dual-voltage 110V-240V fan panel with variable speed control, versatile enough to work internationally or wherever you're sourcing power for the rack.\n\nDual-ball bearing motors are rated for 50,000 hours of continuous use, and the panel can mount flat or upright, giving flexibility beyond just standard rack installs.",
    specs: ["4x 120mm fans, 108 CFM","110V-240V dual voltage","50,000-hour dual ball bearing motors"],
    pros: ["Dual voltage works internationally without a converter","50,000-hour rated motors for long continuous use","Variable speed control adjusts to actual cooling needs"],
    cons: ["42 dBA at full speed is on the louder side","Marketed broadly for cabinets, not rack-specific mounting"],
    bestFor: "buyers prioritizing 4x 120mm fans, 108 cfm",
  }
];

export const howWeEvaluated = [
  {
    "title": "Rail Depth Checked Against Nominal U-Height",
    "description": "Verified adjustable or fixed mounting depth separately from rack height, since a tall rack with shallow rails won't fit a deep server chassis."
  },
  {
    "title": "Mount Type and Load Rating Cross-Checked",
    "description": "Confirmed whether a weight rating applied to stationary, rolling, or wall-mounted installation, since these are documented separately and aren't interchangeable."
  },
  {
    "title": "Post Configuration Matched to Equipment Class",
    "description": "Checked whether a 2-post or 4-post frame actually supports the equipment class in question, not just the U-height."
  },
  {
    "title": "Cooling Method Verified Against Enclosure Type",
    "description": "Distinguished passive open-frame airflow from active fan cooling from sealed-cabinet thermal management before assuming any rack could handle a dense equipment load."
  },
  {
    "title": "Real Accessory and Hardware Inclusion Checked",
    "description": "Verified which shelves, PDUs, casters, and mounting hardware actually ship in the box versus what's sold separately."
  }
];

export interface HowToChooseSection {
  subheading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export const howToChoose: HowToChooseSection[] = [
  {
    "subheading": "Check CFM at Actual Operating Speed",
    "note": "Verify server rack fans's documented CFM airflow at the speed it will actually run, not just the maximum rated output."
  },
  {
    "subheading": "Compare dBA, Not Just Airflow",
    "note": "Compare noise level in dBA alongside CFM, since higher airflow often comes with more noise unless the fan uses a quieter design."
  },
  {
    "subheading": "Verify Rack Fans Aren't a Room-Cooling Substitute",
    "note": "Recognize that rack fans move air within or around the cabinet, they don't remove heat from a sealed room without separate ventilation or A/C."
  },
  {
    "subheading": "Check Thermostat or Programmable Control",
    "note": "Look for a programmable thermostat that adjusts fan speed automatically rather than running fans constantly at one speed."
  },
  {
    "subheading": "Confirm Mounting Position for Best Airflow",
    "note": "Verify whether the fan is designed for roof, rear, or front exhaust, since mounting position affects how effectively it clears hot air."
  }
];

export const buyingCriteria = [
  {
    "criterion": "Check CFM at Actual Operating Speed",
    "explanation": "Verify server rack fans's documented CFM airflow at the speed it will actually run, not just the maximum rated output."
  },
  {
    "criterion": "Compare dBA, Not Just Airflow",
    "explanation": "Compare noise level in dBA alongside CFM, since higher airflow often comes with more noise unless the fan uses a quieter design."
  },
  {
    "criterion": "Verify Rack Fans Aren't a Room-Cooling Substitute",
    "explanation": "Recognize that rack fans move air within or around the cabinet, they don't remove heat from a sealed room without separate ventilation or A/C."
  },
  {
    "criterion": "Check Thermostat or Programmable Control",
    "explanation": "Look for a programmable thermostat that adjusts fan speed automatically rather than running fans constantly at one speed."
  },
  {
    "criterion": "Confirm Mounting Position for Best Airflow",
    "explanation": "Verify whether the fan is designed for roof, rear, or front exhaust, since mounting position affects how effectively it clears hot air."
  }
];

export const faq = [
  {
    "q": "Will server rack fans cool down a small, sealed server closet by itself?",
    "a": "Not reliably. Rack fans move air within or around the equipment, but if the room itself has no way to exhaust heat, they're mostly recirculating warm air. A genuinely sealed space needs either room-level ventilation or an actual air conditioning unit."
  },
  {
    "q": "How do I know if my rack needs active cooling versus passive airflow?",
    "a": "Check the documented heat output of your equipment against the enclosure type. An open frame with light networking gear often does fine passively, while a sealed cabinet with multiple servers running continuously typically needs active fans or, in dense setups, dedicated cooling."
  },
  {
    "q": "Does a rack's U-height tell me whether my server will actually fit?",
    "a": "No. U-height only measures vertical rack space. Whether a server physically fits also depends on the rail-to-rail mounting depth and the clearance behind the rack for cables and rear panel access, so check adjustable depth range separately from U-height before buying."
  },
  {
    "q": "Is a rack's weight capacity the same whether it's on wheels, on the floor, or on a wall?",
    "a": "No. Manufacturers document these as separate ratings, and they can differ substantially, a rack rated for 500 lbs stationary might drop to 300-400 lbs on casters, and a wall-mount rating is typically far lower than either floor option since it depends on the wall structure, not just the rack."
  },
  {
    "q": "If a wall-mount rack is rated for 130 lbs, can I always mount it at that weight?",
    "a": "Only if the wall itself can support it. The rack's rating assumes a solid structural mounting point like wall studs; drywall alone typically can't support a fully loaded network cabinet, so the wall's actual construction, not just the rack's spec sheet, sets the real limit."
  }
];

export const relatedGuides: { href: string; title: string }[] = [{"href":"/guide/best-server-racks-with-fans","title":"Best Server Racks With Fans in 2026"},{"href":"/guide/best-server-racks","title":"Best Server Racks in 2026"},{"href":"/guide/best-server-racks-for-network","title":"Best Server Racks for Network in 2026"}];
