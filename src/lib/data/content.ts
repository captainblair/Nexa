export const heroVideo = {
  src: "/videos/nairobi-hero.mp4",
  poster: "/images/nairobi-county-skyline.jpg",
} as const;

export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  story: string;
  tags: string[];
  year: string;
  image: string;
  imagePosition?: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: "ustawi",
    title: "USTAWI",
    subtitle: "Rental Management Platform",
    story:
      "A full-stack rental operations platform — tenant workflows, property records, and financial tracking unified in one disciplined system built for real estate operators who need reliability, not demos.",
    tags: ["Django", "React", "PostgreSQL", "REST"],
    year: "2025",
    image: "/images/ustawilive.png",
    imagePosition: "50% 20%",
    liveUrl: "https://ustawi-1.vercel.app",
  },
  {
    slug: "traviona-consulting",
    title: "Traviona Consulting",
    subtitle: "Corporate Website · Digital Presence",
    story:
      "A refined digital experience created for a consulting firm seeking a modern and credible online presence. The platform combines structured content, responsive design, and maintainable architecture to communicate services clearly and create a seamless experience across devices. Built with attention to performance, usability, and a professional brand identity.",
    tags: ["Laravel", "Blade", "Tailwind CSS", "JavaScript", "MySQL"],
    year: "2025",
    image: "/images/travionalive.png",
    imagePosition: "50% 20%",
    liveUrl: "https://travionaconsulting.top",
  },
  {
    slug: "schoolsys",
    title: "SchoolSys",
    subtitle: "School Operations Platform",
    story:
      "Modernizing how learning institutions manage their everyday operations. SchoolSys is a full-stack education management system built to bring structure to the complex workflows behind schools — from student records and academic processes to financial tracking and administration. The platform transforms disconnected manual tasks into a unified digital system with role-based access, organized data management, and purpose-built workflows for students, teachers, and administrators.",
    tags: [
      "Django",
      "Python",
      "Database Design",
      "Authentication",
      "Role-Based Access Control",
      "Web Application Architecture",
    ],
    year: "2025",
    image: "/images/school1.png",
    imagePosition: "50% 20%",
    liveUrl: "https://schoolsys-00mj.onrender.com",
  },
  {
    slug: "nexa",
    title: "Nexa Nairobi",
    subtitle: "Studio Platform",
    story:
      "The studio's own digital presence — a cinematic, editorial experience reflecting how we think about product: restraint, motion, and engineering as narrative.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    year: "2026",
    image: "/images/nairobi-kicc.jpg",
    imagePosition: "50% 50%",
  },
];
