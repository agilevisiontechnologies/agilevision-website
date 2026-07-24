import { Code } from "lucide-react";
import { ProgramDetailTemplate } from "@/components/program-detail-template";

const data = {
  icon: Code,
  title: "AI Full Stack Java Engineer",
  tagline: "AI Career Program",
  duration: "6 months",
  mode: "Hybrid",
  batchStart: "January 2026",
  description:
    "Master full-stack development with AI integration. Build enterprise-grade applications using Java, Spring Boot, and modern AI frameworks.",
  heroDescription:
    "Become a full-stack engineer who can build AI-powered enterprise applications. Master Java, Spring Boot, React, and AI/ML integration in this comprehensive 6-month program.",
  whoShouldJoin: [
    "Fresh graduates in Computer Science, IT, or related fields",
    "Working professionals looking to transition into full-stack AI development",
    "Developers with 1-3 years of experience wanting to add AI capabilities",
    "Anyone passionate about building enterprise applications with AI",
    "Career switchers from non-tech backgrounds with strong analytical skills",
    "Professionals seeking to work on real enterprise projects",
  ],
  curriculum: [
    {
      module: "Module 1: Core Java & OOP",
      topics: [
        "Java fundamentals and OOP principles",
        "Collections framework and generics",
        "Exception handling and best practices",
        "Multi-threading and concurrency",
        "JVM internals and performance tuning",
      ],
    },
    {
      module: "Module 2: Spring Boot & Enterprise Java",
      topics: [
        "Spring Boot architecture and auto-configuration",
        "REST API development with Spring MVC",
        "Spring Data JPA and database integration",
        "Spring Security and OAuth 2.0",
        "Microservices with Spring Cloud",
      ],
    },
    {
      module: "Module 3: Frontend Development",
      topics: [
        "React fundamentals and hooks",
        "TypeScript for enterprise applications",
        "State management with Redux",
        "Next.js for server-side rendering",
        "Responsive UI with Tailwind CSS",
      ],
    },
    {
      module: "Module 4: AI/ML Integration",
      topics: [
        "Python for Java developers",
        "Machine learning fundamentals",
        "Building ML pipelines with Java",
        "Integrating TensorFlow and PyTorch models",
        "AI-powered features in enterprise apps",
      ],
    },
    {
      module: "Module 5: DevOps & Cloud",
      topics: [
        "Docker and containerization",
        "Kubernetes orchestration",
        "CI/CD with GitHub Actions",
        "AWS/Azure deployment",
        "Monitoring and observability",
      ],
    },
    {
      module: "Module 6: Enterprise Project",
      topics: [
        "Agile methodology and sprint planning",
        "Full-stack application development",
        "Code review and quality assurance",
        "Production deployment",
        "Documentation and handover",
      ],
    },
  ],
  technologyStack: [
    "Java 17+",
    "Spring Boot 3",
    "Spring Cloud",
    "React 18",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "Python",
    "TensorFlow",
    "Kafka",
    "GraphQL",
  ],
  projects: [
    {
      title: "AI-Powered E-Commerce Platform",
      description:
        "Build a full-stack e-commerce platform with AI-powered recommendations, search, and inventory management.",
    },
    {
      title: "Real-Time Analytics Dashboard",
      description:
        "Create a real-time analytics dashboard for enterprise data with streaming and visualization.",
    },
    {
      title: "Microservices Migration",
      description:
        "Migrate a monolithic application to microservices with AI-based monitoring.",
    },
    {
      title: "AI Chatbot for Enterprise",
      description:
        "Develop an intelligent chatbot integrated with enterprise systems for customer support.",
    },
  ],
  internship: {
    duration: "2 months",
    description:
      "Work on real enterprise projects under the guidance of senior engineers. Gain hands-on experience with production codebases, agile workflows, and enterprise development practices.",
    highlights: [
      "Work on live enterprise projects",
      "Mentorship from senior engineers",
      "Agile sprint participation",
      "Code review and feedback",
      "Portfolio-ready project completion",
      "Industry-recognized internship certificate",
    ],
  },
  certifications: [
    "AgileVision Certified Full Stack AI Engineer",
    "Java Professional Certification",
    "AWS Cloud Practitioner",
    "Spring Professional Certification",
  ],
  careerPath: [
    {
      role: "Full Stack Developer",
      experience: "0-2 years",
      salary: "INR 6-10 LPA",
    },
    {
      role: "Senior Full Stack Engineer",
      experience: "2-5 years",
      salary: "INR 10-18 LPA",
    },
    {
      role: "AI Full Stack Architect",
      experience: "5-8 years",
      salary: "INR 18-30 LPA",
    },
    {
      role: "Technical Lead",
      experience: "5-8 years",
      salary: "INR 20-35 LPA",
    },
    {
      role: "Engineering Manager",
      experience: "8+ years",
      salary: "INR 30-50 LPA",
    },
  ],
  placementAssistance: [
    "Dedicated career coach throughout the program",
    "Resume and LinkedIn profile optimization",
    "Mock interviews with industry professionals",
    "Access to 150+ hiring partner companies",
    "Job fairs and networking events",
    "95% placement rate within 3 months of graduation",
    "Lifetime access to alumni network and job portal",
  ],
  faqs: [
    {
      question: "Do I need prior coding experience?",
      answer:
        "Basic programming knowledge is helpful but not mandatory. We start with fundamentals and build up progressively. Our pre-program assessment helps identify areas to focus on.",
    },
    {
      question: "What is the class schedule?",
      answer:
        "Classes are held 3-4 days per week, with a mix of live online sessions and in-person workshops. Weekend sessions are available for working professionals.",
    },
    {
      question: "Is the internship guaranteed?",
      answer:
        "Yes. Every student who completes the program with satisfactory performance is guaranteed an internship placement with our partner companies.",
    },
    {
      question: "What if I miss a class?",
      answer:
        "All sessions are recorded and available on our learning platform. You can also attend make-up sessions or get one-on-one doubt clearing sessions.",
    },
  ],
  feeStructure: [
    { installment: "Installment 1", amount: "INR 80,000", deadline: "At admission" },
    { installment: "Installment 2", amount: "INR 60,000", deadline: "End of Month 2" },
    { installment: "Installment 3", amount: "INR 60,000", deadline: "End of Month 4" },
  ],
  relatedPrograms: [
    { title: "AI Data Engineering", href: "/programs/ai-data-engineering" },
    { title: "AI & Machine Learning", href: "/programs/ai-machine-learning" },
    { title: "Business Analyst", href: "/programs/business-analyst" },
  ],
};

export default function AIFullStackJavaPage() {
  return <ProgramDetailTemplate data={data} />;
}
