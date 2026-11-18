// Category hubs, adapted from the source hubs /storitve/, /zobozdravstvo/, /estetsko-zobozdravstvo/,
// /storitve/implantologija-in-protetika/, /ortodontija/, /specialisticne-storitve/ and /zobna-protetika/.
// FAQ answers are drawn only from facts on the source service pages of each category.

import type { Category, CategoryKey, FAQ, ServiceSlug, Step } from "./types";

export const servicesHubIntro: string =
  "Find the service you are looking for, from checkups and cleanings to implants, braces and cosmetic work. Each page explains who the treatment is for and how it works. If you are not sure what you need, start with an exam.";

export const categories: Category[] = [
  {
    key: "general-dentistry",
    name: "General dentistry",
    h1: { plain: "General", accent: "dentistry" },
    intro:
      "General dentistry is the base of a healthy smile: regular checkups, timely treatment and prevention that keeps small problems from becoming big ones. At your first visit, your dentist checks your teeth and gums, explains your options and gives you a written estimate before any treatment.",
    services: [
      "cavity-treatment",
      "root-canal-treatment",
      "teeth-cleaning",
      "tartar-removal",
      "tooth-colored-fillings",
      "kids-dentistry",
      "gum-inflammation",
      "toothache",
      "tooth-abscess",
      "teeth-grinding",
    ],
  },
  {
    key: "cosmetic-dentistry",
    name: "Cosmetic dentistry",
    h1: { plain: "Cosmetic", accent: "dentistry" },
    intro:
      "Cosmetic dentistry improves the look of your teeth, their color, shape and spacing, while always protecting their health. At a consultation we talk about what you would like, examine your teeth and suggest options, from the least involved to the more extensive.",
    services: ["porcelain-veneers", "teeth-whitening", "cosmetic-bonding"],
  },
  {
    key: "implants-and-restorative",
    name: "Implants and restorative",
    h1: { plain: "Implants and", accent: "restorative dentistry" },
    intro:
      "When a tooth is missing or badly damaged, there are several ways to replace it: an implant, a crown, a bridge or a denture. Every treatment starts with an exam and x-rays, and for implants a 3D CBCT scan of the jaw. We explain your options and give you a written estimate before we start.",
    services: ["dental-implants", "all-on-4", "dental-crowns", "dental-bridges", "dentures", "inlays-and-onlays"],
  },
  {
    key: "orthodontics",
    name: "Orthodontics",
    h1: { plain: "Orthodontic", accent: "care" },
    intro:
      "Orthodontics deals with the position of your teeth and your bite. Straight teeth look better, and they are also easier to keep clean. Teeth can be moved at any age. After an exam and x-rays, an orthodontist suggests the appliance that suits your teeth and the way you live.",
    services: ["braces", "invisible-braces", "invisalign", "retainers"],
  },
  {
    key: "specialist-care",
    name: "Specialist care",
    h1: { plain: "Specialist", accent: "care" },
    intro:
      "Oral surgery, treatment of gum disease, and dental x-rays and 3D scans. We have a specialist for each procedure, and you get a written estimate before anything starts.",
    services: [
      "oral-surgery",
      "wisdom-teeth-removal",
      "apicoectomy",
      "periodontics",
      "deep-cleaning",
      "gum-flap-surgery",
      "dental-x-rays",
      "panoramic-x-ray",
      "3d-cbct-scan",
    ],
  },
  {
    key: "prosthodontics",
    name: "Prosthodontics",
    h1: { plain: "Prosthodontic", accent: "care" },
    intro:
      "Prosthodontics restores damaged teeth and replaces missing ones, so you can bite and smile without worry again. We work with all-ceramic, zirconia and porcelain-fused-to-metal restorations, and choose the material based on where the tooth is, your bite and your preferences.",
    services: ["dental-implants", "all-on-4", "dental-crowns", "dental-bridges", "dentures", "inlays-and-onlays"],
  },
];

/** The two H2 groups on the source /specialisticne-storitve/ hub. */
export const specialistGroups: { heading: string; services: ServiceSlug[] }[] = [
  {
    heading: "Oral surgery and gum care",
    services: ["oral-surgery", "wisdom-teeth-removal", "apicoectomy", "periodontics", "deep-cleaning", "gum-flap-surgery"],
  },
  {
    heading: "Imaging",
    services: ["dental-x-rays", "panoramic-x-ray", "3d-cbct-scan"],
  },
];

export const categoryExtras: Record<CategoryKey, { howItWorks: Step[]; faq: FAQ[] }> = {
  "general-dentistry": {
    howItWorks: [
      {
        title: "Exam and x-rays",
        body: "Your dentist checks your teeth and gums and takes x-rays if needed, to see how far any problem goes.",
      },
      {
        title: "Your options and a written estimate",
        body: "We explain what we found and how it can be treated, then give you a written estimate before anything starts.",
      },
      {
        title: "Treatment and follow-up",
        body: "We treat the tooth, check your bite and show you how to keep your teeth healthy at home.",
      },
    ],
    faq: [
      {
        q: "Does treatment hurt?",
        a: "We numb the tooth with a local anesthetic first, so you usually feel no pain during treatment. If you are nervous, tell us when you book.",
      },
      {
        q: "How many visits will I need?",
        a: "A small filling is usually done in one visit. Deeper damage takes more visits, and you get a rough plan at your exam.",
      },
      {
        q: "How often should I get my teeth cleaned?",
        a: "Once or twice a year is enough for most people. If you have gum disease or braces, we may suggest coming more often.",
      },
      {
        q: "Do baby teeth need to be treated too?",
        a: "Yes. Baby teeth hold space for the permanent teeth, and a cavity in a baby tooth can hurt and spread. We treat them with the same care as permanent teeth.",
      },
    ],
  },
  "cosmetic-dentistry": {
    howItWorks: [
      {
        title: "Consultation and exam",
        body: "We talk about what you would like to change and check that your teeth and gums are healthy.",
      },
      {
        title: "Your options and a written estimate",
        body: "We suggest options from the least involved to the more extensive, and give you a written estimate for the one you choose.",
      },
      {
        title: "Treatment and follow-up",
        body: "We carry out the treatment, check the result with you and explain how to care for it.",
      },
    ],
    faq: [
      {
        q: "Does whitening damage teeth?",
        a: "Whitening done under a dentist's supervision and as directed is considered safe. Any sensitivity that shows up is usually temporary.",
      },
      {
        q: "How long do whitening results last?",
        a: "It depends on habits like coffee, tea and smoking. You can refresh the result when needed with the same trays.",
      },
      {
        q: "What is the difference between cosmetic bonding and a porcelain veneer?",
        a: "Bonding is shaped from composite right on the tooth, usually without drilling. A veneer is porcelain, made in a lab and longer lasting, but the tooth has to be prepared for it.",
      },
    ],
  },
  "implants-and-restorative": {
    howItWorks: [
      {
        title: "Exam and 3D scan",
        body: "We examine your teeth and take x-rays. For implants, we plan the treatment on a 3D CBCT scan of your jaw.",
      },
      {
        title: "Your options and a written estimate",
        body: "We explain the ways to replace or restore the tooth, such as an implant, crown, bridge or denture, and give you a written estimate.",
      },
      {
        title: "Treatment and follow-up",
        body: "We place the implant or restoration and check your bite at follow-up visits.",
      },
    ],
    faq: [
      {
        q: "Does getting an implant hurt?",
        a: "We place the implant under local anesthetic, so you do not feel pain during the procedure. The area may be tender or swollen for a few days, which pain relievers usually ease.",
      },
      {
        q: "How long does implant treatment take?",
        a: "Placing an implant takes 30 to 60 minutes, and healing usually takes 2 to 6 months. If bone needs to be built up first, treatment takes longer.",
      },
      {
        q: "What if I do not have enough bone?",
        a: "Bone can often be built up. A 3D CBCT scan of your jaw shows whether that is needed.",
      },
      {
        q: "Should I get a bridge or an implant?",
        a: "Both are fixed options. An implant leaves the neighboring teeth untouched, while a bridge does not need surgery. Which is better for you depends on the neighboring teeth and the bone.",
      },
    ],
  },
  orthodontics: {
    howItWorks: [
      {
        title: "Exam and x-rays",
        body: "An orthodontist examines your teeth and bite and reviews your x-rays.",
      },
      {
        title: "Your options and a written estimate",
        body: "You hear which appliance fits your teeth and the way you live, a rough treatment time and a written estimate.",
      },
      {
        title: "Treatment and retainers",
        body: "Your teeth move step by step with regular checkups, and retainers keep them in place afterward.",
      },
    ],
    faq: [
      {
        q: "Are braces right for adults too?",
        a: "Yes. Teeth can be moved at any age as long as the teeth and gums are healthy. Adults often choose tooth-colored, lingual or clear options.",
      },
      {
        q: "How many hours a day do I wear clear aligners?",
        a: "Most of the day and night. Your orthodontist gives you exact instructions, because the result depends on how well you wear them.",
      },
      {
        q: "How long do I need to wear a retainer?",
        a: "Often for several years, and sometimes every night for good. Your orthodontist gives you exact advice.",
      },
      {
        q: "What is the difference between invisible braces and Invisalign?",
        a: "Invisalign is one brand of clear aligners. At your exam, the orthodontist tells you which aligners they recommend for you.",
      },
    ],
  },
  "specialist-care": {
    howItWorks: [
      {
        title: "Exam and imaging",
        body: "A specialist examines the area and takes the x-rays or 3D CBCT scan the procedure needs.",
      },
      {
        title: "Your options and a written estimate",
        body: "We explain the procedure, what recovery looks like and give you a written estimate before anything starts.",
      },
      {
        title: "Treatment and follow-up",
        body: "We carry out the procedure, give you aftercare instructions and check how you are healing.",
      },
    ],
    faq: [
      {
        q: "Will I need time off work after a procedure?",
        a: "It depends on the procedure and your job. After more involved procedures, a day or two of rest is a good idea, and your dentist advises you based on what was done.",
      },
      {
        q: "Does every wisdom tooth need to come out?",
        a: "No. Wisdom teeth that came in properly, are healthy and can be cleaned can often stay. We suggest removal when they cause problems or put the neighboring teeth at risk.",
      },
      {
        q: "Can gum disease be cured?",
        a: "Gum disease can be stopped and kept under control for the long term, but lost bone mostly cannot be restored. That is why finding it early matters.",
      },
      {
        q: "When is a 3D CBCT scan needed instead of a panoramic x-ray?",
        a: "When the third dimension matters for planning, for example bone thickness for implants or how close a nerve is to a wisdom tooth.",
      },
    ],
  },
  prosthodontics: {
    howItWorks: [
      {
        title: "Exam and x-rays",
        body: "We examine the damaged or missing teeth, check your bite and take x-rays or a 3D CBCT scan.",
      },
      {
        title: "Your options and a written estimate",
        body: "We explain the options and materials that suit the tooth's position and your bite, then give you a written estimate.",
      },
      {
        title: "Fitting and follow-up",
        body: "We fit your crown, bridge or denture and make small adjustments at follow-up visits.",
      },
    ],
    faq: [
      {
        q: "Which crown material should I choose?",
        a: "It depends on the tooth. On front teeth the look matters most, on back teeth strength. We explain the options and the differences at your exam.",
      },
      {
        q: "How long does it take to get used to new dentures?",
        a: "Most people get used to new dentures within a few weeks. During that time, small adjustments may be needed, and we make them at follow-up visits.",
      },
      {
        q: "Is an inlay better than a tooth-colored filling?",
        a: "For larger damage, an inlay is usually stronger and lasts longer because it is made in a lab. For smaller damage, a filling is enough.",
      },
    ],
  },
};
