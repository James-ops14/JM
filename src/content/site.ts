export type NavigationItem = {
  id:
    | "home"
    | "about"
    | "services"
    | "ai"
    | "portfolio"
    | "process"
    | "team"
    | "contact";
  label: string;
};

export const navigationItems: readonly NavigationItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "ai", label: "AI" },
  { id: "portfolio", label: "Portfolio" },
  { id: "process", label: "Process" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export const company = {
  description:
    "JM is an emerging technology studio combining product thinking, design and engineering to create useful digital experiences.",
  about: {
    title:
      "Built from curiosity, practical experience and the drive to create better digital solutions.",
    paragraphs: [
      "JM is an emerging technology studio founded around a shared interest in turning ideas into useful digital products. It grows from hands-on experience designing interfaces, developing software and exploring how automation and artificial intelligence can solve real problems.",
      "We are building JM as a place where strategy, creativity and engineering work together. Our goal is not simply to deliver technology, but to understand the people behind each challenge and create solutions that feel clear, thoughtful and genuinely useful.",
    ],
    mission:
      "To design and build practical, human-centred digital solutions that help people and organisations work better, communicate clearly and turn promising ideas into dependable products.",
    vision:
      "To grow JM into a trusted African technology and creative-engineering company known for combining human understanding, intelligent systems and excellent product execution.",
  },
} as const;

export const services = [
  {
    title: "Websites and digital experiences",
    description:
      "Responsive, accessible and purpose-built websites that communicate clearly and support real business goals.",
  },
  {
    title: "Custom software",
    description:
      "Digital platforms and internal tools designed around specific workflows, users and operational needs.",
  },
  {
    title: "UI/UX and product design",
    description:
      "Research-informed interfaces, user journeys, prototypes and visual systems that make complex products easier to use.",
  },
  {
    title: "Automation and integrations",
    description:
      "Connected workflows that reduce repetitive work, improve consistency and help systems exchange information effectively.",
  },
  {
    title: "AI-enabled solutions",
    description:
      "Practical exploration and integration of intelligent tools, assistants and knowledge experiences where they provide genuine value.",
  },
  {
    title: "Technical support and improvement",
    description:
      "Ongoing review, maintenance and thoughtful improvement of existing websites, interfaces and software systems.",
  },
] as const;

export const projects = [
  {
    title: "Vital Watch",
    category: "Digital wellbeing · Product concept",
    status: "Concept in development",
    description:
      "A privacy-conscious mental-health and emotional-wellbeing platform envisioned for young people. Vital Watch explores how digital tools can help users understand their emotional patterns, document their recovery journey, find supportive communities and access appropriate professional support.",
  },
  {
    title: "Rental Ecosystem",
    category: "Property technology · Product concept",
    status: "Concept in development",
    description:
      "A direct rental ecosystem intended to connect tenants and property owners while supporting listings, vacancy visibility, rental payments, property management and ongoing communication in one coordinated platform.",
  },
] as const;

export const processSteps = [
  {
    title: "Understand",
    description:
      "We begin by clarifying the problem, the people affected and the outcome the product should support.",
  },
  {
    title: "Shape",
    description:
      "We organise requirements, user journeys and priorities into a practical product direction.",
  },
  {
    title: "Design and build",
    description:
      "Design and engineering move together through focused, testable iterations.",
  },
  {
    title: "Learn and improve",
    description:
      "Feedback, observation and performance guide what should be refined next.",
  },
] as const;

export const team = [
  {
    name: "James",
    role: "Co-founder & Product Lead",
    speciality: "Full-stack Engineer",
    alt: "James, Co-founder and Product Lead at JM",
  },
  {
    name: "Morgan",
    role: "Co-founder",
    speciality: "Designer · Frontend Engineer",
    alt: "Morgan, Co-founder, Designer and Frontend Engineer at JM",
  },
] as const;

export const contact = {
  phoneDisplay: "0768 379 101",
  phoneHref: "tel:+254768379101",
  whatsappHref:
    "https://wa.me/254768379101?text=Hello%20JM%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  social: { linkedin: null, instagram: null, x: null },
} as const;
