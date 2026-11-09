export const guideSlug = "best-outdoor-poe-injector";
export const guideTitle = "4 Best Outdoor PoE Injectors in 2026";
export const metaTitle = "Best Outdoor PoE Injectors";
export const metaDescription = "We compared outdoor PoE injectors by real IP rating and surge protection, since an IP67 metal enclosure and 6kV surge protection matter more than wattage alone.";
export const mainKeyword = "best outdoor poe injector";
export const introParagraphs = [
  "An outdoor PoE injector needs a sealed IP67-rated enclosure and real surge protection to survive weather exposure and electrical fluctuations, requirements a standard indoor injector's plastic housing was never designed to meet.",
  "We compared this lineup on real IP rating and surge protection specs, since two listings here specifically state IK10 vandal resistance and 6kV surge protection for exposed installations, while the price range across this comparison spans from $115 to $155 based on power tier and included accessories."
];
export const lastUpdated = "2026-09-17";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/319BI3TUmCL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-outdoor-poe-injector-1",
    rank: 1,
    badge: "Best Overall",
    name: "TRENDnet Outdoor IP67 Gigabit PoE++ Injector, TI-O119GI",
    price: "$154.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/319BI3TUmCL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0F4YPS3HD?tag=deskfinds0d-20",
    description: "This injector's listing specifically states industrial EMS certifications including ESD protection up to 8kV air and surge protection up to 6kV on signal lines, a more detailed compliance spec sheet than most competitors in this comparison provide. Its IP67 metal enclosure operates across a -40C to 75C range and delivers up to 95W to 802.3af, 802.3at, or 802.3bt devices.\n\nCompared to the Intellinet pick below, this one adds NDAA and TAA compliance and a higher stated 95W power ceiling, though its power supply is sold separately, an added cost to factor into the total price.\n\nBest for buyers who need NDAA compliance, the highest power ceiling in this comparison, and documented industrial EMS certifications.",
    specs: ["Up to 95W, 802.3af/at/bt, IP67", "NDAA + TAA compliant, -40C to 75C", "6kV surge, 8kV ESD protection"],
    pros: ["Highest stated power ceiling in this comparison at 95W", "NDAA and TAA compliance for institutional buyers", "Documented industrial EMS certifications beyond basic surge protection"],
    cons: ["Highest price in this comparison", "Power supply sold separately, an added cost"],
    bestFor: "buyers who need NDAA compliance and the highest power ceiling in this comparison",
  },
  {
    id: "best-outdoor-poe-injector-2",
    rank: 2,
    badge: "Best Vandal Resistant",
    name: "Intellinet Outdoor Gigabit PoE++ Injector, 60W, IP67, IK10",
    price: "$125.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31+j+EantBL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09SQ5T8BD?tag=deskfinds0d-20",
    description: "This injector's listing specifically states an IK10 vandal-resistance rating alongside IP67 dust and waterproof protection, the only pick in this comparison combining both certifications explicitly. Its included mounting kit, earthing kit, and three IP67-rated cable glands create a genuinely sealed installation out of the box.\n\nCompared to the TRENDnet pick above, this one costs under $30 less while covering the more common 60W 802.3bt tier rather than the TRENDnet's higher 95W ceiling, and includes more mounting accessories in the box.\n\nBest for buyers installing in a location exposed to vandalism or physical impact who want a genuinely sealed, complete installation kit.",
    specs: ["60W, 802.3af/at/bt, IP67 + IK10", "Includes mounting kit, earthing kit, cable glands", "6kV surge, 8kV ESD protection"],
    pros: ["IK10 vandal resistance rating not stated on other picks", "Includes mounting and earthing kit plus cable glands", "60W covers the majority of outdoor PoE device needs"],
    cons: ["Lower power ceiling than the TRENDnet pick's 95W", "No stated NDAA compliance"],
    bestFor: "buyers installing in a location exposed to vandalism who want a complete sealed installation kit",
  },
  {
    id: "best-outdoor-poe-injector-3",
    rank: 3,
    badge: "Best for Solar Applications",
    name: "PROCET 10GbE 30W PoE+ Injector Outdoor IP67",
    price: "$115.00",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31U6PP3SfiL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08ZSPL8GL?tag=deskfinds0d-20",
    description: "This injector's listing specifically states a 12-55V DC input with voltage boosting, making it possible to power from a solar application, a genuinely different power source flexibility than the AC-only picks above. Its support for 10/100/1000Mbps through 2.5G, 5G, and full 10Gbps data speeds is the highest stated speed ceiling in this comparison.\n\nCompared to the TRENDnet and Intellinet picks above, this one's DC input flexibility and 10GbE speed target a different use case, PTZ AI cameras and mmWave bridges on solar or remote power, rather than a standard grid-powered installation.\n\nBest for buyers powering an outdoor PTZ camera or wireless bridge from a solar or variable DC power source who need up to 10Gbps speed.",
    specs: ["30W, 10GbE up to 10Gbps", "12-55V DC input with voltage boosting", "Aluminum alloy, IP67, -40F to 149F"],
    pros: ["Only pick in this comparison accepting DC/solar power input", "Highest stated data speed ceiling at up to 10Gbps", "Named compatibility with Dahua/Axis PTZ cameras and mmWave bridges"],
    cons: ["Lower power ceiling at 30W compared to the 60W and 95W picks", "No stated IK vandal resistance rating"],
    bestFor: "buyers powering outdoor cameras or bridges from solar or variable DC power who need high-speed data",
  },
  {
    id: "best-outdoor-poe-injector-4",
    rank: 4,
    badge: "Best Value",
    name: "FASTCABLING Outdoor Industrial PoE++ Injector, 60W",
    price: "$146.26",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/310Vo+ngs5L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CJXW3J41?tag=deskfinds0d-20",
    description: "This injector's listing specifically states a built-in power supply accepting 100-240V AC input directly, meaning no external power adapter is needed unlike the TRENDnet pick's separately sold supply. Its aluminum IK10 vandal-proof metal housing and IP67 waterproof rating operate across a -25C to 60C range.\n\nCompared to the Intellinet pick above, this one delivers the same 60W 802.3bt power tier and IK10 vandal resistance with a built-in power supply, at a similar overall total cost once the TRENDnet's separate power supply is factored in.\n\nBest for buyers who want a built-in AC power supply with no separate adapter purchase needed, at the 60W 802.3bt tier.",
    specs: ["60W, 802.3af/at/bt, IP67 + IK10", "Built-in 100-240V AC power supply", "Wide -25C to 60C operating range"],
    pros: ["Built-in power supply, no separate adapter purchase needed", "IK10 vandal-proof rating matches the Intellinet pick", "Wide operating temperature range for industrial use"],
    cons: ["No stated NDAA compliance", "No specific stated ESD kV rating unlike the Intellinet or TRENDnet picks"],
    bestFor: "buyers who want a built-in power supply with no separate adapter purchase at the 60W tier",
  }
];

export const howWeEvaluated = [
  {
    "title": "Verified IP rating and impact rating",
    "description": "All four state IP67, but only Intellinet and FASTCABLING add an IK10 impact rating, which matters where vandals or flying debris are a risk. We separated water protection from impact protection, since IP67 says nothing about a hit from a thrown object."
  },
  {
    "title": "Surge and ESD protection",
    "description": "TRENDnet and Intellinet both list 6kV surge and 8kV ESD protection. An outdoor injector sits on a long cable run that attracts surges, so we gave named figures more weight than general protection claims on the other two units. A long outdoor run acts as an antenna, so surge numbers on the datasheet matter."
  },
  {
    "title": "Power source flexibility",
    "description": "Three of the four need AC mains. PROCET alone accepts 12 to 55V DC with voltage boosting, which suits solar or battery sites. We checked whether each unit includes its supply, since FASTCABLING has a built-in 100 to 240V supply and TRENDnet sells it separately."
  },
  {
    "title": "Power ceiling against the device",
    "description": "TRENDnet reaches 95W, Intellinet and FASTCABLING 60W, and PROCET 30W with 10GbE. Most outdoor cameras draw well under 30W, so we penalized paying for a ceiling a device will never use. A 30W unit already covers most fixed cameras, so 95W only helps PoE++ radios and heated PTZ heads."
  },
  {
    "title": "Included mounting and sealing hardware",
    "description": "Intellinet includes a mounting kit, earthing kit and cable glands, which saves a trip for parts. We counted these because a poorly sealed gland defeats an IP67 body, and missing hardware adds both cost and a weak point. A kit that omits glands or an earth lead means a second order and a second ladder trip."
  }
];

export const howToChoose = [
  {
    "subheading": "By Installation Environment",
    "intro": "Outdoor use brings water, surges and sometimes vandals, so start with the site and not the wattage.",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "Demanding PoE++ camera or radio, institutional compliance",
          "TRENDnet Outdoor IP67 Gigabit PoE++ Injector, up to 95W with NDAA and TAA compliance"
        ],
        [
          "Exposed to vandalism and wanting a complete sealed kit",
          "Intellinet Outdoor Gigabit PoE++ Injector, IP67 plus IK10 with earthing kit and glands"
        ],
        [
          "Solar or remote DC power with fast data",
          "PROCET 10GbE 30W PoE+ Injector Outdoor, taking 12 to 55V DC input"
        ],
        [
          "Mains power, no separate adapter wanted",
          "FASTCABLING Outdoor Industrial PoE++ Injector, with a built-in 100 to 240V supply"
        ],
        [
          "Wide temperature swings on a mast or roof",
          "TRENDnet Outdoor IP67 Gigabit PoE++ Injector, rated -40C to 75C"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "All four cost real money, so the choice is about which gap you are willing to pay for.",
    "table": {
      "headers": [
        "Price range",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $120, lowest cost and DC input",
          "PROCET 10GbE 30W PoE+ Injector Outdoor, which gives up the wattage of the PoE++ units"
        ],
        [
          "Under $130, best sealed-kit value",
          "Intellinet Outdoor Gigabit PoE++ Injector, with 60W and a mounting and earthing kit included"
        ],
        [
          "Under $150, built-in supply convenience",
          "FASTCABLING Outdoor Industrial PoE++ Injector, 60W with IK10 and an internal supply"
        ],
        [
          "Under $160, highest power and compliance",
          "TRENDnet Outdoor IP67 Gigabit PoE++ Injector, 95W with NDAA and TAA status"
        ]
      ]
    }
  },
  {
    "subheading": "AC-Powered vs DC/Solar-Powered Outdoor Injectors",
    "cards": [
      {
        "label": "AC-powered injectors",
        "text": "The TRENDnet, Intellinet and FASTCABLING units suit sites with mains nearby and give higher ceilings, up to 95W. FASTCABLING bundles its supply, while TRENDnet needs one purchased separately."
      },
      {
        "label": "DC and solar-powered injector",
        "text": "The PROCET accepts 12 to 55V DC with voltage boosting, which suits solar PTZ cameras or wireless bridges far from mains. It is limited to 30W, so it will not run a hungry PoE++ device."
      }
    ],
    "note": "Choose DC input only if you truly lack mains power, since the PROCET gives up 30W to 65W of ceiling compared with the AC units."
  },
  {
    "subheading": "By Included Accessories",
    "intro": "Hardware that ships in the box decides how much you spend after the injector.",
    "table": {
      "headers": [
        "Your situation",
        "Recommended pick"
      ],
      "rows": [
        [
          "You need cable glands, earthing and mounting hardware",
          "Intellinet Outdoor Gigabit PoE++ Injector, which includes all three in the box"
        ],
        [
          "You want to plug into mains with no adapter purchase",
          "FASTCABLING Outdoor Industrial PoE++ Injector, built-in 100 to 240V supply"
        ],
        [
          "You already own a suitable 48V supply and want top power",
          "TRENDnet Outdoor IP67 Gigabit PoE++ Injector, which sells its supply separately"
        ],
        [
          "You will feed it from solar or a battery bank",
          "PROCET 10GbE 30W PoE+ Injector Outdoor, which takes DC directly"
        ]
      ]
    }
  },
  {
    "subheading": "For a Remote Solar-Powered Camera Installation Specifically",
    "cards": [
      {
        "label": "Look for",
        "text": "A wide DC input range with voltage boosting, since solar and battery voltage fluctuates through the day. A mains-only injector cannot connect at all, and a narrow DC range may brown out at dusk."
      },
      {
        "label": "In this comparison",
        "text": "The PROCET lists 12 to 55V DC input with voltage boosting, 30W output and 10GbE data. It is the only pick in this guide that runs from a solar source, so it wins this scenario by default."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You need 95W, NDAA and TAA compliance or documented EMS certification. The TRENDnet at under $160 is the only unit here that ticks all three, which matters for government or institutional buyers."
      },
      {
        "label": "Save if",
        "text": "A 60W unit covers your camera. The Intellinet or FASTCABLING cost less than the TRENDnet while keeping IP67 and IK10, and the Intellinet adds a mounting and earthing kit."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "IP67 Alone Doesn't Tell You Everything About an Outdoor Injector's Real Durability",
    "explanation": "IP67 specifically means the enclosure is dust-tight and can withstand temporary immersion in up to 1 meter of water, which covers rain and dust exposure well, but says nothing about resistance to physical impact or vandalism, a separate IK rating (like IK10) that only some listings in this comparison state. This matters if your installation is in a publicly accessible location where physical tampering or accidental impact is a realistic risk, and matters less for a mounted, out-of-reach installation where weather is the only real concern. Check for both an IP rating for weather and dust and, separately, an IK rating if physical protection is also a consideration for your specific installation site."
  },
  {
    "criterion": "A Built-In Power Supply Versus a Separately Sold Power Supply Changes the Real Total Cost of an Outdoor Injector",
    "explanation": "Some outdoor injector listings, like the FASTCABLING pick, include a built-in 100-240V AC power supply so the stated price is the complete cost, while others, like the TRENDnet pick, sell the power supply as a separate accessory, meaning the listed price doesn't reflect what you'll actually spend to get a working installation. This matters for comparing prices fairly across different listings, since a lower headline price with a separate required accessory purchase can end up costing more than a higher headline price that includes everything needed. Check the listing specifically for whether a power supply is included or sold separately before comparing prices across outdoor injector options."
  },
  {
    "criterion": "DC Input Flexibility Is Essential for Remote or Solar Installations but Unnecessary Complexity for a Standard Grid-Powered Site",
    "explanation": "An outdoor injector designed to accept a wide DC voltage range with voltage boosting, like the PROCET pick, specifically enables solar panel or battery power for installations without grid electricity access, a genuinely different design purpose from a standard AC-powered unit. This matters significantly for remote PTZ cameras, wireless bridges, or radar signs installed away from existing electrical infrastructure, and matters not at all if your installation site already has standard AC power readily available. Confirm your specific installation site's actual power access before paying for DC input flexibility you won't use."
  },
  {
    "criterion": "Wide Operating Temperature Range Matters More in Extreme Climates Than Moderate Ones",
    "explanation": "The listings in this comparison range from a -25C to 60C operating range up to a -40C to 75C range, and this difference matters significantly if your installation is in a climate with genuine temperature extremes, like far northern winters or desert summers, where a narrower-rated unit could fail to operate reliably or degrade faster over time. This matters less in a moderate climate that rarely approaches either temperature extreme, where any of the outdoor-rated picks in this comparison would perform reliably. Check your local climate's actual temperature extremes against a listing's stated operating range before assuming any IP67-rated unit handles your specific conditions equally well."
  },
  {
    "criterion": "Included Mounting and Sealing Accessories Reduce Real Installation Complexity and Hidden Costs",
    "explanation": "A listing that includes a mounting kit, earthing kit, and IP67-rated cable glands, like the Intellinet pick, gives you everything needed for a genuinely sealed outdoor installation without sourcing additional parts separately, while a listing without these accessories may leave you needing to purchase compatible glands or grounding hardware on your own to achieve the same weatherproof result. This matters more for a DIY installation where sourcing compatible additional parts adds real time and cost, and matters less if you're working with an installer who already has standard mounting and sealing supplies on hand. Check the listing's included-items section specifically rather than assuming any IP67-rated unit comes complete for installation."
  }
];

export const faq = [
  { "q": "What's the real difference between IP67 and IK10 ratings on an outdoor PoE injector?", "a": "IP67 describes dust and water protection, while IK10 describes impact resistance against a 20 joule strike. A unit can be fully waterproof and still crack when hit, which is why Intellinet and FASTCABLING list both, and why vandal-prone sites should look for IK10 instead of IP67 alone." },
  { "q": "Can I power an outdoor PoE injector from a solar panel?", "a": "Only with a DC-input unit. The PROCET lists 12 to 55V DC input with voltage boosting, so it can run from a solar and battery setup, while the other three need AC mains. Confirm the panel's controller output voltage stays inside that range before you buy." },
  { "q": "Do I need NDAA compliance for a residential outdoor PoE injector installation?", "a": "Not for a home setup. NDAA and TAA rules apply to federal and some institutional purchases, and TRENDnet states both. A residential buyer is better served by checking IP67, surge ratings and the included hardware, which Intellinet covers with its mounting, earthing and gland kit." },
  { "q": "Is a higher wattage always better for an outdoor PoE injector?", "a": "No, match the injector's power ceiling to your specific device's actual draw; a 95W injector powering a 30W PTZ camera doesn't provide any extra benefit and typically costs more than a correctly matched lower-wattage unit." },
  { "q": "What happens if an outdoor PoE injector's power supply isn't included?", "a": "Plan for the extra cost and a weatherproof place to put it. TRENDnet's TI-O119GI sells its supply separately, while FASTCABLING has a built-in 100 to 240V supply, and a loose adapter outdoors needs its own enclosure or it defeats the injector's IP67 rating." },
  { "q": "How do I know if my climate requires a wider operating temperature range?", "a": "Check your local area's historical extreme low and high temperatures against the injector's stated operating range; a unit rated only to 60C maximum could struggle in an extremely hot desert installation compared to one rated to 75C." }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-poe-injector", "title": "Best PoE Injectors" },
  { "href": "/guide/best-90w-poe-injector", "title": "Best 90W PoE++ Injectors" },
  { "href": "/guide/best-poe-splitter-for-starlink-mini", "title": "Best PoE Splitters for Starlink Mini" },
  { "href": "/guide/best-outdoor-poe-splitter", "title": "Best Outdoor PoE Splitters" }
];
