// Tips hub and the 15 articles, adapted into US English from the /nasveti/ pages
// in content/source/source-content-sl.md.

import type { Tip } from "./types";

const DISCLAIMER =
  "This article is general information and does not replace an exam. Your dentist will advise you on what is right for you.";

export const tipsHubIntro: string =
  "Find tips for everyday tooth care, plain explanations of your treatment options and information to help you get ready for your visit.";

export const tips: Tip[] = [
  {
    slug: "implant-or-bridge",
    sourceSlug: "implantat-ali-mosticek",
    title: "Implant or bridge: which is right when a tooth is missing?",
    summary:
      "An implant and a bridge are both fixed ways to replace a missing tooth. How they differ, who each one suits and what shapes the decision.",
    category: "Implants and restorative",
    readMinutes: 5,
    lead:
      "Both are fixed, so you never take them out. An implant replaces the root of the tooth and leaves the neighboring teeth alone, but it takes a surgical procedure and enough bone. A bridge needs no surgery, but the teeth next to the gap have to be reshaped. Which is better for you depends on those neighboring teeth, your bone and your health, so you decide after an exam.",
    sections: [
      {
        heading: "Why not to leave the gap empty",
        paragraphs: [
          "When a tooth is missing, the teeth beside it slowly tip into the gap, and the tooth in the opposite jaw can start to grow toward it. Your bite changes, plaque builds up more easily in the new nooks, and the bone where the tooth used to be slowly shrinks.",
          "That is why it helps to talk with your dentist about a replacement soon after you lose a tooth, even if the gap does not show.",
        ],
      },
      {
        heading: "How an implant works",
        paragraphs: [
          "An implant is a small titanium post that we place in the jawbone under local anesthesia, where it takes the place of the tooth root. Once the post has fused with the bone, we attach a crown to it. Placing it takes 30 to 60 minutes, and healing takes 2 to 6 months.",
          "Because the implant is anchored in bone, the neighboring teeth do not need to be reshaped. We plan every implant on a 3D CBCT scan of the jaw.",
        ],
      },
      {
        heading: "How a bridge works",
        paragraphs: [
          "A bridge is made of crowns on the neighboring teeth, which hold it in place, and an artificial tooth that spans the gap. We reshape the supporting teeth, take an impression, and you wear a temporary bridge until the final one is ready.",
          "A bridge is usually finished sooner than a tooth on an implant, and it needs no surgery.",
        ],
      },
      {
        heading: "What shapes the decision",
        paragraphs: [
          "At your exam, your dentist looks at a few things that together show which option suits you better:",
        ],
        bullets: [
          "Neighboring teeth: if they are healthy, it is a shame to reshape them for a bridge. If they already have large fillings or crowns, a bridge can make sense.",
          "Bone: an implant needs enough bone. When there is not enough, it can sometimes be built up.",
          "Health: some medical conditions and smoking affect healing after an implant is placed.",
          "Time: a bridge is usually ready sooner. With an implant, you wait for the post to fuse with the bone.",
        ],
      },
      {
        heading: "Caring for either one",
        paragraphs: [
          "Clean under a bridge with special floss or a small interdental brush, and clean around an implant as carefully as you would around your own tooth. With both, regular checkups and teeth cleanings matter, because gum inflammation can put the supporting teeth or the bone around the implant at risk.",
        ],
      },
    ],
    disclaimer: DISCLAIMER,
    relatedServices: ["dental-implants", "dental-bridges", "dental-crowns", "3d-cbct-scan"],
  },
  {
    slug: "how-often-to-see-the-dentist",
    sourceSlug: "kako-pogosto-na-pregled",
    title: "How often should you see the dentist and get your teeth cleaned?",
    summary:
      "How often to come in for a checkup and a professional cleaning, when to come in sooner and what happens at a regular checkup.",
    category: "Prevention",
    readMinutes: 4,
    lead:
      "For most people, a checkup and a professional teeth cleaning once or twice a year is enough. You may need to come more often if you have gum disease, braces, implants or a lot of fillings. Do not wait for your next appointment if a tooth hurts, your gums bleed or you notice swelling.",
    sections: [
      {
        heading: "Why come in when nothing hurts",
        paragraphs: [
          "Cavities and gum disease often do not hurt at first. By the time you feel pain, the damage is usually bigger and the treatment more involved. At a regular checkup we catch them early, while the fix is still small.",
        ],
      },
      {
        heading: "What happens at a regular checkup",
        paragraphs: [
          "Your dentist checks your teeth, fillings, gums and the soft tissue in your mouth. If needed, we take an x-ray, because cavities between teeth and inflammation at the root cannot be seen with the naked eye.",
        ],
        bullets: [
          "A check of your teeth and any fillings or crowns you have",
          "A check of your gums and the soft tissue in your mouth",
          "An x-ray, when one is needed",
          "A talk about anything you have noticed and about your care at home",
        ],
      },
      {
        heading: "Teeth cleaning: once or twice a year",
        paragraphs: [
          "Even if you brush carefully, tartar and plaque build up on your teeth over time. Your dental hygienist removes them with an ultrasonic scaler and removes stains with air polishing, then polishes your teeth and shows you how to clean them at home.",
          "For most people, once or twice a year is enough. If you have gum disease or braces, we may suggest more frequent visits.",
        ],
      },
      {
        heading: "When to come in sooner",
        paragraphs: ["Call us, no matter when your last visit was, if:"],
        bullets: [
          "A tooth hurts or is sensitive to heat, cold or biting",
          "Your gums bleed when you brush or look swollen",
          "A tooth or a filling has chipped",
          "You notice swelling in your cheek or gums",
          "A tooth feels loose",
        ],
      },
      {
        heading: "Your first visit with us",
        paragraphs: [
          "Bring a panoramic x-ray from the last 2 years if you have one. If not, we take one here. After the exam, your dentist explains your options, and you get a written treatment estimate before any treatment starts.",
        ],
      },
    ],
    disclaimer: DISCLAIMER,
    relatedServices: ["teeth-cleaning", "tartar-removal", "gum-inflammation", "panoramic-x-ray"],
  },
  {
    slug: "whitening-or-veneers",
    sourceSlug: "beljenje-ali-luske",
    title: "Teeth whitening or porcelain veneers?",
    summary:
      "Whitening brightens the natural shade of your teeth, while veneers also change their shape. When whitening is enough and when veneers are the right choice.",
    category: "Cosmetic",
    readMinutes: 4,
    lead:
      "Whitening brightens the natural shade of healthy teeth, with no reshaping. Porcelain veneers are thin ceramic shells that change the color, shape and size of your teeth, but the teeth need to be reshaped first. If your teeth have a nice shape and have only darkened, whitening is often enough. If you want to change their shape, close gaps or cover chipped edges, veneers are the right choice.",
    sections: [
      {
        heading: "What whitening does",
        paragraphs: [
          "Whitening lightens the natural shade of your teeth with a whitening gel. Most often we use trays made to fit your teeth, which you fill with gel at home as directed and wear for a set time each day. Whitening can also be done in the office, where it takes about 45 minutes.",
          "Whitening does not remove any tooth structure, so the teeth do not need to be reshaped. Your teeth may be sensitive for a while during whitening.",
        ],
      },
      {
        heading: "What whitening cannot do",
        paragraphs: ["Whitening only changes the color of natural teeth. It does not help when:"],
        bullets: [
          "You want to change the shape or length of your teeth",
          "There are gaps between your teeth or the edges are chipped",
          "You have fillings, crowns or veneers on your front teeth, because these do not whiten",
          "A tooth has darkened from the inside, for example after a root canal",
        ],
      },
      {
        heading: "What veneers do",
        paragraphs: [
          "Porcelain veneers are thin ceramic shells that we bond to the front of your teeth. They are made in a dental lab to fit your teeth, and they change the color, shape and size of your teeth all at once.",
          "Veneers usually require reshaping the teeth a little, so the decision is permanent. Your teeth and gums need to be healthy first.",
        ],
      },
      {
        heading: "How to decide",
        paragraphs: [
          "If your teeth are healthy and nicely shaped and have only darkened with age, coffee or tea, whitening is often enough. If you also want to change their shape, close gaps or cover chipped edges, veneers are the right choice. For smaller touch-ups on single teeth, composite bonding is sometimes enough.",
          "If you are thinking about both, we whiten your teeth first and then match the shade of the veneers to your new shade.",
        ],
      },
      {
        heading: "Before either one: an exam",
        paragraphs: [
          "Whitening is not suitable if you have untreated cavities or inflamed gums, or while you are pregnant or breastfeeding. That is why we always check that your teeth and gums are healthy before whitening or veneers.",
        ],
      },
    ],
    disclaimer: DISCLAIMER,
    relatedServices: ["teeth-whitening", "porcelain-veneers", "cosmetic-bonding", "teeth-cleaning"],
  },
  {
    slug: "after-a-tooth-extraction",
    sourceSlug: "po-puljenju-zoba",
    title: "What to do after a tooth extraction",
    summary:
      "What to do in the first hours and days after a tooth is pulled: bleeding, swelling, food, smoking and when to call your dentist.",
    category: "Oral surgery",
    readMinutes: 4,
    lead:
      "The first day matters most: bite on the gauze, do not rinse your mouth, keep your cheek cool and do not smoke. For a few days, eat soft food and chew on the other side. Swelling and tenderness are normal for a few days. If the pain gets worse after a few days, the bleeding does not stop or you get a fever, call us.",
    sections: [
      {
        heading: "The first few hours",
        paragraphs: [
          "A blood clot forms in the socket. It protects the wound and lets it heal. Most of the advice for the first hours is about keeping that clot in place.",
        ],
        bullets: [
          "Bite on the gauze you get after the procedure and keep it there as your dentist tells you.",
          "Do not eat or drink anything hot until the numbness wears off, so you do not bite or burn yourself.",
          "Cool the cheek on the side of the extraction with a cold pack wrapped in a cloth, taking breaks in between.",
        ],
      },
      {
        heading: "The first day",
        paragraphs: [],
        bullets: [
          "Do not rinse your mouth or spit hard.",
          "Do not smoke or drink alcohol.",
          "Do not drink through a straw, because the suction can pull out the clot.",
          "Rest and avoid strenuous activity.",
          "Sleep with your head slightly raised.",
        ],
      },
      {
        heading: "The next few days",
        paragraphs: [
          "For a few days, eat soft food that is not too hot and chew on the other side. Brush your teeth as usual, but gently near the wound. Avoid smoking for as long as you can, because it slows healing.",
          "Swelling usually peaks on the second or third day and then starts to go down. If you had stitches, we remove them at your follow-up visit.",
        ],
      },
      {
        heading: "When to call us",
        paragraphs: ["Call us at (410) 555-0142 if:"],
        bullets: [
          "The bleeding does not stop even with pressure on the gauze",
          "The pain does not ease after a few days but gets worse",
          "The swelling is still growing after the third day",
          "You get a fever or pus drains from the wound",
          "Your lip or tongue still does not feel normal after a few days",
        ],
      },
      {
        heading: "Wisdom teeth",
        paragraphs: [
          "Removing a wisdom tooth can be a bigger procedure, so swelling and tenderness are usually more noticeable. Before the procedure, we take a panoramic x-ray or a 3D CBCT scan to see where the tooth and its roots sit, and afterward you get detailed instructions for caring for the wound.",
        ],
      },
    ],
    disclaimer: DISCLAIMER,
    relatedServices: ["wisdom-teeth-removal", "oral-surgery", "toothache", "3d-cbct-scan"],
  },
  {
    slug: "toothache-what-to-do",
    sourceSlug: "zobobol-kaj-narediti",
    title: "Toothache: what to do until you can see a dentist",
    summary:
      "What a short twinge with cold means compared with throbbing pain at night, how to get through the wait for your appointment and when you need help right away.",
    category: "Prevention",
    readMinutes: 4,
    lead:
      "A toothache is a sign that something is wrong with a tooth or the gum, and it rarely goes away on its own. Until your appointment, you can take a pain reliever as directed on the package and avoid very cold, hot and sugary food. If you have swelling in your face, a fever or trouble swallowing, get emergency care right away.", // DRAFT: dentist to confirm (pain reliever advice)
    sections: [
      {
        heading: "What the type of pain tells you",
        paragraphs: [
          "The type of pain gives your dentist useful clues, but only an exam and an x-ray can reliably show the cause. A few common patterns:",
        ],
        bullets: [
          "A short, sharp pain with cold or sweets that passes quickly: often a cavity, an exposed tooth root or a cracked filling.",
          "Pain that lingers long after something cold or hot, or throbs and wakes you at night: often an inflamed tooth nerve.",
          "Pain when you bite down and a feeling that the tooth sits higher: possibly inflammation at the root or a cracked tooth.",
          "Pain at the back of the jaw with swollen gums: often a wisdom tooth coming in.",
        ],
      },
      {
        heading: "What you can do until your appointment",
        paragraphs: [],
        bullets: [
          "Take a pain reliever as directed on the package or as your pharmacist advises.", // DRAFT: dentist to confirm (pain reliever advice)
          "Gently clean the tooth and gum, even if it hurts. Leftover food can make the pain worse.",
          "Avoid very cold, hot and sugary food, and chew on the other side.",
          "You can hold a cold pack wrapped in a cloth against your cheek, but never put heat on a swelling.",
          "Do not put a pill directly on the gum, because it can damage the tissue.", // DRAFT: dentist to confirm (medication placement)
        ],
      },
      {
        heading: "When you need help right away",
        paragraphs: [
          "If you have swelling in your face or neck, a fever, or trouble swallowing or breathing, do not wait for a regular appointment. Get emergency medical care right away, or contact an emergency dental service near you.", // DRAFT: dentist to confirm (emergency wording, US emergency services)
        ],
      },
      {
        heading: "Why not wait for it to pass",
        paragraphs: [
          "Sometimes the pain eases for a few days, but the cause is still there. A cavity that a filling could fix today may need a root canal a few weeks from now. Call us at (410) 555-0142 and tell us you have a toothache. Our offices are open Mon to Fri, 7 AM to 8 PM.",
        ],
      },
    ],
    disclaimer: DISCLAIMER,
    relatedServices: ["toothache", "cavity-treatment", "root-canal-treatment", "tooth-abscess"],
  },
  {
    slug: "how-to-brush-and-floss",
    sourceSlug: "pravilno-scetkanje",
    title: "How to brush and clean between your teeth",
    summary:
      "How long and how to brush, which toothbrush to use, why a toothbrush alone is not enough and how to help your kids.",
    category: "Prevention",
    readMinutes: 4,
    lead:
      "Brush twice a day for 2 minutes with a soft toothbrush and a fluoride toothpaste. Tilt the brush toward the gumline and use small motions, without pressing hard. Once a day, also clean between your teeth with an interdental brush or floss, because a toothbrush cannot reach there.",
    sections: [
      {
        heading: "The basics",
        paragraphs: [],
        bullets: [
          "Brush twice a day, morning and evening, for about 2 minutes each time.",
          "Use a soft toothbrush. A hard brush and heavy pressure can damage your gums and the necks of your teeth.",
          "Use a toothpaste with fluoride. After brushing, spit it out, but do not rinse hard with water.",
          "Replace your toothbrush or brush head every 3 months, or sooner if the bristles splay.",
        ],
      },
      {
        heading: "Technique",
        paragraphs: [
          "Tilt the brush at about a 45 degree angle toward the gumline and clean 2 to 3 teeth at a time with small circular or vibrating motions. Work in order: outer surfaces, inner surfaces and chewing surfaces, so you do not miss any part.",
          "An electric toothbrush can help because it makes the motions for you, but you still need to guide the head slowly from tooth to tooth.",
        ],
      },
      {
        heading: "Between your teeth",
        paragraphs: [
          "A toothbrush cleans only 3 of the 5 surfaces of each tooth. Plaque stays between the teeth, which is where cavities and gum inflammation most often start. Once a day, use interdental brushes or floss. Your dental hygienist will pick the right size of interdental brush for you at your teeth cleaning.",
          "A little bleeding in the first few days is common while your gums get used to it. If the bleeding has not stopped after 2 weeks, come in for a checkup.",
        ],
      },
      {
        heading: "For kids",
        paragraphs: [
          "Brush your child's teeth from the very first tooth. Until kids can manage precise movements, usually around school age, a parent should finish the brushing in the evening. The amount of toothpaste should match your child's age, and we explain this at the checkup.",
        ],
      },
    ],
    disclaimer: DISCLAIMER,
    relatedServices: ["teeth-cleaning", "tartar-removal", "gum-inflammation", "kids-dentistry"],
  },
  {
    slug: "how-long-whitening-lasts",
    sourceSlug: "kako-dolgo-zdrzi-beljenje",
    title: "How long whitening lasts and how to keep it",
    summary:
      "What decides how long your teeth stay brighter, which habits stain them again and how to refresh the result.",
    category: "Cosmetic",
    readMinutes: 4,
    lead:
      "How long whitening lasts depends mostly on your habits. Coffee, tea, red wine and smoking stain teeth again over time. Regular teeth cleanings and a few simple habits help the result last longer, and when needed you can refresh it with the same trays, as your dentist directs.",
    sections: [
      {
        heading: "Why teeth stain again",
        paragraphs: [
          "Whitening lightens the natural shade of a tooth, but it does not make it resistant to new stains. Pigments from food, drinks and tobacco slowly bind to the tooth surface and, over the years, move deeper. The pace is different for everyone, so there is no single timeline.",
        ],
      },
      {
        heading: "What helps the result last longer",
        paragraphs: [],
        bullets: [
          "Drink coffee, tea and red wine in moderation, and rinse your mouth with water afterward.",
          "If you smoke, that is the biggest reason teeth turn yellow quickly.",
          "Brush twice a day and clean between your teeth too.",
          "Come in for regular teeth cleanings, where air polishing removes surface stains.",
        ],
      },
      {
        heading: "The first few days after whitening",
        paragraphs: [
          "Right after whitening, your teeth pick up stains more easily. For the first few days, avoid strongly colored food and drinks. If your teeth feel sensitive, it is usually temporary, and your dentist can suggest a toothpaste for sensitive teeth.",
        ],
      },
      {
        heading: "Refreshing the result",
        paragraphs: [
          "The custom trays we make are yours to keep. When you want to refresh the result, check with your dentist first, then use them again with whitening gel, usually for a shorter time than the first round. Keep in mind that fillings, crowns and veneers do not whiten, so before whitening, talk with us about whether any of them will need to be replaced afterward.",
        ],
      },
    ],
    disclaimer: DISCLAIMER,
    relatedServices: ["teeth-whitening", "teeth-cleaning", "porcelain-veneers", "cosmetic-bonding"],
  },
  {
    slug: "bonding-or-veneers",
    sourceSlug: "estetska-zalivka-ali-luska",
    title: "Bonding or a porcelain veneer: which is right for your front teeth?",
    summary:
      "Both fix the shape and look of front teeth. How they differ, how long they hold up and when each one makes sense.",
    category: "Cosmetic",
    readMinutes: 4,
    lead:
      "Composite bonding is shaped right on the tooth, usually with no reshaping and in one visit. It suits smaller fixes. A porcelain veneer is made in a dental lab, holds its color better and suits bigger changes in shape or color, but the tooth has to be reshaped. We decide together which is better for you after an exam.",
    sections: [
      {
        heading: "Composite bonding",
        paragraphs: [
          "Your dentist applies tooth-colored composite in thin layers, shapes it and hardens it with a curing light. This can lengthen a chipped edge, close a small gap or even out the shape of a tooth. Because there is no lab work, the treatment is often done in one visit, and the tooth usually does not need to be reshaped.",
          "Over time, composite can stain or chip, so it needs to be polished or redone now and then.",
        ],
      },
      {
        heading: "Porcelain veneer",
        paragraphs: [
          "A veneer is a thin ceramic shell that we bond to the front surface of the tooth. The tooth has to be reshaped a little, which cannot be undone, and the veneer is made in a dental lab from an impression or a digital scan. Porcelain holds its color and resists stains.",
        ],
      },
      {
        heading: "When each one suits better",
        paragraphs: [],
        bullets: [
          "A chipped edge, a small gap or one tooth with an uneven shape: bonding is often enough.",
          "Several teeth whose shape, length or color you want to change at once: veneers are often the better fit.",
          "A darkly stained tooth that will not whiten: a veneer or a crown can cover it better than composite.",
          "If you also want whitening: we do it before bonding or veneers, because neither one whitens.",
        ],
      },
      {
        heading: "How we decide",
        paragraphs: [
          "At your consultation, we look at your teeth and bite and talk about what bothers you and what you want to achieve. We explain your options, with their benefits and limits, and you get a written treatment estimate before we start.",
        ],
      },
    ],
    disclaimer: DISCLAIMER,
    relatedServices: ["cosmetic-bonding", "porcelain-veneers", "dental-crowns", "teeth-whitening"],
  },
  {
    slug: "when-a-tooth-needs-a-crown",
    sourceSlug: "kdaj-zob-potrebuje-prevleko",
    title: "When a tooth needs a crown",
    summary:
      "When a filling is no longer enough, why a tooth often needs a crown after a root canal and how the material is chosen.",
    category: "Implants and restorative",
    readMinutes: 4,
    lead:
      "A crown makes sense when a tooth is so weakened that a filling would not protect it from breaking: with large fillings, cracked teeth and often after a root canal on a back tooth. A crown covers the tooth on all sides and gives back its shape and strength. The tooth has to be reshaped, so we decide on a crown only after an exam.",
    sections: [
      {
        heading: "When a filling is no longer enough",
        paragraphs: [
          "A filling fills in part of the tooth, and the remaining walls have to carry the force of chewing. When little healthy tooth is left, those walls can break off. We usually suggest a crown when:",
        ],
        bullets: [
          "The filling takes up most of the tooth and the walls are thin",
          "The tooth is cracked or a piece has already broken off",
          "A back tooth has had a root canal and is more brittle as a result",
          "The tooth is badly worn, for example from grinding",
        ],
      },
      {
        heading: "A middle option: an inlay or onlay",
        paragraphs: [
          "If too much tooth is missing for a filling, but enough is left that it does not need to be covered completely, an inlay or onlay may be a good fit. It is made in a dental lab and replaces only the missing part, so less healthy tooth has to be removed than for a crown.",
        ],
      },
      {
        heading: "Material",
        paragraphs: [
          "We make crowns from all-ceramic, zirconia or porcelain fused to metal. On front teeth, looks matter most. On back teeth, strength does. We explain the options at your exam, and you get a written treatment estimate before we start.",
          "A crown itself cannot get a cavity, but the edge where the crown meets the tooth can, so clean it as carefully as your other teeth.",
        ],
      },
    ],
    disclaimer: DISCLAIMER,
    relatedServices: ["dental-crowns", "root-canal-treatment", "inlays-and-onlays", "dental-bridges"],
  },
  {
    slug: "dentures-or-implant-teeth",
    sourceSlug: "proteza-ali-zobje-na-implantatih",
    title: "Removable dentures or fixed teeth on implants?",
    summary:
      "When most or all of your teeth are missing: how removable dentures, implant-supported dentures and fixed All-on-4 teeth differ.",
    category: "Implants and restorative",
    readMinutes: 5,
    lead:
      "A removable denture needs no surgery and is ready sooner, but it can move when you chew. A denture that clips onto 2 or more implants is more stable, but you still take it out. With All-on-4 or All-on-6, a full arch of teeth is fixed to implants. What is possible for you depends on your bone and your health, which a 3D CBCT scan shows.",
    sections: [
      {
        heading: "Removable dentures",
        paragraphs: [
          "A full denture rests on the gums and the palate, while a partial denture holds onto your remaining teeth. We make it from impressions and adjust it so it is as comfortable as possible. Most people get used to a new denture within a few weeks.",
          "The bone under a denture shrinks over time, so the denture needs to be relined or replaced now and then. A lower denture often holds less well than an upper one because the tongue moves it.",
        ],
      },
      {
        heading: "Implant-supported dentures",
        paragraphs: [
          "A denture can be attached to implants with special connectors. It does not move when you chew, but you still take it out to clean it. This is often a good solution when a lower denture does not stay in place well.",
        ],
      },
      {
        heading: "Fixed teeth: All-on-4 and All-on-6",
        paragraphs: [
          "A full arch of teeth is attached to 4 or 6 implants, and you do not take it out. We place the implants to make the most of the bone you have. In some cases, we can attach temporary teeth soon after the implants are placed, and we make the final teeth after healing.",
          "This is a bigger treatment with several visits. Fixed teeth need careful cleaning and regular checkups.",
        ],
      },
      {
        heading: "How we decide",
        paragraphs: [
          "At your consultation, we examine your jaws and take a 3D CBCT scan, which shows how much bone you have and how good it is. We talk about your wishes, your health and your habits, then suggest your options. You get a written treatment estimate before we start.",
        ],
      },
    ],
    disclaimer: DISCLAIMER,
    relatedServices: ["dentures", "all-on-4", "dental-implants", "3d-cbct-scan"],
  },
  {
    slug: "clear-aligners-or-braces",
    sourceSlug: "prozorne-opornice-ali-klasicni-aparat",
    title: "Clear aligners or traditional braces?",
    summary:
      "How clear aligners and fixed braces work, when each one is the better fit and what each one asks of you.",
    category: "Orthodontics",
    readMinutes: 5,
    lead:
      "Both move your teeth a little at a time. Clear aligners are nearly invisible and come out for eating and cleaning, but they only work if you wear them most of the day and night. Fixed braces stay on your teeth all the time, so they do not depend on your consistency, and they can also handle more complex problems. An orthodontist decides what suits you after an exam.",
    sections: [
      {
        heading: "How clear aligners work",
        paragraphs: [
          "From a digital scan of your teeth, the orthodontist plans each movement and orders a series of custom aligners. You wear each one for a set time, then switch to the next. Several companies make aligners like these, and they all work on a similar principle.",
        ],
      },
      {
        heading: "How fixed braces work",
        paragraphs: [
          "We bond brackets to your teeth and connect them with a wire, which we adjust at your checkups. Brackets can be metal, tooth-colored or lingual, which sit on the inside of the teeth where they are hard to see.",
        ],
      },
      {
        heading: "Side by side",
        paragraphs: [],
        bullets: [
          "Look: aligners are nearly invisible. Fixed braces show, except for lingual braces.",
          "Consistency: aligners need to be worn most of the day and night. Fixed braces work all the time.",
          "Food and cleaning: aligners come out. With fixed braces, cleaning takes more effort and you need to avoid hard and sticky food.",
          "Problems they can fix: aligners are not right for everyone. Fixed braces can also handle more complex movements.",
        ],
      },
      {
        heading: "The same with both",
        paragraphs: [
          "How long treatment takes depends on the problem, and your orthodontist estimates it after the exam and x-rays. When treatment ends, both need retainers, or the teeth tend to drift back to where they were.",
        ],
      },
    ],
    disclaimer: DISCLAIMER,
    relatedServices: ["invisible-braces", "invisalign", "braces", "retainers"],
  },
  {
    slug: "braces-for-adults",
    sourceSlug: "zobni-aparat-pri-odraslih",
    title: "Braces for adults: is it too late?",
    summary:
      "Why teeth can move at any age, what is different for adults and which options are less noticeable.",
    category: "Orthodontics",
    readMinutes: 4,
    lead:
      "It is not too late. Teeth can be moved at any age, as long as your teeth and gums are healthy. For adults, it is important to treat any cavities and gum disease before starting. Many adults choose clear aligners, tooth-colored braces or lingual braces, which are less noticeable.",
    sections: [
      {
        heading: "Why adults choose braces",
        paragraphs: [],
        bullets: [
          "Their teeth have shifted over time, or a gap has opened up.",
          "Crowded teeth are hard to clean, so plaque builds up more easily.",
          "The teeth need to be moved into a better position before a bridge, an implant or veneers.",
          "Their smile bothers them, and they did not have braces as a child.",
        ],
      },
      {
        heading: "What is different for adults",
        paragraphs: [
          "The jaw is no longer growing, so braces only move the teeth. The health of your gums and bone matters, because your teeth sit in that bone. That is why we check your gums before we start, take x-rays if needed, and treat any cavities or gum inflammation first.",
          "Treatment may take a little longer than for teenagers. Your orthodontist gives you an estimated timeline after the exam and a review of your x-rays.",
        ],
      },
      {
        heading: "Less noticeable options",
        paragraphs: [
          "Clear aligners are nearly invisible and come out when you eat. Tooth-colored brackets blend in with your teeth, and lingual brackets sit on the inside of your teeth. Your orthodontist explains which option suits your teeth and bite, and you get a written treatment estimate before you start.",
        ],
      },
    ],
    disclaimer: DISCLAIMER,
    relatedServices: ["braces", "invisible-braces", "invisalign", "gum-inflammation"],
  },
  {
    slug: "why-retainers-matter",
    sourceSlug: "zakaj-je-retencija-nujna",
    title: "Why teeth shift back after braces and how to prevent it",
    summary:
      "Why retainers after braces are a must, what kinds of retainers there are and how long you wear them.",
    category: "Orthodontics",
    readMinutes: 3,
    lead:
      "After your braces come off, the tissues around your teeth keep adjusting for a while, and the teeth tend to drift back to where they were. A retainer, either a fixed wire on the inside of your teeth or a clear tray you wear at night, keeps the result. Wearing a retainer is long term, often for several years and sometimes for good at night.",
    sections: [
      {
        heading: "Why teeth move back",
        paragraphs: [
          "Teeth are held in the bone by fibers that do not adjust right away after the teeth move. On top of that, teeth shift a little throughout life, even without braces. Without a retainer, part of the result can be lost within a few months.",
        ],
      },
      {
        heading: "Types of retainers",
        paragraphs: [
          "Your orthodontist decides which retainer suits you and for how long, based on your treatment. Often both kinds are used.",
        ],
        bullets: [
          "Fixed retainer: a thin wire bonded to the inside of your front teeth. It does not show and you do not have to remember to wear it, but you need to clean carefully around it.",
          "Removable retainer: a clear custom tray that you usually wear at night. It only works if you actually wear it.",
        ],
      },
      {
        heading: "What you can do",
        paragraphs: [],
        bullets: [
          "Wear your retainer as directed, even when your teeth seem stable.",
          "Clean your retainer and keep it in its case so it does not get damaged.",
          "If a fixed retainer comes loose or a removable one no longer fits, come in as soon as you can.",
          "Come to your regular checkups, where we check your retainer.",
        ],
      },
    ],
    disclaimer: DISCLAIMER,
    relatedServices: ["retainers", "braces", "invisible-braces", "invisalign"],
  },
  {
    slug: "should-wisdom-teeth-come-out",
    sourceSlug: "ali-izpuliti-modrostni-zob",
    title: "Does a wisdom tooth need to come out?",
    summary:
      "When a wisdom tooth can stay, when it causes problems and how an x-ray helps us decide whether to remove it.",
    category: "Oral surgery",
    readMinutes: 4,
    lead:
      "Not always. A wisdom tooth that has come in straight, is healthy and is easy to clean can often stay. We suggest removing it when it causes repeated infections, cavities or pain, or puts the tooth next to it at risk. We make the decision after an exam and a panoramic x-ray or a 3D CBCT scan.",
    sections: [
      {
        heading: "Why wisdom teeth cause problems",
        paragraphs: [
          "Wisdom teeth come in last, usually between ages 17 and 25, when the jaw often runs out of room. So they stay partly or fully trapped in the bone, or grow in at an angle toward the tooth next to them.",
        ],
      },
      {
        heading: "Signs it is time for an exam",
        paragraphs: [],
        bullets: [
          "Pain or pressure at the back of the jaw",
          "Swollen, sore gums over a tooth that is coming in",
          "A bad taste or smell from the back of your mouth",
          "Trouble opening your mouth",
          "Food that keeps getting stuck behind your back tooth",
        ],
      },
      {
        heading: "How we decide",
        paragraphs: [
          "A panoramic x-ray shows the position of all your wisdom teeth at once. When a tooth sits close to a nerve or its position is more complicated, we also take a 3D CBCT scan, which shows the roots and how close they are to the nerve. Based on that, we decide between a simple extraction and surgical removal, and we explain what to expect.",
          "We do the procedure under local anesthesia. Swelling and tenderness are normal for a few days afterward, and you get detailed instructions for caring for the wound after the procedure.",
        ],
      },
    ],
    disclaimer: DISCLAIMER,
    relatedServices: ["wisdom-teeth-removal", "3d-cbct-scan", "oral-surgery", "toothache"],
  },
  {
    slug: "which-dental-x-ray",
    sourceSlug: "kateri-rentgenski-posnetek",
    title: "Small x-ray, panoramic x-ray or 3D scan: which one and why",
    summary:
      "What each type of dental x-ray shows, when you need a 3D scan and what to know about radiation.",
    category: "Imaging",
    readMinutes: 4,
    lead:
      "A small x-ray shows one or a few teeth in detail, a panoramic x-ray shows both jaws at once, and a 3D CBCT scan shows the bone and roots in three dimensions. We only take an x-ray when we need it to make a diagnosis or plan treatment. If you are pregnant, tell us before any x-ray.",
    sections: [
      {
        heading: "Small x-ray (bitewing or periapical)",
        paragraphs: [
          "A small image of one or a few teeth. It shows cavities between teeth, what is happening under a filling, inflammation at the root and how a root canal is going. During a root canal, we use it to check that the canals are well filled.",
        ],
      },
      {
        heading: "Panoramic x-ray",
        paragraphs: [
          "A panoramic image of both jaws at once. It shows all your teeth, including trapped teeth and wisdom teeth, the bone and any larger changes. We often take one at your first visit. If you have a panoramic x-ray from the last 2 years, bring it with you, and we can use it at your first visit.",
        ],
      },
      {
        heading: "3D CBCT scan",
        paragraphs: [
          "Unlike a flat x-ray, a CBCT scan shows the width and height of the bone, where the nerves and sinuses are and exactly how the roots run. We use it mainly to plan implants and bone grafting, to remove trapped wisdom teeth and for more complex root canals.",
          "The radiation dose is higher than for a panoramic x-ray, so we do not use it for routine checkups.",
        ],
      },
      {
        heading: "What about radiation?",
        paragraphs: [
          "Every x-ray means a small dose of radiation, so we only take one when it is needed. We choose the type of x-ray based on the question it needs to answer. Once it is taken, your dentist shows it to you and explains it.",
        ],
      },
    ],
    disclaimer: DISCLAIMER,
    relatedServices: ["dental-x-rays", "panoramic-x-ray", "3d-cbct-scan", "dental-implants"],
  },
];
