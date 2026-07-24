import Link from "next/link";
import {
  ArrowRight,
  Users,
  BookOpen,
  GraduationCap,
  Brain,
  Building2,
  Database,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    icon: Users,
    name: "Future Ready HRMS",
    description:
      "AI-powered human resource management system with intelligent recruitment, performance analytics, and employee engagement tools.",
    features: [
      "AI-powered recruitment screening",
      "Performance prediction analytics",
      "Employee engagement dashboards",
      "Automated compliance tracking",
    ],
    href: "/contact",
  },
  {
    icon: BookOpen,
    name: "Learning Management System",
    description:
      "Enterprise LMS with adaptive learning paths, real-time assessments, and AI-powered content recommendations.",
    features: [
      "Adaptive learning paths",
      "AI content recommendations",
      "Real-time skill assessments",
      "Learning analytics dashboard",
    ],
    href: "/contact",
  },
  {
    icon: GraduationCap,
    name: "CampusBridge",
    description:
      "Connecting universities with industry through internship management, placement tracking, and curriculum alignment.",
    features: [
      "Internship management portal",
      "Placement tracking system",
      "Curriculum industry alignment",
      "University-industry collaboration",
    ],
    href: "/contact",
  },
  {
    icon: Brain,
    name: "AI Tutor",
    description:
      "Personalized AI-powered learning assistant that adapts to each student's learning style and pace.",
    features: [
      "Personalized learning paths",
      "Natural language Q&A",
      "Concept visualization",
      "Progress tracking and insights",
    ],
    href: "/contact",
  },
  {
    icon: Building2,
    name: "Banking AI Copilot",
    description:
      "AI assistant for banking professionals that automates compliance checks, risk assessment, and customer service.",
    features: [
      "Automated compliance monitoring",
      "Risk assessment automation",
      "Customer service AI",
      "Regulatory reporting",
    ],
    href: "/contact",
  },
  {
    icon: Database,
    name: "CBS Products",
    description:
      "Modular core banking solutions for modern financial institutions. API-first, cloud-native, and compliant.",
    features: [
      "Core banking modules",
      "API-first architecture",
      "Real-time processing",
      "Regulatory compliance",
    ],
    href: "/contact",
  },
];

export default function ProductsPage() {
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
              Our Products
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise-Grade{" "}
              <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Purpose-built products for HR, education, and banking. AI-powered
              solutions designed to solve real enterprise challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.name}
                className="h-full border-neutral-200 hover:border-brand-orange/50 transition-colors"
              >
                <CardHeader>
                  <div className="mb-4">
                    <div className="h-12 w-12 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-brand-orange" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-neutral-600"
                      >
                        <CheckCircle className="h-4 w-4 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={product.href}>
                      Request Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Portals */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              User Portals
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-neutral-600">
              Dedicated portals for every stakeholder in our ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Student Portal",
                url: "students.agilevisiontech.com",
                description: "Track your learning progress and career journey.",
              },
              {
                name: "Recruiter Portal",
                url: "partners.agilevisiontech.com",
                description: "Access pre-assessed talent pool.",
              },
              {
                name: "Learning Portal",
                url: "learn.agilevisiontech.com",
                description: "Access courses and learning resources.",
              },
              {
                name: "Partner Portal",
                url: "partners.agilevisiontech.com",
                description: "Manage your partnership with us.",
              },
            ].map((portal) => (
              <Card key={portal.name} className="border-neutral-200">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    {portal.name}
                  </h3>
                  <p className="text-sm text-brand-orange mb-2 font-mono">
                    {portal.url}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {portal.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in Our Products?
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Request a demo or join our early access program to get first access
            to our enterprise solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-700 text-white hover:bg-neutral-800"
              asChild
            >
              <Link href="/contact">Join Early Access</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
