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