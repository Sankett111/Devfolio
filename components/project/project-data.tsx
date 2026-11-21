export type Project = {
  title: string;
  category: string;
  year: string;
  status: "In Development" | "Completed";
  description: string;
  focus: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Xeni",
    category: "Database Systems",
    year: "2026",
    status: "In Development",
    description:
      "A C++ based vector database focused on efficient vector storage and similarity search.",
    focus: "Vector storage & similarity search",
    technologies: ["C++", "STL"],
    image: "/images/cat.jpg",
    github: "#",
  },
  {
    title: "Colab-Vault",
    category: "Web Development",
    year: "2023",
    status: "Completed",
    description:
      "A personal vault for sharing files with QR",
    focus: "Interface design & development",
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    image: "/images/cat.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio",
    category: "Web Development",
    year: "2026",
    status: "Completed",
    description:
      "A personal space documenting my engineering journey, projects and technical explorations.",
    focus: "Interface design & development",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/cat.jpg",
    github: "#",
    live: "#",
  },
];