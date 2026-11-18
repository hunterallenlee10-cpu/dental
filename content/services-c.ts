import type { Service } from "./types";

// Services group C: restorative inlays, orthodontics, specialist care and imaging.
// US English adapted from content/source/source-content-sl.md.

export const servicesC: Service[] = [
  {
    slug: "inlays-and-onlays",
    sourceSlug: "/inlay-onlay/",
    name: "Inlays and onlays",
    h1: { plain: "Inlays and", accent: "onlays" },
    lead: "Inlays and onlays are custom-made pieces that restore a larger area of damage in a tooth. They are stronger than a large filling and save more of the tooth than a crown.",
    summary: "Inlays and onlays are custom-made pieces that restore a larger area of damage in a tooth.",
    inShort: [
      "An inlay fills damage inside the tooth. An onlay also covers one or more of the chewing cusps. We have them made from ceramic or composite in a lab, based on an impression or a digital scan, and then bond them in place for good.",
      "Unlike a crown, they keep more of your healthy tooth.",
    ],
    whoFor: [
      "You have a larger area of damage on a back tooth.",
      "An old, large filling is broken or worn.",
      "The tooth is weakened but does not need a crown.",
    ],
    whatToKnow: [
      "It usually takes 2 visits.",
      "For a badly broken-down tooth, a crown lasts longer.",
    ],
    steps: [
      { title: "Preparation", body: "We remove the decay or the old filling and shape the tooth." },
      { title: "Impression", body: "We take an impression or a digital scan." },
      { title: "Bonding", body: "We check the finished piece and bond it in place for good." },
    ],
    after: [
      "Until the final inlay or onlay is bonded, do not bite hard food on the treated side.",
      "Clean it like your natural teeth, flossing included.",
    ],
    gains: [
      "A precise fit and real strength.",
      "More of your healthy tooth is kept than with a crown.",
      "A natural look with ceramic.",
    ],
    faq: [
      {
        q: "Is an inlay better than a tooth-colored filling?",
        a: "For larger areas of damage, an inlay is usually stronger and lasts longer, because it is made in a lab. For smaller areas, a filling is enough.",
      },
    ],
    related: ["tooth-colored-fillings", "dental-crowns", "root-canal-treatment"],
    relatedTips: ["when-a-tooth-needs-a-crown", "implant-or-bridge", "dentures-or-implant-teeth"],
  },
  {
    slug: "braces",
    sourceSlug: "/zobni-aparat/",
    name: "Braces",
    h1: { plain: "Dental", accent: "braces" },
    lead: "Braces move your teeth into the right position, a little at a time. They work for children, teens and adults.", // DRAFT: dentist to confirm
    summary: "Braces move your teeth into the right position, a little at a time.",
    inShort: [
      "With fixed braces, small brackets are bonded to the teeth and joined by a wire. You can choose metal brackets, tooth-colored brackets, or lingual brackets that sit on the inside of the teeth. Removable appliances are mainly for children who are still growing.", // DRAFT: dentist to confirm
      "Our orthodontist will recommend the right type for you after an exam, x-rays and a bite analysis.",
    ],
    whoFor: [
      "Your teeth are tilted, crowded or have gaps between them.",
      "Your bite is off, for example a deep bite, open bite or crossbite.",
      "Children whose jaw growth needs guiding.",
    ],
    whatToKnow: [
      "Treatment usually takes several months to a few years.",
      "When treatment ends, you need retainers to keep the result.",
      "Careful brushing and cleaning matter throughout treatment.",
    ],
    steps: [
      {
        title: "Orthodontic exam",
        body: "The orthodontist checks your teeth and bite. We take x-rays and prepare a treatment plan and a written treatment estimate.",
      },
      { title: "Fitting your braces", body: "We place the braces you chose and adjust them at follow-up visits." },
      { title: "Retainers", body: "When treatment ends, a retainer keeps the result." },
    ],
    after: [
      "Clean your teeth and braces after every meal.",
      "Avoid hard and sticky foods that can damage the brackets.",
      "If a bracket comes loose, give us a call.",
    ],
    gains: [
      "Straight teeth and a healthy bite.",
      "Well-aligned teeth are easier to clean.",
      "A choice between more visible and less visible braces.",
    ],
    faq: [
      {
        q: "Are braces right for adults too?",
        a: "Yes. Teeth can be moved at any age, as long as the teeth and gums are healthy. Adults often choose tooth-colored, lingual or invisible braces.", // DRAFT: dentist to confirm
      },
      {
        q: "How long does treatment take?",
        a: "It depends on what needs correcting. The orthodontist gives you an estimated time after the exam and a review of your x-rays.",
      },
    ],
    related: ["invisible-braces", "retainers", "invisalign"],
    relatedTips: ["clear-aligners-or-braces", "braces-for-adults", "why-retainers-matter"],
    draftNotes: [
      "Age suitability (children, teens and adults; teeth can move at any age with healthy gums) and removable appliances being mainly for growing children come from the source. Dentist to confirm.",
    ],
  },
  {
    slug: "invisible-braces",
    sourceSlug: "/nevidni-zobni-aparat/",
    name: "Invisible braces",
    h1: { plain: "Invisible", accent: "braces" },
    lead: "Invisible braces are a series of custom clear aligners that move your teeth a little at a time. They are hard to notice, and you take them out to eat and to clean your teeth.",
    summary: "Invisible braces are a series of custom clear aligners that move your teeth a little at a time.",
    inShort: [
      "From a digital scan of your teeth, the orthodontist plans each movement and orders a series of aligners. You wear each one for a set time, then switch to the next.",
      "You need to wear the aligners most of the day and night, because the result depends a great deal on how consistently you wear them.",
    ],
    whoFor: [
      "Adults and teens with mild to moderate alignment problems.", // DRAFT: dentist to confirm
      "Anyone who wants braces that are hard to see.",
      "Anyone whose teeth have shifted after earlier treatment.",
    ],
    whatToKnow: [
      "They are not right for every bite problem.",
      "They take commitment. You need to wear the aligners most of the day.",
      "After treatment, you need retainers.",
    ],
    steps: [
      {
        title: "Orthodontic exam",
        body: "The orthodontist checks whether aligners are right for you. We scan your teeth and plan the movements.",
      },
      {
        title: "Your aligners",
        body: "You get your aligners and instructions for wearing them. We check your progress at follow-up visits.",
      },
      { title: "Retainers", body: "A retainer keeps the result." },
    ],
    after: [
      "Take the aligners out for every meal, and brush your teeth before you put them back in.",
      "Clean the aligners with lukewarm water, never hot.",
      "When you are not wearing them, keep them in their case.",
    ],
    gains: [
      "Hard to see while you wear them.",
      "Removable for eating and cleaning.",
      "No brackets or wires to rub your lips.",
    ],
    faq: [
      {
        q: "How many hours a day do I need to wear the aligners?",
        a: "Most of the day and night. The orthodontist gives you exact instructions, because the success of treatment depends on wearing them.",
      },
      {
        q: "What is the difference between invisible braces and Invisalign?",
        a: "Invisalign is one brand of clear aligners. At your exam, the orthodontist tells you which aligners they recommend for you.",
      },
    ],
    related: ["invisalign", "braces", "retainers"],
    relatedTips: ["clear-aligners-or-braces", "braces-for-adults", "why-retainers-matter"],
    draftNotes: [
      "Suitability for adults and teens with mild to moderate problems comes from the source. Dentist to confirm age range and case limits.",
    ],
  },
  {
    slug: "invisalign",
    sourceSlug: "/invisalign/",
    name: "Invisalign",
    h1: { plain: "Invisalign", accent: "clear aligners" },
    lead: "Invisalign is a clear aligner system for straightening teeth. At a consultation, our orthodontist checks whether it suits your teeth and bite.",
    summary: "Invisalign is a clear aligner system for straightening teeth.",
    inShort: [
      "Invisalign aligners are made from a digital plan of how your teeth will move. As with other invisible braces, you switch aligners in order until your teeth reach the planned position.",
      "At the consultation, we explain whether Invisalign or another clear aligner system suits you better.",
    ],
    whoFor: [
      "Adults and teens with mild to moderate alignment problems.", // DRAFT: dentist to confirm
      "Anyone who wants braces that are hard to see and removable.",
    ],
    whatToKnow: [
      "It is not right for every problem.",
      "You need to wear the aligners consistently.",
      "When treatment ends, you need retainers.",
    ],
    steps: [
      {
        title: "Consultation",
        body: "The orthodontist checks whether aligners are right for you. We scan your teeth and prepare a plan for the movements.",
      },
      { title: "Wearing your aligners", body: "You switch aligners as instructed." },
      { title: "Retainers", body: "A retainer keeps the result." },
    ],
    after: [
      "Take the aligners out for every meal.",
      "Clean them with lukewarm water and keep them in their case.",
    ],
    gains: [
      "Clear aligners are barely noticeable while you wear them.",
      "Removable for eating and cleaning.",
      "The digital plan shows the expected movements in advance.",
    ],
    faq: [
      {
        q: "Is Invisalign better than other clear aligners?",
        a: "All clear aligners work in a similar way. They differ in planning, materials and cost. The orthodontist advises you on what makes sense in your case.",
      },
    ],
    related: ["invisible-braces", "braces", "retainers"],
    relatedTips: ["clear-aligners-or-braces", "braces-for-adults", "why-retainers-matter"],
    draftNotes: [
      "Suitability for adults and teens with mild to moderate problems comes from the source. Dentist to confirm.",
      "Invisalign is named as the service only. The practice confirms it offers this system.",
    ],
  },
  {
    slug: "retainers",
    sourceSlug: "/retencija/",
    name: "Retainers",
    h1: { plain: "Retainers after", accent: "braces" },
    lead: "Once braces come off, teeth tend to drift back to where they were. Retainers keep the result of your treatment.",
    summary: "Once braces come off, teeth tend to drift back to where they were.",
    inShort: [
      "Most often we use a fixed retainer, a thin wire bonded to the inside of the front teeth, or a removable clear retainer that you wear at night.",
      "The orthodontist decides which retainer is right for you, and for how long, based on your treatment.",
    ],
    whoFor: [
      "Anyone who has finished orthodontic treatment.",
      "Anyone who has lost or damaged a retainer.",
      "Anyone who notices their teeth moving after braces.",
    ],
    whatToKnow: [
      "Retainers are long term, often for several years.",
      "With a fixed retainer, careful cleaning keeps tartar from building up.",
    ],
    steps: [
      { title: "Checkup", body: "We check the position of your teeth after braces." },
      { title: "Making your retainer", body: "We bond a fixed retainer or make a removable one." },
      { title: "Follow-up visits", body: "We check your retainer regularly." },
    ],
    after: [
      "Wear a removable retainer as instructed and keep it in its case.",
      "With a fixed retainer, use small interdental brushes or special floss.",
      "If the retainer comes loose, call us as soon as you can.",
    ],
    gains: [
      "Keeps the result of your orthodontic treatment.",
      "A fixed retainer cannot be seen from the front.",
    ],
    faq: [
      {
        q: "How long do I need to wear a retainer?",
        a: "Often for several years, and sometimes at night for good. The orthodontist gives you exact recommendations.",
      },
    ],
    related: ["braces", "invisible-braces", "invisalign"],
    relatedTips: ["clear-aligners-or-braces", "why-retainers-matter", "braces-for-adults"],
  },
  {
    slug: "apicoectomy",
    sourceSlug: "/apikotomija/",
    name: "Apicoectomy",
    h1: { plain: "Apicoectomy:", accent: "root-end surgery" },
    lead: "An apicoectomy is a minor surgical procedure that removes the tip of a tooth root along with the inflamed tissue around it. It often saves a tooth that would otherwise have to be pulled.",
    summary: "An apicoectomy is a minor surgical procedure that removes the tip of a tooth root along with the inflamed tissue around it.",
    inShort: [
      "When inflammation at the tip of the root stays even after a root canal, we reach it through the gum and bone. We remove the root tip and the inflamed tissue, seal the root, and stitch the gum closed.",
      "Before the procedure, we take an x-ray or a 3D CBCT scan.",
    ],
    whoFor: [
      "Inflammation at the root remains after a root canal.",
      "Redoing the root canal is not possible, for example because of a crown or a post.",
    ],
    whatToKnow: [
      "You may have some swelling for a few days afterward.",
      "We follow the bone healing with x-rays over several months.",
      "For some teeth, the procedure is not possible or does not make sense.",
    ],
    steps: [
      { title: "X-rays and a plan", body: "We assess the inflammation and how to reach the root." },
      {
        title: "The procedure",
        body: "With local anesthesia, we remove the root tip and the inflamed tissue. We stitch the gum, and take the stitches out at a follow-up visit.",
      },
      { title: "Follow-up", body: "We follow the healing with x-rays." },
    ],
    after: [
      "On the first day, keep a cold pack on your cheek.",
      "Eat soft foods and do not chew on the treated side.",
      "Do not smoke until the area has healed.",
    ],
    gains: [
      "A chance to keep your tooth.",
      "We remove the source of a long-lasting infection.",
    ],
    faq: [
      {
        q: "Does an apicoectomy hurt?",
        a: "We do the procedure with local anesthesia. Afterward, the area can be tender for a few days, which pain relievers usually ease.",
      },
    ],
    related: ["tooth-abscess", "root-canal-treatment", "oral-surgery"],
    relatedTips: ["after-a-tooth-extraction", "should-wisdom-teeth-come-out", "which-dental-x-ray"],
  },
  {
    slug: "deep-cleaning",
    sourceSlug: "/kiretaza/",
    name: "Deep cleaning",
    h1: { plain: "Deep", accent: "cleaning" },
    lead: "Deep cleaning, also called scaling and root planing, cleans the tooth roots below the gumline. It is the first step in treating gum disease (periodontitis).",
    summary: "Deep cleaning (scaling and root planing) cleans the tooth roots below the gumline.",
    inShort: [
      "With gum disease, tartar and bacteria build up in pockets below the gumline, where a toothbrush cannot reach. In a deep cleaning, we remove them and smooth the roots so the gum can fit snugly against the tooth again.",
      "We usually do it with local anesthesia, one section of the mouth at a time, in one or more visits.",
    ],
    whoFor: [
      "You have gum pockets that are deeper than normal.",
      "Your gums bleed and pull back even though you take good care of them.",
    ],
    whatToKnow: [
      "Very deep pockets need gum flap surgery.",
      "Afterward, your teeth may be sensitive for a while, and your gums may pull back a little.",
    ],
    steps: [
      { title: "Measuring the pockets", body: "We measure how deep the pockets are and take x-rays." },
      { title: "Deep cleaning", body: "With anesthesia, we clean and smooth the roots." },
      { title: "Follow-up check", body: "After a few weeks, we check how your gums have responded." },
    ],
    after: [
      "Use a soft toothbrush for a few days.",
      "Follow the mouth rinse instructions you are given.",
      "Keep coming to your maintenance visits.",
    ],
    gains: [
      "Less inflammation and shallower pockets.",
      "Stops the disease from getting worse.",
      "Often delays or prevents the need for surgery.",
    ],
    faq: [
      {
        q: "Does a deep cleaning hurt?",
        a: "We usually do it with local anesthesia, so it does not hurt during the procedure. Afterward, your gums and teeth may be sensitive for a few days.",
      },
    ],
    related: ["periodontics", "gum-flap-surgery", "gum-inflammation"],
    relatedTips: ["how-often-to-see-the-dentist", "how-to-brush-and-floss", "after-a-tooth-extraction"],
  },
  {
    slug: "gum-flap-surgery",
    sourceSlug: "/rezenjska-operacija/",
    name: "Gum flap surgery",
    h1: { plain: "Gum flap", accent: "surgery" },
    lead: "Gum flap surgery is a surgical treatment for gum disease (periodontitis). It is for deep pockets that a deep cleaning cannot clean well enough.",
    summary: "Gum flap surgery is a surgical treatment for gum disease (periodontitis).",
    inShort: [
      "The periodontist gently folds the gum back to get a direct view of the roots and bone. The roots are cleaned thoroughly, the bone is reshaped if needed, and the gum is stitched back more snugly around the tooth.",
      "The procedure is done with local anesthesia.",
    ],
    whoFor: [
      "Deep pockets remain after a deep cleaning.",
      "There is bone loss around the teeth that needs surgical care.",
    ],
    whatToKnow: [
      "Swelling and tenderness are common afterward.",
      "The gum may pull back a little, so your teeth can look longer.",
    ],
    steps: [
      {
        title: "Planning",
        body: "After the first phase of treatment, we measure the pockets. We explain the procedure and prepare a written treatment estimate.",
      },
      { title: "Surgery", body: "We do the procedure with local anesthesia." },
      { title: "Follow-up and maintenance", body: "We take out the stitches and continue with maintenance visits." },
    ],
    after: [
      "On the first day, keep a cold pack on your cheek and eat soft foods.",
      "Do not brush the area until the periodontist tells you to, and use the prescribed mouth rinse.",
      "Do not smoke.",
    ],
    gains: [
      "A thorough cleaning, even of deep pockets.",
      "Shallower pockets that are easier to clean at home.",
    ],
    faq: [
      {
        q: "Will I be able to eat normally after surgery?",
        a: "For the first few days, we recommend soft foods and chewing on the other side. You get exact instructions after the procedure.",
      },
    ],
    related: ["periodontics", "deep-cleaning", "oral-surgery"],
    relatedTips: ["how-often-to-see-the-dentist", "how-to-brush-and-floss", "after-a-tooth-extraction"],
  },
  {
    slug: "panoramic-x-ray",
    sourceSlug: "/ortopan/",
    name: "Panoramic x-ray",
    h1: { plain: "Panoramic", accent: "x-ray" },
    lead: "A panoramic x-ray shows all your teeth, both jaws and both jaw joints in a single image.",
    summary: "A panoramic x-ray shows all your teeth, both jaws and both jaw joints in a single image.",
    inShort: [
      "You stand next to the machine while it turns around your head in a few seconds. The image gives your dentist an overview of all your teeth, the bone, any impacted teeth and any signs of infection.",
      "For a first visit, we recommend a panoramic x-ray taken within the last 2 years.", // DRAFT: dentist to confirm
    ],
    whoFor: [
      "Before your first visit, if you do not have a recent one.",
      "Before orthodontic, restorative or surgical treatment.",
      "To check wisdom teeth.",
    ],
    whatToKnow: [
      "To see a single tooth in detail, we sometimes also need a small x-ray (bitewing or periapical).",
      "Planning dental implants often calls for a 3D CBCT scan.",
    ],
    steps: [
      { title: "Getting ready", body: "Take off any jewelry and metal items from your head and neck." },
      { title: "Taking the x-ray", body: "The machine turns around your head in a few seconds." },
      { title: "Going over the results", body: "Your dentist explains the image to you at your visit." },
    ],
    after: [],
    gains: [
      "A full overview in one image.",
      "Quick and comfortable.",
      "A solid basis for your treatment plan.",
    ],
    faq: [
      {
        q: "Can I bring my own panoramic x-ray?",
        a: "Yes. You can bring a panoramic x-ray taken within the last 2 years to your first visit, either digital or printed.", // DRAFT: dentist to confirm
      },
    ],
    related: ["dental-x-rays", "3d-cbct-scan", "wisdom-teeth-removal"],
    relatedTips: ["which-dental-x-ray", "how-often-to-see-the-dentist", "after-a-tooth-extraction"],
    draftNotes: [
      "The source accepts a panoramic x-ray up to 2 years old for a first visit. Dentist to confirm this interval fits the practice's x-ray policy.",
    ],
  },
  {
    slug: "3d-cbct-scan",
    sourceSlug: "/3d-slikanje/",
    name: "3D CBCT scan",
    h1: { plain: "3D CBCT", accent: "scan" },
    lead: "A 3D CBCT scan shows your teeth and jawbone in three dimensions. We use it to plan dental implants and more complex surgery precisely.",
    summary: "A 3D CBCT scan shows your teeth and jawbone in three dimensions.",
    inShort: [
      "A regular x-ray gives a flat image. A 3D CBCT scan shows the thickness and height of the bone, where the nerves and sinuses are, and exactly how the roots run.",
      "We use it mainly to plan dental implants, bone grafting, removal of impacted wisdom teeth and more complex root canal treatment.",
    ],
    whoFor: [
      "Before dental implants are placed.",
      "For impacted wisdom teeth that sit close to a nerve.",
      "For complex infections around the roots.",
    ],
    whatToKnow: [
      "The radiation dose is higher than with a panoramic x-ray, so we use it only when it is needed.", // DRAFT: dentist to confirm
      "Most routine checkups do not need one.",
    ],
    steps: [
      { title: "Referral", body: "Your dentist decides whether a 3D scan is needed." },
      { title: "Taking the scan", body: "The scan is quick and painless." },
      { title: "Planning", body: "We plan the procedure on the scan and show it to you." },
    ],
    after: [],
    gains: [
      "A precise 3D view of the bone.",
      "Safer planning for surgery.",
      "Fewer surprises during the procedure.",
    ],
    faq: [
      {
        q: "When is a 3D scan needed instead of a panoramic x-ray?",
        a: "When the third dimension matters for planning, for example bone thickness for implants or how close a wisdom tooth is to a nerve.",
      },
    ],
    related: ["dental-implants", "dental-x-rays", "wisdom-teeth-removal"],
    relatedTips: ["after-a-tooth-extraction", "should-wisdom-teeth-come-out", "which-dental-x-ray"],
    draftNotes: [
      "Radiation dose comparison (higher than a panoramic x-ray, used only when needed) comes from the source. Dentist to confirm.",
    ],
  },
];
