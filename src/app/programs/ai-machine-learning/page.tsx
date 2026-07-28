import { Brain, LineChart, Cpu, Sparkles, TrendingUp, BarChart3, Eye, MessageSquare, Target } from "lucide-react";
import { ProgramDetailTemplate } from "@/components/program-detail-template";

const data = {
  icon: Brain,
  title: "AI & Machine Learning",
  tagline: "AI Career Program",
  duration: "6 months",
  mode: "Hybrid",
  batchStart: "Every Month",
  description:
    "Dive deep into AI and machine learning. Build intelligent systems using cutting-edge algorithms and frameworks.",
  heroDescription:
    "Become an AI/ML engineer who can build intelligent systems. Master deep learning, NLP, computer vision, and MLOps in this comprehensive 6-month program.",
  whoShouldJoin: [
    "Fresh graduates with strong math and programming foundations",
    "Software engineers transitioning into AI/ML roles",
    "Data analysts wanting to move into machine learning",
    "Professionals interested in deep learning and neural networks",
    "Researchers looking to apply ML in industry",
    "Anyone passionate about artificial intelligence",
  ],
  curriculum: [
    {
      module: "Module 1: Python & Math for AI",
      topics: [
        "Python for data science and ML",
        "Linear algebra and calculus",
        "Probability and statistics",
        "NumPy, Pandas, and data manipulation",
        "Data visualization with Matplotlib and Seaborn",
      ],
    },
    {
      module: "Module 2: Machine Learning Fundamentals",
      topics: [
        "Supervised learning algorithms",
        "Unsupervised learning techniques",
        "Model evaluation and validation",
        "Feature engineering and selection",
        "Scikit-learn and practical ML",
      ],
    },
    {
      module: "Module 3: Deep Learning",
      topics: [
        "Neural networks and backpropagation",
        "CNNs for computer vision",
        "RNNs and sequence models",
        "Transformers and attention mechanisms",
        "PyTorch and TensorFlow",
      ],
    },
    {
      module: "Module 4: NLP & Language Models",
      topics: [
        "Text preprocessing and embeddings",
        "Sentiment analysis and classification",
        "Named entity recognition",
        "Large language models and fine-tuning",
        "RAG and prompt engineering",
      ],
    },
    {
      module: "Module 5: MLOps & Production ML",
      topics: [
        "ML pipeline design",
        "Model versioning and experiment tracking",
        "Model serving and deployment",
        "A/B testing for ML models",
        "Monitoring and drift detection",
      ],
    },
    {
      module: "Module 6: AI Research Project",
      topics: [
        "Problem formulation and literature review",
        "Experimental design",
        "Model development and optimization",
        "Results analysis and documentation",
        "Paper writing and presentation",
      ],
    },
  ],
  technologyStack: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "Hugging Face",
    "OpenCV",
    "LangChain",
    "MLflow",
    "Weights & Biases",
    "Docker",
    "FastAPI",
    "Streamlit",
    "Jupyter",
    "CUDA",
    "Google Colab",
  ],
  projects: [
    {
      title: "Computer Vision Pipeline",
      description:
        "Build an end-to-end computer vision system for object detection and image classification.",
      icon: Eye,
    },
    {
      title: "NLP Chatbot with RAG",
      description:
        "Create a retrieval-augmented generation chatbot using large language models.",
      icon: MessageSquare,
    },
    {
      title: "Time Series Forecasting",
      description:
        "Develop a time series forecasting model for financial or business data.",
      icon: LineChart,
    },
    {
      title: "ML Model Deployment",
      description:
        "Deploy ML models as scalable APIs with monitoring and A/B testing.",
      icon: Cpu,
    },
    {
      title: "AI-Powered Ad Targeting System",
      description:
        "Build an ML model that optimizes ad spend by predicting high-conversion audiences across platforms.",
      icon: Target,
    },
    {
      title: "Sentiment Analysis Engine",
      description:
        "Develop an NLP model analyzing brand sentiment across social media, reviews, and news in real-time.",
      icon: Sparkles,
    },
    {
      title: "Predictive Customer Lifetime Value",
      description:
        "Create an ML pipeline predicting customer LTV to optimize marketing budgets and retention strategies.",
      icon: TrendingUp,
    },
    {
      title: "Recommendation Engine",
      description:
        "Build a personalized product/content recommendation system using collaborative and content-based filtering.",
      icon: BarChart3,
    },
  ],
  internship: {
    duration: "2 months",
    description:
      "Work on real AI/ML projects with enterprise datasets. Gain experience with production ML systems, research methodologies, and model deployment.",
    highlights: [
      "Work on production ML projects",
      "Research paper publication support",
      "Access to GPU computing resources",
      "Mentorship from AI researchers",
      "Portfolio-ready project completion",
      "Industry-recognized internship certificate",
    ],
  },
  certifications: [
    "AgileVision Certified AI/ML Engineer",
    "TensorFlow Developer Certificate",
    "AWS Machine Learning Specialty",
    "Deep Learning Specialization",
  ],
  careerPath: [
    {
      role: "ML Engineer",
      experience: "0-2 years",
      salary: "INR 8-14 LPA",
    },
    {
      role: "Senior ML Engineer",
      experience: "2-5 years",
      salary: "INR 14-25 LPA",
    },
    {
      role: "AI Research Scientist",
      experience: "3-7 years",
      salary: "INR 20-40 LPA",
    },
    {
      role: "ML Architect",
      experience: "7-10 years",
      salary: "INR 30-50 LPA",
    },
    {
      role: "AI Lead / Head of AI",
      experience: "10+ years",
      salary: "INR 45-80 LPA",
    },
  ],
  placementAssistance: [
    "Dedicated career coach throughout the program",
    "Resume and LinkedIn profile optimization",
    "Mock interviews with AI professionals",
    "Access to 150+ hiring partner companies",
    "AI/ML-specific job fairs",
    "95% placement rate within 3 months of graduation",
    "Lifetime access to alumni network and job portal",
  ],
  faqs: [
    {
      question: "Do I need a strong math background?",
      answer:
        "Basic understanding of linear algebra and statistics is helpful. We cover the necessary math foundations in Module 1.",
    },
    {
      question: "What hardware do I need?",
      answer:
        "A laptop with 8GB+ RAM is sufficient. We provide cloud GPU access for training large models.",
    },
    {
      question: "Will I work with real GPUs?",
      answer:
        "Yes. We provide access to NVIDIA GPUs through cloud platforms for training deep learning models.",
    },
    {
      question: "Is research paper publication guaranteed?",
      answer:
        "We support and guide students through the publication process, but acceptance depends on the quality of research and the venue.",
    },
  ],
  feeStructure: [
    { installment: "Installment 1", amount: "INR 90,000", deadline: "At admission" },
    { installment: "Installment 2", amount: "INR 65,000", deadline: "End of Month 2" },
    { installment: "Installment 3", amount: "INR 65,000", deadline: "End of Month 4" },
  ],
  relatedPrograms: [
    { title: "AI Full Stack Java Engineer", href: "/programs/ai-full-stack-java" },
    { title: "AI Data Engineering", href: "/programs/ai-data-engineering" },
    { title: "Business Analyst", href: "/programs/business-analyst" },
  ],
};

export default function AIMachineLearningPage() {
  return <ProgramDetailTemplate data={data} />;
}
