import Link from "next/link";
import {
  ArrowRight,
  Clock,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Database,
  Brain,
  BarChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const programs = [
  {
    icon: Code,
    title: "AI Full Stack Java Engineer",
    duration: "6 months",
    mode: "Hybrid",
    batchStart: "Every Month",
    highlights: [
      "Java + Spring Boot",
      "AI/ML Integration",
      "Enterprise Projects",
      "95% Placement Rate",
    ],
    description: "Master full-stack development with AI integration. Build enterprise-grade applications using Java, Spring Boot, and modern AI frameworks.",
    href: "/programs/ai-full-stack-java",
  },
  {
    icon: Database,
    title: "AI Data Engineering",
    duration: "6 months",
    mode: "Hybrid",
    batchStart: "Every Month",
    highlights: [
      "Python + SQL",
      "Big Data Technologies",
      "Data Pipelines",
      "Cloud Platforms",
    ],
    description: "Become a data engineering specialist. Learn to build scalable data pipelines and work with big data technologies.",
    href: "/programs/ai-data-engineering",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    duration: "6 months",
    mode: "Hybrid",
    batchStart: "Every Month",
    highlights: [
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Research Projects",
    ],
    description: "Dive deep into AI and machine learning. Build intelligent systems using cutting-edge algorithms and frameworks.",
    href: "/programs/ai-machine-learning",
  },
  {
    icon: BarChart,
    title: "Business Analyst",
    duration: "6 months",
    mode: "Hybrid",
    batchStart: "Every Month",
    highlights: [
      "Requirements Analysis",
      "Data Visualization",
      "Agile Methods",
      "Stakeholder Management",
    ],
    description: "Bridge business and technology. Learn to analyze requirements, visualize data, and drive digital transformation.",
    href: "/programs/business-analyst",
  },
];

const features = [
  {
    icon: Briefcase,
    title: "Enterprise Projects",
    description: "Work on real enterprise projects during your program.",
  },
  {
    icon: GraduationCap,
    title: "Industry Mentors",
    description: "Learn from professionals with 10+ years of experience.",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Earn industry-recognized certifications upon completion.",
  },
  {
    icon: MapPin,
    title: "Hybrid Learning",
    description: "Flexible schedule with online and in-person sessions.",
  },
];

const stats = [
  { value: "500+", label: "Industry-Ready Engineers" },
  { value: "100%", label: "Placement Rate" },
  { value: "150+", label: "Hiring Partners" },
  { value: "50+", label: "Enterprise Projects" },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-brand-orange/30 text-brand-orange mb-6">
              AI Career Programs
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Ready{" "}
              <span className="text-gradient">AI Engineers</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Project-based learning programs designed to develop production-ready talent for enterprise AI roles. Learn from industry veterans and work on real enterprise projects.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">Our Programs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-neutral-600">
              Each program is designed with input from industry leaders to ensure you graduate with in-demand skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Link key={program.title} href={program.href}>
                <Card className="h-full border-neutral-200 hover:border-brand-orange/50 transition-colors group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="h-12 w-12 rounded-lg bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                        <program.icon className="h-6 w-6 text-brand-orange" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{program.mode}</Badge>
                        <Badge variant="outline">
                          <Clock className="h-3 w-3 mr-1" />
                          {program.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                    <p className="text-neutral-600">{program.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {program.highlights.map((highlight) => (
                        <Badge key={highlight} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500">
                        Batch starts: {program.batchStart}
                      </span>
                      <ArrowRight className="h-5 w-5 text-neutral-400 group-hover:text-brand-orange transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-28 bg-brand-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">{stat.value}</div>
                <div className="text-neutral-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">Why Our Programs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Built for Industry
            </h2>
            <p className="text-lg text-neutral-600">
              Every aspect of our programs is designed to prepare you for real-world challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="h-16 w-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-brand-orange" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-brand-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your AI Career Today
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Join thousands of graduates who have launched successful careers in AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Book Career Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-neutral-700 bg-transparent text-white hover:bg-neutral-800" asChild>
              <Link href="/contact">
                Download Brochure
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
