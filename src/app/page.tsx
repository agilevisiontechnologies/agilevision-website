import Link from "next/link";
import {
  ArrowRight,
  Code,
  Database,
  Cloud,
  Brain,
  Building2,
  GraduationCap,
  Briefcase,
  Users,
  Award,
  Target,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Brain,
    title: "AI Development",
    description: "Custom AI solutions powered by machine learning, NLP, and computer vision.",
    href: "/services/ai-development",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Enterprise-grade web and mobile applications built with modern tech stacks.",
    href: "/services/software-development",
  },
  {
    icon: Database,
    title: "CBS Modernization",
    description: "Core Banking System transformation for the digital age.",
    href: "/services/cbs-modernization",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services.",
    href: "/services/cloud-solutions",
  },
  {
    icon: Building2,
    title: "Enterprise AI",
    description: "AI strategy and implementation for large organizations.",
    href: "/services/enterprise-ai",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end digital transformation consulting and execution.",
    href: "/services/digital-transformation",
  },
];

const programs = [
  {
    title: "AI Full Stack Java Engineer",
    duration: "6 months",
    mode: "Hybrid",
    highlights: ["Java + Spring Boot", "AI/ML Integration", "Enterprise Projects"],
    href: "/programs/ai-full-stack-java",
  },
  {
    title: "AI Data Engineering",
    duration: "5 months",
    mode: "Hybrid",
    highlights: ["Python + SQL", "Big Data Technologies", "Data Pipelines"],
    href: "/programs/ai-data-engineering",
  },
  {
    title: "AI & Machine Learning",
    duration: "6 months",
    mode: "Hybrid",
    highlights: ["Deep Learning", "NLP", "Computer Vision"],
    href: "/programs/ai-machine-learning",
  },
  {
    title: "Business Analyst",
    duration: "4 months",
    mode: "Hybrid",
    highlights: ["Requirements Analysis", "Data Visualization", "Agile Methods"],
    href: "/programs/business-analyst",
  },
];

const stats = [
  { value: "200+", label: "Enterprise Projects Delivered" },
  { value: "5000+", label: "Industry-Ready Engineers" },
  { value: "150+", label: "Hiring Partners" },
  { value: "95%", label: "Placement Rate" },
];

const testimonials = [
  {
    quote: "AgileVision's AI solutions transformed our banking operations. Their team delivered a production-ready system that reduced processing time by 60%.",
    author: "Dr. R.V. Kulkarni",
    role: "Ex Director, CSIBER",
    company: "Education",
  },
  {
    quote: "The caliber of talent from AgileVision's programs is exceptional. Every candidate we've hired was production-ready from day one.",
    author: "Priya Sharma",
    role: "Head of Talent, TechCorp",
    company: "Technology",
  },
  {
    quote: "Their enterprise AI consulting helped us identify opportunities we hadn't considered. The ROI was evident within the first quarter.",
    author: "Amit Patel",
    role: "VP Engineering, FinServe",
    company: "FinTech",
  },
];

const partners = [
  "Microsoft",
  "Google Cloud",
  "AWS",
  "Infosys",
  "TCS",
  "Wipro",
  "HCL",
  "Tech Mahindra",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-deep overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,212,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            <Badge variant="outline" className="border-brand-orange/30 text-brand-orange mb-6">
              AI-Powered Technology Company
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Engineering AI.{" "}
              <span className="text-gradient">Empowering Careers.</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
              AgileVision Technologies delivers enterprise software solutions while developing industry-ready AI professionals through our AI Center of Excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="default" className="bg-white text-brand-deep hover:bg-white/90" asChild>
                <Link href="/programs">
                  AI Career Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="default" className="bg-transparent border border-white text-white hover:bg-white/10" asChild>
                <Link href="/hiring-partners">
                  Become Hiring Partner
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent" />
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Enterprise Technology Solutions
            </h2>
            <p className="text-lg text-neutral-600">
              From AI development to digital transformation, we deliver production-ready solutions that drive business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <Card className="h-full border-neutral-200 hover:border-brand-orange/50 transition-colors group">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                      <service.icon className="h-6 w-6 text-brand-orange" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Center of Excellence */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">AI Center of Excellence</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Where Innovation Meets Implementation
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Our AI Center of Excellence combines research, enterprise projects, and talent development to drive innovation across industries.
              </p>
              <div className="space-y-4">
                {[
                  "AI Research & Innovation Programs",
                  "Enterprise Project Integration",
                  "University Partnerships",
                  "Corporate Training Solutions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-orange flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/ai-center-of-excellence">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-brand-deep p-8 flex items-center justify-center">
                <div className="text-center">
                  <Brain className="h-24 w-24 text-brand-orange mx-auto mb-4" />
                  <p className="text-white font-semibold text-xl">AI Center of Excellence</p>
                  <p className="text-neutral-400 mt-2">Research | Innovation | Enterprise</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-brand-gradient opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">AI Career Programs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Industry-Ready Engineers
            </h2>
            <p className="text-lg text-neutral-600">
              Project-based learning programs designed to develop production-ready talent for enterprise AI roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program) => (
              <Link key={program.title} href={program.href}>
                <Card className="h-full border-neutral-200 hover:border-brand-orange/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{program.mode}</Badge>
                      <span className="text-sm text-neutral-500">{program.duration}</span>
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {program.highlights.map((highlight) => (
                        <Badge key={highlight} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/programs">
                View All Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-neutral-600">
              See how our solutions and talent have transformed businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="border-neutral-200">
                <CardContent className="pt-6">
                  <p className="text-neutral-600 mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                      <span className="text-brand-orange font-semibold text-sm">
                        {testimonial.author.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900">{testimonial.author}</p>
                      <p className="text-sm text-neutral-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-neutral-500 mb-8">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div key={partner} className="text-neutral-400 font-semibold text-lg">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-deep rounded-2xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
              Whether you need AI development services, enterprise talent, or technology consulting, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="default" className="bg-white text-brand-deep hover:bg-white/90" asChild>
                <Link href="/hiring-partners">
                  Become Hiring Partner
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
