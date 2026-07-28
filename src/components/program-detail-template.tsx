import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  ChevronRight,
  Calendar,
  IndianRupee,
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

export interface ProgramPageData {
  icon: LucideIcon;
  title: string;
  tagline: string;
  duration: string;
  mode: string;
  batchStart: string;
  description: string;
  heroDescription: string;
  whoShouldJoin: string[];
  curriculum: { module: string; topics: string[] }[];
  technologyStack: string[];
  projects: { title: string; description: string; icon?: LucideIcon }[];
  internship: {
    duration: string;
    description: string;
    highlights: string[];
  };
  certifications: string[];
  careerPath: { role: string; experience: string; salary: string }[];
  placementAssistance: string[];
  faqs: { question: string; answer: string }[];
  relatedPrograms: { title: string; href: string }[];
}

export function ProgramDetailTemplate({ data }: { data: ProgramPageData }) {
  const Icon = data.icon;
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="outline"
                className="border-brand-orange/30 text-brand-orange mb-6"
              >
                {data.tagline}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {data.title}
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                {data.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-neutral-300">
                  <Clock className="h-5 w-5 text-brand-orange" />
                  <span>{data.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <MapPin className="h-5 w-5 text-brand-orange" />
                  <span>{data.mode}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300">
                  <Calendar className="h-5 w-5 text-brand-orange" />
                  <span>Batch starts: {data.batchStart}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-700 bg-transparent text-white hover:bg-neutral-800"
                  asChild
                >
                  <Link href="/contact">Download Brochure</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/hero-students.jpeg"
                alt="Students learning AI"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Who Should Join
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Is This Program Right for You?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.whoShouldJoin.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl border border-neutral-200"
              >
                <CheckCircle className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Curriculum
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What You&apos;ll Learn
            </h2>
            <p className="text-lg text-neutral-600">
              A comprehensive curriculum designed with input from industry leaders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.curriculum.map((module) => (
              <Card key={module.module} className="border-neutral-200">
                <CardHeader>
                  <CardTitle className="text-lg">{module.module}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2 text-sm text-neutral-600"
                      >
                        <ChevronRight className="h-4 w-4 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Tech Stack
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Technologies You&apos;ll Master
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {data.technologyStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Projects
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Build Real-World Projects
            </h2>
            <p className="text-lg text-neutral-600">
              Work on enterprise-grade projects that showcase your skills to employers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects.map((project) => (
              <Card key={project.title} className="border-neutral-200">
                <CardHeader>
                  {project.icon && (
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10">
                      <project.icon className="h-6 w-6 text-brand-orange" />
                    </div>
                  )}
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 text-sm">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Internship
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Project-Based Internship
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-neutral-600 mb-6">
                {data.internship.description}
              </p>
              <div className="flex items-center gap-2 text-neutral-700 mb-4">
                <Briefcase className="h-5 w-5 text-brand-orange" />
                <span className="font-medium">
                  Duration: {data.internship.duration}
                </span>
              </div>
            </div>
            <div className="space-y-4">
              {data.internship.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Certifications
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Industry-Recognized Certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 bg-white"
              >
                <Award className="h-6 w-6 text-brand-orange flex-shrink-0" />
                <span className="font-medium text-neutral-900">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Path */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Career Path
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Where This Program Takes You
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.careerPath.map((path) => (
              <Card key={path.role} className="border-neutral-200">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-neutral-900 text-lg mb-2">
                    {path.role}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-1">
                    Experience: {path.experience}
                  </p>
                  <p className="text-sm text-brand-orange font-medium">
                    {path.salary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Assistance */}
      <section className="py-20 md:py-28 bg-brand-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge
              variant="outline"
              className="border-brand-orange/30 text-brand-orange mb-4"
            >
              Placement Support
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Career Acceleration
            </h2>
            <p className="text-lg text-neutral-400">
              Comprehensive placement assistance to launch your career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.placementAssistance.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-orange mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button size="lg" asChild>
              <Link href="/contact">
                Book Career Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

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

      {/* Related Programs */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Related Programs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Explore More Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.relatedPrograms.map((program) => (
              <Link key={program.href} href={program.href}>
                <Card className="h-full border-neutral-200 hover:border-brand-orange/50 transition-colors group">
                  <CardContent className="pt-6 flex items-center justify-between">
                    <span className="font-semibold text-neutral-900">
                      {program.title}
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
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Take the first step toward a career in {data.title.toLowerCase()}.
            Limited seats available for the next batch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-700 bg-transparent text-white hover:bg-neutral-800"
              asChild
            >
              <Link href="/contact">Book Career Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
