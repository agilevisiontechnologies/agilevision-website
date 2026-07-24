import { Cloud } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/service-detail-template";

const data = {
  icon: Cloud,
  title: "Cloud Solutions",
  tagline: "Cloud Infrastructure",
  description:
    "We design, migrate, and manage cloud infrastructure across AWS, Azure, and Google Cloud. Our cloud solutions optimize costs, improve performance, and enable scalability while maintaining security and compliance standards.",
  heroDescription:
    "Scalable cloud infrastructure and migration services. Optimize costs while maximizing performance with our enterprise cloud solutions.",
  benefits: [
    {
      title: "Multi-Cloud Expertise",
      description:
        "Certified architects across AWS, Azure, and GCP with experience in complex hybrid environments.",
    },
    {
      title: "Cost Optimization",
      description:
        "Right-sizing, reserved instances, and automation that typically reduce cloud spend by 30-40%.",
    },
    {
      title: "Security & Compliance",
      description:
        "Cloud-native security controls, encryption, and compliance frameworks built into the architecture.",
    },
    {
      title: "Infrastructure as Code",
      description:
        "Reproducible, version-controlled infrastructure using Terraform, CloudFormation, and Pulumi.",
    },
    {
      title: "Auto-Scaling",
      description:
        "Dynamic resource allocation that handles traffic spikes without manual intervention.",
    },
    {
      title: "24/7 Monitoring",
      description:
        "Comprehensive observability with real-time alerting, dashboards, and incident response.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Assess",
      description:
        "Current infrastructure audit, cost analysis, and cloud readiness assessment.",
    },
    {
      step: "02",
      title: "Plan",
      description:
        "Cloud architecture design, migration strategy, and cost projection.",
    },
    {
      step: "03",
      title: "Migrate",
      description:
        "Phased migration with testing, validation, and minimal disruption.",
    },
    {
      step: "04",
      title: "Optimize",
      description:
        "Continuous monitoring, cost optimization, and performance tuning.",
    },
  ],
  technologies: [
    "AWS",
    "Microsoft Azure",
    "Google Cloud Platform",
    "Terraform",
    "Ansible",
    "Docker",
    "Kubernetes",
    "CloudFormation",
    "Pulumi",
    "GitHub Actions",
    "Jenkins",
    "Prometheus",
    "Grafana",
    "Datadog",
    "Lambda",
  ],
  caseStudy: {
    title: "Cloud Migration for Financial Services",
    client: "FinServe Solutions",
    challenge:
      "On-premise data center reaching capacity, high operational costs, and inability to scale for peak trading hours.",
    solution:
      "Hybrid cloud migration to AWS with auto-scaling, disaster recovery, and real-time monitoring.",
    results: [
      "Infrastructure costs reduced by 35%",
      "99.99% uptime achieved",
      "Auto-scaling handles 10x peak load",
      "Disaster recovery time reduced from hours to minutes",
    ],
  },
  faqs: [
    {
      question: "Which cloud provider is best for us?",
      answer:
        "We help you choose based on your specific needs: AWS for breadth of services, Azure for Microsoft ecosystem integration, or GCP for data analytics and AI/ML workloads.",
    },
    {
      question: "How do you handle data security during migration?",
      answer:
        "Data is encrypted in transit and at rest. We use secure transfer protocols, VPN connections, and maintain strict access controls throughout the migration process.",
    },
    {
      question: "What about ongoing cloud management?",
      answer:
        "We offer managed cloud services including monitoring, optimization, security patching, and cost management. Choose from flexible support tiers.",
    },
    {
      question: "Can you migrate legacy applications to the cloud?",
      answer:
        "Yes. We assess each application and recommend the best approach: rehost (lift and shift), refactor, rebuild, or replace based on business value and technical feasibility.",
    },
  ],
  relatedServices: [
    { title: "Application Modernization", href: "/services/application-modernization" },
    { title: "Digital Transformation", href: "/services/digital-transformation" },
    { title: "Software Development", href: "/services/software-development" },
  ],
};

export default function CloudSolutionsPage() {
  return <ServiceDetailTemplate data={data} />;
}
