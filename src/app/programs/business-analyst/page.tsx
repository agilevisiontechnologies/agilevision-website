import { BarChart } from "lucide-react";
import { ProgramDetailTemplate } from "@/components/program-detail-template";

const data = {
  icon: BarChart,
  title: "Business Analyst",
  tagline: "AI Career Program",
  duration: "4 months",
  mode: "Hybrid",
  batchStart: "March 2026",
  description:
    "Bridge business and technology. Learn to analyze requirements, visualize data, and drive digital transformation.",
  heroDescription:
    "Become a business analyst who can translate business needs into technical solutions. Master requirements analysis, data visualization, and agile methods in this focused 4-month program.",
  whoShouldJoin: [
    "Fresh graduates in business, IT, or related fields",
    "Working professionals transitioning into BA roles",
    "Project coordinators looking to advance their careers",
    "Professionals interested in business-technology alignment",
    "Anyone with strong analytical and communication skills",
    "Graduates looking for entry into the tech industry",
  ],
  curriculum: [
    {
      module: "Module 1: Business Analysis Fundamentals",
      topics: [
        "BA role and responsibilities",
        "Stakeholder analysis and management",
        "Requirements elicitation techniques",
        "Business process modeling",
        "Documentation standards",
      ],
    },
    {
      module: "Module 2: Data Analysis & Visualization",
      topics: [
        "SQL for data analysis",
        "Excel advanced functions",
        "Power BI / Tableau dashboards",
        "Statistical analysis basics",
        "Data-driven decision making",
      ],
    },
    {
      module: "Module 3: Agile & Project Management",
      topics: [
        "Agile and Scrum methodology",
        "User story writing",
        "Sprint planning and estimation",
        "JIRA and project tracking",
        "BA role in agile teams",
      ],
    },
    {
      module: "Module 4: Technical Skills",
      topics: [
        "System design fundamentals",
        "API basics and integration",
        "Database design concepts",
        "Cloud services overview",
        "AI/ML awareness for BAs",
      ],
    },
    {
      module: "Module 5: Domain Specialization",
      topics: [
        "Banking and financial services",
        "Healthcare IT",
        "E-commerce and retail",
        "Supply chain analytics",
        "Digital transformation case studies",
      ],
    },
    {
      module: "Module 6: Capstone Project",
      topics: [
        "End-to-end BA project",
        "Client interaction simulation",
        "Requirements documentation",
        "Solution presentation",
        "Portfolio development",
      ],
    },
  ],
  technologyStack: [
    "SQL",
    "Excel",
    "Power BI",
    "Tableau",
    "JIRA",
    "Confluence",
    "Visio",
    "Lucidchart",
    "Google Analytics",
    "Figma",
    "Postman",
    "Basic Python",
    "Basic HTML/CSS",
    "Miro",
    "Notion",
  ],
  projects: [
    {
      title: "Banking Process Optimization",
      description:
        "Analyze and optimize a banking workflow using data analysis and process modeling.",
    },
    {
      title: "E-Commerce Analytics Dashboard",
      description:
        "Build a comprehensive analytics dashboard for an e-commerce business.",
    },
    {
      title: "Requirements Documentation",
      description:
        "Create complete requirements documentation for a software product.",
    },
    {
      title: "Digital Transformation Roadmap",
      description:
        "Develop a digital transformation strategy for a traditional business.",
    },
  ],
  internship: {
    duration: "1 month",
    description:
      "Work with real businesses on BA projects. Gain experience with stakeholder management, requirements gathering, and data analysis.",
    highlights: [
      "Work with real business stakeholders",
      "Requirements gathering and documentation",
      "Data analysis and visualization",
      "Client presentation experience",
      "Portfolio-ready project completion",
      "Industry-recognized internship certificate",
    ],
  },
  certifications: [
    "AgileVision Certified Business Analyst",
    "Power BI Data Analyst",
    "Certified Scrum Product Owner (CSPO) Prep",
    "Agile Analysis Certification",
  ],
  careerPath: [
    {
      role: "Junior Business Analyst",
      experience: "0-2 years",
      salary: "INR 5-8 LPA",
    },
    {
      role: "Business Analyst",
      experience: "2-4 years",
      salary: "INR 8-14 LPA",
    },
    {
      role: "Senior Business Analyst",
      experience: "4-7 years",
      salary: "INR 14-22 LPA",
    },
    {
      role: "Product Owner",
      experience: "5-8 years",
      salary: "INR 18-28 LPA",
    },
    {
      role: "Business Analysis Manager",
      experience: "8+ years",
      salary: "INR 25-40 LPA",
    },
  ],
  placementAssistance: [
    "Dedicated career coach throughout the program",
    "Resume and LinkedIn profile optimization",
    "Mock interviews with industry professionals",
    "Access to 150+ hiring partner companies",
    "BA-specific job fairs and networking events",
    "95% placement rate within 3 months of graduation",
    "Lifetime access to alumni network and job portal",
  ],
  faqs: [
    {
      question: "Do I need technical background?",
      answer:
        "No. This program is designed for both technical and non-technical backgrounds. We start with fundamentals and build progressively.",
    },
    {
      question: "What tools will I learn?",
      answer:
        "You'll learn SQL, Excel, Power BI/Tableau, JIRA, process modeling tools, and basic technical skills needed for BA roles.",
    },
    {
      question: "Is the internship guaranteed?",
      answer:
        "Yes. Every student who completes the program with satisfactory performance is guaranteed an internship placement.",
    },
    {
      question: "What industries can I work in?",
      answer:
        "Business analysts are needed across all industries: banking, healthcare, IT, retail, manufacturing, and more.",
    },
  ],
  feeStructure: [
    { installment: "Installment 1", amount: "INR 55,000", deadline: "At admission" },
    { installment: "Installment 2", amount: "INR 45,000", deadline: "End of Month 2" },
  ],
  relatedPrograms: [
    { title: "AI Full Stack Java Engineer", href: "/programs/ai-full-stack-java" },
    { title: "AI Data Engineering", href: "/programs/ai-data-engineering" },
    { title: "AI & Machine Learning", href: "/programs/ai-machine-learning" },
  ],
};

export default function BusinessAnalystPage() {
  return <ProgramDetailTemplate data={data} />;
}
