export const profile = {
  name: 'Satyraj Madake',
  role: 'Software Engineer',
  location: 'Pune, India',
  email: 'shmadake@gmail.com',
  phone: '+91 9022835662',
  github: 'https://github.com/shmadake',
  linkedin: 'https://linkedin.com/in/shmadake',
  leetcode: 'https://leetcode.com/shmadake',
  tagline: 'Building enterprise systems by day, shipping AI side projects by night.',
  summary:
    "Computer Engineering graduate currently building enterprise web applications for Merck KGaA at Cognizant. I work across the stack — Java and Spring Boot on the backend, React on the front — and I like projects with a measurable outcome: fewer manual queries, faster response times, safer access control.",
}

export const skills = {
  Languages: ['Java', 'Python', 'JavaScript', 'SQL'],
  'Frameworks & Libraries': [
    'Spring Boot',
    'Spring Security',
    'React.js',
    'Node.js',
    'Express.js',
    'JPA / Hibernate',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Socket.IO',
    'OpenCV',
  ],
  'Databases & Tools': [
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'GitHub',
    'Postman',
    'Maven',
    'Vercel',
  ],
}

export const experience = [
  {
    role: 'Software Engineer — Programmer Analyst',
    org: 'Cognizant',
    client: 'Client: Merck KGaA, Pune, India',
    period: 'July 2025 — Current',
    status: 'LIVE',
    points: [
      'Built and enhanced enterprise web applications for Merck KGaA using Java, Spring Boot, React.js, and SQL.',
      'Developed RESTful APIs and integrated them with React frontend components for seamless client-server data exchange.',
      'Collaborated with cross-functional teams in an Agile environment to analyze requirements, resolve defects, and deliver features.',
      'Participated in code reviews, unit testing, and debugging to maintain application stability and code quality.',
    ],
  },
  {
    role: 'Intern — Contractor',
    org: 'Cognizant',
    client: null,
    period: 'March 2025 — July 2025',
    status: 'COMPLETE',
    points: [
      'Assisted in developing, testing, and debugging enterprise applications using Java and Spring Boot under senior developers.',
      'Gained hands-on experience with React, REST APIs, Git, and Agile practices.',
    ],
  },
]

export const projects = [
  {
    name: 'HalfLife — Spaced Repetition Tracker',
    status: 'DEPLOYED',
    stack: ['React 19', 'Vite', 'Java 21', 'Spring Boot 4', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/shmadake/half-life-frontend',
    demo: 'https://half-life-frontend.vercel.app',
    metrics: [
      { value: '100%', label: 'server-resolved, user-scoped data' },
      { value: '24h', label: 'stateless JWT session expiry' },
    ],
    points: [
      'Full-stack spaced-repetition learning tracker — log what you\'ve learned and get told exactly when it\'s about to fade from memory.',
      'Java 21 + Spring Boot 4 backend on PostgreSQL, with stateless JWT auth verified on every request by a custom security filter.',
      'React 19 + Vite frontend with a clean dark-mode UI and friendly error handling, e.g. duplicate signups link straight to login.',
    ],
  },
  {
    name: 'Discussion Forum',
    status: 'DEPLOYED',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/shmadake/forum',
    demo: 'https://forum-ashen.vercel.app',
    metrics: [
      { value: '7', label: 'topic categories' },
      { value: 'MERN', label: 'full-stack' },
    ],
    points: [
      'Full-stack MERN discussion forum — register, start threads, reply, and manage your own posts across topics like Placements and Scholarships.',
      'Ownership-based access control enforced on the backend: only a post or reply\'s original author can edit or delete it.',
      'JWT sessions stored in httpOnly cookies rather than localStorage, with bcrypt-hashed passwords, reducing exposure to XSS-based token theft.',
    ],
  },
  {
    name: 'AI-Based Intelligent Traffic Management System',
    status: 'PUBLISHED',
    stack: ['Python', 'YOLOv8', 'CNN', 'OpenCV'],
    metrics: [
      { value: '31.05%', label: 'better traffic flow vs fixed-time signals' },
      { value: '50%', label: 'less wait in low-density lanes' },
    ],
    points: [
      'Co-developed an AI-based adaptive traffic signal system using YOLOv8 and CNN for real-time vehicle detection.',
      'Reduced average waiting time by 40% during rush hours; eliminated lane starvation entirely.',
      'Built an emergency/accident detection pipeline enabling automatic "green wave" signal priority and real-time alerts.',
      'Co-authored the findings as a published paper in JNRID, Vol. 3, Issue 6, June 2025.',
    ],
  },
]

export const achievements = [
  {
    title: 'Cheers Award — Cognizant',
    year: '2026',
    detail: 'For outstanding contribution and collaboration on the Merck KGaA US project.',
  },
  {
    title: 'The Complete 2024 Web Development Bootcamp — Udemy',
    year: 'Certification',
    detail: 'Full-stack web development certification.',
    link: 'https://ude.my/UC-6598211c-3074-42af-a10f-5dc3b6611c10',
  },
]

export const education = [
  {
    school: 'AISSMS College of Engineering, Pune',
    degree: 'Bachelor of Engineering in Computer Engineering',
    period: '2021 — 2025',
    detail: 'CGPA: 8.55',
  },
  {
    school: 'R.R. Shinde Jr. College',
    degree: 'Higher Secondary Education',
    period: '2019 — 2021',
    detail: 'Percentage: 83.17%',
  },
  {
    school: 'Sadhana Vidyalaya',
    degree: 'Secondary School Education (SSC)',
    period: '2019',
    detail: 'Percentage: 96.40%',
  },
]
