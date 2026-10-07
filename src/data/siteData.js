/**
 * Bellview Nursing Home - Central Data Store
 * Structured to map 1:1 with future Google Cloud Firestore collections:
 * - businessInfo
 * - doctors
 * - services
 * - opdSchedules
 * - announcements
 * - faqs
 * - gallery
 */

export const siteData = {
  businessInfo: {
    name: {
      bn: "বেলভিউ নার্সিং হোম",
      en: "Bellview Nursing Home"
    },
    tagline: {
      bn: "সহজ ও নির্ভরযোগ্য স্বাস্থ্যসেবা",
      en: "Simple & Trustworthy Healthcare"
    },
    locationBadge: {
      bn: "তমলুক, পূর্ব মেদিনীপুর",
      en: "Tamluk, Purba Medinipur"
    },
    // Placeholders strictly adhering to guidelines until verified by Bellview
    address: {
      full: {
        bn: "বিবেকানন্দ নগর, ধারিণ্ডা (রেল স্টেশনের নিকট), তমলুক, পূর্ব মেদিনীপুর, পশ্চিমবঙ্গ - ৭২১৬৩৬ [যাচাইকরণ সাপেক্ষ]",
        en: "Vivekananda Nagar, Dharinda (Near Tamluk Rly Station), Tamluk, Purba Medinipur, WB - 721636 [To be verified]"
      },
      landmark: {
        bn: "তমলুক রেলওয়ে স্টেশন থেকে আনুমানিক ৩-৫ মিনিট হাঁটা পথ / টোটো",
        en: "Approx. 3-5 mins walking / toto distance from Tamluk Railway Station"
      },
      mapUrl: "https://maps.google.com/?q=Bellview+Nursing+Home+Tamluk",
      geo: {
        latitude: "22.298",
        longitude: "87.928"
      }
    },
    phone: {
      display: "[ফোন নম্বর যাচাইকরণাধীন - ডেমো: ০৩২২৮-XXXXXX]",
      displayEn: "[Phone Verification Pending - Demo: 03228-XXXXXX]",
      callLink: "tel:+919000000000",
      isVerified: false,
      noteBn: "নার্সিং হোম কর্তৃপক্ষের থেকে অফিসিয়াল নম্বর নিশ্চিত করা হচ্ছে",
      noteEn: "Official contact number is being verified with management"
    },
    whatsapp: {
      display: "[হোয়াটসঅ্যাপ নম্বর যাচাইকরণাধীন]",
      displayEn: "[WhatsApp Verification Pending]",
      waLink: "https://wa.me/919000000000?text=নমস্কার,%20বেলভিউ%20নার্সিং%20হোমে%20যোগাযোগ%20করতে%20চাই।",
      isVerified: false
    },
    emergency: {
      isAvailable: false, // Strict: never claim emergency unless verified!
      disclaimerBn: "জরুরি পরিষেবা সংক্রান্ত নির্দিষ্ট নির্দেশিকা ও সময়সূচী কর্তৃপক্ষের নিশ্চিতকরণের অপেক্ষায় রয়েছে।",
      disclaimerEn: "Emergency services schedule and availability guidelines are currently under verification with management."
    },
    visitingHours: {
      bn: "বিকেল ৪:০০ টা - সন্ধ্যা ৬:০০ টা [যাচাইকরণ সাপেক্ষ]",
      en: "4:00 PM - 6:00 PM [Subject to verification]"
    }
  },

  announcements: [
    {
      id: "ann-01",
      date: "২০২৬-১০-০৭",
      titleBn: "আজকের ওপিডি (OPD) সংক্রান্ত সূচনা",
      titleEn: "Today's OPD General Notice",
      contentBn: "আজ বহির্বিভাগ (OPD) পরিষেবা পূর্বনির্ধারিত সময়সূচী অনুযায়ী চালু রয়েছে। আসার পূর্বে অনুগ্রহ করে ফোনে নিশ্চিত করে নিন।",
      contentEn: "Outpatient Department (OPD) is running as per scheduled timings today. Please confirm via phone prior to your arrival.",
      type: "info",
      isVerified: false,
      verificationNoteBn: "ডেমো তথ্য - কর্তৃপক্ষের নোটিশ বোর্ড থেকে দৈনিক আপডেট করা হবে",
      verificationNoteEn: "Demo info - will be updated daily from the nursing home notice desk"
    },
    {
      id: "ann-02",
      date: "২০২৬-১০-০৭",
      titleBn: "ভর্তি সংক্রান্ত জরুরি নথিপত্র নির্দেশিকা",
      titleEn: "Patient Admission Documents Reminder",
      contentBn: "রোগী ভর্তির সময় আধার কার্ড / ভোটার কার্ড এবং পূর্ববর্তী চিকিৎসার সমস্ত প্রেসক্রিপশন সাথে আনতে অনুরোধ করা হচ্ছে।",
      contentEn: "Attendants are kindly requested to bring Aadhaar/Voter card and all prior medical prescriptions during admission.",
      type: "advisory",
      isVerified: false,
      verificationNoteBn: "প্রস্তাবিত নিয়মাবলী",
      verificationNoteEn: "Advisory guidelines"
    }
  ],

  doctors: [
    {
      id: "doc-01",
      nameBn: "ডা. [ডাক্তারের নাম যাচাইকরণাধীন]",
      nameEn: "Dr. [Doctor Name To Be Verified]",
      departmentBn: "জেনারেল মেডিসিন (সাধারণ রোগ)",
      departmentEn: "General Medicine",
      qualificationBn: "MBBS, MD [যাচাইকরণ সাপেক্ষ]",
      qualificationEn: "MBBS, MD [Verification Pending]",
      daysBn: "সোম, বুধ, শুক্র",
      daysEn: "Mon, Wed, Fri",
      timeBn: "সকাল ১০:০০ টা - দুপুর ১:০০ টা",
      timeEn: "10:00 AM - 1:00 PM",
      isAvailableToday: true,
      roomBn: "কক্ষ নং ২",
      roomEn: "Room No. 2",
      isVerified: false,
      photo: "/images/doctor-generic.svg"
    },
    {
      id: "doc-02",
      nameBn: "ডা. [ডাক্তারের নাম যাচাইকরণাধীন]",
      nameEn: "Dr. [Doctor Name To Be Verified]",
      departmentBn: "স্ত্রীরোগ ও প্রসূতি (Gynaecology)",
      departmentEn: "Gynaecology & Obstetrics",
      qualificationBn: "MBBS, DGO, MS [যাচাইকরণ সাপেক্ষ]",
      qualificationEn: "MBBS, DGO, MS [Verification Pending]",
      daysBn: "মঙ্গল, বৃহস্পতি, শনি",
      daysEn: "Tue, Thu, Sat",
      timeBn: "বিকেল ৪:০০ টা - সন্ধ্যা ৭:০০ টা",
      timeEn: "4:00 PM - 7:00 PM",
      isAvailableToday: true,
      roomBn: "কক্ষ নং ১",
      roomEn: "Room No. 1",
      isVerified: false,
      photo: "/images/doctor-generic.svg"
    },
    {
      id: "doc-03",
      nameBn: "ডা. [ডাক্তারের নাম যাচাইকরণাধীন]",
      nameEn: "Dr. [Doctor Name To Be Verified]",
      departmentBn: "হাড় ও অর্থোপেডিক (Orthopaedics)",
      departmentEn: "Orthopaedics",
      qualificationBn: "MBBS, MS (Ortho) [যাচাইকরণ সাপেক্ষ]",
      qualificationEn: "MBBS, MS (Ortho) [Verification Pending]",
      daysBn: "রবিবার ও বুধবার",
      daysEn: "Sun & Wed",
      timeBn: "সকাল ১১:০০ টা - দুপুর ২:০০ টা",
      timeEn: "11:00 AM - 2:00 PM",
      isAvailableToday: false,
      roomBn: "কক্ষ নং ৩",
      roomEn: "Room No. 3",
      isVerified: false,
      photo: "/images/doctor-generic.svg"
    },
    {
      id: "doc-04",
      nameBn: "ডা. [ডাক্তারের নাম যাচাইকরণাধীন]",
      nameEn: "Dr. [Doctor Name To Be Verified]",
      departmentBn: "শিশু রোগ বিশেষজ্ঞ (Paediatrics)",
      departmentEn: "Paediatrics (Child Care)",
      qualificationBn: "MBBS, DCH, MD [যাচাইকরণ সাপেক্ষ]",
      qualificationEn: "MBBS, DCH, MD [Verification Pending]",
      daysBn: "সোম থেকে শনি",
      daysEn: "Mon to Sat",
      timeBn: "সন্ধ্যা ৬:০০ টা - রাত ৮:০০ টা",
      timeEn: "6:00 PM - 8:00 PM",
      isAvailableToday: true,
      roomBn: "কক্ষ নং ৪",
      roomEn: "Room No. 4",
      isVerified: false,
      photo: "/images/doctor-generic.svg"
    }
  ],

  services: [
    {
      id: "srv-01",
      categoryBn: "🩺 সাধারণ ও বিশেষজ্ঞ চিকিৎসা",
      categoryEn: "🩺 General & Specialist Care",
      icon: "stethoscope",
      titleBn: "বহির্বিভাগ (OPD) ও ডাক্তার দেখানো",
      titleEn: "Outpatient (OPD) & Specialist Consultations",
      descBn: "নিয়মিত অভিজ্ঞ চিকিৎসকদের দ্বারা সাধারণ ও বিশেষজ্ঞ পরামর্শ পরিষেবা।",
      descEn: "Regular consultations with experienced general physicians and specialist doctors.",
      isVerified: false,
      noteBn: "পরিষেবার সঠিক তালিকা কর্তৃপক্ষ থেকে আপডেট করা হবে।"
    },
    {
      id: "srv-02",
      categoryBn: "🏥 হাসপাতালে ভর্তি",
      categoryEn: "🏥 Inpatient Admission",
      icon: "hospital",
      titleBn: "রোগী ভর্তি ও পর্যবেক্ষণ",
      titleEn: "Patient Inpatient Admission & Care",
      descBn: "চিকিৎসকের পরামর্শ অনুযায়ী পরিচ্ছন্ন ও শান্ত পরিবেশে নার্সিং সেবা সহ ভর্তি ব্যবস্থা।",
      descEn: "Inpatient admission facilities with dedicated nursing care under doctor supervision.",
      isVerified: false,
      noteBn: "কেবিন ও জেনারেল ওয়ার্ডের বিস্তারিত কর্তৃপক্ষ দ্বারা যাচাইযোগ্য।"
    },
    {
      id: "srv-03",
      categoryBn: "🔬 স্বাস্থ্য পরীক্ষা",
      categoryEn: "🔬 Diagnostic Testing",
      icon: "microscope",
      titleBn: "প্রয়োজনীয় রক্ত ও প্যাথলজি পরীক্ষা",
      titleEn: "Essential Pathology & Diagnostics",
      descBn: "চিকিৎসায় সহায়ক রুটিন রক্ত পরীক্ষা ও রোগ নির্ণয় সুবিধা।",
      descEn: "Routine pathological tests and laboratory support as advised by consulting doctors.",
      isVerified: false,
      noteBn: "সুনির্দিষ্ট টেস্ট তালিকার অনুমোদন প্রক্রিয়াধীন।"
    },
    {
      id: "srv-04",
      categoryBn: "👩‍⚕️ সার্বক্ষণিক নার্সিং সহায়তা",
      categoryEn: "👩‍⚕️ Attendant & Nursing Support",
      icon: "heart-pulse",
      titleBn: "সহানুভূতিশীল নার্সিং যত্ন",
      titleEn: "Compassionate Nursing Care",
      descBn: "ভর্তি রোগীদের নিয়মিত ওষুধ প্রদান, ভাইটালস মনিটরিং এবং সার্বক্ষণিক যত্ন।",
      descEn: "Continuous nursing monitoring, timely medicine administration, and patient care.",
      isVerified: false,
      noteBn: "নার্সিং স্টাফ সময়সূচী Bellview নীতিমালার অন্তর্গত।"
    }
  ],

  patientGuide: [
    {
      id: "guide-01",
      icon: "receipt",
      titleBn: "🧾 ভর্তি হতে কী লাগবে?",
      titleEn: "🧾 What is Needed for Admission?",
      pointsBn: [
        "চিকিৎসকের প্রেসক্রিপশন বা অ্যাডমিশন স্লিপ",
        "রোগীর সরকারি পরিচয়পত্র (আধার কার্ড / ভোটার কার্ড)",
        "অভিভাবক বা অ্যাটেনডেন্টের ফোন নম্বর ও পরিচয়পত্র",
        "পূর্ববর্তী চিকিৎসার ফাইল, প্রেসক্রিপশন ও পরীক্ষার রিপোর্ট",
        "প্রাথমিক অ্যাডভান্স ডিপোজিট সংক্রান্ত রসিদ (কাউন্টার থেকে জেনে নিন)"
      ],
      pointsEn: [
        "Doctor's prescription or admission recommendation slip",
        "Government Photo ID of patient (Aadhaar / Voter Card)",
        "Contact number and ID proof of patient attendant/guardian",
        "All previous medical history files, prescriptions, and test reports",
        "Initial admission deposit acknowledgment (confirm at desk)"
      ],
      statusNoteBn: "এই তথ্য Bellview কর্তৃপক্ষের কাছ থেকে আনুষ্ঠানিকভাবে নিশ্চিত করা হবে।"
    },
    {
      id: "guide-02",
      icon: "bag",
      titleBn: "🎒 কী কী সঙ্গে আনবেন?",
      titleEn: "🎒 What Should You Bring?",
      pointsBn: [
        "রোগীর ব্যবহারের জন্য আরামদায়ক সুতির পোশাক",
        "ব্যক্তিগত প্রয়োজনীয় সামগ্রী (যেমন তোয়ালে, পেস্ট, ব্রাশ, মগ)",
        "রোগীর চলমান নিয়মিত ওষুধের প্রেসক্রিপশন",
        "জরুরি যোগাযোগের জন্য চার্জার ও মোবাইল ফোন",
        "অতিরিক্ত মূল্যবান অলঙ্কার বা নগদ টাকা না আনাই ভালো"
      ],
      pointsEn: [
        "Comfortable cotton clothing for the patient",
        "Basic personal hygiene items (towel, soap, brush, mug)",
        "Current daily prescription medicines for reference",
        "Mobile phone and charger for family contact",
        "Please avoid bringing expensive jewellery or excess cash"
      ],
      statusNoteBn: "এই তথ্য Bellview কর্তৃপক্ষের কাছ থেকে আনুষ্ঠানিকভাবে নিশ্চিত করা হবে।"
    },
    {
      id: "guide-03",
      icon: "users",
      titleBn: "👨‍👩‍👧 রোগীর সঙ্গে থাকার নিয়ম",
      titleEn: "👨‍👩‍👧 Rules for Family & Attendants",
      pointsBn: [
        "ওয়ার্ডে রোগীর সাথে সাধারণত একজন অনুমোদিত অ্যাটেনডেন্ট থাকতে পারেন",
        "দেখার নির্দিষ্ট সময়: বিকেল ৪:০০ টা থেকে সন্ধ্যা ৬:০০ টা (কর্তৃপক্ষের নিয়ম অনুযায়ী)",
        "শান্ত পরিবেশ বজায় রাখুন; অযথা ভিড় বা উচ্চস্বরে কথা বলা পরিহার করুন",
        "ছোট বাচ্চাদের অসুস্থ রোগীর কাছে আনা অনুৎসাহিত করা হয়"
      ],
      pointsEn: [
        "Usually one authorized attendant is permitted to stay with the inpatient",
        "Visiting Hours: 4:00 PM to 6:00 PM (as per standard guidelines)",
        "Please maintain quietness and silence inside ward areas",
        "Bringing young children near inpatient beds is discouraged for safety"
      ],
      statusNoteBn: "এই তথ্য Bellview কর্তৃপক্ষের কাছ থেকে আনুষ্ঠানিকভাবে নিশ্চিত করা হবে।"
    },
    {
      id: "guide-04",
      icon: "clipboard-check",
      titleBn: "📋 ছাড়পত্রের সময় (Discharge Policy)",
      titleEn: "📋 Discharge Guidelines & Timings",
      pointsBn: [
        "ডাক্তার রাউন্ডে রোগী দেখে ডিসচার্জ অনুমোদন করার পর প্রক্রিয়া শুরু হয়",
        "বিল প্রস্তুত ও নিষ্পত্তি সাধারণত সকাল ১১:০০ থেকে দুপুর ২:০০ টার মধ্যে হয়",
        "ছাড়পত্রের সময় ডিসচার্জ সামারি ও পরবর্তী ওষুধ সেবনের নিয়ম বুঝে নিন",
        "যাওয়ার আগে পরবর্তী ফলো-আপ বা সেলাই কাটার তারিখ জেনে নিন"
      ],
      pointsEn: [
        "Discharge process begins after attending doctor confirms during rounds",
        "Bill finalization and settling is usually done between 11:00 AM and 2:00 PM",
        "Collect discharge summary file and verify medicine schedule carefully",
        "Confirm follow-up consultation date before leaving the premises"
      ],
      statusNoteBn: "এই তথ্য Bellview কর্তৃপক্ষের কাছ থেকে আনুষ্ঠানিকভাবে নিশ্চিত করা হবে।"
    }
  ],

  howToReach: {
    addressBriefBn: "বিবেকানন্দ নগর, ধারিণ্ডা, তমলুক, পূর্ব মেদিনীপুর (রেলওয়ে স্টেশনের কাছে)",
    addressBriefEn: "Vivekananda Nagar, Dharinda, Tamluk, Purba Medinipur (Near Railway Station)",
    railDistanceBn: "তমলুক রেলওয়ে স্টেশন থেকে মাত্র ০.২৪ কিমি (পায়ে হেঁটে ৩-৪ মিনিট / টোটো ২ মিনিট)",
    railDistanceEn: "Just 0.24 km from Tamluk Railway Station (3-4 mins walk / 2 mins Toto)",
    routeSteps: [
      {
        step: 1,
        titleBn: "🚆 ট্রেনে এলে: তমলুক রেলওয়ে স্টেশনে নামুন",
        titleEn: "🚆 By Train: Arrive at Tamluk Railway Station",
        descBn: "হাওড়া-হলদিয়া বা দিঘা লাইনের লোকাল বা এক্সপ্রেস ট্রেনে তমলুক স্টেশনে পৌঁছান। ১ বা ২ নম্বর প্ল্যাটফর্ম দিয়ে স্টেশন সংলগ্ন রাস্তায় আসুন।",
        descEn: "Take any local/express train on Howrah-Haldia/Digha route to Tamluk. Exit station toward Dharinda / Vivekananda Nagar side."
      },
      {
        step: 2,
        titleBn: "🛺 টোটো / অটো অথবা সামান্য হাঁটা পথ",
        titleEn: "🛺 Toto / Auto or a short walk",
        descBn: "স্টেশন চত্বর থেকে যে কোনো টোটো বা রিকশাকে 'বেলভিউ নার্সিং হোম' বলুন। স্টেশন থেকে দূরত্ব মাত্র কয়েকশো মিটার।",
        descEn: "Take an e-rickshaw (Toto) or walk towards Vivekananda Nagar. It is within a very short distance from the station."
      },
      {
        step: 3,
        titleBn: "🏥 বেলভিউ নার্সিং হোম পৌঁছন",
        titleEn: "🏥 Arrive at Bellview Nursing Home",
        descBn: "প্রধান গেট দিয়ে অভ্যর্থনা কক্ষে (Reception Desk) প্রবেশ করুন। সহায়ক কর্মী আপনাকে প্রয়োজনীয় নির্দেশ দেবেন।",
        descEn: "Enter through main gate to the Reception Desk. Front-desk staff will guide you immediately."
      }
    ],
    byBusBn: "তমলুক সেন্ট্রাল বাস টার্মিনাস / মানিকতলা মোড় থেকে স্টেশনগামী টোটো বা অটোয় চড়ে সহজেই পৌঁছানো যায়।",
    byBusEn: "From Tamluk Central Bus Stand or Maniktala More, board a Toto/Auto heading to Tamluk Station area."
  },

  faqs: [
    {
      qBn: "Bellview Nursing Home কোথায় অবস্থিত?",
      qEn: "Where is Bellview Nursing Home located?",
      aBn: "বেলভিউ নার্সিং হোম পূর্ব মেদিনীপুরের তমলুক শহরের ধারিণ্ডা / বিবেকানন্দ নগর এলাকায়, তমলুক রেলওয়ে স্টেশনের অতি নিকটে অবস্থিত।",
      aEn: "Bellview Nursing Home is located at Vivekananda Nagar / Dharinda in Tamluk, Purba Medinipur, very close to Tamluk Railway Station."
    },
    {
      qBn: "কীভাবে সেখানে যাব?",
      qEn: "How can I reach the nursing home?",
      aBn: "ট্রেনে এলে তমলুক স্টেশনে নেমে হাঁটা পথে মাত্র কয়েক মিনিটে বা টোটো চেপে পৌঁছানো যায়। বাস এলে মানিকতলা বা স্টেশন রোডে নেমে টোটো নিন।",
      aEn: "By train, get down at Tamluk station and walk 3-4 minutes or hire a toto. By bus, get down at Maniktala/Station road and take a toto."
    },
    {
      qBn: "কোন কোন ডাক্তার দেখেন?",
      qEn: "Which doctors are available?",
      aBn: "জেনারেল মেডিসিন, স্ত্রীরোগ, শিশু রোগ ও অর্থোপেডিক সহ বিভিন্ন বিভাগের ডাক্তারগণ নিয়মিত ওপিডি-তে দেখেন। বিস্তারিত তালিকা 'ডাক্তার' পেজে দেখুন।",
      aEn: "Doctors specializing in General Medicine, Gynaecology, Paediatrics, Orthopaedics and more visit regularly. See the Doctors section for details."
    },
    {
      qBn: "ডাক্তার কখন বসেন?",
      qEn: "What are the doctor consultation timings?",
      aBn: "ডাক্তারদের ওপিডি সময়সূচী সকাল ১০টা থেকে দুপুর এবং বিকেল ৪টা থেকে রাত পর্যন্ত ভাগ করা থাকে। সুনির্দিষ্ট ডাক্তারের সময় জানতে আমাদের তালিকা দেখুন বা ফোনে যোগাযোগ করুন।",
      aEn: "Doctor timings are divided into morning (10 AM - 1 PM) and evening (4 PM - 8 PM) sessions. Please check the schedule or confirm via phone."
    },
    {
      qBn: "অ্যাপয়েন্টমেন্ট কীভাবে নেব?",
      qEn: "How do I book an appointment?",
      aBn: "অ্যাপয়েন্টমেন্ট বা ওপিডি বুকিং-এর জন্য সরাসরি আমাদের ফোনে কল করতে পারেন অথবা নার্সিং হোমের অভ্যর্থনা কাউন্টারে এসে নাম লেখাতে পারেন।",
      aEn: "To book an OPD consultation, call our reception phone directly or register in-person at the front desk."
    },
    {
      qBn: "ভর্তি হতে কী কী কাগজ লাগবে?",
      qEn: "What documents are required for admission?",
      aBn: "ডাক্তারের প্রেসক্রিপশন, রোগীর আধার কার্ড বা সচিত্র পরিচয়পত্র, এবং পূর্বের সমস্ত মেডিকেল পরীক্ষার কাগজপত্র সাথে আনা প্রয়োজন।",
      aEn: "Doctor's prescription, patient's valid photo ID (Aadhaar card), and all previous test reports & prescriptions."
    },
    {
      qBn: "কীভাবে যোগাযোগ করব?",
      qEn: "How do I contact Bellview Nursing Home?",
      aBn: "ওয়েবসাইটের 'যোগাযোগ' পেজ থেকে সরাসরি কল বোতাম চেপে ফোন করতে পারেন অথবা ঠিকানার গুগল ম্যাপ দেখে চলে আসতে পারেন।",
      aEn: "Use the direct phone button on the Contact page, or tap the Google Maps button for live directions to the nursing home."
    }
  ],

  // Digital Desk future management simulation data
  staffDesk: {
    titleBn: "বেলভিউ ডিজিটাল ডেস্ক (ম্যানেজমেন্ট ডেমো)",
    titleEn: "Bellview Digital Desk (Management Demo)",
    subtitleBn: "হাসপাতালের কর্মীরা যেভাবে কোডিং ছাড়াই দৈনিক ডাক্তার ও ঘোষণা আপডেট করবেন",
    subtitleEn: "How nursing home staff can easily update daily doctor schedules and notices without coding"
  }
};
