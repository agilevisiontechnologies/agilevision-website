import { Cpu } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/service-detail-template";

const data = {
  icon: Cpu,
  title: "IT Consulting",
  tagline: "Strategic Technology Advisory",
  description:
    "We provide strategic technology consulting to align IT investments with business objectives. Our consultants bring decades of experience across industries to help you make informed technology decisions, optimize your IT portfolio, and build a roadmap for sustainable growth.",
  heroDescription:
    "Strategic technology consulting to align IT with business objectives. Expert guidance for complex decisions, vendor selection, and technology roadmap planning.",
  benefits: [
    {
      title: "Independent Advice",
      description:
        "Vendor-agnostic recommendations focused solely on your business needs.",
    },
    {
      title: "Industry Expertise",
      description:
        "Consultants with deep experience in banking, insurance, healthcare, and manufacturing.",
    },
    {
      title: "Cost Optimization",
      description:
        "IT portfolio rationalization that eliminates waste and optimizes spending.",
    },
    {
      title: "Risk Mitigation",
      description:
        "Technology risk assessment and mitigation strategies for critical initiatives.",
    },
    {
      title: "Vendor Selection",
      description:
        "Objective evaluation of technology vendors and platforms with structured scoring.",
    },
    {
      title: "Roadmap Planning",
      description:
        "Clear, actionable technology roadmaps aligned with business priorities and budgets.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Evaluate",
      description:
        "Current state assessment, gap analysis, and benchmarking against industry best practices.",
    },
    {
      step: "02",
      title: "Recommend",
      description:
        "Strategic recommendations with business cases, ROI analysis, and implementation priorities.",
    },
    {
      step: "03",
      title: "Plan",
      description:
        "Detailed implementation roadmap with resource requirements, timelines, and milestones.",
    },
    {
      step: "04",
      title: "Execute",
      description:
        "Optional execution support with project management, vendor coordination, and quality assurance.",
    },
  ],
  technologies: [
    "Enterprise Architecture Frameworks",
    "TOGAF",
    "ITIL",
    "Agile/SAFe",
    "Cloud Assessment Tools",
    "TCO Analysis",
    "Risk Assessment",
    "Vendor Evaluation",
    "Business Process Modeling",
    "Data Governance",
    "Compliance Frameworks",
    "Change Management",
    "Stakeholder Analysis",
    "Benefits Realization",
    "Portfolio Management",
  ],
  caseStudy: {
    title: "IT Strategy for Healthcare Provider",
    client: "HealthCare Systems",
    challenge:
      "Fragmented IT landscape with 50+ applications, increasing costs, and inability to support digital health initiatives.",
    solution:
        "Comprehensive IT assessment, application rationalization, and 3-year technology roadmap.",
    results: [
      "IT spending reduced by 25%",
      "Application portfolio reduced from 50+ to 20 core systems",
      "Digital health platform launched in 12 months",
      "Staff productivity improved by 40%",
    ],
  },
  faqs: [
    {
      question: "When should we engage IT consulting?",
      answer:
        "Common triggers include major technology decisions, M&A activity, digital transformation initiatives, cost pressure, or when internal teams need specialized expertise.",
    },
    {
      question: "How long is a typical consulting engagement?",
      answer:
        "Strategy engagements are typically 4-8 weeks. Implementation support can be 3-12 months depending on scope.",
    },
    {
      question: "Do you provide implementation services?",
      answer:
        "Yes. We can provide end-to-end services from strategy through implementation, or work alongside your internal teams and other vendors.",
    },
    {
      question: "How do you ensure recommendations are practical?",
      answer:
        "We ground every recommendation in your specific context: team capabilities, budget constraints, existing systems, and organizational readiness.",
    },
  ],
  relatedServices: [
    { title: "Enterprise AI", href: "/services/enterprise-ai" },
    { title: "Digital Transformation", href: "/services/digital-transformation" },
    { title: "Cloud Solutions", href: "/services/cloud-solutions" },
  ],
};

export default function ITConsultingPage() {
  return <ServiceDetailTemplate data={data} />;
}
