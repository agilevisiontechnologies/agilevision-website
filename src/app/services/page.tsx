import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Code,
  Database,
  Cloud,
  Building2,
  Zap,
  Shield,
  Cpu,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Brain,
    title: "AI Development",
    description: "Custom AI solutions powered by machine learning, NLP, and computer vision. From concept to production-ready deployment.",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    href: "/services/ai-development",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Enterprise-grade web and mobile applications built with modern tech stacks. Scalable, secure, and maintainable.",
    features: ["Web Applications", "Mobile Development", "API Design", "Microservices"],
    href: "/services/software-development",
  },
  {
    icon: Database,
    title: "CBS Modernization",
    description: "Core Banking System transformation for the digital age. Legacy modernization with zero downtime.",
    features: ["Legacy Migration", "API-First Architecture", "Real-time Processing", "Compliance"],
    href: "/services/cbs-modernization",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services. Optimize costs while maximizing performance.",
    features: ["Cloud Migration", "Infrastructure as Code", "DevOps", "Cost Optimization"],
    href: "/services/cloud-solutions",
  },
  {
    icon: Building2,
    title: "Enterprise AI",
    description: "AI strategy and implementation for large organizations. Transform operations with intelligent automation.",
    features: ["AI Strategy", "Process Automation", "Intelligent Systems", "Data Governance"],
    href: "/services/enterprise-ai",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "End-to-end digital transformation consulting and execution. Modernize your business for the digital age.",
    features: ["Digital Strategy", "Process Reengineering", "Technology Adoption", "Change Management"],
    href: "/services/digital-transformation",
  },
  {
    icon: Shield,
    title: "Application Modernization",
    description: "Transform legacy applications into modern, cloud-native solutions. Reduce technical debt and improve agility.",
    features: ["Legacy Assessment", "Re-architecture", "Containerization", "API Integration"],
    href: "/services/application-modernization",
  },
  {
    icon: Cpu,
    title: "IT Consulting",
    description: "Strategic technology consulting to align IT with business objectives. Expert guidance for complex decisions.",
    features: ["Technology Assessment", "Architecture Review", "Vendor Selection", "Roadmap Planning"],
    href: "/services/it-consulting",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-brand-orange/30 text-brand-orange mb-6">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise Technology{" "}
              <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              From AI development to digital transformation, we deliver production-ready solutions that drive business outcomes. Our enterprise-grade approach ensures reliability, scalability, and security.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <Card className="h-full border-neutral-200 hover:border-brand-orange/50 transition-colors group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="h-12 w-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                        <service.icon className="h-6 w-6 text-brand-orange" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-neutral-400 group-hover:text-brand-orange transition-colors" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">Why AgileVision</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Enterprise-Grade Delivery
            </h2>
            <p className="text-lg text-neutral-600">
              We combine deep technical expertise with enterprise processes to deliver solutions that work at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Production Ready</h3>
              <p className="text-neutral-600 text-sm">
                Every solution meets enterprise security, scalability, and reliability standards.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">AI-First Approach</h3>
              <p className="text-neutral-600 text-sm">
                We leverage cutting-edge AI to solve complex business challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Expert Team</h3>
              <p className="text-neutral-600 text-sm">
                Our team includes veterans from Microsoft, Google, and leading enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-brand-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Let&apos;s discuss how our enterprise technology solutions can help you achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-neutral-700 bg-transparent text-white hover:bg-neutral-800" asChild>
              <Link href="/contact">
                Request Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
