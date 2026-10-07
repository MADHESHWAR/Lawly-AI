/**
 * Lawly - Mock Legal Knowledge Base & Data Structures
 * Strictly follows Indian Jurisprudence & Official Source References.
 * DEMO DATA — NOT REAL LEGAL ADVICE.
 */

export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi (NCT)",
  "Jammu and Kashmir",
  "Ladakh",
  "Chandigarh",
  "Puducherry",
  "Dadra & Nagar Haveli and Daman & Diu",
  "Andaman and Nicobar Islands",
  "Lakshadweep",
  "I don't know / Other"
];

export const EMERGENCY_HELPLINES = [
  {
    name: "National Emergency Helpline",
    number: "112",
    description: "All-in-one emergency service for Police, Fire, and Medical assistance across India.",
    badge: "Immediate Danger"
  },
  {
    name: "Women in Distress Helpline",
    number: "181",
    description: "24/7 confidential support for domestic violence, harassment, and immediate protection.",
    badge: "Domestic Violence / Harassment"
  },
  {
    name: "NALSA Free Legal Aid Helpline",
    number: "15100",
    description: "National Legal Services Authority toll-free helpline providing government-funded legal representation.",
    badge: "Free Legal Aid"
  },
  {
    name: "National Cyber Crime Reporting",
    number: "1930",
    description: "Citizen financial fraud helpline to freeze unauthorized bank/UPI transactions immediately.",
    badge: "Financial Cyber Fraud"
  },
  {
    name: "Childline India",
    number: "1098",
    description: "24-hour free emergency phone service for children in need of care and protection.",
    badge: "Child Safety"
  }
];

export const HIGH_RISK_KEYWORDS = [
  "suicide", "kill", "murder", "assault", "physical violence", "domestic violence", 
  "beating", "torture", "rape", "threat to life", "kidnap", "hostage", "arrested today",
  "police custody", "dowry harassment", "extortion threat", "emergency", "in immediate danger"
];

export const LEGAL_TOPICS = [
  {
    id: "property-rent",
    slug: "property-rent",
    title: "Property & Rent",
    icon: "Home",
    description: "Tenant rights, rental agreements, security deposits, eviction disputes, and landlord obligations.",
    popularQuestions: [
      "Landlord refusing to refund security deposit",
      "Notice period required before eviction",
      "Maintenance charges dispute in residential society",
      "Illegal locking or utility disconnection by landlord"
    ],
    primaryActs: [
      "Transfer of Property Act, 1882",
      "Model Tenancy Act / State Rent Control Acts",
      "Indian Contract Act, 1872"
    ]
  },
  {
    id: "employment-labour",
    slug: "employment-labour",
    title: "Employment & Labour",
    icon: "Briefcase",
    description: "Withheld salaries, notice period deductions, unlawful termination, PF/gratuity, and workplace harassment.",
    popularQuestions: [
      "Employer withheld salary after resignation",
      "Denied relieving letter and experience certificate",
      "Gratuity eligibility after 5 years service",
      "Wrongful termination during probation"
    ],
    primaryActs: [
      "Payment of Wages Act, 1936",
      "Industrial Disputes Act, 1947",
      "Payment of Gratuity Act, 1972",
      "POSH Act, 2013"
    ]
  },
  {
    id: "consumer-rights",
    slug: "consumer-rights",
    title: "Consumer Rights",
    icon: "ShoppingCart",
    description: "Defective goods, e-commerce refund refusals, deficient services, misleading ads, and warranty claims.",
    popularQuestions: [
      "E-commerce app refused refund for defective item",
      "Flight cancellation refund delayed by airline",
      "Excessive restaurant service charge forced on bill",
      "Warranty claim rejected citing false damage"
    ],
    primaryActs: [
      "Consumer Protection Act, 2019",
      "Consumer Protection (E-Commerce) Rules, 2020"
    ]
  },
  {
    id: "traffic-vehicles",
    slug: "traffic-vehicles",
    title: "Traffic & Vehicles",
    icon: "Car",
    description: "Challan disputes, vehicle impoundment, hit-and-run claims, driving license suspension, and MV rules.",
    popularQuestions: [
      "E-challan issued with wrong vehicle registration",
      "Traffic police seized vehicle without receipt",
      "No-parking fine when signage was missing",
      "Third-party motor insurance claim process"
    ],
    primaryActs: [
      "Motor Vehicles Act, 1988 (as amended 2019)",
      "Central Motor Vehicles Rules, 1989"
    ]
  },
  {
    id: "family-matrimonial",
    slug: "family-matrimonial",
    title: "Family Matters",
    icon: "Users",
    description: "Maintenance claims, child custody, ancestral property rights, succession, and mutual divorce procedure.",
    popularQuestions: [
      "Daughter's equal share in ancestral property",
      "Interim maintenance rights during separation",
      "Mutual consent divorce waiting period",
      "Will registration and inheritance disputes"
    ],
    primaryActs: [
      "Hindu Succession Act, 1956 (amended 2005)",
      "Special Marriage Act, 1954",
      "Protection of Women from Domestic Violence Act, 2005"
    ]
  },
  {
    id: "cybercrime-digital",
    slug: "cybercrime-digital",
    title: "Cybercrime & Digital",
    icon: "ShieldAlert",
    description: "UPI phishing, identity theft, unauthorized SIM swaps, online blackmail, and data privacy breaches.",
    popularQuestions: [
      "Fraudulent UPI transfer after scanning QR code",
      "Blackmail using morphed pictures on social media",
      "Fake loan app harassment of phone contacts",
      "Bank account frozen due to suspected cyber lien"
    ],
    primaryActs: [
      "Information Technology Act, 2000",
      "Digital Personal Data Protection Act, 2023",
      "Bharatiya Nyaya Sanhita, 2023 (Section 318/319)"
    ]
  },
  {
    id: "banking-finance",
    slug: "banking-finance",
    title: "Banking & Finance",
    icon: "Landmark",
    description: "Unauthorized card debits, recovery agent harassment, loan foreclosure penalties, and cheque bounce (138).",
    popularQuestions: [
      "Recovery agents calling relatives and threatening",
      "Notice received under Section 138 NI Act (Cheque bounce)",
      "Bank deducted EMI after loan closure NOC",
      "Credit score lowered due to bank reporting error"
    ],
    primaryActs: [
      "Negotiable Instruments Act, 1881 (Section 138)",
      "RBI Master Directions on Loan Recovery & Fair Practices",
      "Banking Ombudsman Scheme"
    ]
  },
  {
    id: "police-criminal",
    slug: "police-criminal",
    title: "Police & Criminal Procedure",
    icon: "Shield",
    description: "FIR registration rights, zero FIR, bail provisions, police summons, and citizen rights during search.",
    popularQuestions: [
      "Police station refusing to register an FIR",
      "Can a woman be arrested after sunset in India?",
      "Notice received under Section 35(3) BNSS / 41A CrPC",
      "Zero FIR procedure when incident happened in another city"
    ],
    primaryActs: [
      "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023",
      "Bharatiya Nyaya Sanhita (BNS), 2023",
      "Constitution of India (Articles 21 & 22)"
    ]
  },
  {
    id: "contracts-commercial",
    slug: "contracts-commercial",
    title: "Contracts & Agreements",
    icon: "FileCheck",
    description: "Breach of contract, vendor non-payment, non-disclosure agreements, liquidated damages, and arbitration.",
    popularQuestions: [
      "Freelance client refusing to pay after milestone delivery",
      "Is an unsigned email agreement legally enforceable in India?",
      "Penalty clause in service agreement validity",
      "Arbitration clause notice procedure"
    ],
    primaryActs: [
      "Indian Contract Act, 1872",
      "Specific Relief Act, 1963",
      "Arbitration and Conciliation Act, 1996"
    ]
  },
  {
    id: "business-corporate",
    slug: "business-corporate",
    title: "Business & Startup",
    icon: "Building2",
    description: "Director disputes, partnership dissolution, GST notices, trademark infringement, and MSME Samadhaan.",
    popularQuestions: [
      "Buyer delayed payment to MSME beyond 45 days",
      "Co-founder wants to leave partnership firm",
      "Cease and desist notice for brand name resemblance",
      "Shop and Establishment license compliance"
    ],
    primaryActs: [
      "MSME Development Act, 2006 (Section 15-18)",
      "Companies Act, 2013",
      "Trade Marks Act, 1999"
    ]
  },
  {
    id: "education-student",
    slug: "education-student",
    title: "Education & Student Rights",
    icon: "GraduationCap",
    description: "Fee refund on withdrawal, withheld original certificates by college, ragging, and UGC guidelines.",
    popularQuestions: [
      "College refusing to return original 10th/12th certificates",
      "Coaching institute refusing fee refund on withdrawal",
      "Anti-ragging regulations compliance",
      "Degree certificate delayed past convocation"
    ],
    primaryActs: [
      "UGC Notification on Refund of Fees and Non-Retention of Certificates",
      "Consumer Protection Act, 2019",
      "Right to Education Act, 2009"
    ]
  },
  {
    id: "civil-matters",
    slug: "civil-matters",
    title: "Civil Matters & Rights",
    icon: "Scale",
    description: "Property boundary disputes, injunctions, defamation notices, RTI filing, and public nuisance.",
    popularQuestions: [
      "Neighbour encroaching compound wall boundary",
      "Filing RTI for delayed municipal building approval",
      "Cease & desist notice for online defamatory post",
      "Permanent injunction for easement rights"
    ],
    primaryActs: [
      "Code of Civil Procedure, 1908",
      "Right to Information Act, 2005",
      "Specific Relief Act, 1963"
    ]
  }
];

export const MOCK_ANALYSES = [
  {
    id: "case-rental-101",
    title: "Rental Deposit Refund Withheld by Landlord",
    category: "Rental / Tenancy",
    categorySlug: "property-rent",
    state: "Tamil Nadu",
    jurisdiction: "Tamil Nadu, India",
    date: "2026-09-28",
    confidence: "Potentially relevant",
    userFacts: "Tenant vacated apartment on 31st August 2026 after serving agreed 1-month notice period. Handover was completed without property damage. Landlord withheld ₹60,000 security deposit citing vague 'repainting and prospective tenant delay' without receipts.",
    summary: "Based on the information provided, this matter appears to involve a civil dispute over the refund of a residential security deposit following peaceful handover of leased premises.",
    isHighRisk: false,
    
    potentiallyRelevantLaws: [
      {
        id: "law-1",
        actName: "Indian Contract Act, 1872",
        section: "Section 73",
        sectionTitle: "Compensation for loss or damage caused by breach of contract",
        plainExplanation: "Under general contract principles, a party who breaches a contractual covenant (here, the obligation to return the deposit upon termination of the tenancy) may be liable to refund the amount along with interest for wrongful retention.",
        jurisdiction: "All India (Union of India)",
        officialSource: "India Code (Legislative Department, Ministry of Law and Justice)",
        sourceUrl: "https://www.indiacode.nic.in/handle/123456789/2187",
        lastVerifiedDate: "15 Jan 2026",
        isVerified: true
      },
      {
        id: "law-2",
        actName: "Tamil Nadu Regulation of Rights and Responsibilities of Landlords and Tenants Act, 2017",
        section: "Section 13",
        sectionTitle: "Security Deposit Regulation",
        plainExplanation: "Under state tenancy laws in Tamil Nadu, the security deposit must not exceed three months' rent for residential premises and must be refunded within one month of vacating after agreed deductions.",
        jurisdiction: "Tamil Nadu State",
        officialSource: "Tamil Nadu Government Gazette / Tenancy Portal",
        sourceUrl: "https://www.indiacode.nic.in/handle/123456789/13890",
        lastVerifiedDate: "10 Feb 2026",
        isVerified: true
      },
      {
        id: "law-3",
        actName: "Transfer of Property Act, 1882",
        section: "Section 108(m) & 108(q)",
        sectionTitle: "Rights and liabilities of lessor and lessee",
        plainExplanation: "The lessee is bound to keep the property in reasonable condition, subject only to ordinary wear and tear. Arbitrary painting charges cannot typically be deducted unless explicitly stipulated in a valid written tenancy agreement.",
        jurisdiction: "All India (Union of India)",
        officialSource: "India Code Repository",
        sourceUrl: "https://www.indiacode.nic.in/handle/123456789/2338",
        lastVerifiedDate: "05 Jan 2026",
        isVerified: true
      }
    ],

    explanation: "Under Indian tenancy jurisprudence, a security deposit does not constitute landlord income. It is held in fiduciary trust as security against unpaid rent or verifiable structural damages beyond normal wear and tear. Withholding deposits for routine repainting without an express contract term or proof of damage is generally challengeable. If an amicable settlement is not reached, a formal legal notice demanding refund is the standard preliminary recourse.",

    glossary: [
      {
        term: "Security Deposit",
        simpleMeaning: "A refundable sum paid by a tenant to the landlord at the inception of tenancy to cover unpaid rent or verifiable damage."
      },
      {
        term: "Ordinary Wear and Tear",
        simpleMeaning: "Natural deterioration of a residential property that occurs simply through ordinary everyday living over time, which a tenant cannot be held liable for."
      },
      {
        term: "Legal Notice",
        simpleMeaning: "A formal written communication sent through an advocate stating your grievance and giving the counterparty a deadline to comply before legal proceedings begin."
      }
    ],

    possibleNextSteps: [
      "Compile all relevant documentation, including the signed rental agreement, bank statements showing initial deposit payment, monthly rent payment receipts, and written notice of vacancy.",
      "Send a clear, polite written communication (via email or registered WhatsApp) requesting an itemized breakdown of any alleged deductions with supporting vendor invoices.",
      "If the landlord refuses or fails to respond within 7 days, consider having an advocate issue a formal Legal Notice demanding refund within 15 days.",
      "Depending on your preference and agreement terms, you may consider filing a petition before the Rent Court / Rent Tribunal established under the Tamil Nadu Tenancy Act, or seeking mediation through the District Legal Services Authority (DLSA)."
    ],

    sources: [
      {
        title: "The Indian Contract Act, 1872 (Act No. 9 of 1872)",
        authority: "Legislative Department, Ministry of Law and Justice, Govt. of India",
        url: "https://www.indiacode.nic.in/handle/123456789/2187",
        citation: "Section 73 - India Code Central Acts",
        verified: true,
        verificationDate: "15 Jan 2026"
      },
      {
        title: "Tamil Nadu Regulation of Rights and Responsibilities of Landlords and Tenants Act, 2017",
        authority: "Government of Tamil Nadu Housing and Urban Development Department",
        url: "https://www.indiacode.nic.in/handle/123456789/13890",
        citation: "Act No. 42 of 2017, Section 13",
        verified: true,
        verificationDate: "10 Feb 2026"
      },
      {
        title: "Transfer of Property Act, 1882 (Act No. 4 of 1882)",
        authority: "Legislative Department, Ministry of Law and Justice",
        url: "https://www.indiacode.nic.in/handle/123456789/2338",
        citation: "Section 108(m) - India Code",
        verified: true,
        verificationDate: "05 Jan 2026"
      }
    ],

    disclaimer: "Important: Lawly provides general legal information for educational and informational purposes. It does not provide legal advice, create an advocate-client relationship, or replace a qualified lawyer. Laws may change and their application depends on specific facts and jurisdiction. Verify important information with an appropriate legal professional or official source."
  },

  {
    id: "case-consumer-102",
    title: "Defective Laptop Delivered - E-Commerce Return Denied",
    category: "Consumer Rights",
    categorySlug: "consumer-rights",
    state: "Maharashtra",
    jurisdiction: "Maharashtra, India",
    date: "2026-10-02",
    confidence: "Potentially relevant",
    userFacts: "Purchased a laptop for ₹54,000 from a major online marketplace on 20 Sept 2026. Device failed to power on straight out of the box. Return request initiated within 24 hours of delivery was rejected citing 'seller policy changed to brand warranty only'. Brand service center declined inspection citing courier transit damage.",
    summary: "Based on the provided details, this situation involves an alleged deficiency in service and unfair trade practice regarding the supply of a defective electronic product by an e-commerce platform.",
    isHighRisk: false,

    potentiallyRelevantLaws: [
      {
        id: "law-c1",
        actName: "Consumer Protection Act, 2019",
        section: "Section 2(47) & Section 35",
        sectionTitle: "Unfair Trade Practice and Grievance Redressal Mechanism",
        plainExplanation: "Prohibits deceptive trade practices and establishes the consumer's right to file a complaint before the District Consumer Commission for replacement or full refund with compensation.",
        jurisdiction: "All India (Union of India)",
        officialSource: "Ministry of Consumer Affairs, Food & Public Distribution",
        sourceUrl: "https://www.indiacode.nic.in/handle/123456789/15256",
        lastVerifiedDate: "12 Jan 2026",
        isVerified: true
      },
      {
        id: "law-c2",
        actName: "Consumer Protection (E-Commerce) Rules, 2020",
        section: "Rule 4 & Rule 6",
        sectionTitle: "Obligations of E-Commerce Entities",
        plainExplanation: "E-commerce platforms cannot adopt unfair methods or refuse to take back defective goods or refund consideration paid if delivered goods do not conform to agreed specifications.",
        jurisdiction: "All India (Union of India)",
        officialSource: "Gazette of India (CG-DL-E-23072020-220641)",
        sourceUrl: "https://consumeraffairs.nic.in/acts-and-rules/consumer-protection",
        lastVerifiedDate: "20 Jan 2026",
        isVerified: true
      }
    ],

    explanation: "Under the Consumer Protection Act 2019, an e-commerce entity cannot escape liability by shifting the burden entirely onto third-party manufacturers when a brand-new delivered product is non-functional on arrival. Consumers have a statutory right to seek redressal through the National Consumer Helpline (NCH) or via e-Daakhil, the online consumer forum filing portal.",

    glossary: [
      {
        term: "Deficiency in Service",
        simpleMeaning: "Any fault, imperfection, or inadequacy in the quality, nature, or manner of performance that is required to be maintained under law or contract."
      },
      {
        term: "Unfair Trade Practice",
        simpleMeaning: "A trade practice which, for promoting the sale or supply of goods/services, adopts any unfair method or deceptive practice."
      },
      {
        term: "e-Daakhil",
        simpleMeaning: "The official government web portal by the National Consumer Disputes Redressal Commission (NCDRC) allowing citizens to file consumer complaints online without physically visiting court."
      }
    ],

    possibleNextSteps: [
      "Preserve the invoice, unboxing photographs or video, delivery package slips, and screenshots of return rejection emails.",
      "Register an online grievance with the National Consumer Helpline (NCH) portal (consumerhelpline.gov.in) or call toll-free 1915.",
      "Send a written grievance to the Grievance Officer of the e-commerce entity, whose contact must be published on their platform under Rule 4(4) of the E-Commerce Rules.",
      "If unaddressed within 30 days, consider filing a formal online complaint through the e-Daakhil portal (edaakhil.nic.in) before the District Consumer Disputes Redressal Commission."
    ],

    sources: [
      {
        title: "Consumer Protection Act, 2019 (Act No. 35 of 2019)",
        authority: "Ministry of Law & Justice / Dept. of Consumer Affairs",
        url: "https://www.indiacode.nic.in/handle/123456789/15256",
        citation: "Section 2(47), Section 35 - India Code",
        verified: true,
        verificationDate: "12 Jan 2026"
      },
      {
        title: "Consumer Protection (E-Commerce) Rules, 2020",
        authority: "Department of Consumer Affairs, Government of India",
        url: "https://consumeraffairs.nic.in",
        citation: "Notification G.S.R. 462(E)",
        verified: true,
        verificationDate: "20 Jan 2026"
      }
    ],

    disclaimer: "Important: Lawly provides general legal information for educational and informational purposes. It does not provide legal advice, create an advocate-client relationship, or replace a qualified lawyer."
  },

  {
    id: "case-employment-103",
    title: "Unpaid Salary and Withheld Relieving Letter After Resignation",
    category: "Employment & Labour",
    categorySlug: "employment-labour",
    state: "Karnataka",
    jurisdiction: "Karnataka, India",
    date: "2026-10-04",
    confidence: "Potentially relevant",
    userFacts: "Software engineer completed contractual 60-day notice period in Bengaluru on 15 August 2026. Handover completed and acknowledged by manager. Company has withheld 2 months pending salary (₹1,80,000) and refused relieving letter, demanding an additional 30 days of uncompensated support.",
    summary: "Based on the submitted facts, this matter pertains to unauthorized withholding of wages and lawful employment documentation following completion of contractual notice.",
    isHighRisk: false,

    potentiallyRelevantLaws: [
      {
        id: "law-e1",
        actName: "Payment of Wages Act, 1936",
        section: "Section 5 & Section 7",
        sectionTitle: "Time of payment of wages and permissible deductions",
        plainExplanation: "Wages must be disbursed within statutory timelines upon termination of employment. Employers are strictly barred from making non-statutory unauthorized deductions.",
        jurisdiction: "All India (Union of India)",
        officialSource: "Ministry of Labour & Employment",
        sourceUrl: "https://www.indiacode.nic.in/handle/123456789/2361",
        lastVerifiedDate: "18 Jan 2026",
        isVerified: true
      },
      {
        id: "law-e2",
        actName: "Karnataka Shops and Commercial Establishments Act, 1961",
        section: "Section 39",
        sectionTitle: "Notice of Dismissal or Discharge",
        plainExplanation: "Applies to IT companies in Karnataka; specifies that an employee who has given reasonable notice or completed contractual terms cannot have accrued wages withheld arbitrarily.",
        jurisdiction: "Karnataka State",
        officialSource: "Karnataka Labour Department Gazette",
        sourceUrl: "https://www.indiacode.nic.in/handle/123456789/10892",
        lastVerifiedDate: "22 Jan 2026",
        isVerified: true
      }
    ],

    explanation: "Indian labor jurisprudence holds that wages earned for days actually worked cannot be withheld as leverage or punitive measure. Withholding service certificates and relieving letters after proper handover causes restraint of trade and irreparable harm to employment opportunities, which Indian courts view with disfavor.",

    glossary: [
      {
        term: "Full and Final Settlement (FnF)",
        simpleMeaning: "The settlement procedure where all dues—including unpaid salary, accrued leave encashment, gratuity, and bonuses—are calculated and paid out upon separation."
      },
      {
        term: "Relieving Letter",
        simpleMeaning: "A formal document issued by an employer confirming that an employee has properly completed their duties, served notice, and been relieved of obligations."
      }
    ],

    possibleNextSteps: [
      "Gather copies of the offer letter, resignation email, manager's handover acceptance email, and last 3 months pay slips.",
      "Send a formal written demand email addressed to HR and Directors specifying a 7-day cure period for disbursement of Full & Final (FnF) dues and issuance of the relieving letter.",
      "If unanswered, you may consider filing a wage claim complaint with the jurisdictional Labour Officer / Deputy Labour Commissioner under the state Shops & Establishments Act.",
      "Consult an advocate regarding issuing a formal Legal Notice or initiating summary proceedings for recovery of debt."
    ],

    sources: [
      {
        title: "Payment of Wages Act, 1936 (Act No. 4 of 1936)",
        authority: "Ministry of Labour and Employment, Govt. of India",
        url: "https://www.indiacode.nic.in/handle/123456789/2361",
        citation: "Section 5 & 7 - India Code",
        verified: true,
        verificationDate: "18 Jan 2026"
      }
    ],

    disclaimer: "Important: Lawly provides general legal information for educational and informational purposes. It does not provide legal advice, create an advocate-client relationship, or replace a qualified lawyer."
  }
];

export const CLARIFICATION_QUESTIONS_MAP = {
  "Rental / Tenancy": [
    {
      id: "q_state",
      question: "Which Indian state or Union Territory was the rented property located in?",
      type: "state_select",
      helpText: "Tenancy laws differ significantly across state enactments (e.g., Tamil Nadu, Maharashtra, Karnataka, Delhi)."
    },
    {
      id: "q_agreement",
      question: "Did you have a written and signed rental/lease agreement?",
      type: "choice",
      options: [
        "Yes, registered written agreement",
        "Yes, notarized / unregistered written agreement",
        "No, verbal understanding only",
        "I am not sure"
      ],
      helpText: "Written terms govern notice periods, deductions, and dispute resolution mechanisms."
    },
    {
      id: "q_moveout",
      question: "When did you formally vacate and handover the keys to the landlord?",
      type: "choice",
      options: [
        "Less than 30 days ago",
        "1 to 3 months ago",
        "More than 3 months ago",
        "I have not vacated yet"
      ],
      helpText: "Statutory timelines for deposit return typically run from the date of peaceful physical handover."
    },
    {
      id: "q_reason",
      question: "Did the landlord provide any specific written or verbal reason for withholding the deposit?",
      type: "choice",
      options: [
        "No reason given / stopped taking calls",
        "Claiming repainting / deep cleaning costs",
        "Claiming property damage or broken fittings",
        "Claiming unpaid utility bills or rent dues"
      ],
      helpText: "Landlords cannot deduct for ordinary wear and tear without verifiable evidence or explicit contract terms."
    }
  ],

  "Consumer Rights": [
    {
      id: "q_platform",
      question: "Where was this purchase or service acquired?",
      type: "choice",
      options: [
        "Major E-Commerce marketplace (Amazon, Flipkart, etc.)",
        "Brand's direct online website / app",
        "Physical retail store / shop",
        "Independent seller via social media / WhatsApp"
      ],
      helpText: "Different regulations apply under the Consumer Protection E-Commerce Rules versus brick-and-mortar stores."
    },
    {
      id: "q_receipt",
      question: "Do you possess an invoice, tax bill, or electronic receipt?",
      type: "choice",
      options: [
        "Yes, have official GST tax invoice / PDF",
        "Have order ID and UPI transaction record only",
        "No receipt available"
      ],
      helpText: "Invoices establish consumer status under Section 2(7) of the Consumer Protection Act, 2019."
    },
    {
      id: "q_timeline",
      question: "How long after receiving the goods or service did you notify the seller of the defect?",
      type: "choice",
      options: [
        "Within 24 to 48 hours",
        "Within the stated return/warranty window",
        "After the warranty window had passed",
        "Still waiting for delivery"
      ],
      helpText: "Prompt notification preserves statutory return and defect remedies."
    },
    {
      id: "q_response",
      question: "Has the seller or company provided a formal written response or refusal?",
      type: "choice",
      options: [
        "Yes, they formally denied refund or replacement",
        "They stopped responding / ghosted my tickets",
        "They offered partial store credit only",
        "Still within their standard review period"
      ],
      helpText: "Helps determine whether internal grievance redressal is exhausted."
    }
  ],

  "Employment & Labour": [
    {
      id: "q_emp_type",
      question: "What was the nature of your employment arrangement?",
      type: "choice",
      options: [
        "Full-time permanent employee with appointment letter",
        "Probationary employee",
        "Contractor / Consultant / Freelancer",
        "Internship"
      ],
      helpText: "Statutory protections differ between corporate employees, industrial workmen, and independent contractors."
    },
    {
      id: "q_notice",
      question: "Did you serve the notice period specified in your contract?",
      type: "choice",
      options: [
        "Yes, served full contractual notice period",
        "Offered payment in lieu of notice (buyout)",
        "Terminated by employer without notice",
        "Did not serve full notice period"
      ],
      helpText: "Notice period adherence directly affects entitlement to full and final settlement and relieving letters."
    },
    {
      id: "q_handover",
      question: "Was work and company asset handover completed in writing?",
      type: "choice",
      options: [
        "Yes, have written handover clearance email",
        "Handed over assets but received no written clearance",
        "Handover was incomplete or disputed"
      ],
      helpText: "Written handover prevents unsubstantiated claims of asset retention."
    },
    {
      id: "q_dues_time",
      question: "How much time has elapsed since your last working day?",
      type: "choice",
      options: [
        "Less than 30 days",
        "30 to 60 days",
        "More than 60 days"
      ],
      helpText: "Most employment statutes require settlement within 7 to 30 days of separation."
    }
  ],

  "General": [
    {
      id: "q_gen_jurisdiction",
      question: "Which Indian state is this legal matter situated in?",
      type: "state_select",
      helpText: "State-level amendments and local court procedures vary across India."
    },
    {
      id: "q_gen_written",
      question: "Is there any written contract, communication, or receipt documenting the situation?",
      type: "choice",
      options: [
        "Yes, comprehensive written documentation exists",
        "Partial documentation (emails, chat messages, bank slips)",
        "Purely verbal understanding with no paper trail"
      ],
      helpText: "Documentary evidence is pivotal in determining legal recourse."
    },
    {
      id: "q_gen_prior_action",
      question: "Have you or the other party already sent a legal notice or approached police/court?",
      type: "choice",
      options: [
        "No legal steps taken yet",
        "Sent or received an informal written demand",
        "Received a formal Advocate's Legal Notice",
        "A police complaint or court case has been filed"
      ],
      helpText: "Pending proceedings require immediate consultation with an enrolled advocate."
    }
  ]
};

export const VERIFIED_KNOWLEDGE_BASE = [
  {
    id: "kb-001",
    act: "Indian Contract Act, 1872",
    actNumber: "Act No. 9 of 1872",
    section: "Section 73",
    sectionTitle: "Compensation for loss or damage caused by breach of contract",
    category: "Contracts & Agreements",
    summary: "When a contract has been broken, the party who suffers by such breach is entitled to receive, from the party who has broken the contract, compensation for any loss or damage caused to him thereby, which naturally arose in the usual course of things from such breach.",
    jurisdiction: "Union of India (Central)",
    officialUrl: "https://www.indiacode.nic.in/handle/123456789/2187",
    status: "Verified",
    lastVerifiedDate: "2026-02-15",
    verifiedBy: "Official India Code Gazette Sync"
  },
  {
    id: "kb-002",
    act: "Consumer Protection Act, 2019",
    actNumber: "Act No. 35 of 2019",
    section: "Section 2(47)",
    sectionTitle: "Definition of Unfair Trade Practice",
    category: "Consumer Rights",
    summary: "Defines unfair trade practices including false representation of goods, misleading warranty statements, refusing to issue bill/cash memo, and unjustified refusal to take back defective goods or refund consideration paid within thirty days.",
    jurisdiction: "Union of India (Central)",
    officialUrl: "https://www.indiacode.nic.in/handle/123456789/15256",
    status: "Verified",
    lastVerifiedDate: "2026-02-20",
    verifiedBy: "Ministry of Consumer Affairs Gazette"
  },
  {
    id: "kb-003",
    act: "Consumer Protection Act, 2019",
    actNumber: "Act No. 35 of 2019",
    section: "Section 35",
    sectionTitle: "Manner in which complaint shall be made",
    category: "Consumer Rights",
    summary: "Establishes that a complaint in relation to any goods sold or delivered or agreed to be sold, or any service provided, may be filed with a District Commission by the consumer personally or through online electronic filing (e-Daakhil).",
    jurisdiction: "Union of India (Central)",
    officialUrl: "https://www.indiacode.nic.in/handle/123456789/15256",
    status: "Verified",
    lastVerifiedDate: "2026-02-20",
    verifiedBy: "Ministry of Consumer Affairs Gazette"
  },
  {
    id: "kb-004",
    act: "Transfer of Property Act, 1882",
    actNumber: "Act No. 4 of 1882",
    section: "Section 108",
    sectionTitle: "Rights and liabilities of lessor and lessee",
    category: "Property & Rent",
    summary: "In the absence of a contract or local usage to the contrary, lessor must disclose known latent defects; lessee is bound to keep the property in as good condition as it was at the commencement of the lease, reasonable wear and tear and irresistible force excepted.",
    jurisdiction: "Union of India (Central)",
    officialUrl: "https://www.indiacode.nic.in/handle/123456789/2338",
    status: "Verified",
    lastVerifiedDate: "2026-01-10",
    verifiedBy: "Legislative Department, Ministry of Law and Justice"
  },
  {
    id: "kb-005",
    act: "Information Technology Act, 2000",
    actNumber: "Act No. 21 of 2000",
    section: "Section 66D",
    sectionTitle: "Punishment for cheating by personation by using computer resource",
    category: "Cybercrime & Digital",
    summary: "Whoever, by means of any communication device or computer resource, cheats by personation, shall be punished with imprisonment of either description for a term which may extend to three years and shall also be liable to fine which may extend to one lakh rupees.",
    jurisdiction: "Union of India (Central)",
    officialUrl: "https://www.indiacode.nic.in/handle/123456789/1999",
    status: "Verified",
    lastVerifiedDate: "2026-01-28",
    verifiedBy: "Ministry of Electronics and Information Technology"
  },
  {
    id: "kb-006",
    act: "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023",
    actNumber: "Act No. 46 of 2023",
    section: "Section 173",
    sectionTitle: "Information in cognizable cases (First Information Report / Zero FIR)",
    category: "Police & Criminal Procedure",
    summary: "Mandates that every information relating to the commission of a cognizable offence, if given orally to an officer in charge of a police station, shall be reduced to writing. Explicitly incorporates electronic communication and Zero FIR irrespective of territorial jurisdiction.",
    jurisdiction: "Union of India (Central)",
    officialUrl: "https://www.indiacode.nic.in/handle/123456789/19864",
    status: "Verified",
    lastVerifiedDate: "2026-02-01",
    verifiedBy: "Ministry of Home Affairs Central Repository"
  },
  {
    id: "kb-007",
    act: "Payment of Wages Act, 1936",
    actNumber: "Act No. 4 of 1936",
    section: "Section 5",
    sectionTitle: "Time of payment of wages",
    category: "Employment & Labour",
    summary: "Provides that where the employment of any person is terminated by or on behalf of the employer, the wages earned by him shall be paid before the expiry of the second working day from the day on which his employment is terminated.",
    jurisdiction: "Union of India (Central)",
    officialUrl: "https://www.indiacode.nic.in/handle/123456789/2361",
    status: "Verified",
    lastVerifiedDate: "2026-01-18",
    verifiedBy: "Ministry of Labour & Employment"
  },
  {
    id: "kb-008",
    act: "Motor Vehicles Act, 1988",
    actNumber: "Act No. 59 of 1988",
    section: "Section 133",
    sectionTitle: "Duty of owner of motor vehicle to give information",
    category: "Traffic & Vehicles",
    summary: "Specifies obligations to furnish vehicle information and governs procedures for electronic enforcement and photographic evidence requirements under Section 136A (Electronic monitoring and enforcement of road safety).",
    jurisdiction: "Union of India (Central)",
    officialUrl: "https://www.indiacode.nic.in/handle/123456789/1998",
    status: "Verified",
    lastVerifiedDate: "2026-01-25",
    verifiedBy: "Ministry of Road Transport and Highways"
  },
  {
    id: "kb-009",
    act: "Real Estate (Regulation and Development) Act (RERA), 2016",
    actNumber: "Act No. 16 of 2016",
    section: "Section 18",
    sectionTitle: "Return of amount and compensation for delayed possession",
    category: "Property & Rent",
    summary: "If the promoter fails to complete or give possession of an apartment, plot, or building in accordance with the terms of agreement for sale, the promoter shall be liable on demand to the allottees to return the amount received with interest at prescribed rate.",
    jurisdiction: "Union of India (Central)",
    officialUrl: "https://www.indiacode.nic.in/handle/123456789/2158",
    status: "Verified",
    lastVerifiedDate: "2026-02-12",
    verifiedBy: "Ministry of Housing and Urban Affairs"
  }
];

export const MOCK_ADMIN_FEEDBACK = [
  {
    id: "fb-1",
    userQueryId: "case-rental-101",
    reportedAt: "2026-10-05 14:22",
    userComment: "The citation to TN Rent Control Act should highlight the 2017 Act since the 1973 Act was repealed.",
    status: "Resolved",
    reviewerNotes: "Verified. Citation updated to 2017 TN Act."
  },
  {
    id: "fb-2",
    userQueryId: "case-consumer-102",
    reportedAt: "2026-10-06 09:40",
    userComment: "Link to e-Daakhil portal was helpful. Please also add the WhatsApp complaint number for National Consumer Helpline.",
    status: "Under Review",
    reviewerNotes: "Reviewing addition of 8800001915 NCH WhatsApp bot."
  }
];
