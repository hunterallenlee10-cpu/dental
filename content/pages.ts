// Content pages adapted from content/source/source-content-sl.md:
// /o-nas/, /cenik-zobozdravstvenih-storitev/, /placilo-in-obroki/, /kontakt/, /naroci-svetovanje/,
// /mnenja/, /splosni-pogoji/, /piskotki/, /lokacije/ and the four /lokacije/{town}/ pages.
// Every statistic, review, street, landmark and legal reference from the source is dropped or turned into a placeholder.

import type { FAQ, LocationSlug, ServiceSlug, Step } from "./types";

export type TitledText = { title: string; body: string };
export type LegalSection = { heading: string; paragraphs: string[] };
export type LegalPage = { draftNotice: string; title: string; intro: string; sections: LegalSection[] };

// About (/o-nas/)

export const about: {
  lead: string;
  story: { heading: string; paragraphs: string[] };
  valuesHeading: string;
  values: TitledText[];
  equipmentHeading: string;
  equipment: TitledText[];
  equipmentCaption: string;
  firstVisitHeading: string;
  firstVisitSteps: Step[];
  officesHeading: string;
  officesIntro: string;
  teamHeading: string;
  teamNote: string;
} = {
  lead: "Dentists and dental hygienists in Baltimore, Frederick, Leonardtown and Annapolis. Meet our team and see how we work.",
  story: {
    heading: "Our story",
    paragraphs: [
      "Aurelle Dental is a private dental practice with offices in Baltimore, Frederick, Leonardtown and Annapolis, Maryland. Implant dentists, prosthodontists, orthodontists, a periodontist, general dentists and dental hygienists work under one roof, so you can get everything here, from a routine checkup to dental implants and braces.",
      "We want you to understand your options and make an informed choice about your care. We explain the plan we suggest, answer your questions and prepare a written estimate. Your plan is built around the condition of your teeth and what you want.",
    ],
  },
  valuesHeading: "What matters to us",
  values: [
    {
      title: "Comfort first",
      body: "If you are nervous, tell us when you book. We take time for your questions and explain each step before we do it.",
    },
    {
      title: "Written estimate before treatment",
      body: "Before treatment starts, you get a written estimate, so you can look over the plan and the expected costs without pressure.",
    },
    {
      title: "A team of specialists",
      body: "Meet the dentists and dental hygienists and the areas of care each of them focuses on.",
    },
    {
      title: "Same prices at all four offices",
      body: "Baltimore, Frederick, Leonardtown and Annapolis share the same prices, one phone number and the same hours.",
    },
    {
      title: "Open until 8 PM",
      body: "Every office is open each weekday from 7 AM to 8 PM, so you can fit a visit around work and school.",
    },
    {
      title: "From checkup to treatment",
      body: "We offer exams, x-rays, fillings and other treatment, implants, crowns and orthodontic care. When you book, ask which services your office offers.",
    },
  ],
  equipmentHeading: "Equipment for precise work",
  equipment: [
    {
      title: "3D CBCT imaging",
      body: "We plan every implant on a 3D CBCT scan of the jaw.",
    },
    {
      title: "Rubber dam and apex locator for root canals",
      body: "During a root canal, we protect the tooth with a rubber dam and measure the length of each canal with an electronic apex locator.",
    },
    {
      title: "Ultrasonic scaling and air polishing",
      body: "We remove tartar and buildup with ultrasonic scaling and air polishing, then show you how to care for your teeth at home.",
    },
  ],
  equipmentCaption: "Illustrative equipment photos",
  firstVisitHeading: "What a first visit looks like",
  firstVisitSteps: [
    {
      title: "Book a visit",
      body: "Call us during office hours and we pick an office and a time together. If you are nervous, tell us then.",
    },
    {
      title: "Exam and conversation",
      body: "Your dentist examines your teeth, explains your options and answers your questions.",
    },
    {
      title: "Written estimate",
      body: "Before any treatment starts, you get a written estimate for the plan you choose.",
    },
  ],
  officesHeading: "Four offices",
  officesIntro: "Baltimore, Frederick, Leonardtown and Annapolis: one phone number, the same hours and the same prices.",
  teamHeading: "The people behind your smile",
  teamNote: "When you book, we tell you who works at your office.",
};

// Insurance and pricing (/cenik-zobozdravstvenih-storitev/)

export const pricing: {
  intro: string;
  firstVisitHeading: string;
  firstVisitList: { label: string; text: string }[];
  estimateHeading: string;
  estimateSteps: Step[];
  insuranceHeading: string;
  insuranceBody: string;
  insurancePlaceholder: string;
  paymentHeading: string;
  paymentBody: string;
  faq: FAQ[];
  ctaHeading: string;
} = {
  intro:
    "What you pay depends on the condition of your teeth and the treatment you choose. After your exam, you get a written estimate to review before you decide. Prices are the same at all four offices.",
  firstVisitHeading: "What to expect at your first visit",
  firstVisitList: [
    { label: "If needed", text: "X-rays, if you do not have any from the last two years" },
    { label: "At your visit", text: "An exam and a conversation with your dentist" },
    { label: "Before treatment", text: "A written estimate for the treatment you choose" },
    { label: "If you want", text: "Monthly payments through our financing partner" }, // DRAFT: lender
  ],
  estimateHeading: "How we prepare your estimate",
  estimateSteps: [
    {
      title: "Exam and x-rays",
      body: "Your dentist examines your teeth and, if needed, we take x-rays. We walk you through the possible solutions, with their benefits and their limits.",
    },
    {
      title: "Written estimate",
      body: "For the treatment you choose, we prepare a written estimate so you know the expected costs.",
    },
    {
      title: "Your decision",
      body: "We start treatment only once you agree with the plan and the price.",
    },
  ],
  insuranceHeading: "Insurance",
  insuranceBody: "We work with most PPO dental plans. Bring your card and we check your benefits before treatment.", // DRAFT: carrier list
  insurancePlaceholder: "Your accepted plans go here", // DRAFT
  paymentHeading: "Payment and monthly payments",
  paymentBody:
    "You can pay by card, with an HSA or FSA card, or in monthly payments through our financing partner.", // DRAFT: lender
  faq: [
    {
      q: "How much will my treatment cost?",
      a: "It depends on the condition of your teeth and the treatment you choose, so you get the price after your exam as a written estimate. We do not start without it. Prices are the same at all four offices.",
    },
    {
      q: "What should I bring to my first visit?",
      a: "Bring dental x-rays from the last two years if you have them. If not, we take them here, and they are billed with your visit.",
    },
    {
      q: "Do you take insurance?",
      a: "We work with most PPO dental plans. Bring your insurance card and we check your benefits before treatment.", // DRAFT: carrier list
    },
    {
      q: "Can I pay in monthly payments?",
      a: "Yes. You can pay by card, with an HSA or FSA card, or in monthly payments through our financing partner.", // DRAFT: lender
    },
    {
      q: "Are prices the same at every office?",
      a: "Yes. Baltimore, Frederick, Leonardtown and Annapolis all have the same prices.",
    },
  ],
  ctaHeading: "Get your estimate after an exam",
};

// Payment and financing (/placilo-in-obroki/)

export const payment: {
  intro: string;
  estimateHeading: string;
  howEstimateWorks: string[];
  methodsHeading: string;
  methods: TitledText[];
  stepsHeading: string;
  steps: Step[];
  faq: FAQ[];
} = {
  intro: "First a written estimate, then a way to pay that works for you: all at once or in monthly payments.",
  estimateHeading: "Your estimate comes first",
  howEstimateWorks: [
    "After your exam, we walk you through your treatment options and prepare a written estimate for the one you choose. Before you decide, you can review the expected costs and ask about ways to pay.",
    "Prices are the same at all four offices.",
  ],
  methodsHeading: "Ways to pay",
  methods: [
    {
      title: "Cards",
      body: "You can pay for treatment with a credit or debit card. If you are not sure we take your card, ask us before your visit.",
    },
    {
      title: "HSA and FSA",
      body: "You can use your HSA or FSA card to pay for eligible dental treatment.", // DRAFT: practice confirms HSA and FSA acceptance
    },
    {
      title: "Monthly payments",
      body: "Through our financing partner, you can split the amount into monthly payments.", // DRAFT: lender
    },
  ],
  stepsHeading: "How monthly payments work",
  steps: [
    {
      title: "Exam and estimate",
      body: "Your dentist examines your teeth and explains your options. You get a written estimate for the treatment you choose.",
    },
    {
      title: "Choose how to pay",
      body: "Pay all at once by card, or in monthly payments through our financing partner. We set up the number of payments and the terms when you pay.", // DRAFT: lender
    },
    {
      title: "We start treatment",
      body: "We start treatment only once you agree with the plan and the price.",
    },
  ],
  faq: [
    {
      q: "How much will my treatment cost?",
      a: "It depends on the condition of your teeth and the treatment you choose, so you get the price after your exam as a written estimate. We do not start without it. Prices are the same at all four offices.",
    },
    {
      q: "Can I pay in monthly payments?",
      a: "Yes. You can pay by card, with an HSA or FSA card, or in monthly payments through our financing partner.", // DRAFT: lender
    },
    {
      q: "Are prices the same at every office?",
      a: "Yes. Baltimore, Frederick, Leonardtown and Annapolis all have the same prices.",
    },
  ],
};

// Contact (/kontakt/)

export const contact: { h1: string; intro: string; questionNote: string } = {
  h1: "Call us. We are glad to help.",
  intro: "One number for all four offices. You can call any weekday from 7 AM to 8 PM.",
  questionNote: "Have a question or want to set up a time? Call us, or send a visit request below.",
};

// Book (/naroci-svetovanje/)

export const book: { h1: string; intro: string; steps: Step[]; formNote: string } = {
  h1: "Book a visit",
  intro: "To set up a time, call us at the number below or send a visit request. One number for all four offices, Mon to Fri, 7 AM to 8 PM.",
  steps: [
    {
      title: "Book a time",
      body: "Call us during office hours and we will pick an office and a time together.",
    },
    {
      title: "Your exam",
      body: "Your dentist examines your teeth, explains your options and answers your questions.",
    },
    {
      title: "Written estimate",
      body: "Before treatment starts, you get a written estimate for the plan you choose.",
    },
  ],
  formNote: "Nothing is sent until you tap Text or Email.",
};

// Reviews (/mnenja/)

export const reviewsPage: { intro: string } = {
  intro: "Patient reviews from Google will appear here, along with a link to each office's Google profile.",
};

// Privacy and terms (/splosni-pogoji/)

export const privacy: LegalPage = {
  draftNotice: "Draft. To be replaced with the practice's own policy.",
  title: "Privacy and terms",
  intro:
    "When you send us a visit request, you agree that Aurelle Dental may contact you about your request and use the details you share for that purpose. You can withdraw that consent at any time by emailing hello@aurelledental.com or calling (410) 555-0142.",
  sections: [
    {
      heading: "About these terms",
      paragraphs: [
        "Aurelle Dental provides dental services. These terms explain our rights and responsibilities and yours when you use this website or ask about our services.",
        "We may update these terms from time to time. Changes apply from the date we post them on this site.",
      ],
    },
    {
      heading: "Visit requests",
      paragraphs: [
        "A visit request is not a booking or a contract. It asks us to get back to you. We reply as soon as we can by phone, text or email, as you prefer.",
      ],
    },
    {
      heading: "Website content",
      paragraphs: [
        "We work to keep the information on this site accurate and up to date, but it is general information and not medical advice for your situation. We may change or remove services described here without notice.",
      ],
    },
    {
      heading: "Billing",
      paragraphs: [
        "Treatment is billed according to your written estimate and our current fees.",
      ],
    },
    {
      heading: "What information we collect",
      paragraphs: [
        "We may collect your name, contact details such as phone number and email, the details of your request, and basic technical data about how you use this site, such as your browser type and pages visited.",
      ],
    },
    {
      heading: "How we use and protect it",
      paragraphs: [
        "We use your information to respond to you, schedule visits and run the practice. We keep it secure and only as long as we need it. We do not sell your personal information.",
        "Some tasks are handled by service providers, such as IT support, payment processing and accounting. They may only use your information on our instructions.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. To do that, contact us at hello@aurelledental.com or (410) 555-0142.",
      ],
    },
  ],
};

// Cookies (/piskotki/)

export const cookies: LegalPage = {
  draftNotice: "Draft. To be replaced with the practice's own policy.",
  title: "Cookies",
  intro: "This website uses cookies to help it work well and to help us improve it.",
  sections: [
    {
      heading: "What is a cookie?",
      paragraphs: [
        "A cookie is a small text file that a website stores in your browser. It helps the site remember information about your visit.",
      ],
    },
    {
      heading: "Cookies we use",
      paragraphs: [
        "Essential cookies keep the site working, for example to remember your cookie choices.",
        "Analytics cookies help us understand how visitors use the site, so we can improve it.",
        "Preference cookies remember settings you choose.",
        "Marketing cookies, if used, help us measure our advertising.",
      ],
    },
    {
      heading: "Managing cookies",
      paragraphs: [
        "You can choose which cookies to allow, except essential ones, in the cookie banner on this site. You can also block or delete cookies in your browser settings.",
        "If you have questions about cookies, contact us at hello@aurelledental.com or (410) 555-0142.",
      ],
    },
  ],
};

// Locations hub (/lokacije/) and offices (/lokacije/{town}/)

export const locationsHub: { h1: string; intro: string } = {
  h1: "Find an office",
  intro: "Four offices, one phone number: (410) 555-0142.",
};

// DRAFT: confirm per office. The source lists the same service groups at every office.
const officeServices: ServiceSlug[] = [
  "teeth-cleaning",
  "cavity-treatment",
  "root-canal-treatment",
  "kids-dentistry",
  "porcelain-veneers",
  "teeth-whitening",
  "dental-implants",
  "dental-crowns",
  "braces",
  "invisalign",
  "oral-surgery",
  "periodontics",
  "3d-cbct-scan",
];

const howToFindPlaceholder: string[] = [
  "Street address coming soon.",
  "Parking and transit details coming soon.",
  "Directions will open in your map app once the address is confirmed.",
];

export const locations: Record<
  LocationSlug,
  { intro: string; services: ServiceSlug[]; howToFind: string[]; nearby: string; faq: FAQ[] }
> = {
  baltimore: {
    intro:
      "Our Baltimore, Maryland office is our flagship, in Harbor East. It is open every weekday from 7 AM to 8 PM.", // DRAFT: landmark
    services: officeServices, // DRAFT: confirm per office
    howToFind: howToFindPlaceholder,
    nearby: "Patients also come from Towson, Canton and Fells Point.", // DRAFT
    faq: [
      {
        q: "What are the Baltimore office's hours?",
        a: "Monday to Friday, 7 AM to 8 PM. Closed Saturdays, Sundays and holidays.",
      },
      {
        q: "Who will I see at the Baltimore office?",
        a: "We have a dentist for each area of care. When you book, we tell you who works at your office.",
      },
      {
        q: "Are prices in Baltimore the same as at the other offices?",
        a: "Yes. Prices are the same at all four offices, and you get a written estimate before any treatment.",
      },
    ],
  },
  frederick: {
    intro:
      "Our Frederick, Maryland office is in Downtown Frederick. It is open every weekday from 7 AM to 8 PM, so you can come before or after work or school.", // DRAFT: landmark
    services: officeServices, // DRAFT: confirm per office
    howToFind: howToFindPlaceholder,
    nearby: "Patients also come from Middletown, Urbana and Walkersville.", // DRAFT
    faq: [
      {
        q: "How do I book at the Frederick office?",
        a: "Call (410) 555-0142, the one number for all four offices, and we pick a time with you. You can also send a visit request.",
      },
      {
        q: "What are the Frederick office's hours?",
        a: "Monday to Friday, 7 AM to 8 PM. Closed Saturdays, Sundays and holidays.",
      },
      {
        q: "Who will I see at the Frederick office?",
        a: "When you book, we tell you who works at your office.",
      },
    ],
  },
  leonardtown: {
    intro:
      "Our Leonardtown, Maryland office is near the town square and serves patients across St. Mary's County. It is open every weekday from 7 AM to 8 PM.", // DRAFT: landmark
    services: officeServices, // DRAFT: confirm per office
    howToFind: howToFindPlaceholder,
    nearby: "Patients also come from Hollywood, California and Lexington Park.", // DRAFT
    faq: [
      {
        q: "Which services are available at the Leonardtown office?",
        a: "General, cosmetic, implant, orthodontic and specialist care. When you book, ask which services are offered at this office.",
      },
      {
        q: "What are the Leonardtown office's hours?",
        a: "Monday to Friday, 7 AM to 8 PM. Closed Saturdays, Sundays and holidays.",
      },
      {
        q: "Are prices in Leonardtown the same as at the other offices?",
        a: "Yes. Prices are the same at all four offices, and you get a written estimate before any treatment.",
      },
    ],
  },
  annapolis: {
    intro:
      "Our Annapolis, Maryland office is our newest. It keeps the same hours as every Aurelle office: weekdays from 7 AM to 8 PM.",
    services: officeServices, // DRAFT: confirm per office
    howToFind: howToFindPlaceholder,
    nearby: "Patients also come from Arnold, Severna Park and Edgewater.", // DRAFT
    faq: [
      {
        q: "Is the Annapolis office new?",
        a: "Yes. Annapolis is our newest office, with the same phone number, hours and prices as our other offices.",
      },
      {
        q: "What are the Annapolis office's hours?",
        a: "Monday to Friday, 7 AM to 8 PM. Closed Saturdays, Sundays and holidays.",
      },
      {
        q: "Who will I see at the Annapolis office?",
        a: "When you book, we tell you who works at your office.",
      },
    ],
  },
};
