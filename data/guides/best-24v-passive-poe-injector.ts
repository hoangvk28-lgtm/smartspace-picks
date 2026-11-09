export const guideSlug = "best-24v-passive-poe-injector";
export const guideTitle = "4 Best 24V Passive PoE Injectors in 2026";
export const metaTitle = "Best 24V Passive PoE Injectors";
export const metaDescription = "We compared 24V passive PoE injectors by real device compatibility, since these units explicitly do not work with standard 802.3af/at 48V PoE equipment.";
export const mainKeyword = "best 24v passive poe injector";
export const introParagraphs = [
  "A 24V passive PoE injector applies a fixed voltage directly to specific Ethernet wire pairs without any standard negotiation, a genuinely different power delivery method from the 802.3af/at/bt standards most PoE equipment uses, and it explicitly will not work with standard 48V PoE devices.",
  "We compared this lineup on real named device compatibility, since these injectors are specifically built to replace Ubiquiti's own 24V passive adapters (POE-25-5W, POE-24-12W, POE-24-24W) for older UniFi and airMAX hardware that predates the 802.3af/at standard."
];
export const lastUpdated = "2026-09-17";
export const readTime = "9 min";
export const heroImage = "https://m.media-amazon.com/images/I/4162XjhRcVL._SL500_.jpg";

export interface GuideProduct {
  id: string; rank: number; badge: string; name: string; price: string; rating: number | null; reviews: number | null;
  imageUrl: string; amazonUrl: string; description: string; specs: string[]; pros: string[]; cons: string[]; bestFor: string;
}

export const products: GuideProduct[] = [
  {
    id: "best-24v-passive-poe-injector-1",
    rank: 1,
    badge: "Best Overall",
    name: "24volt Passive PoE Injector 24W (Ubiquiti POE-25-5W Replacement)",
    price: "$12.90",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/4162XjhRcVL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07DMZ17VB?tag=deskfinds0d-20",
    description: "This injector's listing specifically states power is on all the time with no autonegotiation, the defining trait of true passive PoE, and names direct compatibility with Ubiquiti, UniFi, Mikrotik, Tranzeo, and Aircam equipment. Its 24V 24W 1 Amp power supply delivers over 328 feet of Cat5/5e/6/7 cable.\n\nCompared to the cheaper basic pick below, this one's explicit multi-brand compatibility list gives more confidence when replacing an original manufacturer adapter for a specific access point or radio.\n\nBest for buyers replacing an original Ubiquiti, Mikrotik, or Tranzeo passive PoE adapter with a confirmed-compatible third-party unit.",
    specs: ["24V 24W 1A, always-on passive PoE", "Named compatibility: Ubiquiti, Mikrotik, Tranzeo, Aircam", "Up to 328ft over Cat5/5e/6/7"],
    pros: ["Explicit multi-brand compatibility list beyond just Ubiquiti", "Clear warning against use with 48V devices prevents a real mismatch", "Long 328ft transmission distance"],
    cons: ["100Mbps only, not Gigabit", "Does not work with standard 802.3af/at PoE devices"],
    bestFor: "buyers replacing an original passive PoE adapter for Ubiquiti, Mikrotik, or Tranzeo equipment",
  },
  {
    id: "best-24v-passive-poe-injector-2",
    rank: 2,
    badge: "Best for Solar and DC Input",
    name: "PoE Texas 24V Passive PoE Injector, DC-Powered Gigabit, 30W",
    price: "$19.99",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/312OLJQuubL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CRVT4M45?tag=deskfinds0d-20",
    description: "This injector's listing specifically states it accepts a 12-60V DC input, including from a solar or battery source, and regulates that down to a stable 24V passive PoE output, a genuinely different design purpose from a standard AC-powered injector. Its Gigabit data rate and diode isolation between the RJ45 power input and DC power input protect connected equipment.\n\nCompared to the two basic passive picks above and below, this one specifically serves remote infrastructure applications like point-to-point radios, solar CCTV, and RV solar setups where AC power isn't available at all.\n\nBest for buyers powering remote point-to-point radios or solar-powered installations with a variable 12-60V DC source rather than standard AC power.",
    specs: ["24V passive PoE from 12-60V DC input", "Gigabit data rate, up to 30W", "Diode-isolated RJ45 and DC power inputs"],
    pros: ["Only pick in this comparison accepting solar or battery DC input", "Gigabit speed, faster than the 100Mbps basic picks", "One year replacement warranty with phone support"],
    cons: ["Power supply not included, requires your own DC source", "Higher price than the basic AC-powered picks"],
    bestFor: "buyers powering remote radios or solar installations with a variable DC power source",
  },
  {
    id: "best-24v-passive-poe-injector-3",
    rank: 3,
    badge: "Best Gigabit AC-Powered",
    name: "EN15G-24-3 Gigabit PoE Injector, 24V 15W",
    price: "$19.96",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/31thd82e3RL._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B0CBR1ML12?tag=deskfinds0d-20",
    description: "This injector's listing specifically states Gigabit input and output ports supporting 10/100/1000Mbps, the only standard AC-powered 24V passive injector in this comparison offering Gigabit rather than 100Mbps speed. Its stated protections include over voltage, over current, and short circuit protection.\n\nCompared to the two basic 100Mbps picks above, this one's Gigabit speed suits a higher-bandwidth 24V device, while its 15W power budget is lower than the 24W or 30W the other picks offer.\n\nBest for buyers with a Gigabit-capable 24V passive PoE device that doesn't need more than 15W of power.",
    specs: ["24V 15W, Gigabit input/output", "Over voltage, over current, short circuit protection", "Up to 328ft (100m) range"],
    pros: ["Only standard AC-powered pick with Gigabit speed", "Multiple stated electrical protections", "Simple plug and play installation"],
    cons: ["Lower 15W power budget than the 24W and 30W picks", "No named brand compatibility list unlike the top pick"],
    bestFor: "buyers with a Gigabit-capable 24V passive PoE device that doesn't need more than 15W",
  },
  {
    id: "best-24v-passive-poe-injector-4",
    rank: 4,
    badge: "Best Budget",
    name: "24volt Passive PoE Injector Adapter, 24V24W 100Mbps",
    price: "$8.98",
    rating: null,
    reviews: null,
    imageUrl: "https://m.media-amazon.com/images/I/41Etju6FL-L._SL500_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B00NRGR7DC?tag=deskfinds0d-20",
    description: "This injector's listing specifically states it's a direct replacement for the Ubiquiti POE-25-5W, POE-24-12W, and POE-24-24W passive adapters at the lowest price in this comparison. Its clear warning that it does not support 48V or 802.3af/at PoE devices helps prevent a real compatibility mismatch before purchase.\n\nCompared to the pricier picks above, this one delivers the same core 24V 24W passive PoE function for a basic single Ubiquiti or compatible device at the lowest cost in this comparison.\n\nBest for buyers who need a low-cost direct replacement for an original Ubiquiti 24V passive PoE adapter.",
    specs: ["24V 24W, 100Mbps passive PoE", "Named Ubiquiti replacement: POE-25-5W, POE-24-12W, POE-24-24W", "Explicit 48V incompatibility warning"],
    pros: ["Lowest price in this comparison", "Named Ubiquiti part number replacement for easy matching", "Clear compatibility warning avoids a real device mismatch"],
    cons: ["100Mbps only, not Gigabit", "No stated electrical protection features"],
    bestFor: "buyers who need a low-cost direct replacement for an original Ubiquiti 24V passive PoE adapter",
  }
];

export const howWeEvaluated = [
  {
    "title": "Exact voltage and polarity",
    "description": "A 24V passive injector is only right for devices that expect 24V. We read each listing for a stated output voltage and a named compatibility list, such as Ubiquiti, Mikrotik, Tranzeo, and AirCam. Anything vague about voltage was scored low, since the mistake is destructive."
  },
  {
    "title": "Wattage and amperage",
    "description": "We compared 24W (1A) for the first and last picks, 30W for PoE Texas, and 15W for the EN15G. A 24V radio that peaks above its idle draw will brown out on a low-wattage injector, so the budget was matched to common 24V gear. A radio that ships with a 24W brick expects at least that, so we compared each injector with the original it claims to replace and flagged any that fall short."
  },
  {
    "title": "Gigabit or Fast Ethernet",
    "description": "PoE Texas and the EN15G pass Gigabit, while the 24V24W injector is 100Mbps. A 100Mbps injector throttles a modern radio, so we treated Gigabit as a requirement for newer Ubiquiti and Mikrotik hardware. At 100Mbps an injector throttles a Gigabit-capable radio, so a modern bridge on this link will never reach its listed speed, even if power is fine."
  },
  {
    "title": "Input flexibility",
    "description": "PoE Texas takes 12 to 60V DC input with diode-isolated RJ45 and DC power inputs. We noted that this lets it run from a 12V battery or solar setup, which a fixed 24V brick cannot. We saw this as useful for solar and battery sites, where a standard AC brick is not an option and a wide input range keeps the system running through voltage swings."
  },
  {
    "title": "Explicit warnings",
    "description": "One listing warns that it is not compatible with 48V gear, which is exactly the honest disclosure we want. We favored pages that spell out where the injector must not be used. Plain statements of what not to do were worth more to us than long lists of compatible brands, since the damage in this category comes from the mismatch nobody wrote down."
  }
];

export const howToChoose = [
  {
    "subheading": "By Device Type",
    "intro": "24V passive PoE is a legacy standard, so check the device label before anything else.",
    "table": {
      "headers": [
        "Your device",
        "Recommended pick"
      ],
      "rows": [
        [
          "An older Ubiquiti radio that came with the POE-25-5W",
          "24volt Passive PoE Injector 24W (Ubiquiti POE-25-5W Replacement), with 24V 24W 1A"
        ],
        [
          "A Gigabit-capable 24V radio that needs more headroom",
          "PoE Texas 24V Passive PoE Injector, with up to 30W and Gigabit"
        ],
        [
          "A low-draw 24V device that only needs about 15W",
          "EN15G-24-3 Gigabit PoE Injector, at 24V 15W"
        ],
        [
          "A 24V device on a 100Mbps link",
          "24volt Passive PoE Injector Adapter, 24V24W 100Mbps, as a Ubiquiti replacement for several part numbers"
        ]
      ]
    }
  },
  {
    "subheading": "By Budget",
    "intro": "This is the cheapest class of PoE injector.",
    "table": {
      "headers": [
        "Price tier",
        "Recommended pick"
      ],
      "rows": [
        [
          "Under $10, 100Mbps",
          "24volt Passive PoE Injector Adapter, 24V24W, the lowest-cost injector in this guide"
        ],
        [
          "Under $15, Ubiquiti replacement",
          "24volt Passive PoE Injector 24W (Ubiquiti POE-25-5W Replacement), at 24W"
        ],
        [
          "Under $20, Gigabit",
          "EN15G-24-3, at 15W"
        ],
        [
          "Under $20, 30W and DC input",
          "PoE Texas 24V, the most flexible input"
        ]
      ]
    }
  },
  {
    "subheading": "24V Passive vs 802.3af/at Active",
    "intro": "The point is that these are not interchangeable.",
    "cards": [
      {
        "label": "24V passive",
        "text": "Delivers power at a fixed voltage with no handshake. It is the right fit for older Ubiquiti and Mikrotik radios, and a mismatched device can fail. Always match the voltage on the device's label."
      },
      {
        "label": "802.3af/at active",
        "text": "A negotiated standard at about 48V. Modern cameras and APs expect it, and a 24V passive injector will not work with them. Use a standard injector or PoE switch."
      }
    ],
    "note": "If the device label says 24V passive, buy this class; otherwise choose an 802.3af or at injector."
  },
  {
    "subheading": "By Power Source",
    "intro": "Some installs are off-grid or battery-fed.",
    "table": {
      "headers": [
        "Your supply",
        "Recommended pick"
      ],
      "rows": [
        [
          "A normal wall outlet",
          "24volt Passive PoE Injector 24W (Ubiquiti or 24volt Passive PoE Injector Adapter, 24V24W, which ship with their own supply"
        ],
        [
          "A 12V battery or solar bank",
          "PoE Texas 24V, as it accepts 12 to 60V DC input"
        ],
        [
          "A bench or lab setup",
          "EN15G-24-3, which is a small, Gigabit unit"
        ]
      ]
    }
  },
  {
    "subheading": "For a Wireless Bridge Install Specifically",
    "intro": "Point-to-point bridges are the classic 24V application.",
    "cards": [
      {
        "label": "Look for",
        "text": "Gigabit data, at least 24W, a drip loop on the cable, and a surge protector at the outdoor end."
      },
      {
        "label": "In this comparison",
        "text": "The PoE Texas 24V suits a bridge that runs from a 12V supply, while the 24volt Passive PoE Injector 24W (Ubiquiti is the direct replacement for older radios."
      }
    ]
  },
  {
    "subheading": "When to Spend More",
    "intro": "Even the top pick is cheap, so spending more means a different class.",
    "cards": [
      {
        "label": "Spend more if",
        "text": "You use 802.3af/at devices. See the budget injector guide or the 60W injector guide."
      },
      {
        "label": "Save if",
        "text": "You need a straight replacement. The 24volt Passive PoE Injector Adapter, 24V24W and 24volt Passive PoE Injector 24W (Ubiquiti cost the least."
      }
    ]
  }
];

export const buyingCriteria = [
  {
    "criterion": "24V Passive PoE and Standard 802.3af/at PoE Cannot Be Substituted for Each Other",
    "explanation": "A passive PoE injector applies a constant 24V to specific Ethernet wire pairs with no negotiation, while standard 802.3af/at PoE performs a detection handshake before delivering power at 48V, and every listing in this comparison explicitly warns that it does not work with 48V standard PoE devices. This matters because connecting a passive 24V injector to a device expecting standard PoE negotiation typically results in no power at all, and in some cases connecting the wrong voltage type can risk damaging sensitive equipment. Check your specific device's power specification for whether it explicitly states 24V passive PoE or 802.3af/at standard PoE before purchasing either type."
  },
  {
    "criterion": "Named Compatibility With a Specific Original Manufacturer Part Number Removes Real Uncertainty",
    "explanation": "Several listings in this comparison specifically name the exact Ubiquiti part numbers they replace, like POE-25-5W, POE-24-12W, and POE-24-24W, which lets you confirm compatibility by matching your original adapter's part number rather than guessing based on voltage and wattage alone. This matters significantly if you're replacing a lost or broken original adapter for a specific device, and matters less if you already know your device's exact voltage and wattage requirements independently. Check your original adapter's printed part number, if you still have it, against a listing's stated compatibility before assuming a generic 24V match is sufficient."
  },
  {
    "criterion": "DC Input Flexibility Matters Specifically for Solar, Battery, and Remote Installations Without Standard AC Power",
    "explanation": "Most passive PoE injectors expect a standard AC wall outlet, but a solar panel, battery bank, or vehicle power system delivers variable DC voltage that a standard AC-powered injector can't accept directly, requiring a unit specifically designed to accept and regulate a wide DC input range instead. This matters significantly for remote point-to-point radio links, solar-powered security cameras, or RV and boat installations with no grid power access, and matters not at all for a standard indoor installation near an AC outlet. Check for an explicit DC input voltage range in the listing if your installation doesn't have access to standard AC power."
  },
  {
    "criterion": "Gigabit vs 100Mbps Speed Still Applies at the 24V Passive Tier, Independent of the Voltage Type",
    "explanation": "Just as with standard 802.3af/at injectors, a 24V passive injector can be limited to 100Mbps or support full Gigabit speeds, and this is a completely separate consideration from the voltage and wattage specs that define the passive PoE category. This matters if your specific device, like a higher-bandwidth access point, benefits from Gigabit throughput, and matters less for a basic 100Mbps camera or radio link that never approaches Gigabit speeds anyway. Check the listing's stated port speed specifically rather than assuming all 24V passive injectors share the same data rate."
  },
  {
    "criterion": "An Explicit Incompatibility Warning in a Listing Is a Genuine Safeguard, Not Just Legal Boilerplate",
    "explanation": "Multiple listings in this comparison explicitly and prominently warn that the product does not support 48V or 802.3af PoE devices, which is a meaningfully clearer signal than a listing that simply states its own voltage without addressing what it won't work with. This matters because a passive PoE product category has a real, common failure mode of buyers assuming any PoE injector works with any PoE device, and a listing that proactively addresses this reduces the odds of an incompatible purchase. Treat an explicit incompatibility warning as a positive signal of listing accuracy rather than skipping past it as boilerplate."
  }
];

export const faq = [
  {
    "q": "Can I use a 24V passive injector with a 48V PoE camera?",
    "a": "No. The 24V injector does not send the negotiation a 48V active PoE camera expects, and one listing warns specifically about 48V incompatibility. Use a 48V active injector or a PoE switch for those cameras. Check each camera label before ordering."
  },
  {
    "q": "What happens if I plug a non-PoE device into a 24V injector?",
    "a": "Power flows right away, and some devices can be damaged. Passive PoE has no detection, so label the cable and plug the injector's PoE port only into devices that list 24V passive. Plug in only devices that name 24V passive on the label."
  },
  {
    "q": "Is the PoE Texas injector worth paying more than the 24V24W unit?",
    "a": "Yes if you need Gigabit, 30W, or DC input. The 24V24W unit is 100Mbps, which is fine for an older radio that cannot go faster, and it costs much less. A 100Mbps model costs far less and suits older radios."
  },
  {
    "q": "How do I power a PoE Texas injector from a battery?",
    "a": "Connect a 12 to 60V DC source to its power input. The listing mentions diode-isolated RJ45 and DC inputs. Check the battery voltage when full, because charging can push 12V banks above 14V. Fully charged banks can read above 14V, so check before connecting."
  },
  {
    "q": "Which cable should I use with a 24V passive injector?",
    "a": "Solid copper Cat5e or better, up to 328ft. A long run drops voltage, which matters at 24V. If the radio reboots, shorten the cable or use a higher-wattage injector, like the 30W PoE Texas. Keep the injector and radio at the shortest cable that works."
  },
  {
    "q": "Can I replace my Ubiquiti POE-24-24W with these?",
    "a": "The 24V24W injector's listing names POE-25-5W, POE-24-12W, and POE-24-24W as replacements. Compare the voltage, wattage, and plug on your unit, and check that the data speed matches your radio. Keep the old unit's label for the settings."
  }
];

export const relatedGuides: { href: string; title: string }[] = [
  { "href": "/guide/best-poe-injector", "title": "Best PoE Injectors" },
  { "href": "/guide/best-30w-poe-injector", "title": "Best 30W PoE+ Injectors" },
  { "href": "/guide/best-poe-splitter", "title": "Best PoE Splitters" },
  { "href": "/guide/best-gigabit-poe-injector", "title": "Best Gigabit PoE Injectors" }
];
