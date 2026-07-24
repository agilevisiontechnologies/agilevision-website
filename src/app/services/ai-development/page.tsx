import { Brain } from "lucide-react";
import { ServiceDetailTemplate } from "@/components/service-detail-template";

const data = {
  icon: Brain,
  title: "AI Development",
  tagline: "Intelligent Solutions",
  description:
    "We design, build, and deploy custom AI solutions that solve complex business problems. From machine learning models to natural language processing systems, our AI development team delivers production-ready solutions that integrate seamlessly with your existing infrastructure.",
  heroDescription:
    "Custom AI solutions powered by machine learning, NLP, and computer vision. From concept to production-ready deployment, we engineer intelligent systems that drive measurable business outcomes.",
  benefits: [
    {
      title: "Custom-Built Models",
      description:
        "Tailored AI models trained on your specific data, not generic off-the-shelf solutions.",
    },
    {
      title: "Production-Ready",
      description:
        "Every solution is built with enterprise-grade reliability, scalability, and monitoring from day one.",
    },
    {
      title: "Seamless Integration",
      description:
        "AI solutions that plug into your existing tech stack without disrupting operations.",
    },
    {
      title: "Explainable AI",
      description:
        "Transparent models with clear decision logic, meeting regulatory and compliance requirements.",
    },
    {
      title: "Continuous Learning",
      description:
        "Models that improve over time with built-in retraining pipelines and feedback loops.",
    },
    {
      title: "Rapid Prototyping",
      description:
        "From concept to working prototype in weeks, not months, with agile development methodology.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Discovery",
      description:
        "Understand your business problem, data landscape, and success metrics.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Architecture design, model selection, and proof of concept development.",
    },
    {
      step: "03",
      title: "Develop",
      description:
        "Iterative development with continuous testing and stakeholder feedback.",
    },
    {
      step: "04",
      title: "Deploy",
      description:
        "Production deployment with monitoring, alerting, and continuous improvement.",
    },
  ],
  technologies: [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Hugging Face",
    "OpenCV",
    "LangChain",
    "FastAPI",
    "MLflow",
    "Kubeflow",
    "AWS SageMaker",
    "Azure ML",
    "Google Vertex AI",
    "Docker",
    "Kubernetes",
  ],
  caseStudy: {
    title: "AI-Powered Document Processing for Banking",
    client: "National Bank",
    challenge:
      "Manual document processing was creating bottlenecks, with 50,000+ documents processed monthly taking 3-5 days per batch.",
    solution:
      "We built a custom OCR and NLP pipeline that automatically extracts, validates, and processes document data with 99.2% accuracy.",
    results: [
      "Processing time reduced from 5 days to 4 hours",
      "99.2% accuracy in data extraction",
      "60% reduction in operational costs",
      "Real-time processing capability",
    ],
  },
  faqs: [
    {
      question: "How long does it take to build a custom AI solution?",
      answer:
        "Timeline varies by complexity. A proof of concept typically takes 4-6 weeks, while a full production solution takes 3-6 months. We provide a detailed timeline after the discovery phase.",
    },
    {
      question: "Do we need clean data to start?",
      answer:
        "Not necessarily. We include data assessment and cleansing as part of our process. However, the quality and quantity of data directly impact model performance.",
    },
    {
      question: "How do you ensure model accuracy?",
      answer:
        "We use rigorous testing methodologies including cross-validation, holdout testing, and real-world simulation. We also set up continuous monitoring to track model performance post-deployment.",
    },
    {
      question: "Can you work with our existing tech stack?",
      answer:
        "Yes. Our solutions are designed to integrate with your existing infrastructure. We support all major cloud platforms, databases, and enterprise systems.",
    },
  ],
  relatedServices: [
    { title: "Enterprise AI", href: "/services/enterprise-ai" },
    { title: "Software Development", href: "/services/software-development" },
    { title: "Cloud Solutions", href: "/services/cloud-solutions" },
  ],
};

export default function AIDevelopmentPage() {
  return <ServiceDetailTemplate data={data} />;
}
