// Mock data for Prathvik Raikar's Portfolio
export const mockData = {
  personal: {
    name: "PRATHVIK RAIKAR",
    title: "Mobile & Web App Developer",
    email: "prathvikraikar@gmail.com",
    phone: "+91 8073260791",
    location: "HONNAVAR",
    linkedin: "linkedin.com/in/prathvikraikar",
    tagline: "Dedicated Flutter & Node.js developer building high-quality cross-platform applications",
    bio: "2.4+ years of hands-on experience in building high-quality cross-platform applications. Proficient in Dart and well-versed in all aspects of UI development, including responsive design, animations, and complex layouts."
  },

  experience: [
    {
      id: 1,
      company: "NIVEUS PART OF NTT DATA",
      position: "Cloud Associate",
      duration: "2023 – present",
      location: "Udupi, India",
      highlights: [
        "Enhanced iMobile Pay app used by millions across India",
        "Developed KYC update, fund transfers, bill payments using Flutter",
        "Engineered reusable custom widgets for complex UI patterns",
        "Integrated RESTful APIs with robust error handling",
        "End-to-end ownership from design to production deployment"
      ]
    },
    {
      id: 2,
      company: "Dreamsoft Innovations",
      position: "Flutter Developer",
      duration: "02/2023 – 06/2023",
      location: "Manglore, India",
      highlights: [
        "Developed Toodler mobile app from scratch using Flutter",
        "Led UI development and component architecture",
        "Delivered features following Agile sprint cycles",
        "Integrated React.js and Node.js components"
      ]
    },
    {
      id: 3,
      company: "KodNest",
      position: "Full Stack Developer (Intern)",
      duration: "2022",
      location: "Banglore, India",
      highlights: [
        "Worked on Java and full stack development projects",
        "Implemented SQL, JDBC, Web Development concepts",
        "Gained experience in DSA, recursion, trees, sorting algorithms"
      ]
    }
  ],

  skills: [
    { name: "Flutter", level: 95, category: "Mobile" },
    { name: "FlutterFlow", level: 90, category: "Mobile" },
    { name: "Dart", level: 95, category: "Languages" },
    { name: "Java", level: 85, category: "Languages" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "React.js", level: 75, category: "Frontend" },
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "SQL", level: 85, category: "Database" },
    { name: "Git/GitLab", level: 88, category: "Tools" },
    { name: "Jenkins", level: 70, category: "Tools" },
    { name: "Android", level: 80, category: "Mobile" },
    { name: "Project Management", level: 85, category: "Management" }
  ],

  projects: [
    {
      id: 1,
      title: "iMobile Pay Banking App",
      description: "Enhanced core banking features for millions of users across India including KYC updates, fund transfers, and bill payments.",
      techStack: ["Flutter", "Dart", "REST APIs", "FlutterFlow"],
      category: "Mobile App",
      status: "Production",
      highlights: [
        "Millions of active users",
        "Real-time validations",
        "Cross-platform consistency",
        "Robust error handling"
      ]
    },
    {
      id: 2,
      title: "Toodler Mobile Application",
      description: "Complete mobile application developed from scratch with pixel-perfect UI and responsive design across devices.",
      techStack: ["Flutter", "Dart", "UI/UX", "Agile"],
      category: "Mobile App",
      status: "Completed",
      highlights: [
        "End-to-end development",
        "Pixel-perfect implementation",
        "Tight deadline delivery",
        "Component architecture"
      ]
    },
    {
      id: 3,
      title: "Smart Traffic Control System",
      description: "AI-powered traffic light system using real-time density detection to optimize signal timing and reduce congestion.",
      techStack: ["Python", "OpenCV", "Machine Learning", "AI"],
      category: "AI/ML",
      status: "Academic Project",
      highlights: [
        "Real-time traffic analysis",
        "ML algorithms implementation",
        "Traffic flow optimization",
        "Computer vision integration"
      ]
    }
  ],

  education: {
    degree: "Bachelor of Engineering",
    college: "Canara Engineering College",
    cgpa: "8.2",
    duration: "2019 – 2023",
    location: "Manglore, India"
  },

  certificates: [
    {
      name: "Flutter Certification",
      issuer: "Google",
      year: "2023"
    },
    {
      name: "Google Cloud Certified Professional Cloud Architect",
      issuer: "Google Cloud",
      year: "2023"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Project Lead",
      company: "Niveus Solutions",
      text: "Prathvik consistently delivers high-quality code and takes full ownership of complex features. His Flutter expertise is exceptional.",
      rating: 5
    },
    {
      id: 2,
      name: "Team Member",
      company: "Dreamsoft Innovations",
      text: "Great collaboration skills and ability to work under tight deadlines. Always produces pixel-perfect implementations.",
      rating: 5
    }
  ],

  githubStats: {
    contributions: 847,
    repositories: 23,
    followers: 45,
    following: 32,
    languages: ["Dart", "Java", "JavaScript", "Python"]
  }
};

// Mock functions for form submissions and interactions
export const mockFunctions = {
  sendContactMessage: async (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Contact message sent:", formData);
        resolve({ success: true, message: "Message sent successfully!" });
      }, 1000);
    });
  },

  downloadResume: () => {
    console.log("Resume download initiated");
    // Simulate resume download
    const link = document.createElement('a');
    link.download = 'Prathvik_Raikar_Resume.pdf';
    link.click();
  },

  subscribeNewsletter: async (email) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Newsletter subscription:", email);
        resolve({ success: true, message: "Subscribed successfully!" });
      }, 800);
    });
  }
};