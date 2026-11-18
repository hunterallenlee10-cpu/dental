// Service pages, part B (toothache through dentures).
// US English adapted from content/source/source-content-sl.md.
import type { Service } from "./types";

export const servicesB: Service[] = [
  {
    slug: "toothache",
    sourceSlug: "/bolecina-v-zobu/",
    name: "Toothache",
    h1: { plain: "Tooth", accent: "pain" },
    lead: "Tooth pain is a sign that something is wrong with a tooth or the gum around it. The sooner you come in, the simpler the treatment usually is.",
    summary: "Tooth pain is a sign that something is wrong with a tooth or the gum around it.",
    inShort: [
      "A tooth can hurt because of a cavity, an inflamed nerve, a cracked filling or tooth, inflamed gums, or a wisdom tooth coming in. A short twinge with cold means something different from a throbbing pain that wakes you at night.",
      "Your dentist finds the cause with an exam and an x-ray, then suggests treatment that fixes the cause, not just the pain.",
    ],
    whoFor: [
      "Your tooth hurts with cold, heat, sweets or when you bite.",
      "The pain throbs, spreads to your ear or jaw, or wakes you at night.",
      "You notice swelling next to a tooth.",
    ],
    whatToKnow: [
      "Pain relievers only take the edge off. They do not replace an exam.",
      "If you have facial swelling, a fever or trouble swallowing, get emergency medical care right away.", // DRAFT: dentist to confirm (US wording, for example call 911 or go to the ER)
    ],
    steps: [
      { title: "Call", body: "Call (410) 555-0142 and tell us you have a toothache." },
      { title: "Exam", body: "Your dentist finds the cause with an exam and an x-ray." },
      { title: "Treatment", body: "Your dentist suggests the right treatment and, with your consent, carries it out." },
    ],
    after: [
      "Until your visit, you can take an over-the-counter pain reliever as directed on the label.", // DRAFT: dentist to confirm
      "Do not put heat on a swelling, and do not place a pill directly on your gum.",
    ],
    gains: [
      "Treating it in time often saves the tooth.",
      "We treat the cause of the pain, not just the symptom.",
    ],
    faq: [
      {
        q: "What should I do if my tooth hurts in the evening or on a weekend?",
        a: "Our offices are open Mon to Fri, 7 AM to 8 PM. Outside those hours, if the pain is severe or you have swelling, contact an emergency dental service in your area.", // DRAFT: dentist to confirm
      },
    ],
    related: ["cavity-treatment", "root-canal-treatment", "wisdom-teeth-removal"],
    relatedTips: ["toothache-what-to-do", "after-a-tooth-extraction", "should-wisdom-teeth-come-out"],
    draftNotes: [
      "Emergency line (facial swelling, fever, trouble swallowing) kept as cautious as the source. Dentist to confirm US wording, for example 911 or the ER.",
      "Over-the-counter pain reliever advice and the after-hours FAQ answer: dentist to confirm, and the practice may want to name its own after-hours option.",
    ],
  },
  {
    slug: "tooth-abscess",
    sourceSlug: "/granulom/",
    name: "Tooth abscess",
    h1: { plain: "Tooth", accent: "abscess" },
    lead: "A root-tip abscess, which dentists also call a granuloma, is long-lasting (chronic) inflammation at the tip of a tooth root. It often does not hurt for a long time and is often found only on an x-ray.", // DRAFT: dentist to confirm (granuloma vs abscess terminology)
    summary: "Long-lasting inflammation at the tip of a tooth root, often found only on an x-ray.",
    inShort: [
      "It forms when bacteria from a dead tooth, or from a tooth whose earlier treatment did not fully work, pass through the root into the bone. On an x-ray it shows up as a darker spot next to the root.",
      "We first treat it with a root canal, or by redoing an earlier root canal. When that is not enough, you need an apicoectomy, a procedure that removes the root tip along with the inflamed tissue.",
    ],
    whoFor: [
      "An x-ray shows inflammation next to a root.",
      "A tooth is sensitive to pressure, or swelling comes and goes next to it.",
      "You notice a bad taste or bad breath around one tooth.",
    ],
    whatToKnow: [
      "The bone takes several months to heal, and we follow it with x-rays.",
      "If the tooth cannot be saved, it needs to be removed.",
    ],
    steps: [
      { title: "X-ray", body: "We check how large the inflammation is and the condition of the root." },
      { title: "Root canal treatment", body: "We clean, disinfect and fill the canals. If the inflammation stays, we do an apicoectomy." },
      { title: "Follow-up", body: "We follow the healing with x-rays." },
    ],
    after: [
      "Follow your dentist's instructions about medication and food.",
      "Come in for your follow-up x-rays even if the tooth does not hurt.",
    ],
    gains: [
      "We remove the source of the chronic inflammation.",
      "The tooth can often be saved.",
    ],
    faq: [
      {
        q: "Can it go away on its own?",
        a: "No. The inflammation stays until we remove its cause inside the tooth. One that does not hurt can flare up at any time, so it makes sense to treat it.",
      },
    ],
    related: ["root-canal-treatment", "apicoectomy", "panoramic-x-ray"],
    relatedTips: ["toothache-what-to-do", "how-often-to-see-the-dentist", "how-to-brush-and-floss"],
    draftNotes: [
      "The source term is granulom (periapical granuloma, chronic inflammation at the root tip). The page uses the US name Tooth abscess. Dentist to confirm the terminology and that the page reads correctly for an acute abscess with pus and swelling.",
    ],
  },
  {
    slug: "teeth-grinding",
    sourceSlug: "/bruksizem/",
    name: "Teeth grinding",
    h1: { plain: "Teeth", accent: "grinding" },
    lead: "Bruxism is grinding or clenching your teeth, most often at night. Because most people do not notice it, a partner or the dentist is often the first to spot it.",
    summary: "Grinding or clenching your teeth, most often at night, and a custom night guard to protect them.",
    inShort: [
      "Constant clenching wears teeth down and can chip or crack them. It also strains the jaw muscles and joints. Common signs are morning headaches, tired jaws and sensitive teeth.",
      "Most often we protect the teeth with a custom night guard that you wear while you sleep. Your dentist will also talk with you about other causes, such as stress.",
    ],
    whoFor: [
      "Your jaw or head aches in the morning.",
      "Your teeth are worn, chipped or sensitive.",
      "Your partner hears you grinding at night.",
    ],
    whatToKnow: [
      "A night guard does not fix the cause of grinding. It protects your teeth.",
      "Problems with the jaw joint may need care from another specialist.",
    ],
    steps: [
      { title: "Exam", body: "We check tooth wear, your jaw muscles and your bite, then take an impression or a digital scan of your teeth." },
      { title: "Night guard", body: "We make a custom night guard and adjust it to fit." },
      { title: "Follow-up", body: "We check how you are getting on with it." },
    ],
    after: [
      "Clean the night guard after each use and keep it in its case.",
      "Bring it to your regular checkups.",
    ],
    gains: [
      "The night guard protects teeth, fillings and crowns from wear.",
      "Less strain on the jaw muscles.",
    ],
    faq: [
      {
        q: "Is a drugstore night guard just as good?",
        a: "A custom night guard fits your teeth and bite closely. Store-bought guards are less comfortable and can shift, so talk with your dentist about which is right for you.",
      },
    ],
    related: ["dental-crowns", "inlays-and-onlays", "tooth-colored-fillings"],
    relatedTips: ["how-often-to-see-the-dentist", "toothache-what-to-do", "how-to-brush-and-floss"],
  },
  {
    slug: "porcelain-veneers",
    sourceSlug: "/zobne-luske/",
    name: "Porcelain veneers",
    h1: { plain: "Porcelain", accent: "veneers" },
    lead: "Want to change the shape or color of your teeth? We make porcelain veneers to measure. At your visit, we look together at whether they suit your smile.",
    summary: "Thin porcelain shells bonded to the front of your teeth.",
    inShort: [
      "Porcelain veneers are thin porcelain shells that we bond to the front of your teeth. They are made to measure in a dental lab, and we plan the shape and shade with you before we start, so the result looks natural and suits your face. Porcelain keeps its color and stains less than composite.",
      "At your visit, we tell you whether veneers are the right choice for you and give you a written treatment estimate.",
    ],
    whoFor: [
      "Stained teeth that whitening does not lighten enough.",
      "Chipped or worn edges.",
      "Teeth of uneven length.",
      "Small gaps between teeth.",
    ],
    whatToKnow: [
      "The tooth is usually lightly reshaped first, so the decision is permanent.",
      "Your teeth and gums need to be healthy before we start.",
    ],
    // DRAFT: dentist to confirm. The source page has no step list; these 3 steps restate facts from its body copy.
    steps: [
      { title: "Exam", body: "We check that your teeth and gums are healthy, tell you whether veneers suit you and give you a written treatment estimate." },
      { title: "Planning", body: "We plan the shape and shade with you. The teeth are usually lightly reshaped." },
      { title: "Veneers", body: "Your veneers are made to measure in a dental lab, then bonded to the front of your teeth." },
    ],
    after: [],
    gains: [],
    faq: [],
    related: [],
    relatedTips: ["whitening-or-veneers"],
    draftNotes: [
      "Source page is a feature layout with a patient-story gallery. All story text, names and quotes were skipped.",
      "Source has no step list, after-care, gains, FAQ or related services. Steps were written from the page's own body copy only. Dentist to confirm.",
      "Consider adding related services teeth-whitening and cosmetic-bonding (not listed on the source page).",
    ],
  },
  {
    slug: "teeth-whitening",
    sourceSlug: "/beljenje-zob/",
    name: "Teeth whitening",
    h1: { plain: "Teeth", accent: "whitening" },
    lead: "Whitening lightens the natural shade of your teeth. We whiten with trays made to fit your teeth and a whitening gel, under your dentist's supervision.",
    summary: "Whitening lightens the natural shade of your teeth.",
    inShort: [
      "First we scan your teeth and make clear custom trays. At home, you fill them with whitening gel as instructed and wear them for a set time each day.",
      "Whitening can also be done in the office, where the visit takes about 45 minutes. After an exam, your dentist will tell you which option suits you.",
    ],
    whoFor: [
      "Healthy teeth that have darkened over the years or are stained by coffee, tea or tobacco.",
      "Anyone who wants a brighter smile without reshaping their teeth.",
    ],
    whatToKnow: [
      "Fillings, crowns and veneers do not whiten, so they may need to be replaced afterward.",
      "Teeth can be sensitive for a while during whitening.",
      "Whitening is not suitable during pregnancy or breastfeeding, or if you have untreated cavities or inflamed gums.",
    ],
    steps: [
      { title: "Exam", body: "We check that your teeth and gums are healthy and ready for whitening." },
      { title: "Whitening", body: "We scan your teeth and make custom trays, then show you how to use them with the whitening gel." },
      { title: "Follow-up", body: "We check the result and how sensitive your teeth are." },
    ],
    after: [
      "During whitening and for a few days after, cut back on coffee, tea, red wine and tobacco.",
      "If your teeth feel sensitive, use a toothpaste for sensitive teeth and let us know.",
    ],
    gains: [
      "A lighter shade with no change to the tooth itself.",
      "Custom trays fit well, so the gel stays on your teeth.",
      "Your dentist oversees the whole process.",
    ],
    faq: [
      {
        q: "Does whitening damage teeth?",
        a: "Whitening done under a dentist's supervision and as instructed is considered safe. Any sensitivity is usually temporary.",
      },
      {
        q: "How long do the results last?",
        a: "It depends on habits such as coffee, tea and smoking. You can refresh the results with the same trays when needed.",
      },
    ],
    related: ["teeth-cleaning", "porcelain-veneers", "cosmetic-bonding"],
    relatedTips: ["whitening-or-veneers", "how-long-whitening-lasts", "bonding-or-veneers"],
  },
  {
    slug: "cosmetic-bonding",
    sourceSlug: "/estetske-zalivke/",
    name: "Cosmetic bonding",
    h1: { plain: "Cosmetic", accent: "bonding" },
    lead: "With cosmetic bonding, we use tooth-colored composite to fix chipped edges, small gaps and uneven front teeth, often without any drilling.",
    summary: "Tooth-colored composite that fixes chipped edges, small gaps and uneven front teeth, often without drilling.",
    inShort: [
      "Your dentist applies composite directly to the tooth in thin layers, shapes it and hardens it with a light. This can lengthen a chipped edge, close a small gap or even out the shape of a tooth.",
      "Unlike veneers, nothing is made in a lab, so the treatment is often finished in one visit.",
    ],
    whoFor: [
      "A chipped or worn edge on a front tooth.",
      "A small gap between front teeth.",
      "An uneven shape or minor stains on individual teeth.",
    ],
    whatToKnow: [
      "Composite can stain or chip over time and will need to be redone.",
      "For bigger changes in color or shape, veneers or crowns are a longer-lasting option.",
    ],
    steps: [
      { title: "Consultation", body: "We talk about what you would like to change and choose the shade." },
      { title: "Shaping", body: "We apply the composite in layers and shape it right on the tooth." },
      { title: "Polishing", body: "We polish the tooth to a natural shine and check your bite." },
    ],
    after: [
      "Coffee, tea and tobacco can stain composite over time.",
      "We polish the bonding at your regular checkups when needed.",
    ],
    gains: [
      "Little or no drilling of healthy tooth.",
      "Often done in one visit.",
      "It can be added to or adjusted later.",
    ],
    faq: [
      {
        q: "What is the difference between cosmetic bonding and a porcelain veneer?",
        a: "Bonding is shaped from composite directly on the tooth, usually without drilling. A veneer is porcelain, made in a lab and longer lasting, but the tooth has to be reshaped for it.",
      },
    ],
    related: ["tooth-colored-fillings", "porcelain-veneers", "teeth-whitening"],
    relatedTips: ["whitening-or-veneers", "how-long-whitening-lasts", "bonding-or-veneers"],
  },
  {
    slug: "dental-implants",
    sourceSlug: "/implantati/",
    name: "Dental implants",
    h1: { plain: "Dental", accent: "implants" },
    lead: "A dental implant replaces the root of a missing tooth. We place a crown on it that looks and chews much like a natural tooth.",
    summary: "A dental implant replaces the root of a missing tooth.",
    inShort: [
      "An implant is a small screw made of titanium alloy that we place in the jawbone. Once it has fused with the bone, we attach a crown, a bridge or a denture to it.",
      "We plan every implant on a 3D CBCT scan of your jaw, so we can see how much bone there is, how good it is and where the nerves run.", // DRAFT: implant system names supplied by the practice
    ],
    whoFor: [
      "You are missing one or more teeth.",
      "You want a fixed option instead of a removable denture.",
      "You do not want healthy neighboring teeth reshaped for a bridge.",
    ],
    whatToKnow: [
      "An implant needs enough bone. Sometimes bone has to be built up first.",
      "Healing takes a few months before we make the final crown.",
      "Smoking, untreated gum disease and some general health conditions raise the risk of complications.",
    ],
    steps: [
      { title: "Exam and 3D scan", body: "We assess the bone on a 3D CBCT scan and make a plan. You get a written treatment estimate before the procedure." },
      { title: "Placing the implant", body: "The procedure is done under local anesthesia and usually takes 30 to 60 minutes. The implant usually takes 2 to 6 months to fuse with the bone." },
      { title: "The crown", body: "We make and attach the final crown." },
    ],
    after: [
      "On the first day, keep a cold pack on your cheek and eat soft, lukewarm food.",
      "Do not smoke, because smoking slows healing.",
      "Clean the implant like a natural tooth and come in regularly for checkups and teeth cleanings.",
    ],
    gains: [
      "A fixed option you never take out.",
      "Neighboring teeth do not need to be reshaped.",
      "An implant loads the bone much like a natural root.",
    ],
    faq: [
      {
        q: "Does getting an implant hurt?",
        a: "We do the procedure under local anesthesia, so you do not feel pain during it. For a few days the area may be tender or swollen, which pain relievers usually ease.",
      },
      {
        q: "How long does the whole treatment take?",
        a: "Placing the implant takes 30 to 60 minutes, and healing usually takes 2 to 6 months. If bone has to be built up first, treatment takes longer.",
      },
      {
        q: "What if I do not have enough bone?",
        a: "It can often be built up. A 3D CBCT scan of your jaw shows whether that is needed.",
      },
    ],
    related: ["all-on-4", "dental-crowns", "3d-cbct-scan"],
    relatedTips: ["implant-or-bridge", "dentures-or-implant-teeth", "which-dental-x-ray"],
    draftNotes: [
      "Implant manufacturer names were removed from the source. Implant system names to be supplied by the practice.",
    ],
  },
  {
    slug: "all-on-4",
    sourceSlug: "/all-on-4/",
    name: "All-on-4 and All-on-6",
    h1: { plain: "All-on-4", accent: "full-arch teeth" },
    lead: "With All-on-4, a full arch of teeth in one jaw is fixed on 4 implants. With All-on-6, it is fixed on 6. It is meant for people who are missing most or all of their teeth.",
    summary: "A full arch of teeth fixed on 4 implants, or on 6 with All-on-6.",
    inShort: [
      "The fixed denture is attached to the implants, so you do not take it out. We place the implants to make the most of the bone you have, which in some cases can reduce the need for bone grafting.",
      "Whether 4 or 6 implants suit you better is decided from a 3D CBCT scan of your jaw and a conversation with you.",
    ],
    whoFor: [
      "You are missing most or all of the teeth in a jaw.",
      "Your removable denture bothers you, moves or presses.",
      "Your remaining teeth are too damaged to save.",
    ],
    whatToKnow: [
      "Whether it suits you depends on your bone and general health.",
      "A fixed denture needs careful cleaning and regular checkups.",
      "This is extensive treatment with several visits.",
    ],
    steps: [
      { title: "Consultation and 3D plan", body: "An exam, a 3D CBCT scan and a treatment plan. You get a written treatment estimate before we start." },
      { title: "Placing the implants", body: "We place 4 or 6 implants. When possible, we attach a temporary denture." },
      { title: "The final denture", body: "After healing, we make the final fixed denture." },
    ],
    after: [
      "For the first few weeks, eat soft food as your dentist instructs.",
      "Clean the denture with a toothbrush, interdental brushes or a water flosser.",
      "Regular checkups are essential for it to last a long time.",
    ],
    gains: [
      "Fixed teeth you never take out.",
      "Fewer implants than replacing each tooth one by one.",
      "More stable chewing and speech than with a removable denture.",
    ],
    faq: [
      {
        q: "Will I have teeth right after surgery?",
        a: "In some cases we can attach a temporary denture soon after the implants are placed. Whether that is possible for you depends on your bone and how stable the implants are, which we assess during planning.",
      },
    ],
    related: ["dental-implants", "dentures", "3d-cbct-scan"],
    relatedTips: ["dentures-or-implant-teeth", "implant-or-bridge", "when-a-tooth-needs-a-crown"],
  },
  {
    slug: "dental-crowns",
    sourceSlug: "/zobne-prevleke/",
    name: "Dental crowns",
    h1: { plain: "Dental", accent: "crowns" },
    lead: "A crown covers and protects a badly damaged tooth. We also make crowns on implants to replace a missing tooth.",
    summary: "A crown covers and protects a badly damaged tooth.",
    inShort: [
      "A crown surrounds the tooth on all sides and restores its shape and strength. We make it from all-ceramic, zirconia or porcelain fused to metal, depending on where the tooth is and what you prefer.",
      "We lightly reshape the tooth, take an impression or a digital scan, and protect the tooth with a temporary crown until the final one is ready.",
    ],
    whoFor: [
      "A tooth is badly damaged or has a large filling.",
      "A tooth has had a root canal and is brittle.",
      "A missing tooth needs to be replaced on an implant.",
    ],
    whatToKnow: [
      "The tooth has to be reshaped, and that cannot be undone.",
      "Without good care, decay can start at the edge of the crown.",
    ],
    steps: [
      { title: "Exam and plan", body: "We choose the material and prepare a written treatment estimate." },
      { title: "Preparing the tooth", body: "We reshape the tooth and take an impression or scan. You wear a temporary crown until the final one is ready." },
      { title: "Placing the crown", body: "We check the final crown and cement it in place." },
    ],
    after: [
      "With a temporary crown, avoid biting hard or sticky food.",
      "Clean along the edge of the crown with floss or an interdental brush.",
    ],
    gains: [
      "Protects a weakened tooth from breaking.",
      "A natural look with ceramic materials.",
      "Restores the shape of the tooth and a proper bite.",
    ],
    faq: [
      {
        q: "Which crown material should I choose?",
        a: "It depends on the tooth. On front teeth, appearance matters most. On back teeth, strength does. We explain the options and how they differ at your visit.",
      },
    ],
    related: ["dental-bridges", "dental-implants", "inlays-and-onlays"],
    relatedTips: ["implant-or-bridge", "when-a-tooth-needs-a-crown", "bonding-or-veneers"],
  },
  {
    slug: "dental-bridges",
    sourceSlug: "/zobni-mosticek/",
    name: "Dental bridges",
    h1: { plain: "Dental", accent: "bridges" },
    lead: "A bridge fills the gap where one or a few teeth are missing. It is attached to the neighboring teeth or to implants.",
    summary: "A bridge fills the gap where one or a few teeth are missing.",
    inShort: [
      "A bridge is made of crowns on the supporting teeth and one or more artificial teeth that span the gap. It is fixed, so you do not take it out.",
      "When the neighboring teeth are healthy, we also talk with you about an implant, which does not require reshaping them.",
    ],
    whoFor: [
      "You are missing one tooth or a few teeth in a row.",
      "The neighboring teeth already have large fillings or crowns.",
      "You want a fixed option without surgery.",
    ],
    whatToKnow: [
      "The supporting teeth have to be reshaped.",
      "You need to clean carefully under the bridge, or decay or gum inflammation can develop.",
    ],
    steps: [
      { title: "Exam", body: "We assess the supporting teeth and prepare a written treatment estimate." },
      { title: "Preparation", body: "We reshape the supporting teeth and take an impression. You wear a temporary bridge until the final one is ready." },
      { title: "Placing the bridge", body: "We check the final bridge and cement it in place." },
    ],
    after: [
      "Clean under the bridge with special floss or an interdental brush.",
      "Come in regularly for checkups and teeth cleanings.",
    ],
    gains: [
      "A fixed option without surgery, when the supporting teeth are suitable.",
      "Usually made faster than a tooth on an implant.",
      "Restores chewing and the look of your smile.",
    ],
    faq: [
      {
        q: "Should I get a bridge or an implant?",
        a: "Both are fixed options. An implant leaves the neighboring teeth untouched, while a bridge does not need surgery. Which suits you better depends on the neighboring teeth and the bone.",
      },
    ],
    related: ["dental-crowns", "dental-implants", "dentures"],
    relatedTips: ["implant-or-bridge", "when-a-tooth-needs-a-crown", "dentures-or-implant-teeth"],
  },
  {
    slug: "dentures",
    sourceSlug: "/zobna-proteza/",
    name: "Dentures",
    h1: { plain: "Full and partial", accent: "dentures" },
    lead: "Dentures replace several missing teeth or all the teeth in a jaw. They can be removable or attached to implants.",
    summary: "Dentures replace several missing teeth or all the teeth in a jaw.",
    inShort: [
      "A partial denture replaces several missing teeth and is held by your remaining teeth. A full denture replaces all the teeth in a jaw. A denture can also be stabilized with implants so it does not move when you chew.",
      "We make the denture from impressions of your jaws and adjust it to be as comfortable as possible.",
    ],
    whoFor: [
      "You are missing several teeth or all of them.",
      "Your current denture moves, presses or is old.",
      "Implants for a fixed option are not suitable because of your health or bone.",
    ],
    whatToKnow: [
      "A removable denture takes getting used to, which can take a few weeks.",
      "The bone under a denture changes over time, so the denture needs to be relined or replaced from time to time.",
    ],
    steps: [
      { title: "Exam", body: "We examine your jaws and remaining teeth, take impressions and record your bite." },
      { title: "Try-in", body: "You try the denture on before it is finished." },
      { title: "Fitting", body: "We hand over your denture and adjust it as needed." },
    ],
    after: [
      "Rinse the denture after meals and clean it with a soft brush.",
      "At night, store it as your dentist instructs.",
      "If it rubs or presses, call us for an adjustment.",
    ],
    gains: [
      "Restores chewing, speech and the look of your smile.",
      "Often the simplest option when many teeth are missing.",
      "Can be stabilized with implants later.",
    ],
    faq: [
      {
        q: "How long does it take to get used to new dentures?",
        a: "Most people get used to a new denture within a few weeks. Small adjustments may be needed during that time, and we make them at your follow-up visits.",
      },
    ],
    related: ["all-on-4", "dental-implants", "dental-bridges"],
    relatedTips: ["dentures-or-implant-teeth", "implant-or-bridge", "when-a-tooth-needs-a-crown"],
  },
];
