import { Database } from "lucide-react";
import { ProgramDetailTemplate } from "@/components/program-detail-template";

const data = {
  icon: Database,
  title: "AI Data Engineering",
  tagline: "AI Career Program",
  duration: "5 months",
  mode: "Hybrid",
  batchStart: "February 2026",
  description:
    "Become a data engineering specialist. Learn to build scalable data pipelines and work with big data technologies.",
  heroDescription:
    "Master the art of building data infrastructure for AI. Learn Python, SQL, big data technologies, and cloud data platforms in this intensive 5-month program.",
  whoShouldJoin: [
    "Fresh graduates interested in data engineering and analytics",
    "Working professionals transitioning into data roles",
    "Database administrators looking to modernize their skills",
    "Analysts wanting to move into data engineering",
    "Anyone passionate about building data-driven systems",
    "Professionals interested in big data and cloud technologies",
  ],
  curriculum: [
    {
      module: "Module 1: Python & SQL Fundamentals",
      topics: [
        "Python programming for data engineering",
        "SQL mastery and advanced queries",
        "Data types and structures",
        "File handling and data formats",
        "Version control with Git",
      ],
    },
    {
      module: "Module 2: Data Modeling & Warehousing",
      topics: [
        "Relational and dimensional modeling",
        "Star and snowflake schemas",
        "Data warehouse design patterns",
        "ETL vs ELT approaches",
        "Data quality and validation",
      ],
    },
    {
      module: "Module 3: Big Data Technologies",
      topics: [
        "Apache Spark and PySpark",
        "Hadoop ecosystem overview",
        "Apache Kafka for streaming",
        "Apache Airflow for orchestration",
        "Data lake architecture",
      ],
    },
    {
      module: "Module 4: Cloud Data Platforms",
      topics: [
        "AWS data services (S3, Redshift, Glue)",
        "Azure data services (Data Factory, Synapse)",
        "Google BigQuery",
        "Cloud data pipeline design",
        "Cost optimization strategies",
      ],
    },
    {
      module: "Module 5: AI/ML Data Infrastructure",
      topics: [
        "Feature stores and feature engineering",
        "ML pipeline orchestration",
        "Model serving infrastructure",
        "Data versioning and lineage",
        "MLOps fundamentals",
      ],
    },
    {
      module: "Module 6: Enterprise Project",
      topics: [
        "End-to-end data pipeline development",
        "Real-time streaming implementation",
        "Data governance and compliance",
        "Production deployment and monitoring",
        "Performance optimization",
      ],
    },
  ],
  technologyStack: [
    "Python",
    "SQL",
    "Apache Spark",
    "Apache Kafka",
    "Apache Airflow",
    "AWS",
    "Azure",
    "Google Cloud",
    "Snowflake",
    "dbt",
    "Docker",
    "Kubernetes",
    "Terraform",
    "PostgreSQL",
    "MongoDB",
  ],
  projects: [
    {
      title: "Real-Time Analytics Pipeline",
      description:
        "Build a real-time data pipeline processing millions of events with Kafka and Spark Streaming.",
    },
    {
      title: "Cloud Data Warehouse",
      description:
        "Design and implement a cloud data warehouse with automated ETL and reporting.",
    },
    {
      title: "ML Feature Store",
      description:
        "Create a feature store for ML models with data versioning and quality checks.",
    },
    {
      title: "Data Governance Platform",
      description:
        "Build a data catalog and governance platform for enterprise data management.",
    },
  ],
  internship: {
    duration: "2 months",
    description:
      "Work on real data engineering projects with enterprise datasets. Gain experience with production data pipelines, cloud infrastructure, and data governance.",
    highlights: [
      "Work with enterprise-scale datasets",
      "Build production data pipelines",
      "Cloud infrastructure management",
      "Data quality and governance",
      "Portfolio-ready project completion",
      "Industry-recognized internship certificate",
    ],
  },
  certifications: [
    "AgileVision Certified Data Engineer",
    "AWS Data Analytics Specialty",
    "Azure Data Engineer Associate",
    "Databricks Certified Associate",
  ],
  careerPath: [
    {
      role: "Junior Data Engineer",
      experience: "0-2 years",
      salary: "INR 6-10 LPA",
    },
    {
      role: "Data Engineer",
      experience: "2-4 years",
      salary: "INR 10-16 LPA",
    },
    {
      role: "Senior Data Engineer",
      experience: "4-7 years",
      salary: "INR 16-25 LPA",
    },
    {
      role: "Lead Data Engineer",
      experience: "7-10 years",
      salary: "INR 25-40 LPA",
    },
    {
      role: "Data Architect",
      experience: "10+ years",
      salary: "INR 35-60 LPA",
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
      question: "Do I need prior data experience?",
      answer:
        "Basic SQL knowledge is helpful. We start with fundamentals and build up. Our pre-program assessment helps identify areas to focus on.",
    },
    {
      question: "What tools will I learn?",
      answer:
        "You'll learn Python, SQL, Apache Spark, Kafka, Airflow, and major cloud data platforms (AWS, Azure, GCP).",
    },
    {
      question: "Is the internship guaranteed?",
      answer:
        "Yes. Every student who completes the program with satisfactory performance is guaranteed an internship placement.",
    },
    {
      question: "What certifications will I earn?",
      answer:
        "You'll earn the AgileVision Data Engineer certification plus preparation for AWS, Azure, or Databricks certifications.",
    },
  ],
  feeStructure: [
    { installment: "Installment 1", amount: "INR 70,000", deadline: "At admission" },
    { installment: "Installment 2", amount: "INR 55,000", deadline: "End of Month 2" },
    { installment: "Installment 3", amount: "INR 55,000", deadline: "End of Month 4" },
  ],
  relatedPrograms: [
    { title: "AI Full Stack Java Engineer", href: "/programs/ai-full-stack-java" },
    { title: "AI & Machine Learning", href: "/programs/ai-machine-learning" },
    { title: "Business Analyst", href: "/programs/business-analyst" },
  ],
};

export default function AIDataEngineeringPage() {
  return <ProgramDetailTemplate data={data} />;
}
