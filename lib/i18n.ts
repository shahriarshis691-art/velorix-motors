export type Locale = "en" | "bn";

export const dictionary = {
  en: {
    nav: {
      models: "MODELS",
      inventory: "INVENTORY",
      import: "IMPORT",
      faq: "FAQ",
      contact: "CONTACT",
      book: "Book Appointment",
    },
    home: {
      explore: "Explore Collection",
      testDrive: "Book Test Drive",
      garage: "THE GARAGE",
      collections: "COLLECTIONS",
      collectionsLead:
        "Japan-auction Toyotas, Hondas, BMWs, Nissans and Hyundais prepared for Dhaka delivery.",
      servicesEyebrow: "AFTERCARE",
      servicesTitle: "SERVICES",
      aboutEyebrow: "THE HOUSE",
      aboutTitle: "ABOUT VELORIX",
      aboutBody:
        "VELORIX MOTORS is a Dhaka import house for Japan-auction Toyotas, Hondas, BMWs, Nissans and Hyundais — Axio, Premio, Creta and the family cars Bangladesh actually drives. Every car is graded, shipped through Chattogram, and prepared for private delivery.",
      showcaseEyebrow: "SHOWCASE",
      showcaseTitle: "THE HOUSE",
      serviceItems: [
        {
          title: "JAPAN AUCTION SOURCING",
          copy: "Axio, Premio, Creta and more — selected by grade, kilometres and duty before they leave Japan.",
        },
        {
          title: "CHATTOGRAM TO DHAKA PDI",
          copy: "Port arrival, inspection and road prep at Gulshan, Banani or Agrabad before handover.",
        },
        {
          title: "CONCIERGE AFTERCARE",
          copy: "Service booking, hybrid battery advice and registration support for the life of the car.",
        },
      ],
    },
    footer: {
      showrooms: "SHOWROOMS",
      visit: "VISIT",
      house: "THE HOUSE",
      closed: "Friday closed",
      models: "Models",
      inventory: "Inventory",
      import: "Import process",
      showroomsLink: "Showrooms",
      grades: "Auction grades",
      faq: "FAQ",
      contact: "Contact",
    },
    contact: {
      eyebrow: "Contact",
      title: "Visit or write",
      lead: "Gulshan, Banani and Agrabad. WhatsApp a concierge, or send a viewing request for Axio, Premio, Creta and the rest of the Japan-import list.",
      showroomLabel: "Showroom",
      successTitle: "WhatsApp is opening",
      successBody:
        "A VELORIX concierge will confirm your message. If the chat did not open, use the WhatsApp number above.",
      name: "Name",
      phone: "Phone",
      email: "Email",
      showroomPref: "Preferred showroom",
      showroomAny: "Any showroom",
      message: "Message",
      send: "Send on WhatsApp",
      sending: "Opening WhatsApp…",
      namePh: "Your name",
      messagePh: "Model, budget, or a preferred viewing time",
    },
    import: {
      eyebrow: "Import",
      title: "Auction to Dhaka",
      lead: "How a Japan-auction car becomes a VELORIX handover in Gulshan, Banani or Agrabad.",
      steps: [
        {
          title: "AUCTION",
          copy: "We bid on graded stock in Japan — Axio, Premio, Creta and the rest — against kilometre, auction sheet and duty before the car is purchased.",
        },
        {
          title: "SHIP",
          copy: "The car is containered to Chattogram. Typical sea time is three to five weeks, plus port and customs clearance.",
        },
        {
          title: "DHAKA PDI",
          copy: "After arrival we inspect, service and road-test at the showroom. You view the car, then we complete registration support.",
        },
      ],
      timelineEyebrow: "Timing",
      timelineTitle: "Usual window",
      timeline: [
        { label: "Auction win to vessel", value: "1–2 weeks" },
        { label: "Sea freight to Chattogram", value: "3–5 weeks" },
        { label: "Clearance and PDI", value: "1–2 weeks" },
      ],
    },
    showrooms: {
      eyebrow: "Showrooms",
      title: "Three pavilions",
      lead: "View Japan-import stock in Dhaka or Chattogram. Friday closed. Appointments preferred.",
      hoursLabel: "Hours",
      map: "Open map →",
      closed: "Friday closed",
    },
    grades: {
      eyebrow: "Auction grades",
      title: "How Japan scores a car",
      lead: "VELORIX typically buys 4 and 4.5. Grade is the auction house score, not a VELORIX invention — we show the sheet with every car.",
      items: [
        {
          grade: "3.5",
          label: "Light use",
          copy: "Honest daily car. Small marks or a light repair on the sheet. Fair price, still inspected in Dhaka.",
        },
        {
          grade: "4",
          label: "Clean buy",
          copy: "The usual VELORIX purchase. Tidy exterior, sound interior, kilometres that match the story.",
        },
        {
          grade: "4.5",
          label: "Very clean",
          copy: "Above-average sheet. Fewer marks, stronger interior grade. Often Premio, Harrier, Creta in this band.",
        },
        {
          grade: "5",
          label: "Exceptional",
          copy: "Rare at accessible prices. Near-new condition. We buy when the number and duty still make sense.",
        },
      ],
      interiorTitle: "Interior grade",
      interior: [
        { grade: "A", copy: "Clean cabin, light wear only." },
        { grade: "B", copy: "Normal use — seats and plastics honest." },
        { grade: "C", copy: "Heavier wear. We rarely bid unless the price is sharp." },
      ],
    },
    inventory: {
      eyebrow: "Inventory",
      title: "All vehicles",
      lead: "Search Toyota, Honda, BMW, Nissan and Hyundai by model, brand or price.",
      empty: "No vehicles match that search.",
      count: "{n} of {total} vehicles",
      all: "All",
      available: "Available",
      transit: "In Transit",
      preorder: "Pre-Order",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Before you buy",
      lead: "Duty, registration, hybrid batteries and delivery — the questions Dhaka families actually ask.",
      items: [
        {
          q: "How long from Japan to handover?",
          a: "Most allocations take six to nine weeks: auction, shipping to Chattogram, clearance, then PDI in Dhaka or Agrabad. In-stock cars can be viewed this week.",
        },
        {
          q: "Who pays import duty and VAT?",
          a: "Duty is in the landed price we quote. We handle customs paperwork. Registration (BRTA) is separate and we support the file; government fees are paid by you.",
        },
        {
          q: "What does the auction grade mean?",
          a: "It is the Japan auction house score (3.5 to 5) plus an interior letter. See Auction grades. We share the sheet before you commit.",
        },
        {
          q: "Are hybrid batteries a risk?",
          a: "Aqua, Axio, Prius and Noah hybrids are common here. We check health on PDI. Remaining factory cover varies by car — ask on the viewing.",
        },
        {
          q: "Is there a warranty?",
          a: "Each car is sold as inspected Japan stock with a Dhaka PDI report. Limited mechanical cover is offered on selected hybrids — confirmed on the invoice, not assumed.",
        },
        {
          q: "Can I test drive before paying a deposit?",
          a: "Yes on Available stock at Gulshan, Banani or Agrabad. In Transit and Pre-Order cars are reserved against a booking deposit after you approve the sheet.",
        },
      ],
    },
  },
  bn: {
    nav: {
      models: "মডেল",
      inventory: "স্টক",
      import: "আমদানি",
      faq: "প্রশ্ন",
      contact: "যোগাযোগ",
      book: "অ্যাপয়েন্টমেন্ট",
    },
    home: {
      explore: "কালেকশন দেখুন",
      testDrive: "টেস্ট ড্রাইভ",
      garage: "গ্যারেজ",
      collections: "কালেকশন",
      collectionsLead:
        "জাপান নিলামের টয়োটা, হোন্ডা, বিএমডব্লিউ, নিসান ও হুন্দাই — ঢাকায় ডেলিভারির জন্য প্রস্তুত।",
      servicesEyebrow: "আফটারকেয়ার",
      servicesTitle: "সার্ভিস",
      aboutEyebrow: "হাউস",
      aboutTitle: "ভেলোরিক্স সম্পর্কে",
      aboutBody:
        "ভেলোরিক্স মোটরস ঢাকার একটি ইমপোর্ট হাউস — জাপান নিলামের টয়োটা, হোন্ডা, বিএমডব্লিউ, নিসান ও হুন্দাই। এক্সিও, প্রেমিও, ক্রেটাসহ যে গাড়ি বাংলাদেশে চলে। প্রতিটি গাড়ি গ্রেড করা হয়, চট্টগ্রাম দিয়ে আসে, তারপর ব্যক্তিগত ডেলিভারির জন্য প্রস্তুত হয়।",
      showcaseEyebrow: "শোকেস",
      showcaseTitle: "হাউস",
      serviceItems: [
        {
          title: "জাপান নিলাম",
          copy: "এক্সিও, প্রেমিও, ক্রেটাসহ স্টক — গ্রেড, কিমি ও শুল্ক দেখে কেনা হয়, জাপান ছাড়ার আগে।",
        },
        {
          title: "চট্টগ্রাম থেকে ঢাকা পিডিআই",
          copy: "পোর্ট আগমন, ইনস্পেকশন ও রোড প্রিপ — গুলশান, বনানী বা আগ্রাবাদে হস্তান্তরের আগে।",
        },
        {
          title: "কনসিয়ার্জ আফটারকেয়ার",
          copy: "সার্ভিস বুকিং, হাইব্রিড ব্যাটারি পরামর্শ এবং রেজিস্ট্রেশন সহায়তা।",
        },
      ],
    },
    footer: {
      showrooms: "শোরুম",
      visit: "লিংক",
      house: "হাউস",
      closed: "শুক্রবার বন্ধ",
      models: "মডেল",
      inventory: "স্টক",
      import: "আমদানি প্রক্রিয়া",
      showroomsLink: "শোরুম",
      grades: "নিলাম গ্রেড",
      faq: "প্রশ্ন",
      contact: "যোগাযোগ",
    },
    contact: {
      eyebrow: "যোগাযোগ",
      title: "আসুন বা লিখুন",
      lead: "গুলশান, বনানী ও আগ্রাবাদ। হোয়াটসঅ্যাপে কনসিয়ার্জকে লিখুন, অথবা এক্সিও, প্রেমিও, ক্রেটার ভিউয়িং রিকোয়েস্ট পাঠান।",
      showroomLabel: "শোরুম",
      successTitle: "হোয়াটসঅ্যাপ খুলছে",
      successBody:
        "একজন ভেলোরিক্স কনসিয়ার্জ মেসেজ নিশ্চিত করবেন। চ্যাট না খুললে উপরের নম্বর ব্যবহার করুন।",
      name: "নাম",
      phone: "ফোন",
      email: "ইমেইল",
      showroomPref: "পছন্দের শোরুম",
      showroomAny: "যেকোনো শোরুম",
      message: "বার্তা",
      send: "হোয়াটসঅ্যাপে পাঠান",
      sending: "হোয়াটসঅ্যাপ খুলছে…",
      namePh: "আপনার নাম",
      messagePh: "মডেল, বাজেট, বা দেখার সময়",
    },
    import: {
      eyebrow: "আমদানি",
      title: "নিলাম থেকে ঢাকা",
      lead: "জাপান নিলামের একটি গাড়ি কীভাবে গুলশান, বনানী বা আগ্রাবাদে হস্তান্তর হয়।",
      steps: [
        {
          title: "নিলাম",
          copy: "জাপানে গ্রেডেড স্টকে বিড — এক্সিও, প্রেমিও, ক্রেটা। কিমি, নিলাম শিট ও শুল্ক দেখে কেনা হয়।",
        },
        {
          title: "জাহাজ",
          copy: "গাড়ি কন্টেইনারে চট্টগ্রাম আসে। সাধারণত তিন থেকে পাঁচ সপ্তাহ সমুদ্রপথ, তারপর পোর্ট ও কাস্টমস।",
        },
        {
          title: "ঢাকা পিডিআই",
          copy: "আগমনের পর শোরুমে ইনস্পেকশন, সার্ভিস ও রোড টেস্ট। আপনি গাড়ি দেখেন, তারপর রেজিস্ট্রেশন সহায়তা।",
        },
      ],
      timelineEyebrow: "সময়",
      timelineTitle: "সাধারণ সময়সীমা",
      timeline: [
        { label: "নিলাম জয় থেকে জাহাজ", value: "১–২ সপ্তাহ" },
        { label: "সমুদ্রপথে চট্টগ্রাম", value: "৩–৫ সপ্তাহ" },
        { label: "ক্লিয়ারেন্স ও পিডিআই", value: "১–২ সপ্তাহ" },
      ],
    },
    showrooms: {
      eyebrow: "শোরুম",
      title: "তিনটি প্যাভিলিয়ন",
      lead: "ঢাকা বা চট্টগ্রামে জাপান-ইমপোর্ট স্টক দেখুন। শুক্রবার বন্ধ। অ্যাপয়েন্টমেন্ট ভালো।",
      hoursLabel: "সময়",
      map: "ম্যাপ খুলুন →",
      closed: "শুক্রবার বন্ধ",
    },
    grades: {
      eyebrow: "নিলাম গ্রেড",
      title: "জাপান কীভাবে স্কোর করে",
      lead: "ভেলোরিক্স সাধারণত ৪ ও ৪.৫ কেনে। গ্রেড নিলাম হাউসের স্কোর — আমাদের তৈরি নয়। প্রতিটি গাড়ির সাথে শিট দেখানো হয়।",
      items: [
        {
          grade: "৩.৫",
          label: "হালকা ব্যবহার",
          copy: "সৎ দৈনন্দিন গাড়ি। শিটে ছোট দাগ বা হালকা মেরামত। দাম ভালো, ঢাকায় ইনস্পেকশন হয়।",
        },
        {
          grade: "৪",
          label: "পরিষ্কার কেনা",
          copy: "ভেলোরিক্সের সাধারণ কেনাকাটা। পরিপাটি এক্সটিরিয়র, ভালো ইন্টেরিয়র, কিমি মিলে যায়।",
        },
        {
          grade: "৪.৫",
          label: "খুব পরিষ্কার",
          copy: "গড়ের ওপরের শিট। কম দাগ, শক্তিশালী ইন্টেরিয়র গ্রেড। প্রেমিও, হ্যারিয়ার, ক্রেটা প্রায় এই ব্যান্ডে।",
        },
        {
          grade: "৫",
          label: "অসাধারণ",
          copy: "সহজলভ্য দামে বিরল। প্রায় নতুন অবস্থা। সংখ্যা ও শুল্ক মানালেই কেনা হয়।",
        },
      ],
      interiorTitle: "ইন্টেরিয়র গ্রেড",
      interior: [
        { grade: "A", copy: "পরিষ্কার কেবিন, হালকা ক্ষয়।" },
        { grade: "B", copy: "স্বাভাবিক ব্যবহার — সিট ও প্লাস্টিক সৎ।" },
        { grade: "C", copy: "বেশি ক্ষয়। দাম তীব্র না হলে বিড করি না।" },
      ],
    },
    inventory: {
      eyebrow: "স্টক",
      title: "সব গাড়ি",
      lead: "টয়োটা, হোন্ডা, বিএমডব্লিউ, নিসান ও হুন্দাই — মডেল, ব্র্যান্ড বা দাম দিয়ে খুঁজুন।",
      empty: "এই খোঁজে কোনো গাড়ি নেই।",
      count: "{n}টি / {total}টি গাড়ি",
      all: "সব",
      available: "অ্যাভেইলেবল",
      transit: "ইন ট্রানজিট",
      preorder: "প্রি-অর্ডার",
    },
    faq: {
      eyebrow: "প্রশ্ন",
      title: "কেনার আগে",
      lead: "শুল্ক, রেজিস্ট্রেশন, হাইব্রিড ব্যাটারি ও ডেলিভারি — ঢাকার পরিবার যে প্রশ্নগুলো করে।",
      items: [
        {
          q: "জাপান থেকে হস্তান্তর কতদিন?",
          a: "বেশিরভাগ অ্যালোকেশন ছয় থেকে নয় সপ্তাহ: নিলাম, চট্টগ্রাম শিপিং, ক্লিয়ারেন্স, তারপর ঢাকা বা আগ্রাবাদে পিডিআই। স্টকে থাকা গাড়ি এ সপ্তাহেই দেখা যায়।",
        },
        {
          q: "ইমপোর্ট ডিউটি ও ভ্যাট কে দেয়?",
          a: "যে ল্যান্ডেড দাম আমরা বলি, তাতে শুল্ক ধরা থাকে। কাস্টমস কাগজ আমরা করি। বিআরটিএ রেজিস্ট্রেশন আলাদা — ফাইল আমরা সাহায্য করি, সরকারি ফি আপনি দেন।",
        },
        {
          q: "নিলাম গ্রেড কী?",
          a: "জাপান নিলাম হাউসের স্কোর (৩.৫ থেকে ৫) এবং ইন্টেরিয়র লেটার। নিলাম গ্রেড পাতা দেখুন। কমিট করার আগে শিট দেখাই।",
        },
        {
          q: "হাইব্রিড ব্যাটারি কি ঝুঁকি?",
          a: "অ্যাকুয়া, এক্সিও, প্রিয়াস ও নোয়া হাইব্রিড এখানে সাধারণ। পিডিআইতে হেলথ চেক হয়। ফ্যাক্টরি কভার গাড়িভেদে আলাদা — ভিউয়িংয়ে জিজ্ঞাসা করুন।",
        },
        {
          q: "ওয়ারেন্টি আছে?",
          a: "প্রতিটি গাড়ি ইনস্পেক্টেড জাপান স্টক, ঢাকা পিডিআই রিপোর্টসহ। নির্বাচিত হাইব্রিডে সীমিত মেকানিক্যাল কভার — ইনভয়েসে লেখা থাকলে, অনুমান নয়।",
        },
        {
          q: "ডিপোজিটের আগে টেস্ট ড্রাইভ?",
          a: "গুলশান, বনানী বা আগ্রাবাদের অ্যাভেইলেবল স্টকে হ্যাঁ। ইন ট্রানজিট ও প্রি-অর্ডার গাড়ি শিট অনুমোদনের পর বুকিং ডিপোজিটে রিজার্ভ হয়।",
        },
      ],
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Locale];
