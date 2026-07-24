import { Building2 } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/service-detail-template";

const data = {
  icon: Building2,
  title: "Enterprise AI",
  tagline: "AI Strategy & Implementation",
  description:
    "We help large organizations develop and execute AI strategies that transform operations. From identifying high-impact use cases to building production AI systems, we ensure your AI investments deliver measurable business outcomes.",
  heroDescription:
    "AI strategy and implementation for large organizations. Transform operations with intelligent automation and data-driven decision making.",
  benefits: [
    {
      title: "Strategic AI Roadmap",
      description:
        "A clear, prioritized plan for AI adoption aligned with your business objectives.",
    },
    {
      title: "Governance Framework",
      description:
        "Ethical AI guidelines, model governance, and compliance frameworks for enterprise deployment.",
    },
    {
      title: "Change Management",
      description:
        "Training, adoption programs, and cultural transformation to maximize AI ROI.",
    },
    {
      title: "Center of Excellence",
      description:
        "Establish internal AI capabilities with our CoE setup and knowledge transfer programs.",
    },
    {
      title: "ROI-Driven",
      description:
        "Focus on use cases with clear, measurable business impact from day one.",
    },
    {
      title: "Vendor Agnostic",
      description:
        "We recommend the best tools and platforms for your needs, not our partnerships.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Assess",
      description:
        "AI readiness assessment, use case identification, and opportunity quantification.",
    },
    {
      step: "02",
      title: "Strategize",
      description:
        "AI roadmap development, governance framework, and investment planning.",
    },
    {
      step: "03",
      title: "Implement",
      description:
        "Pilot projects, production deployment, and integration with existing systems.",
    },
    {
      step: "04",
      title: "Scale",
      description:
        "Expand successful pilots, build internal capabilities, and continuous improvement.",
    },
  ],
  technologies: [
    "OpenAI",
    "Azure OpenAI",
    "AWS Bedrock",
    "Google Vertex AI",
    "LangChain",
    "LlamaIndex",
    "Hugging Face",
    "MLflow",
    "Kubeflow",
    "Apache Spark",
    "Databricks",
    "Snowflake",
    "Tableau",
    "Power BI",
    "Custom LLMs",
  ],
  caseStudy: {
    title: "AI Transformation for Insurance Company",
    client: "Insurance Corp",
    challenge:
      "Manual claims processing, fraud detection gaps, and siloed data across 10+ systems.",
    solution:
        "Enterprise AI platform with automated claims processing, fraud detection models, and unified data lake.",
    results: [
      "Claims processing time reduced by 70%",
      "Fraud detection accuracy improved to 94%",
      "$5M annual savings from automation",
      "Customer satisfaction improved by 35%",
    ],
  },
  faqs: [
    {
      question: "How do we identify the right AI use cases?",
      answer:
        "We use a structured framework that evaluates business impact, technical feasibility, data availability, and organizational readiness to prioritize use cases with the highest ROI.",
    },
    {
      question: "Do we need a data lake before starting with AI?",
      answer:
        "Not necessarily. We can start with existing data sources and build the data infrastructure incrementally as use cases expand.",
    },
    {
      question: "How do you measure AI ROI?",
      answer:
        "We define clear KPIs for each use case during planning. Common metrics include cost savings, time reduction, revenue increase, and customer satisfaction improvement.",
    },
    {
      question: "Can you help build an internal AI team?",
      answer:
        "Yes. Our AI Center of Excellence setup includes training programs, hiring support, and knowledge transfer to build sustainable internal capabilities.",
    },
  ],
  relatedServices: [
    { title: "AI Development", href: "/services/ai-development" },
    { title: "Digital Transformation", href: "/services/digital-transformation" },
    { title: "IT Consulting", href: "/services/it-consulting" },
  ],
};

export default function EnterpriseAIPage() {
  return <ServiceDetailTemplate data={data} />;
}
