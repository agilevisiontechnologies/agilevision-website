import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Heart,
  Users,
  Rocket,
  Coffee,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const openPositions = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Hyderabad",
    type: "Full-time",
    experience: "5+ years",
    description:
      "Lead AI solution development for enterprise clients. Work with cutting-edge ML frameworks and deploy models at scale.",
  },
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Bangalore",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Build enterprise web applications using React, Node.js, and cloud technologies.",
  },
  {
    title: "Data Engineer",
    department: "Engineering",
    location: "Hyderabad",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Design and build scalable data pipelines and data infrastructure for AI/ML workloads.",
  },
  {
    title: "Business Analyst",
    department: "Consulting",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    description:
      "Bridge business requirements with technical solutions for enterprise clients.",
  },
  {
    title: "AI Program Instructor",
    department: "Education",
    location: "Hyderabad",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Teach and mentor students in AI/ML programs. Conduct workshops and project sessions.",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Bangalore",
    type: "Full-time",
    experience: "3-5 years",
    description:
      "Manage cloud infrastructure, CI/CD pipelines, and production environments.",
  },
];

const cultureValues = [
  {
    icon: Rocket,
    title: "Innovation First",
    description:
      "We encourage experimentation and reward creative solutions to complex problems.",
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description:
      "Work with talented engineers, researchers, and domain experts across disciplines.",
  },
  {
    icon: Heart,
    title: "People Centric",
    description:
      "Flexible work policies, comprehensive benefits, and focus on work-life balance.",
  },
  {
    icon: Coffee,
    title: "Learning Culture",
    description:
      "Continuous learning opportunities, conference sponsorships, and internal tech talks.",
  },
];

const benefits = [
  "Competitive salary and performance bonuses",
  "Health insurance for you and your family",
  "Flexible work arrangements",
  "Learning and development budget",
  "Conference and certification sponsorships",
  "Paid time off and sick leave",
  "Team outings and events",
  "Stock options (for senior roles)",
];

export default function CareersPage() {
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
              Careers
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build the Future{" "}
              <span className="text-gradient">With Us</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Join a team of engineers, researchers, and innovators building
              enterprise AI solutions and developing the next generation of tech
              talent.
            </p>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Life at AgileVision
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Culture
            </h2>
            <p className="text-lg text-neutral-600">
              We believe great technology comes from great people working in the
              right environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cultureValues.map((value) => (
              <Card key={value.title} className="border-neutral-200">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-brand-orange" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
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
              What We Offer
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 bg-white"
              >
                <CheckCircle className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span className="text-neutral-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Open Positions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-neutral-600">
              We&apos;re always looking for talented people who share our passion
              for technology and innovation.
            </p>
          </div>
          <div className="space-y-4">
            {openPositions.map((position) => (
              <Card
                key={position.title}
                className="border-neutral-200 hover:border-brand-orange/50 transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                        {position.title}
                      </h3>
                      <p className="text-neutral-600 text-sm mb-3">
                        {position.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </span>
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="flex-shrink-0" asChild>
                      <Link href="/contact">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
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
            Don&apos;t See Your Role?
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            We&apos;re always open to exceptional talent. Send us your resume and
            tell us how you can contribute to our mission.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Send Your Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
