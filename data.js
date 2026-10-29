/* =========================================================
   Single source of truth for all portfolio content.
   Replace every value marked TODO with your real details.
   ========================================================= */
window.PORTFOLIO = {
  name: "Smrithi",
  status: "Open to internships & fellowships",
  headline: "MSc Computer Science Student | Software Engineering Intern | State-Level Developer Fellow",
  bio: "I'm passionate about building scalable software and understanding the systems underneath it, from operating systems to distributed back ends. I learn best by shipping practical, well-tested projects and collaborating with developer communities.",

  email: "hello@example.com", // TODO: your email
  resume: "assets/Smrithi_Resume.pdf", // TODO: drop your PDF in /assets
  socials: [
    { label: "GitHub", icon: "github", url: "https://github.com/your-username" }, // TODO
    { label: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/your-username" }, // TODO
    { label: "Twitter / X", icon: "twitter", url: "https://x.com/your-handle" }, // TODO
  ],

  highlight: {
    badge: "Competitively Selected",
    title: "State-Level Developer Program Fellow",
    text: "Selected through a competitive state-wide process for a cohort program combining expert mentorship, hands-on engineering challenges and community leadership.", // TODO: add program name / year
    points: ["Competitive selection", "1:1 mentorship", "Community leadership"],
  },

  stats: [
    { icon: "layers", label: "Specialization Tracks", value: "Systems · Backend · Cloud" }, // TODO
    { icon: "book-open", label: "Ongoing Coursework / Research", value: "Distributed Systems, ML Foundations" }, // TODO
    { icon: "git-branch", label: "Open Source", value: "Active contributor" }, // TODO
  ],

  experience: [
    {
      role: "Software Engineering Intern",
      org: "Company Name", // TODO
      duration: "Jun 2026 – Present", // TODO
      current: true,
      stack: ["Python", "React", "PostgreSQL", "Docker"],
      bullets: [
        "Built and shipped REST API endpoints serving X requests/day with p95 latency under Y ms.", // TODO metrics
        "Cut report-generation time by ~40% by optimizing SQL queries and adding indexes.", // TODO
        "Containerized services with Docker and wrote unit/integration tests raising coverage to 85%.", // TODO
      ],
    },
    {
      role: "Software Development Intern",
      org: "Previous Company / Org", // TODO
      duration: "Dec 2025 – Feb 2026", // TODO
      current: false,
      stack: ["JavaScript", "Node.js", "Git"],
      bullets: [
        "Developed responsive front-end features used by N+ users.", // TODO
        "Collaborated in code reviews and agile sprints with a team of M engineers.", // TODO
      ],
    },
  ],

  projects: [
    {
      title: "Project One", // TODO
      description: "A scalable service that does something impactful. Replace with a one or two line summary of the problem and your solution.",
      tags: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      demo: "#", // TODO live demo URL
      repo: "https://github.com/your-username/project-one", // TODO
    },
    {
      title: "Project Two", // TODO
      description: "A responsive web app with real-time features. Mention scale, users or a measurable result.",
      tags: ["React", "TypeScript", "Node.js"],
      demo: "#",
      repo: "https://github.com/your-username/project-two",
    },
    {
      title: "Project Three", // TODO
      description: "A systems-level tool, such as a custom scheduler, shell or key-value store, built to understand how things work under the hood.",
      tags: ["C++", "Linux", "OS Concepts"],
      demo: "#",
      repo: "https://github.com/your-username/project-three",
    },
    {
      title: "Project Four", // TODO
      description: "A data or ML project with clear evaluation results and a clean API on top.",
      tags: ["Python", "scikit-learn", "REST API"],
      demo: "#",
      repo: "https://github.com/your-username/project-four",
    },
  ],

  skills: [
    { title: "Languages", icon: "code-2", items: ["Python", "C++", "JavaScript", "TypeScript", "SQL", "Java"] },
    { title: "Frameworks & Tools", icon: "wrench", items: ["React", "Node.js", "Git", "Linux", "Docker", "REST APIs", "Tailwind CSS"] },
    { title: "Core CS Fundamentals", icon: "cpu", items: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks"] },
  ],

  education: {
    degree: "MSc in Computer Science",
    school: "University Name", // TODO
    duration: "2025 – 2027 (ongoing)", // TODO
    grade: "GPA: X.XX / 10 (or Distinction)", // TODO
    modules: ["Advanced Algorithms", "Distributed Systems", "Machine Learning", "Advanced DBMS", "Cloud Computing"], // TODO
  },

  certifications: [
    { title: "State-Level Developer Program Certification", issuer: "State Developer Program", year: "2026" }, // TODO
    { title: "Hackathon Winner / Finalist", issuer: "Hackathon Name", year: "2026" }, // TODO
    { title: "Cloud / Backend Certification", issuer: "Issuer", year: "2025" }, // TODO
  ],
};
