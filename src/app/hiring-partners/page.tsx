"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Briefcase,
  Award,
  Building2,
  GraduationCap,
  Code,
  BarChart,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  {
    icon: Users,
    title: "Pre-Assessed Talent",
    description: "Every candidate undergoes rigorous technical evaluation before graduation.",
  },
  {
    icon: Code,
    title: "Project-Ready Skills",
    description: "Graduates have hands-on experience with real enterprise projects.",
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description: "Candidates hold relevant certifications from our partner ecosystem.",
  },
  {
    icon: Briefcase,
    title: "Internship Experience",
    description: "All graduates complete project-based internships during their program.",
  },
];

const process = [
  {
    step: "01",
    title: "Submit Requirements",
    description: "Share your hiring needs, role requirements, and timeline.",
  },
  {
    step: "02",
    title: "Talent Matching",
    description: "We match your requirements with our pre-assessed candidate pool.",
  },
  {
    step: "03",
    title: "Technical Evaluation",
    description: "Review candidate profiles, assessments, and project work.",
  },
  {
    step: "04",
    title: "Interview & Hire",
    description: "Conduct interviews and extend offers to selected candidates.",
  },
];

const stats = [
  { value: "150+", label: "Hiring Partners" },
  { value: "100%", label: "Placement Rate" },
  { value: "500+", label: "Graduates Placed" },
  { value: "4.5/5", label: "Employer Satisfaction" },
];

const partners = [
  "Tata Consultancy Services (TCS)",
  "Infosys",
  "Wipro",
  "Tech Mahindra",
  "Cognizant",
  "Accenture",
  "Capgemini",
  "IBM India",
  "LTIMindtree",
  "Persistent Systems",
  "Cybage Software",
  "Zensar Technologies",
  "KPIT Technologies",
  "Mphasis",
  "HSBC Technology India",
  "BNY Mellon Technology",
  "Deutsche Bank Technology Centre",
  "Barclays Technology Centre",
  "Amdocs",
  "Virtusa",
  "Deloitte",
  "PwC India",
  "KPMG India",
  "EY GDS",
  "NVIDIA",
  "Red Hat",
  "PTC Software",
  "Siemens Digital Industries Software",
  "Dassault Systèmes",
  "Veritas Technologies",
  "FIS Global",
  "Fiserv",
  "Avaloq",
  "YASH Technologies",
  "Atos",
  "HCLTech",
  "Hexaware Technologies",
  "Birlasoft",
  "Synechron",
  "Globant",
  "GlobalLogic",
  "Thoughtworks",
  "Rocket Software",
  "Quick Heal Technologies",
  "Harbinger Group",
  "Talentica Software",
  "TIBCO Software",
  "Nihilent Technologies",
  "Coditas",
  "Xoriant Corporation",
];

export default function HiringPartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-brand-orange/30 text-brand-orange mb-6">
              Hiring Partners
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hire Industry-Ready{" "}
              <span className="text-gradient">AI Talent</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Access a pool of pre-assessed, project-ready graduates trained in AI and enterprise technologies. Reduce hiring time and onboarding costs.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-brand-orange mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire From Us */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">Why AgileVision</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Hire Our Graduates
            </h2>
            <p className="text-lg text-neutral-600">
              Our graduates are different. They&apos;ve worked on real enterprise projects and are ready to contribute from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-neutral-200">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-brand-orange" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Simple Hiring Process
            </h2>
            <p className="text-lg text-neutral-600">
              Our streamlined process makes it easy to find and hire the right talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-6xl font-bold text-brand-orange/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">Our Partners</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-neutral-600">
              Leading companies trust AgileVision for their talent needs.
            </p>
          </div>

          <div className="relative overflow-hidden mt-8">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...partners, ...partners].map((partner, index) => {
                const initials = partner.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
                return (
                  <div
                    key={index}
                    className="inline-flex flex-col items-center justify-center mx-3 px-6 py-4 border border-neutral-200 rounded-xl bg-white min-w-[140px]"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center mb-2">
                      <span className="text-brand-orange font-bold text-sm">{initials}</span>
                    </div>
                    <span className="text-neutral-600 font-medium text-xs text-center leading-tight">{partner}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-brand-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Hire Top AI Talent?
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Join 150+ companies who trust AgileVision for their hiring needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#talent-request">
                Become Hiring Partner
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="default" className="bg-white text-brand-deep hover:bg-white/90" asChild>
              <Link href="#talent-request">
                Request Talent
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Talent Request Form */}
      <section id="talent-request" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge variant="outline" className="mb-4">
                Get Started
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Request Talent
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Tell us about your hiring needs and we&apos;ll match you with the
                right candidates from our pre-assessed talent pool.
              </p>
              <div className="space-y-4">
                {[
                  "Access to pre-assessed, project-ready candidates",
                  "Dedicated account manager for your hiring needs",
                  "Technical evaluation support",
                  "No upfront costs - pay only on successful hire",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <TalentRequestForm />
          </div>
        </div>
      </section>

      {/* Employer FAQ */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Employer FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion className="space-y-4">
            {[
              {
                question: "How do I become a hiring partner?",
                answer:
                  "Fill out the talent request form above or contact our partnerships team. We'll schedule a call to understand your hiring needs and set up your partnership.",
              },
              {
                question: "What is the cost structure?",
                answer:
                  "We operate on a success-based model. You only pay when you hire a candidate through us. There are no upfront costs or retainer fees.",
              },
              {
                question: "How are candidates assessed?",
                answer:
                  "Every candidate undergoes technical assessments, project evaluations, and mock interviews. We provide detailed assessment reports for each candidate.",
              },
              {
                question: "What roles can I hire for?",
                answer:
                  "We supply talent for Full Stack Developers, Data Engineers, AI/ML Engineers, Business Analysts, and other technology roles across experience levels.",
              },
              {
                question: "What is the typical hiring timeline?",
                answer:
                  "From talent request to candidate shortlisting, typically 1-2 weeks. Final hiring decisions depend on your interview process.",
              },
            ].map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-neutral-200 rounded-xl px-6 bg-white"
              >
                <AccordionTrigger className="text-left font-medium text-neutral-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

function TalentRequestForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");
  };

  if (formState === "success") {
    return (
      <Card className="border-neutral-200">
        <CardContent className="pt-6 text-center py-12">
          <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">
            Request Submitted
          </h3>
          <p className="text-neutral-600">
            Our partnerships team will contact you within 24 hours.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-neutral-200">
      <CardHeader>
        <CardTitle className="text-xl">Talent Request Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Company Name *
              </label>
              <Input required placeholder="Your company" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Contact Person *
              </label>
              <Input required placeholder="Full name" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Email *
              </label>
              <Input required type="email" placeholder="hr@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Phone
              </label>
              <Input type="tel" placeholder="+91 123 456 7890" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Role Requirements *
            </label>
            <Input required placeholder="e.g., Full Stack Developer, 2+ years" />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Number of Positions
            </label>
            <Input type="number" placeholder="e.g., 5" />
          </div>
          <Button type="submit" className="w-full" disabled={formState === "submitting"}>
            {formState === "submitting" ? (
              "Submitting..."
            ) : (
              <>
                Submit Request
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
