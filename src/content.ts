export const profile = {
  name: "Izel Bianchina",
  email: "izelbia1@gmail.com",
  location: "Johannesburg, South Africa",
  github: "https://github.com/izelbia1-lgtm",
  linkedin: "",
  whatsapp: "",
};

export interface Project {
  id: string;
  name: string;
  category: string;
  type: "client" | "demo";
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  repository: string;
  problem: string;
  built: string;
  features: string[];
  challenge: string;
  solution: string;
  result: string;
}

export const projects: Project[] = [
  {
    id: "odette",
    name: "Odette Hair Studio",
    category: "Client website / hair salon",
    type: "client",
    description:
      "A salon website that brings services, pricing and real hairstyle photography together, with a direct route to WhatsApp booking.",
    technologies: ["React", "TypeScript", "Vite", "CSS"],
    image: "odette.webp",
    liveUrl: "https://odette-hair-studio.vercel.app/",
    repository: "https://github.com/izelbia1-lgtm/odette-hair-studio",
    problem:
      "Present the salon’s services, prices and work in one place, and make appointment enquiries easy.",
    built:
      "A responsive website for Odette @ Hair Studio, with a service catalogue, hair-length guide, gallery and contact details.",
    features: [
      "Service and pricing catalogue",
      "Real salon work gallery",
      "WhatsApp booking links",
      "Directions and location information",
      "Responsive navigation and reduced-motion support",
    ],
    challenge: "",
    solution:
      "The implementation separates services, pricing, gallery and booking into focused components, with salon details held in a shared data file.",
    result:
      "An implemented salon website with service information, a work gallery and direct WhatsApp appointment enquiries.",
  },
  {
    id: "evergreen",
    name: "Evergreen Outdoor Living",
    category: "Concept / portfolio demo",
    type: "demo",
    description:
      "A garden, landscaping and pool-services concept, with an image-led project gallery and a guided enquiry flow.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "evergreen.webp",
    liveUrl: "https://evergreen-outdoor-living.vercel.app/",
    repository: "https://github.com/izelbia1-lgtm/evergreen-outdoor-living",
    problem:
      "Explore how a small outdoor-services business could organise its services and help visitors prepare a useful enquiry. This is a fictional business.",
    built:
      "A standalone sales demo covering gardens, pools and outdoor living, with service sections, project details and an enquiry form.",
    features: [
      "Responsive image gallery",
      "Keyboard-accessible comparison slider",
      "Project detail dialogs",
      "Enquiry message preview",
      "Optimised WebP images",
    ],
    challenge: "",
    solution:
      "Demo mode previews enquiries without sending them. Reusable components handle photography, project details and the contact flow.",
    result:
      "An implemented portfolio demonstration. Images illustrate the fictional business; they are not evidence of completed client work.",
  },
  {
    id: "flowpro",
    name: "FlowPro Plumbing",
    category: "Concept / portfolio demo",
    type: "demo",
    description:
      "A practical plumbing-business concept built around clear services, responsive layouts and a straightforward quote enquiry.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "flowpro.webp",
    liveUrl: "https://flowpro-plumbing-sooty.vercel.app/",
    repository: "https://github.com/izelbia1-lgtm/flowpro-plumbing",
    problem:
      "Explore a clear, mobile-friendly website for a plumbing business. FlowPro is fictional and is not presented as a client.",
    built:
      "A standalone plumbing website demo with service information and a quote-enquiry interface.",
    features: [
      "Mobile navigation",
      "Validated quote form",
      "Accessible enquiry dialog",
      "Prepared-message copying",
      "Local optimised photography",
    ],
    challenge: "",
    solution:
      "Business copy and contact settings are centralised. Demo mode prevents enquiries from being sent to placeholder contact details.",
    result:
      "An implemented concept website that can be reviewed as a portfolio project. No business or conversion results are claimed.",
  },
];

export const skills = [
  { name: "Frontend", items: ["React", "HTML", "CSS", "Tailwind CSS"] },
  { name: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL"] },
  {
    name: "Backend & data",
    items: [
      "Node.js",
      "Express",
      "Django",
      "Flask",
      "REST APIs",
      "MongoDB",
      "NoSQL",
    ],
  },
  {
    name: "Tools & training",
    items: ["Git", "GitHub", "Vite"],
    training: ["Docker", "CI/CD", "Kubernetes"],
  },
];

export const experience = [
  {
    dates: "Jan 2025 — Jan 2026",
    kind: "Independent projects & training",
    title: "Full Stack Developer (Projects & Training)",
    organisation: "Self-directed · Roodepoort",
    description:
      "Built and deployed applications using React, Node.js and Django. Developed REST APIs, connected frontends to backend systems, and worked with SQL and NoSQL databases.",
  },
  {
    dates: "Jan 2023 — Jan 2024",
    kind: "Freelance / self-employed",
    title: "Freelance Developer & Technical Support",
    organisation: "Self-employed · Johannesburg",
    description:
      "Debugged frontend and backend issues, provided technical support and troubleshooting, and applied basic cybersecurity practices to identify risks.",
  },
  {
    dates: "May 2022 — Apr 2023",
    kind: "Professional employment",
    title: "Remote Operations Assistant",
    organisation: "PBMS · Remote",
    description:
      "Managed administrative and operational tasks, coordinated schedules and communications, and maintained task tracking in a remote working environment.",
  },
];
