import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import type { LucideIcon } from "lucide-react";

export interface ServicePageData {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  heroDescription: string;
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  technologies: string[];
  caseStudy?: {
    title: string;
    client: string;
    challenge: string;
    solution: string;
    results: string[];
  };
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; href: string }[];
}

export function ServiceDetailTemplate({ data }: { data: ServicePageData }) {
  const Icon = data.icon;
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
              {data.tagline}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {data.title}
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              {data.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Overview
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {data.description}
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-brand-deep p-8 flex items-center justify-center">
                <div className="text-center">
                  <Icon className="h-24 w-24 text-brand-orange mx-auto mb-4" />
                  <p className="text-white font-semibold text-xl">{data.title}</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-brand-gradient opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose This Service
            </h2>
            <p className="text-lg text-neutral-600">
              Measurable outcomes that drive real business value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.benefits.map((benefit) => (
              <Card key={benefit.title} className="border-neutral-200">
                <CardHeader>
                  <CheckCircle className="h-6 w-6 text-brand-orange mb-2" />
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

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How We Deliver
            </h2>
            <p className="text-lg text-neutral-600">
              A structured approach that ensures quality and transparency at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.process.map((step) => (
              <div key={step.step} className="relative">
                <div className="text-6xl font-bold text-brand-orange/20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Tech Stack
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Technologies We Use
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {data.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      {data.caseStudy && (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <Badge variant="outline" className="mb-4">
                Case Study
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                {data.caseStudy.title}
              </h2>
              <p className="text-lg text-neutral-600">
                Client: {data.caseStudy.client}
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-neutral-200">
                <CardHeader>
                  <CardTitle className="text-lg">Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">{data.caseStudy.challenge}</p>
                </CardContent>
              </Card>
              <Card className="border-neutral-200">
                <CardHeader>
                  <CardTitle className="text-lg">Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">{data.caseStudy.solution}</p>
                </CardContent>
              </Card>
              <Card className="border-neutral-200">
                <CardHeader>
                  <CardTitle className="text-lg">Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {data.caseStudy.results.map((result) => (
                      <li
                        key={result}
                        className="flex items-start gap-2 text-neutral-600"
                      >
                        <CheckCircle className="h-4 w-4 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion className="space-y-4">
            {data.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-neutral-200 rounded-xl px-6"
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

      {/* Related Services */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Related Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Explore More
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.relatedServices.map((service) => (
              <Link key={service.href} href={service.href}>
                <Card className="h-full border-neutral-200 hover:border-brand-orange/50 transition-colors group">
                  <CardContent className="pt-6 flex items-center justify-between">
                    <span className="font-semibold text-neutral-900">
                      {service.title}
                    </span>
                    <ChevronRight className="h-5 w-5 text-neutral-400 group-hover:text-brand-orange transition-colors" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Let&apos;s discuss how our {data.title.toLowerCase()} services can help
            you achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-700 text-white hover:bg-neutral-800"
              asChild
            >
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
