

export const generateMembers = (count: number) => {
    const roles = [
      "UX Designer",
      "Full Stack Developer",
      "Data Scientist",
      "Product Manager",
      "DevOps Engineer",
      "Marketing Specialist",
      "Cybersecurity Analyst",
      "AI Researcher",
    ];
    const companies = [
      "DesignCo",
      "TechInnovate",
      "DataMind",
      "ProductPro",
      "CloudTech",
      "GrowthHack",
      "SecureNet",
      "FutureTech",
    ];
    const locations = [
      "San Francisco, CA",
      "New York, NY",
      "Boston, MA",
      "Seattle, WA",
      "Austin, TX",
      "Miami, FL",
      "Washington, D.C.",
      "Los Angeles, CA",
    ];
    const skills = [
      "UI/UX",
      "Figma",
      "User Research",
      "React",
      "Node.js",
      "MongoDB",
      "Python",
      "Machine Learning",
      "SQL",
      "Agile",
      "User Stories",
      "Roadmapping",
      "AWS",
      "Docker",
      "Kubernetes",
      "SEO",
      "Content Strategy",
      "Analytics",
      "Network Security",
      "Penetration Testing",
      "Incident Response",
      "Deep Learning",
      "NLP",
      "Computer Vision",
    ];
    const universities = [
      "Stanford University",
      "MIT",
      "Harvard University",
      "UC Berkeley",
      "Carnegie Mellon University",
      "Georgia Tech",
      "University of Washington",
      "Cornell University",
    ];
    const degrees = [
      "B.S. Computer Science",
      "M.S. Data Science",
      "B.A. Design",
      "MBA",
      "Ph.D. Artificial Intelligence",
      "B.S. Cybersecurity",
      "M.S. Software Engineering",
      "B.S. Information Systems",
    ];
  
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      role: roles[Math.floor(Math.random() * roles.length)],
      company: companies[Math.floor(Math.random() * companies.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      skills: Array.from(
        { length: 3 },
        () => skills[Math.floor(Math.random() * skills.length)]
      ),
      email: `user${i + 1}@example.com`,
      phone: `(${Math.floor(Math.random() * 900) + 100}) ${
        Math.floor(Math.random() * 900) + 100
      }-${Math.floor(Math.random() * 9000) + 1000}`,
      education: {
        university: universities[Math.floor(Math.random() * universities.length)],
        degree: degrees[Math.floor(Math.random() * degrees.length)],
        year: 2010 + Math.floor(Math.random() * 13),
      },
      experience: [
        {
          title: roles[Math.floor(Math.random() * roles.length)],
          company: companies[Math.floor(Math.random() * companies.length)],
          duration: `${2015 + Math.floor(Math.random() * 7)} - Present`,
        },
        {
          title: roles[Math.floor(Math.random() * roles.length)],
          company: companies[Math.floor(Math.random() * companies.length)],
          duration: `${2010 + Math.floor(Math.random() * 5)} - ${
            2015 + Math.floor(Math.random() * 7)
          }`,
        },
      ],
      certifications: [
        skills[Math.floor(Math.random() * skills.length)] + " Certification",
        skills[Math.floor(Math.random() * skills.length)] + " Professional",
      ],
      description:"Passionate about creating scalable web applications and mentoring junior developers. Always exploring new technologies to improve development processes.",
    }));
  };



