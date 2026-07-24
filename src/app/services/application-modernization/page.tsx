import { Shield } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/service-detail-template";

const data = {
  icon: Shield,
  title: "Application Modernization",
  tagline: "Legacy to Modern",
  description:
    "We transform legacy applications into modern, cloud-native solutions. Our modernization practice reduces technical debt, improves maintainability, and enables your applications to scale with business demands.",
  heroDescription:
    "Transform legacy applications into modern, cloud-native solutions. Reduce technical debt, improve agility, and enable your applications to scale with business demands.",
  benefits: [
    {
      title: "Reduced Technical Debt",
      description:
        "Systematic refactoring and re-architecture that eliminates legacy code complexity.",
    },
    {
      title: "Cloud-Native Architecture",
      description:
        "Containerized, microservices-based applications optimized for cloud deployment.",
    },
    {
      title: "Improved Maintainability",
      description:
        "Clean, well-documented codebases that are easier to update and extend.",
    },
    {
      title: "Enhanced Security",
      description:
        "Modern security practices, updated dependencies, and compliance with current standards.",
    },
    {
      title: "Cost Reduction",
      description:
        "Lower infrastructure and maintenance costs through modern architecture and automation.",
    },
    {
      title: "Business Agility",
      description:
        "Faster time-to-market for new features and capabilities.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Assess",
      description:
        "Legacy application audit, dependency mapping, and modernization strategy.",
    },
    {
      step: "02",
      title: "Plan",
      description:
        "Prioritized modernization roadmap with risk assessment and resource planning.",
    },
    {
      step: "03",
      title: "Modernize",
      description:
        "Incremental refactoring, re-architecture, or rebuild based on the chosen strategy.",
    },
    {
      step: "04",
      title: "Validate",
      description:
        "Thorough testing, performance validation, and production deployment.",
    },
  ],
  technologies: [
    "Java",
    "Spring Boot",
    ".NET Core",
    "React",
    "Angular",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "RabbitMQ",
    "Kafka",
    "AWS",
    "Azure",
    "Terraform",
  ],
  caseStudy: {
    title: "Legacy ERP Modernization",
    client: "Industrial Corp",
    challenge:
      "15-year-old ERP built on outdated technology, high maintenance costs, and inability to support modern business requirements.",
    solution:
      "Phased modernization to cloud-native microservices with API layer for backward compatibility.",
    results: [
      "Maintenance costs reduced by 50%",
      "Deployment frequency from quarterly to daily",
      "Application performance improved by 3x",
      "New feature development time reduced by 60%",
    ],
  },
  faqs: [
    {
      question: "Should we refactor, re-architect, or rebuild?",
      answer:
        "It depends on the application's business value, technical condition, and your goals. We assess each application and recommend the most cost-effective approach.",
    },
    {
      question: "How do you minimize risk during modernization?",
      answer:
        "We use the strangler fig pattern, feature toggles, and parallel running to ensure the existing system continues working while we modernize incrementally.",
    },
    {
      question: "Can you modernize mainframe applications?",
      answer:
        "Yes. We have experience with COBOL, JCL, and mainframe modernization. We can extract business logic, modernize the UI, and migrate to modern platforms.",
    },
    {
      question: "What about testing during modernization?",
      answer:
        "We implement comprehensive automated testing including unit tests, integration tests, and regression tests to ensure functionality is preserved throughout the modernization.",
    },
  ],
  relatedServices: [
    { title: "Cloud Solutions", href: "/services/cloud-solutions" },
    { title: "Software Development", href: "/services/software-development" },
    { title: "CBS Modernization", href: "/services/cbs-modernization" },
  ],
};

export default function ApplicationModernizationPage() {
  return <ServiceDetailTemplate data={data} />;
}
