// Mock data for portfolio - will be replaced with backend integration later

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Nitin Kumar",
    title: "Front-End Engineer / Front-End Dev",
    tagline: "Crafting Scalable Solutions, One Pixel at a Time",
    location: "Bengaluru, India",
    email: "nitin.ku25@gmail.com",
    phone: "9113707856",
    linkedin: "linkedin.com/in/nitinkumarshukla",
    github: "github.com/nitinkumar",
    yearsOfExperience: 3,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nitin",
  },

  // About Section
  about: {
    summary:
      "Front-End Engineer with 3 years of experience building scalable, performance-driven web applications for enterprise platforms. Skilled in React.js, Next.js, and Redux with experience in Micro Front-End Architecture, Core Web Vitals optimization, and modular UI development.",
    description:
      "I specialize in transforming complex requirements into elegant, performant user interfaces. My expertise lies in building enterprise-grade applications that prioritize both user experience and technical excellence. I'm passionate about Core Web Vitals optimization, modern architecture patterns, and creating accessible web experiences.",
    highlights: [
      "3+ years of professional front-end development",
      "Expert in React.js, Next.js, and modern JavaScript",
      "Micro Front-End Architecture implementation",
      "Core Web Vitals optimization specialist",
      "Proven track record in enterprise applications",
    ],
  },

  // Skills organized by category
  skills: [
    {
      category: "Core Frontend",
      icon: "Code2",
      technologies: [
        { name: "JavaScript (ES6+)", level: 95 },
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Redux", level: 90 },
        { name: "React Query", level: 85 },
      ],
    },
    {
      category: "Architecture & Performance",
      icon: "Zap",
      technologies: [
        { name: "Micro Frontends", level: 85 },
        { name: "SSR/CSR", level: 90 },
        { name: "Core Web Vitals", level: 95 },
        { name: "Webpack", level: 80 },
        { name: "Babel", level: 80 },
        { name: "WPO", level: 90 },
      ],
    },
    {
      category: "Design & UI",
      icon: "Palette",
      technologies: [
        { name: "Tailwind CSS", level: 95 },
        { name: "Material UI", level: 85 },
        { name: "Responsive Design", level: 95 },
        { name: "Accessibility (a11y)", level: 90 },
        { name: "Motion Design", level: 85 },
        { name: "Interaction Design", level: 85 },
      ],
    },
    {
      category: "Tools & Workflow",
      icon: "Wrench",
      technologies: [
        { name: "Git/GitHub", level: 90 },
        { name: "ES Lint", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "Agile/CI-CD", level: 85 },
        { name: "Data Structures", level: 80 },
        { name: "AG Grid", level: 85 },
      ],
    },
  ],

  // Work Experience
  experience: [
    {
      id: 1,
      title: "Associate Software Developer",
      company: "VMA Labs Pvt. Ltd.",
      location: "Bengaluru",
      period: "2023 – Present",
      type: "Full-time",
      description:
        "Contributong to front-end development for enterprise platforms with focus on performance and scalability.",
      achievements: [
        "Developed scalable front-end modules for enterprise platforms, improving load times and maintaining top-tier Core Web Vitals (LCP/CLS)",
        "Implemented modular components using React.js, Redux and Tailwind CSS, ensuring accessibility, responsiveness and maintainability",
        "Utilized React Query for efficient API caching and asynchronous state management, reducing redundant API calls",
        "Optimized complex state updates by introducing memoized Redux selectors (Reselect), improving render performance",
        "Collaborated with backend and DevOps teams to ensure smooth API integration and reliable CI/CD deployments",
        "Contributed to adoption of Micro-Frontend Architecture, enabling independent module deployment",
      ],
      technologies: [
        "React.js",
        "Redux",
        "Tailwind CSS",
        "React Query",
        "Micro Frontends",
      ],
    },
    {
      id: 2,
      title: "RF Engineer (ASE Engineering)",
      company: "Amdocs (Contractor)",
      location: "Remote",
      period: "2022 - 2023",
      type: "Contract",
      description:
        "Worked on AT&T network deployment projects across multiple U.S. regions.",
      achievements: [
        "Drafted AT&T blueprints for network deployment in U.S.A. regions (Missouri, Kansas, Arkansas)",
        "Utilized AT&T platforms (ARAMIS-DT, MIC, CSV) and Google Earth Pro for fiber route implementation",
        "Ensured fulfillment of service standards through detailed inspection and mapping",
        "Contributed to activation maps ensuring reliable network deployment",
      ],
      technologies: ["ARAMIS-DT", "MIC", "CSV", "Google Earth Pro"],
    },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "Company & Clients' Website Development",
      company: "VMA Labs Pvt. Ltd.",
      description:
        "Collaborated within a team to design and implement pixel-perfect, responsive front-end experiences for key corporate and client websites.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Redux", "React/TanStack Query"],
      features: [
        "Pixel-perfect responsive design",
        "Optimal Core Web Vitals scores",
        "Cross-browser compatibility",
        "Shorter load duration",
        "Best performance practices",
      ],
      metrics: {
        improvement: "40% faster load time",
        score: "LCP < 2.5s, CLS < 0.1",
      },
      category: "Enterprise",
    },
    {
      id: 2,
      title: "Vendor Portal Management System",
      company: "VMA Labs Pvt. Ltd.",
      description:
        "Developed user-facing components and state management for mission-critical business modules with high interactivity requirements.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      technologies: ["React.js", "Redux", "Reselect", "Material UI"],
      features: [
        "Complex state management",
        "Memoized Redux selectors",
        "High interactivity (INP/TBT)",
        "Compliance with regulations",
        "Administrator panel",
      ],
      metrics: {
        improvement: "60% faster re-renders",
        score: "Reduced render time by 45%",
      },
      category: "Enterprise",
    },
    {
      id: 3,
      title: "Real-Time Analytics Dashboard",
      company: "Personal Project",
      description:
        "Built a comprehensive analytics dashboard with real-time data visualization and interactive charts for business intelligence.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      technologies: [
        "React.js",
        "React Apex Charts",
        "WebSocket",
        "Tailwind CSS",
      ],
      features: [
        "Real-time data updates",
        "Interactive charts",
        "Custom data filters",
        "Export functionality",
        "Responsive grid layout",
      ],
      category: "Personal",
    },
  ],

  // Education
  education: {
    degree: "Bachelor of Technology",
    field: "Electronics & Communication Engineering",
    institution: "Chandigarh Engineering College, Mohali",
    university: "I.K. Gujral Punjab Technical University",
    period: "2014 – 2018",
    grade: "First Division (77.6%)",
    coursework: ["C", "C++", "Data Structures and Algorithms"],
  },

  // Statistics for hero section
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Delivered", value: "15+" },
    { label: "Core Web Vitals", value: "95+" },
    { label: "Client Satisfaction", value: "100%" },
  ],
};

// Live Projects data (these will be actual working projects)
export const liveProjects = [
  {
    id: 1,
    title: "AI Resume Analyzer",
    description:
      "Intelligent resume parsing and analysis tool with keyword extraction and ATS scoring.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    technologies: ["React", "Node.js", "OpenAI", "PDF.js"],
    features: ["PDF parsing", "Keyword extraction", "ATS score", "Suggestions"],
    status: "Live",
    demoUrl: "/live-projects/resume-analyzer",
    category: "AI/ML",
  },
  {
    id: 2,
    title: "Weather Intelligence Hub",
    description:
      "Real-time weather dashboard with forecasts, charts, and location-based insights.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    technologies: ["React", "OpenWeather API", "Recharts", "Geolocation"],
    features: [
      "Real-time data",
      "7-day forecast",
      "Interactive charts",
      "Multiple locations",
    ],
    status: "Live",
    demoUrl: "/live-projects/weather-hub",
    category: "Data Visualization",
  },
  {
    id: 3,
    title: "TaskFlow Pro",
    description:
      "Advanced task management with drag-drop, priority sorting, and productivity analytics.",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    technologies: ["React", "DnD Kit", "LocalStorage", "Chart.js"],
    features: ["Drag & drop", "Categories", "Due dates", "Analytics"],
    status: "Live",
    demoUrl: "/live-projects/taskflow",
    category: "Productivity",
  },
  {
    id: 4,
    title: "CodeSnippet Vault",
    description:
      "Developer's code snippet manager with syntax highlighting and quick search.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    technologies: ["React", "Prism.js", "IndexedDB", "Fuse.js"],
    features: ["Syntax highlight", "Tags", "Search", "Export/Import"],
    status: "Live",
    demoUrl: "/live-projects/code-vault",
    category: "Developer Tools",
  },
  {
    id: 5,
    title: "Portfolio Generator",
    description:
      "Instant portfolio website generator with customizable themes and export options.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    technologies: ["React", "Template Engine", "Export API", "Tailwind"],
    features: ["Theme builder", "Live preview", "Export code", "Responsive"],
    status: "Coming Soon",
    demoUrl: "/live-projects/portfolio-gen",
    category: "Tools",
  },
];
