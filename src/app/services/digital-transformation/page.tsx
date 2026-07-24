import { Zap } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/service-detail-template";

const data = {
  icon: Zap,
  title: "Digital Transformation",
  tagline: "Business Modernization",
  description:
    "We help organizations reimagine their business processes, customer experiences, and operating models through technology. Our digital transformation practice combines strategy consulting with hands-on implementation to deliver end-to-end business transformation.",
  heroDescription:
    "End-to-end digital transformation consulting and execution. Modernize your business for the digital age with process automation, data-driven insights, and connected experiences.",
  benefits: [
    {
      title: "Process Automation",
      description:
        "Automate repetitive tasks and workflows, freeing your team for high-value work.",
    },
    {
      title: "Data-Driven Decisions",
      description:
        "Real-time dashboards and analytics that turn data into actionable business insights.",
    },
    {
      title: "Connected Experiences",
      description:
        "Omnichannel customer and employee experiences powered by integrated systems.",
    },
    {
      title: "Agile Operations",
      description:
        "Lean, adaptive processes that respond quickly to market changes and customer needs.",
    },
    {
      title: "Digital Culture",
      description:
        "Change management programs that build digital literacy and adoption across the organization.",
    },
    {
      title: "Measurable Outcomes",
      description:
        "Clear KPIs and tracking to demonstrate ROI at every stage of the transformation.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Discover",
      description:
        "Current state assessment, pain point identification, and opportunity mapping.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Future state vision, transformation roadmap, and business case development.",
    },
    {
      step: "03",
      title: "Deliver",
      description:
        "Phased implementation with quick wins, process changes, and technology deployment.",
    },
    {
      step: "04",
      title: "Sustain",
      description:
        "Continuous improvement, capability building, and performance optimization.",
    },
  ],
  technologies: [
    "Microsoft Power Platform",
    "Salesforce",
    "SAP",
    "UiPath",
    "Automation Anywhere",
    "MuleSoft",
    "Tableau",
    "Power BI",
    "ServiceNow",
    "Workday",
    "Custom Solutions",
    "API Integration",
    "RPA",
    "Low-Code/No-Code",
    "IoT Platforms",
  ],
  caseStudy: {
    title: "Digital Transformation for Retail Chain",
    client: "RetailMax",
    challenge:
      "Disconnected systems, manual processes, and inability to compete with digital-native retailers.",
    solution:
      "Unified commerce platform with real-time inventory, omnichannel ordering, and automated supply chain.",
    results: [
      "Revenue increased by 25% in first year",
      "Inventory accuracy improved to 98%",
      "Customer wait time reduced by 60%",
      "Operating costs reduced by 20%",
    ],
  },
  faqs: [
    {
      question: "How long does a digital transformation take?",
      answer:
        "Most transformations are 12-24 months, but we deliver value incrementally. Quick wins within 3-6 months, with full transformation over 12-18 months.",
    },
    {
      question: "How do you handle employee resistance?",
      answer:
        "Change management is core to our approach. We include training, communication, and early involvement of key stakeholders to build buy-in.",
    },
    {
      question: "What is the typical ROI?",
      answer:
        "ROI varies by industry and scope, but clients typically see 20-40% cost reduction, 15-30% revenue increase, and significant improvement in customer and employee satisfaction.",
    },
    {
      question: "Do you work with specific industries?",
      answer:
        "We have deep experience in banking, insurance, manufacturing, retail, and healthcare. Our methodology is adaptable to any industry.",
    },
  ],
  relatedServices: [
    { title: "Enterprise AI", href: "/services/enterprise-ai" },
    { title: "Cloud Solutions", href: "/services/cloud-solutions" },
    { title: "IT Consulting", href: "/services/it-consulting" },
  ],
};

export default function DigitalTransformationPage() {
  return <ServiceDetailTemplate data={data} />;
}
