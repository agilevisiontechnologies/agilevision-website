import { Code } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/service-detail-template";

const data = {
  icon: Code,
  title: "Software Development",
  tagline: "Enterprise Solutions",
  description:
    "We build enterprise-grade web and mobile applications using modern technology stacks. Our development methodology combines agile practices with enterprise rigor to deliver software that is scalable, secure, and maintainable.",
  heroDescription:
    "Enterprise-grade web and mobile applications built with modern tech stacks. Scalable, secure, and maintainable software that drives business growth.",
  benefits: [
    {
      title: "Modern Tech Stacks",
      description:
        "Built with React, Next.js, Spring Boot, Node.js, and other cutting-edge frameworks.",
    },
    {
      title: "Microservices Architecture",
      description:
        "Decoupled, independently deployable services that scale with your business.",
    },
    {
      title: "API-First Design",
      description:
        "Well-documented, versioned APIs that enable seamless integration and future扩展.",
    },
    {
      title: "Security Built-In",
      description:
        "OWASP-compliant security practices embedded throughout the development lifecycle.",
    },
    {
      title: "CI/CD pipelines",
      description:
        "Automated testing, building, and deployment for rapid, reliable releases.",
    },
    {
      title: "Performance Optimized",
      description:
        "Applications designed for speed with caching, lazy loading, and optimized queries.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Requirements",
      description:
        "Deep dive into business requirements, user stories, and technical constraints.",
    },
    {
      step: "02",
      title: "Architecture",
      description:
        "System design, technology selection, and architecture documentation.",
    },
    {
      step: "03",
      title: "Build",
      description:
        "Iterative development with sprint demos, code reviews, and continuous integration.",
    },
    {
      step: "04",
      title: "Launch",
      description:
        "Production deployment, performance tuning, and handover with documentation.",
    },
  ],
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Spring Boot",
    "Java",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Terraform",
  ],
  caseStudy: {
    title: "Enterprise Resource Planning Platform",
    client: "Manufacturing Corp",
    challenge:
      "Legacy ERP system was costly to maintain, couldn't scale, and lacked modern UX for 2,000+ users across 15 locations.",
    solution:
        "We rebuilt the platform as a cloud-native application with React frontend, microservices backend, and real-time data sync.",
    results: [
      "99.9% uptime achieved",
      "40% reduction in IT operational costs",
      "Real-time visibility across all locations",
      "User satisfaction score improved from 2.1 to 4.6/5",
    ],
  },
  faqs: [
    {
      question: "Which technology stack do you recommend?",
      answer:
        "We recommend technologies based on your specific requirements, team expertise, and long-term goals. Common stacks include React/Next.js with Node.js for web apps, and Spring Boot/Java for enterprise backends.",
    },
    {
      question: "Do you support legacy system integration?",
      answer:
        "Yes. We have extensive experience integrating modern applications with legacy systems through APIs, message queues, and data synchronization patterns.",
    },
    {
      question: "What is your development methodology?",
      answer:
        "We follow Agile/Scrum with 2-week sprints, daily standups, sprint reviews, and continuous delivery. This ensures transparency and rapid iteration.",
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer:
        "Yes. We offer flexible maintenance and support agreements post-launch, including bug fixes, feature enhancements, and performance optimization.",
    },
  ],
  relatedServices: [
    { title: "AI Development", href: "/services/ai-development" },
    { title: "Application Modernization", href: "/services/application-modernization" },
    { title: "Cloud Solutions", href: "/services/cloud-solutions" },
  ],
};

export default function SoftwareDevelopmentPage() {
  return <ServiceDetailTemplate data={data} />;
}
