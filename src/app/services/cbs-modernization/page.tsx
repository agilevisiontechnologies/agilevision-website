import { Database } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/service-detail-template";

const data = {
  icon: Database,
  title: "CBS Modernization",
  tagline: "Banking Transformation",
  description:
    "We transform legacy Core Banking Systems into modern, API-first platforms. Our CBS modernization practice combines deep banking domain expertise with cutting-edge technology to deliver zero-downtime migrations that enhance performance, security, and regulatory compliance.",
  heroDescription:
    "Core Banking System transformation for the digital age. Legacy modernization with zero downtime, enhanced security, and future-ready architecture.",
  benefits: [
    {
      title: "Zero Downtime Migration",
      description:
        "Phased migration strategy ensures continuous operations throughout the transformation.",
    },
    {
      title: "API-First Architecture",
      description:
        "Open banking-ready APIs that enable third-party integrations and new digital services.",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Built-in compliance with RBI, PCI-DSS, and other banking regulations.",
    },
    {
      title: "Real-Time Processing",
      description:
        "Event-driven architecture enabling instant transaction processing and real-time analytics.",
    },
    {
      title: "Cloud-Native",
      description:
        "Containerized, auto-scaling infrastructure that reduces costs and improves resilience.",
    },
    {
      title: "Domain Expertise",
      description:
        "Team with 50+ years of combined banking technology experience across major institutions.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Assessment",
      description:
        "Comprehensive audit of existing CBS, data models, integrations, and regulatory requirements.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Migration roadmap, risk assessment, and phased implementation plan.",
    },
    {
      step: "03",
      title: "Migrate",
      description:
        "Incremental migration with parallel running, data validation, and rollback procedures.",
    },
    {
      step: "04",
      title: "Optimize",
      description:
        "Post-migration optimization, performance tuning, and continuous improvement.",
    },
  ],
  technologies: [
    "Java",
    "Spring Boot",
    "Microservices",
    "Apache Kafka",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Apache Flink",
    "GraphQL",
    "gRPC",
    "Keycloak",
    "Elasticsearch",
  ],
  caseStudy: {
    title: "Core Banking Modernization for Regional Bank",
    client: "Regional Bank Ltd",
    challenge:
      "20-year-old monolithic CBS with 500+ modules, poor performance, and inability to support digital banking initiatives.",
    solution:
      "Phased migration to microservices architecture with API gateway, event-driven processing, and cloud-native deployment.",
    results: [
      "Transaction processing time reduced by 80%",
      "API response time from 3s to 200ms",
      "Support for 10x transaction volume",
      "New digital products launched in weeks instead of months",
    ],
  },
  faqs: [
    {
      question: "How long does a CBS modernization project take?",
      answer:
        "Typically 12-24 months depending on the size and complexity of the existing system. We use a phased approach to deliver value incrementally.",
    },
    {
      question: "Is there risk of data loss during migration?",
      answer:
        "We implement rigorous data validation at every stage, with parallel running and rollback capabilities. Our methodology ensures zero data loss.",
    },
    {
      question: "Can you work with our existing CBS vendor?",
      answer:
        "Yes. We often collaborate with existing vendors during transition periods. Our vendor-agnostic approach ensures the best outcome for your institution.",
    },
    {
      question: "How do you handle regulatory compliance during migration?",
      answer:
        "Compliance is built into every phase. We maintain regulatory requirements documentation and conduct compliance audits throughout the migration process.",
    },
  ],
  relatedServices: [
    { title: "Application Modernization", href: "/services/application-modernization" },
    { title: "Cloud Solutions", href: "/services/cloud-solutions" },
    { title: "Enterprise AI", href: "/services/enterprise-ai" },
  ],
};

export default function CBSModernizationPage() {
  return <ServiceDetailTemplate data={data} />;
}
