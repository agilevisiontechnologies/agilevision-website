import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Quote,
  Award,
  Users,
  Building2,
  Code,
  FileText,
  BarChart,
  Cloud,
  Smartphone,
  Database,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const studentTestimonials = [
  {
    name: "Arjun Reddy",
    program: "AI Full Stack Java Engineer",
    batch: "Batch 2025",
    company: "Infosys",
    role: "Full Stack Developer",
    quote:
      "The project-based learning approach at AgileVision gave me real enterprise experience. I was working on production code from month 2, and my internship led directly to a full-time offer.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    program: "AI Data Engineering",
    batch: "Batch 2025",
    company: "TCS",
    role: "Data Engineer",
    quote:
      "The data engineering program covered everything from Python to cloud platforms. The hands-on projects with real datasets prepared me for the challenges of enterprise data engineering.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    program: "AI & Machine Learning",
    batch: "Batch 2025",
    company: "Wipro",
    role: "ML Engineer",
    quote:
      "The AI/ML program's focus on production deployment was unique. I didn't just learn algorithms - I learned how to deploy them at scale. That's what got me hired.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    program: "Business Analyst",
    batch: "Batch 2025",
    company: "HCL",
    role: "Business Analyst",
    quote:
      "Coming from a non-tech background, I was worried about keeping up. But the program's structure and mentorship made the transition smooth. I'm now working on enterprise digital transformation projects.",
    rating: 5,
  },
];

const employerTestimonials = [
  {
    name: "Rajesh Kumar",
    role: "CTO, National Bank",
    company: "Banking",
    quote:
      "AgileVision's AI solutions transformed our banking operations. Their team delivered a production-ready system that reduced processing time by 60%.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Talent, TechCorp",
    company: "Technology",
    quote:
      "The caliber of talent from AgileVision's programs is exceptional. Every candidate we've hired was production-ready from day one.",
  },
  {
    name: "Amit Patel",
    role: "VP Engineering, FinServe",
    company: "FinTech",
    quote:
      "Their enterprise AI consulting helped us identify opportunities we hadn't considered. The ROI was evident within the first quarter.",
  },
];

const placementStats = [
  { value: "95%", label: "Placement Rate" },
  { value: "150+", label: "Hiring Partners" },
  { value: "5000+", label: "Graduates Placed" },
  { value: "4.8/5", label: "Student Rating" },
];

const caseStudies = [
  {
    title: "AI-Powered Banking Transformation",
    client: "National Bank",
    category: "Enterprise AI",
    description:
      "Deployed AI solutions that automated 70% of manual document processing, saving 10,000+ hours annually.",
    results: ["70% automation", "10,000+ hours saved", "99.2% accuracy"],
  },
  {
    title: "Real-Time Fraud Detection System",
    client: "FinServe Solutions",
    category: "AI Development",
    description:
      "Built a real-time fraud detection system processing millions of transactions with 94% accuracy.",
    results: ["94% fraud detection", "$5M savings", "Real-time processing"],
  },
  {
    title: "Enterprise Cloud Migration",
    client: "Manufacturing Corp",
    category: "Cloud Solutions",
    description:
      "Migrated 50+ applications to cloud infrastructure, reducing costs by 35% and improving uptime to 99.99%.",
    results: ["35% cost reduction", "99.99% uptime", "50+ apps migrated"],
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="border-brand-orange/30 text-brand-orange mb-6"
            >
              Success Stories
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real Results,{" "}
              <span className="text-gradient">Real Impact</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              See how our graduates, clients, and partners have achieved
              remarkable outcomes with AgileVision.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {placementStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-brand-orange mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Student Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Career Transformations
            </h2>
            <p className="text-lg text-neutral-600">
              Hear from graduates who launched successful careers in AI and
              technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentTestimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-neutral-200">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-brand-orange/20 mb-4" />
                  <p className="text-neutral-600 mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-brand-deep flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-brand-orange">
                        {testimonial.role} at {testimonial.company}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {testimonial.program} | {testimonial.batch}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Testimonials */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Employer Feedback
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {employerTestimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-neutral-200">
                <CardContent className="pt-6">
                  <p className="text-neutral-600 mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-neutral-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Case Studies
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Enterprise Success Stories
            </h2>
            <p className="text-lg text-neutral-600">
              How we've helped enterprises achieve measurable business outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Card
                key={study.title}
                className="h-full border-neutral-200 hover:border-brand-orange/50 transition-colors"
              >
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {study.category}
                  </Badge>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <p className="text-sm text-neutral-500">{study.client}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 text-sm mb-4">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.results.map((result) => (
                      <Badge key={result} variant="outline" className="text-xs">
                        {result}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Project Gallery
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Work in Action
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Document Processing", icon: FileText },
              { title: "Real-Time Analytics", icon: BarChart },
              { title: "Cloud Infrastructure", icon: Cloud },
              { title: "Mobile Applications", icon: Smartphone },
              { title: "Data Pipelines", icon: Database },
              { title: "ML Model Deployment", icon: Brain },
            ].map((project) => (
              <div
                key={project.title}
                className="aspect-video rounded-xl bg-brand-deep p-6 flex items-center justify-center"
              >
                <div className="text-center">
                  <project.icon className="h-12 w-12 text-brand-orange mx-auto mb-2" />
                  <p className="text-white font-medium text-sm">
                    {project.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Join thousands of graduates and enterprises who have achieved
            remarkable outcomes with AgileVision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/programs">
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-700 text-white hover:bg-neutral-800"
              asChild
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
