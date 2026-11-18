// Service pages, part A (specialist care and general dentistry).
// US English adapted from content/source/source-content-sl.md.
// The "Cost and payment" block is rendered by the template, so it is not stored here.

import type { Service } from "./types";

export const servicesA: Service[] = [
  {
    slug: "oral-surgery",
    sourceSlug: "/oralna-kirurgija/",
    name: "Oral surgery",
    h1: { plain: "Oral", accent: "surgery" },
    lead: "Oral surgery covers treatment of the teeth, gums and jawbone that can't be done without a minor surgical procedure.",
    summary: "Treatment of the teeth, gums and jawbone that needs a minor surgical procedure.",
    inShort: [
      "The procedures we do most often are wisdom tooth removal, bone grafting before dental implants, removing an infected root tip (apicoectomy), crown lengthening and gum flap surgery for gum disease.",
      "Before any procedure, we take an x-ray or a 3D CBCT scan so we can plan it precisely, and we explain what you can expect.",
    ],
    whoFor: [
      "A wisdom tooth is trapped, inflamed or has no room to come in.",
      "You need bone grafting before a dental implant.",
      "Infection at the root has not cleared up after a root canal.",
    ],
    whatToKnow: [
      "Swelling and tenderness are common after a procedure and last a few days.",
      "As with any surgery, there is a risk of complications. We explain it to you before the procedure.",
    ],
    steps: [
      {
        title: "Exam and imaging",
        body: "We assess the area with an x-ray or a 3D CBCT scan. We explain the procedure and prepare a written treatment estimate.",
      },
      {
        title: "The procedure",
        body: "We do the procedure under local anesthesia.",
      },
      {
        title: "Follow-up",
        body: "We check how you are healing and remove stitches if needed.",
      },
    ],
    after: [
      "On the first day, keep the area cool with a cold compress and do not rinse hard.",
      "For a few days, do not smoke or drink alcohol.",
      "Call us if you have severe pain, bleeding or a fever.",
    ],
    gains: [
      "Your procedure is planned from your x-rays or scan.",
      "Local anesthesia keeps the procedure pain free.",
      "Clear instructions for healing.",
    ],
    faq: [
      {
        q: "Will I need time off work after the procedure?",
        a: "It depends on the procedure and on your job. After more involved procedures, a day or two of rest is a good idea. Your dentist will advise you based on your procedure.",
      },
    ],
    related: ["wisdom-teeth-removal", "apicoectomy", "gum-flap-surgery"],
    relatedTips: ["after-a-tooth-extraction", "should-wisdom-teeth-come-out", "which-dental-x-ray"],
  },
  {
    slug: "periodontics",
    sourceSlug: "/paradontolog-parodontologija/",
    name: "Periodontics",
    h1: { plain: "Gum care and", accent: "periodontics" },
    lead: "Periodontics treats diseases of the gums and the bone that hold your teeth in place. Untreated gum disease (periodontitis) is a common reason adults lose teeth.",
    summary: "Care for diseases of the gums and the bone that hold your teeth in place.",
    inShort: [
      "Gum disease starts with inflamed gums that bleed when you brush. If the inflammation spreads, pockets form between the tooth and the gum, and the bone around the teeth is slowly lost.",
      "Treatment includes a thorough cleaning of the tooth roots (deep cleaning, also called scaling and root planing), surgery when needed, and regular maintenance visits with your dentist and dental hygienist.",
    ],
    whoFor: [
      "Your gums bleed, are swollen or are pulling back.",
      "Your teeth have become loose or are shifting.",
      "You have bad breath or a bad taste that won't go away.",
    ],
    whatToKnow: [
      "Bone that has been lost usually can't be restored.",
      "Success depends on good care at home and regular maintenance visits.",
      "Smoking and some conditions, such as diabetes, make treatment harder.",
    ],
    steps: [
      {
        title: "Gum exam",
        body: "We measure the pockets around your teeth and take x-rays.",
      },
      {
        title: "First phase of treatment",
        body: "We clean away tartar, clean the roots and coach you on home care. A few weeks later, we check how your gums have responded. Deeper pockets are treated with gum flap surgery.",
      },
      {
        title: "Maintenance",
        body: "Regular visits keep the results.",
      },
    ],
    after: [
      "Brush twice a day and clean between your teeth every day.",
      "Come to the maintenance visits your periodontist recommends.",
      "If you smoke, now is a good time to quit.",
    ],
    gains: [
      "We stop the disease from progressing.",
      "We keep your teeth and the bone around them.",
      "Healthy gums are the foundation for dental implants and restorative dentistry.",
    ],
    faq: [
      {
        q: "Can gum disease be cured?",
        a: "It can be stopped and kept under control for the long term, but bone that has been lost usually can't be restored. That is why catching it early matters.",
      },
      {
        q: "Do bleeding gums mean I have gum disease?",
        a: "Not necessarily. It is often gum inflammation, which good home care and a tartar cleaning can clear up. We find the cause at your exam.",
      },
    ],
    related: ["deep-cleaning", "gum-flap-surgery", "gum-inflammation"],
    relatedTips: ["how-often-to-see-the-dentist", "how-to-brush-and-floss", "after-a-tooth-extraction"],
  },
  {
    slug: "wisdom-teeth-removal",
    sourceSlug: "/puljenje-modrostnega-zoba/",
    name: "Wisdom teeth removal",
    h1: { plain: "Wisdom teeth", accent: "removal" },
    lead: "Wisdom teeth often don't have enough room and stay partly or fully trapped in the bone. When that happens, they can cause pain, infection or pressure on the neighboring teeth.",
    summary: "Wisdom teeth often lack room and stay partly or fully trapped in the bone.",
    inShort: [
      "Before removal, we take a panoramic x-ray or a 3D CBCT scan to see the position of the tooth and its roots and how close they are to the nerve. From that, we decide between a simple extraction and a surgical removal.",
      "We remove the tooth under local anesthesia. Afterward, you get clear instructions for caring for the area while it heals.",
    ],
    whoFor: [
      "A wisdom tooth hurts or the gum around it is inflamed.",
      "The tooth is trapped or growing in at an angle and pressing on the tooth next to it.",
      "The wisdom tooth or the tooth next to it has decay that can't be treated.",
    ],
    whatToKnow: [
      "Swelling and tenderness for a few days after the procedure are normal.",
      // DRAFT: dentist to confirm (US consent language often also mentions a rare permanent change in sensation)
      "When a tooth sits close to the nerve, there is a small risk of a temporary change in feeling in the lip or tongue. We explain this before the procedure.",
    ],
    steps: [
      {
        title: "Imaging",
        body: "A panoramic x-ray or a 3D CBCT scan shows the position of the tooth. We explain the procedure and prepare a written treatment estimate.",
      },
      {
        title: "Removal",
        body: "We remove the tooth under local anesthesia.",
      },
      {
        title: "Follow-up",
        body: "We check how you are healing and remove stitches if needed.",
      },
    ],
    after: [
      "On the first day, keep your cheek cool with a cold compress and do not rinse your mouth.",
      "For a few days, eat soft foods and do not smoke.",
      "If the pain is getting worse after a few days, call us.",
    ],
    gains: [
      "We remove the source of repeated infections and pain.",
      "We protect the neighboring teeth.",
      "Your procedure is planned from your x-ray or scan.",
    ],
    faq: [
      {
        q: "Does every wisdom tooth need to come out?",
        a: "No. Wisdom teeth that have come in properly, are healthy and that you can keep clean can often stay. We recommend removal when they cause problems or put the neighboring teeth at risk.",
      },
      {
        q: "How long does healing take?",
        a: "The first few days are the most tender, and most people are back to their usual activities within a few days. Full healing of the bone takes longer.",
      },
    ],
    related: ["oral-surgery", "panoramic-x-ray", "3d-cbct-scan"],
    relatedTips: ["after-a-tooth-extraction", "should-wisdom-teeth-come-out", "which-dental-x-ray"],
    draftNotes: [
      "Nerve risk wording keeps the source's 'small risk of a temporary change in feeling'. Dentist to confirm against US informed consent norms.",
    ],
  },
  {
    slug: "dental-x-rays",
    sourceSlug: "/zobni-rentgen-rtg/",
    name: "Dental x-rays and 3D scans",
    h1: { plain: "Dental x-rays and", accent: "3D scans" },
    lead: "An x-ray shows what the eye can't see: decay between teeth, infection around the roots, the bone and impacted teeth.",
    summary: "X-rays show what the eye can't see: decay between teeth, infection at the roots, the bone and impacted teeth.",
    inShort: [
      "Depending on what we need to see, we take a small x-ray of a single tooth (bitewing or periapical), a panoramic x-ray that shows both jaws at once, a cephalometric x-ray for orthodontic planning, or a 3D CBCT scan that shows the bone in three dimensions.",
      "We take an image only when it is needed for a diagnosis or for planning your treatment.",
    ],
    whoFor: [
      "Before your first exam, if you don't have a panoramic x-ray from the last 2 years.",
      "Before dental implants, wisdom teeth removal or orthodontic treatment.",
      "When you have pain or we suspect an infection at the root.",
    ],
    whatToKnow: [
      "An x-ray means a small dose of radiation, so we use it only when it is needed.",
      "If you are pregnant, tell us before the x-ray.",
    ],
    steps: [
      {
        title: "Choosing the image",
        body: "Your dentist decides which image you need.",
      },
      {
        title: "Taking the image",
        body: "It takes only a few moments.",
      },
      {
        title: "Going over the results",
        body: "Your dentist shows you the image and explains what it means.",
      },
    ],
    after: [],
    gains: [
      "A more precise diagnosis and treatment plan.",
      "A 3D CBCT scan for careful, safe implant planning.",
      "We take the image during the same visit.",
    ],
    faq: [
      {
        q: "Do I need to bring a panoramic x-ray to my first visit?",
        a: "It helps if you bring a panoramic x-ray from the last 2 years. If you don't have one, we take it here, and it is billed separately.",
      },
    ],
    related: ["panoramic-x-ray", "3d-cbct-scan", "dental-implants"],
    relatedTips: ["which-dental-x-ray", "after-a-tooth-extraction", "should-wisdom-teeth-come-out"],
    draftNotes: [
      "Source page has no 'After treatment' section, so after is empty.",
      "Source says x-rays are paid separately and a recent panoramic x-ray (under 2 years) can be used at the first exam. Kept in the FAQ without any price.",
    ],
  },
  {
    slug: "cavity-treatment",
    sourceSlug: "/zdravljenje-zoba/",
    name: "Cavity treatment",
    h1: { plain: "Cavity", accent: "treatment" },
    lead: "When a tooth hurts, feels sensitive or shows a dark spot, it's time for an exam. Our goal is to save your own tooth whenever we can.",
    summary: "When a tooth hurts, feels sensitive or shows a dark spot, it's time for an exam.",
    inShort: [
      "Treating a tooth means removing the decay and rebuilding the tooth with a filling. When the damage goes deeper, it can also mean treating the nerve. Your dentist examines the tooth first and takes an x-ray if needed to see how deep the damage goes.",
      "When a tooth can no longer be saved, we talk with you about removing it and about your options for filling the gap later.",
    ],
    whoFor: [
      "You have a toothache, or a tooth is sensitive to cold, heat or sweets.",
      "You've noticed a dark spot, a small hole or a chipped piece of tooth.",
      "A filling has fallen out, chipped or is leaking.",
    ],
    whatToKnow: [
      "Deep decay may need a root canal or a crown.",
      "Not every tooth can be saved. We decide after the exam and x-ray.",
    ],
    steps: [
      {
        title: "Exam and x-ray",
        body: "Your dentist examines the tooth and takes an x-ray if needed. They explain your treatment options and give you a written treatment estimate before anything starts.",
      },
      {
        title: "Treatment",
        body: "After numbing the area with local anesthesia, your dentist removes the decay and rebuilds the tooth with a filling.",
      },
      {
        title: "Follow-up",
        body: "We check your bite and adjust the filling if needed.",
      },
    ],
    after: [
      "Don't eat until the numbness wears off, so you don't bite your cheek or lip.",
      "Sensitivity after treatment usually fades within a few days. If it doesn't, call us.",
      "Regular brushing, flossing and checkups help your filling last longer.",
    ],
    gains: [
      "Treating a tooth early often prevents bigger treatment later.",
      "You keep your own tooth and the work it does when you chew.",
      "Fillings can be tooth-colored, so they are almost invisible.",
    ],
    faq: [
      {
        q: "Does treatment hurt?",
        a: "Before we start, we numb the tooth with local anesthesia, so you usually don't feel pain during treatment. If you are nervous, tell us when you book.",
      },
      {
        q: "How many visits will I need?",
        a: "A small filling is usually done in one visit. Deeper damage takes more visits. You get a rough plan at your exam.",
      },
    ],
    related: ["root-canal-treatment", "tooth-colored-fillings", "toothache"],
    relatedTips: ["toothache-what-to-do", "how-often-to-see-the-dentist", "how-to-brush-and-floss"],
  },
  {
    slug: "root-canal-treatment",
    sourceSlug: "/endodontija/",
    name: "Root canal treatment",
    h1: { plain: "Root canal", accent: "treatment" },
    lead: "When the nerve inside a tooth becomes inflamed or dies, a root canal is often the only way to save the tooth. We do it under local anesthesia.",
    summary: "When the nerve inside a tooth is inflamed or has died, a root canal is often the only way to save the tooth.",
    inShort: [
      "During a root canal, your dentist removes the inflamed or dead tissue from inside the tooth, cleans and disinfects the root canals, and then seals them tightly.",
      "We isolate the tooth with a thin rubber sheet (a rubber dam) during treatment, and we measure the length of each canal with an electronic apex locator so the filling is as precise as possible.",
    ],
    whoFor: [
      "A tooth hurts badly, even at night or when you bite.",
      "Pain from cold or heat doesn't go away quickly.",
      "An x-ray shows signs of infection at the root.",
    ],
    whatToKnow: [
      "Treatment can take more than one visit.",
      "A tooth that has had a root canal is more brittle and often needs a crown.",
      "In some teeth the infection remains and another procedure is needed, such as an apicoectomy.",
    ],
    steps: [
      {
        title: "Diagnosis",
        body: "An exam, a sensitivity test and an x-ray of the tooth.",
      },
      {
        title: "Cleaning the canals",
        body: "Under anesthesia and with a rubber dam in place, we remove the inflamed tissue and clean and disinfect the canals. We seal the canals tightly and close the tooth with a temporary or permanent filling.",
      },
      {
        title: "Restoring the tooth",
        body: "We restore the tooth with a filling or a crown and check on it over time.",
      },
    ],
    after: [
      "For a few days the tooth may be tender when you bite, which is normal.",
      "Until the final restoration is in, don't bite hard foods on the treated side.",
      "If you notice swelling or severe pain, call us.",
    ],
    gains: [
      "You keep your own tooth instead of having it pulled.",
      "We remove the source of infection and pain.",
      "The treated tooth can be protected with a crown later.",
    ],
    faq: [
      {
        q: "How many visits does it take?",
        a: "It depends on the tooth and how many canals it has. Often it takes 2 or 3 visits. You get a more exact plan after your exam.",
      },
      {
        q: "Why do you use a rubber dam?",
        a: "The rubber dam keeps saliva away from the tooth, which helps keep the canals clean during treatment. It also keeps tiny instruments and rinsing solutions out of your mouth.",
      },
    ],
    related: ["cavity-treatment", "tooth-abscess", "apicoectomy"],
    relatedTips: ["toothache-what-to-do", "when-a-tooth-needs-a-crown", "how-often-to-see-the-dentist"],
  },
  {
    slug: "teeth-cleaning",
    sourceSlug: "/ustna-higiena/",
    name: "Teeth cleaning",
    h1: { plain: "Teeth", accent: "cleaning" },
    lead: "Even with careful brushing, tartar and plaque build up on your teeth over time. Your dental hygienist removes them and shows you how to care for your teeth and gums at home.",
    summary: "Even with careful brushing, tartar and plaque build up on teeth over time.",
    inShort: [
      "During a professional cleaning, your dental hygienist removes tartar with an ultrasonic scaler and uses air polishing to lift stains from coffee, tea or tobacco. Last, your teeth are polished.",
      "Part of the visit is a talk about home care: which toothbrush, interdental brushes or floss suit your teeth.",
    ],
    whoFor: [
      // DRAFT: dentist to confirm (source says once or twice a year; many US practices recommend every 6 months)
      "Anyone who wants to keep their teeth and gums healthy, usually once or twice a year.",
      "Your gums bleed when you brush.",
      "Before teeth whitening or orthodontic treatment.",
    ],
    whatToKnow: [
      "Air polishing removes stains, but it doesn't change the natural color of your teeth. That is what teeth whitening is for.",
      "Advanced gum disease needs periodontal treatment.",
    ],
    steps: [
      {
        title: "Exam",
        body: "Your dental hygienist checks your teeth and gums.",
      },
      {
        title: "Removing tartar",
        body: "Tartar comes off with an ultrasonic scaler. Then the hygienist removes stains and polishes your teeth.",
      },
      {
        title: "Home-care tips",
        body: "Your hygienist shows you how to brush properly and clean between your teeth.",
      },
    ],
    after: [
      "Your gums may be a little tender for a day or two.",
      "For 1 hour after air polishing, avoid coffee, tea and red wine.",
    ],
    gains: [
      "Less tartar and plaque irritating your gums.",
      "Smooth teeth and fresher breath.",
      "Personal tips for caring for your teeth at home.",
    ],
    faq: [
      {
        q: "How often should I get my teeth cleaned?",
        // DRAFT: dentist to confirm (source frequency kept; US norm is often every 6 months)
        a: "For most people, once or twice a year is enough. If you have gum disease or wear braces, we may recommend more frequent visits.",
      },
      {
        q: "Does tartar removal hurt?",
        a: "Most people find it uncomfortable rather than painful. If your teeth are very sensitive, we can numb the area with local anesthesia.",
      },
    ],
    related: ["tartar-removal", "gum-inflammation", "teeth-whitening"],
    relatedTips: ["how-often-to-see-the-dentist", "how-to-brush-and-floss", "whitening-or-veneers"],
    draftNotes: [
      "Cleaning frequency kept as the source states it (once or twice a year). Dentist to confirm against the practice's US recall interval.",
    ],
  },
  {
    slug: "tartar-removal",
    sourceSlug: "/ciscenje-zobnega-kamna/",
    name: "Tartar removal",
    h1: { plain: "Tartar", accent: "removal" },
    lead: "Tartar is hardened plaque that a toothbrush can't remove. Your dental hygienist removes it gently and thoroughly with ultrasonic cleaning.",
    summary: "Tartar is hardened plaque that a toothbrush can't remove.",
    inShort: [
      "Tartar forms when minerals from saliva build up in the plaque on your teeth. Its rough surface collects new plaque faster, which irritates the gums and can lead to inflammation.",
      "During the cleaning, your dental hygienist removes the tartar with an ultrasonic scaler, then polishes your teeth and gives you tips on how to prevent it.",
    ],
    whoFor: [
      "You notice yellowish or dark deposits on your teeth, especially on the inside of the lower front teeth.",
      "Your gums bleed or you have bad breath.",
      // DRAFT: dentist to confirm (source says once or twice a year; many US practices recommend every 6 months)
      "As a regular preventive visit, once or twice a year.",
    ],
    whatToKnow: [
      "Without good home care, tartar builds up again.",
      "Deep pockets around the teeth need periodontal treatment.",
    ],
    steps: [
      {
        title: "Exam",
        body: "We check your teeth and gums.",
      },
      {
        title: "Ultrasonic cleaning",
        body: "We remove the tartar with an ultrasonic scaler.",
      },
      {
        title: "Polishing and tips",
        body: "We polish your teeth and give you advice on home care.",
      },
    ],
    after: [
      "Your gums may be tender for a day or two.",
      "Use a soft toothbrush and clean between your teeth too.",
    ],
    gains: [
      "Less gum inflammation and bleeding.",
      "Smoother, cleaner teeth.",
      "A lower risk of gum disease.",
    ],
    faq: [
      {
        q: "Can I remove tartar at home?",
        a: "No. A toothbrush won't remove hardened tartar, and trying with sharp objects can damage your gums and enamel. Good home care can only keep it from building up quickly.",
      },
    ],
    related: ["teeth-cleaning", "gum-inflammation", "periodontics"],
    relatedTips: ["how-often-to-see-the-dentist", "how-to-brush-and-floss", "toothache-what-to-do"],
    draftNotes: [
      "Preventive visit frequency kept as the source states it (once or twice a year). Dentist to confirm against the practice's US recall interval.",
    ],
  },
  {
    slug: "tooth-colored-fillings",
    sourceSlug: "/bela-zalivka-plomba/",
    name: "Tooth-colored fillings",
    h1: { plain: "Tooth-colored", accent: "fillings" },
    lead: "A tooth-colored filling is made of composite resin that matches your tooth, so it blends in with your smile. We use it to treat decay and to replace old dark fillings.",
    summary: "A tooth-colored filling is made of composite resin, so it blends in with your smile.",
    inShort: [
      "We apply the composite in thin layers and harden each one with a curing light. Your dentist picks the shade that matches your tooth most closely and shapes the filling so your bite is right.",
      "We replace old silver (amalgam) fillings when they are damaged, leaking or have decay underneath, or when you would like them to look better.",
    ],
    whoFor: [
      "You have decay that can be repaired with a filling.",
      "Old dark fillings are damaged or bother you.",
      "You want a repair that doesn't show.",
    ],
    whatToKnow: [
      "For very large damage, an inlay or a crown is a longer-lasting solution.",
      "Composite can stain over time and may need to be redone at some point.",
    ],
    steps: [
      {
        title: "Exam",
        body: "We assess the tooth and take an x-ray if needed.",
      },
      {
        title: "Preparing the tooth",
        body: "Under anesthesia, we remove the decay or the old filling.",
      },
      {
        title: "Filling in layers",
        body: "We apply composite in the chosen shade and harden it with a curing light. We check your bite and polish the filling.",
      },
    ],
    after: [
      "The filling is hard right after the procedure, but wait to eat until the numbness wears off.",
      "Coffee, tea and tobacco can stain the filling over time.",
    ],
    gains: [
      "A tooth-colored filling is almost invisible.",
      "The material bonds to the tooth, so we remove less healthy tooth.",
      "Most fillings are done in one visit.",
    ],
    faq: [
      {
        q: "Do all my silver fillings need to be replaced?",
        a: "Not necessarily. Silver fillings that are intact can stay. We recommend replacing one when it is damaged, has decay underneath, or when you want a different look.",
      },
      {
        q: "How long does a tooth-colored filling last?",
        a: "It depends on the size of the filling, your bite and how you care for it. Your dentist will tell you what to expect in your case at your exam.",
      },
    ],
    related: ["cosmetic-bonding", "inlays-and-onlays", "cavity-treatment"],
    relatedTips: ["how-often-to-see-the-dentist", "toothache-what-to-do", "how-to-brush-and-floss"],
  },
  {
    slug: "kids-dentistry",
    sourceSlug: "/otroski-zobozdravnik/",
    name: "Kids' dentistry",
    h1: { plain: "Kids'", accent: "dentistry" },
    lead: "A child's first dental visits should feel calm and pleasant. That's why we take our time, explain everything and never rush treatment.",
    summary: "Calm, unhurried checkups and care for children's teeth, from the first tooth on.",
    inShort: [
      "Kids' dentistry includes regular checkups, prevention such as dental sealants, and treatment of baby teeth and permanent teeth.",
      "At each checkup, we also keep an eye on how the jaws are growing and how the teeth are lining up, and we let you know if a visit to an orthodontist would help.",
    ],
    whoFor: [
      "Children from their first teeth on.",
      "Children with cavities or sensitive teeth.",
      "Children who are afraid of the dentist and need more time.",
    ],
    whatToKnow: [
      "For very complex treatment or strong fear, we may refer you to a pediatric dentist.",
    ],
    steps: [
      {
        title: "Checkup",
        body: "Your child gets to know the treatment room, the chair and the instruments. We check the teeth and gums and explain what we see to you.",
      },
      {
        title: "Prevention or treatment",
        body: "If needed, we place dental sealants or treat cavities.",
      },
      {
        title: "Regular checkups",
        body: "We set up the next checkup together.",
      },
    ],
    after: [
      "With young children, a parent should brush their teeth or brush again after them.",
      "Keep sweets and sugary drinks to mealtimes.",
    ],
    gains: [
      "Early detection of cavities and problems with how teeth come in.",
      "Habits for healthy teeth that last a lifetime.",
      "A calm experience that makes the dentist less scary.",
    ],
    faq: [
      {
        q: "When should my child first see a dentist?",
        a: "It is a good idea for your child to see a dentist soon after the first teeth come in. That way your child gets used to the office, and we can spot any problems early.",
      },
      {
        q: "Do baby teeth need to be treated too?",
        a: "Yes. Baby teeth hold space for the permanent teeth, and cavities in them can hurt and spread. That's why we treat them as carefully as permanent teeth.",
      },
    ],
    related: ["cavity-treatment", "teeth-cleaning", "braces"],
    relatedTips: ["how-to-brush-and-floss", "how-often-to-see-the-dentist", "toothache-what-to-do"],
    draftNotes: [
      "No related-service blurb for this page exists in the source, so the summary was written from the lead.",
    ],
  },
  {
    slug: "gum-inflammation",
    sourceSlug: "/vnetje-dlesni/",
    name: "Gum inflammation",
    h1: { plain: "Gum", accent: "inflammation" },
    lead: "Gums that bleed when you brush are often the first sign of inflammation. Gum inflammation can be cleared up if it is treated in time.",
    summary: "Gums that bleed when you brush are often the first sign of inflammation.",
    inShort: [
      "Gum inflammation (gingivitis) is caused by bacteria in the plaque and tartar along the gumline. The gums are red, swollen and bleed when touched, often without any pain.",
      "Treatment means removing the tartar and plaque and keeping up good care at home. If it is not treated, the inflammation can turn into gum disease (periodontitis), which also affects the bone.",
    ],
    whoFor: [
      "Your gums bleed when you brush or floss.",
      "Your gums are red or swollen.",
      "You have bad breath.",
    ],
    whatToKnow: [
      "The inflammation comes back if you don't keep up your home care.",
      "During pregnancy, with diabetes and with some medications, the gums are more prone to inflammation.",
    ],
    steps: [
      {
        title: "Exam",
        body: "We check your gums and measure the pockets around your teeth.",
      },
      {
        title: "Cleaning",
        body: "We remove tartar and plaque.",
      },
      {
        title: "Home care",
        body: "We give you advice on brushing and cleaning between your teeth.",
      },
    ],
    after: [
      "Brush twice a day with a soft toothbrush.",
      "Clean between your teeth every day.",
      "With good care, bleeding usually goes down within a few weeks. If it doesn't, come see us.",
    ],
    gains: [
      "Gum inflammation can usually be fully cured.",
      "We keep it from turning into gum disease (periodontitis).",
    ],
    faq: [
      {
        q: "Should I brush less if my gums bleed?",
        a: "No. Gentle but thorough brushing and cleaning between your teeth help the inflammation settle down. Bleeding is a sign of inflammation, not of brushing too hard.",
      },
    ],
    related: ["teeth-cleaning", "tartar-removal", "periodontics"],
    relatedTips: ["how-often-to-see-the-dentist", "how-to-brush-and-floss", "braces-for-adults"],
  },
];
