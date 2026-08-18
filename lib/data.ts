export const profile = {
  name: "Jad Chreim",
  initials: "JC",
  title: "IT Support Specialist",
  greeting: "Hi, I'm Jad",
  summary:
    "With a background in Finance and Customer Care, I had the opportunity to start a new career. My capacity to softly handle both hardware and software support systems allowed me to join the IT team within my current company and being in charge of essential IT responsibilities.",
  location: "Beirut, Lebanon",
  dob: "June 27, 1993",
  phone: "+961 81 056 950",
  phoneHref: "tel:+96181056950",
  email: "jadchreim@hotmail.com",
  emailHref: "mailto:jadchreim@hotmail.com",
  whatsapp: "https://wa.me/96181056950",
  linkedin: "https://www.linkedin.com/in/jad-chreim-056524346/",
};

export const languages = [
  { name: "English", level: "Professional" },
  { name: "French", level: "Fluent" },
  { name: "Arabic", level: "Native" },
];

export const highlights = [
  {
    label: "Current role",
    value: "IT Support Specialist",
    detail: "CCapital Finance Company S.A.L",
  },
  {
    label: "Experience",
    value: "5+ years",
    detail: "In IT & customer-facing operations",
  },
  {
    label: "Foundation",
    value: "Banking & Finance",
    detail: "Bachelor's & Master's degree",
  },
];

export type ExperienceEntry = {
  company: string;
  companyHref: string;
  role: string;
  period: string;
  bullets?: string[];
  groups?: { title: string; items: string[] }[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "CCapital Finance Company S.A.L",
    companyHref: "https://groupcfc.com/",
    role: "IT Support Specialist",
    period: "July 2021 - Present",
    groups: [
      {
        title: "Core systems administration",
        items: [
          "General administration of ICBS, CollectSmart, and SAP BusinessObject BI",
          "ICBS (Integrated Computerized Banking System) - a comprehensive platform for managing front and back office operations in banks and financial institutions",
          "CollectSmart - a web application tailored for recovery and collection teams to track, update, and action debtor accounts efficiently",
          "SAP BusinessObject BI - managing reports, including removing, modifying, and adding new reports for specific user groups",
        ],
      },
      {
        title: "E-Wallet project (2024)",
        items: [
          "Used WebService technology to ensure seamless communication between customers and the internal system",
          "Conducted thorough testing and debugging to ensure correct data population in specified fields",
          "Ensured API endpoints correctly mapped to corresponding database fields",
          "Performed integration testing to validate system component interactions",
          "Implemented robust security measures to safeguard user data and transactions",
          "Enabled real-time issue tracking through structured logging of data flows",
          "Coordinated with stakeholders for requirement gathering and progress updates",
        ],
      },
      {
        title: "Infrastructure & support",
        items: [
          "Extracted MIS reports as requested by business users",
          "Ensured compliance of system hardware, OS, and software with organizational standards",
          "Developed and maintained installation and configuration procedures",
          "Performed daily backup operations, ensuring data integrity, media rotation, and offsite storage",
          "Administered Active Directory, Exchange server, and file servers",
          "Provided user training and technical support for IT-related issues",
        ],
      },
    ],
  },
  {
    company: "CCapital Finance Company S.A.L",
    companyHref: "https://groupcfc.com/",
    role: "Customer Care Representative",
    period: "March 2016 - July 2021",
  },
];

export type EducationEntry = {
  school: string;
  schoolHref: string;
  period: string;
  program: string;
  detail?: string;
};

export const education: EducationEntry[] = [
  {
    school: "Universite des Peres Antonines",
    schoolHref: "https://www.iau-aiu.net/?lang=fr",
    period: "2012 - 2016",
    program: "Bachelor & Master's degree in Banking & Finance",
  },
  {
    school: "BML Istisharat Lebanon",
    schoolHref: "https://www.istisharat.com/",
    period: "2023",
    program: "Oracle Developer Track",
    detail:
      "Introduction to Oracle RDBMS & Systems Modeling, Oracle Intro to SQL, PL/SQL, Oracle Forms and Report Builder, Logon & Security",
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Banking & finance systems",
    skills: ["ICBS", "CollectSmart", "SAP BusinessObject BI", "MIS Reporting"],
  },
  {
    title: "Integration & development",
    skills: [
      "WebService Integration",
      "API Testing & Debugging",
      "System Integration Testing",
      "Secure API Handling",
      "Database Management",
      "Oracle RDBMS",
      "Database Systems Modeling",
      "Oracle SQL",
      "PL/SQL Programming",
      "Oracle Forms",
      "Oracle Report Builder",
    ],
  },
  {
    title: "Infrastructure & systems",
    skills: [
      "Active Directory",
      "Exchange Server",
      "File Server Management",
      "Backup & Recovery",
      "Hardware & OS Troubleshooting",
      "Software Configuration",
      "Database Security",
      "User Authentication (Logon)",
    ],
  },
  {
    title: "Security",
    skills: ["Data Security", "Data Protection"],
  },
  {
    title: "Professional practice",
    skills: [
      "Technical Support",
      "Customer Care",
      "Stakeholder Coordination",
      "Requirement Gathering",
      "Documentation",
      "Problem-Solving",
    ],
  },
];

export const pillars = [
  {
    title: "Core banking systems",
    description:
      "Day-to-day administration of ICBS, CollectSmart, and SAP BusinessObject BI across front and back office operations.",
  },
  {
    title: "Security-minded integration",
    description:
      "API testing, endpoint mapping, and integration testing built around safeguarding user data and transactions.",
  },
  {
    title: "Infrastructure & support",
    description:
      "Active Directory, Exchange, backups, and hardware/software troubleshooting kept to organizational standards.",
  },
  {
    title: "Grounded in finance",
    description:
      "A background in Banking & Finance and Customer Care before IT, so the systems are never just technical to me.",
  },
];

export const exploreLinks = [
  {
    href: "/about",
    title: "About",
    description: "Background, personal details, and languages.",
  },
  {
    href: "/experience",
    title: "Experience",
    description: "Work history at CCapital Finance and education.",
  },
  {
    href: "/skills",
    title: "Skills",
    description: "Systems, tools, and practices grouped by focus area.",
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Direct details to reach out about a role.",
  },
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];
