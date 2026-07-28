import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Lightbulb,
  Users,
  Award,
  BookOpen,
  Rocket,
  CheckCircle,
  Beaker,
  Target,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const focusAreas = [
  {
    icon: Brain,
    title: "AI Research",
    description: "Cutting-edge research in machine learning, NLP, and computer vision pushing the boundaries of what's possible.",
  },
  {
    icon: Rocket,
    title: "Innovation Labs",
    description: "Dedicated spaces for rapid prototyping and experimentation with emerging AI technologies.",
  },
  {
    icon: Users,
    title: "Talent Development",
    description: "Project-based programs that develop industry-ready AI professionals through hands-on experience.",
  },
  {
    icon: Building2,
    title: "Enterprise Partnerships",
    description: "Collaborative projects with industry leaders to solve real-world business challenges.",
  },
];

const capabilities = [
  "Machine Learning & Deep Learning",
  "Natural Language Processing",
  "Computer Vision & Image Recognition",
  "Predictive Analytics",
  "Reinforcement Learning",
  "Generative AI & LLMs",
  "Edge AI & IoT Integration",
  "MLOps & Model Deployment",
];

const stats = [
  { value: "50+", label: "Research Projects" },
  { value: "20+", label: "Published Papers" },
  { value: "100+", label: "Enterprise Deployments" },
  { value: "30+", label: "Patents Filed" },
];

const team = [
  {
    name: "Dr. Anand Krishnan",
    role: "Chief AI Officer",
    expertise: "Deep Learning, Computer Vision",
    bio: "Former AI Research Lead at Microsoft with 15+ years in enterprise AI.",
  },
  {
    name: "Rajesh Verma",
    role: "Head of Research",
    expertise: "NLP, Reinforcement Learning",
    bio: "PhD in Machine Learning from IIT. Led AI initiatives at Google and Amazon.",
  },
  {
    name: "Dr. Meera Iyer",
    role: "Research Director",
    expertise: "Generative AI, LLMs",
    bio: "Published 20+ papers in top AI conferences. Expert in large language models.",
  },
  {
    name: "Karthik Reddy",
    role: "ML Engineering Lead",
    expertise: "MLOps, Model Deployment",
    bio: "Built ML infrastructure at Scale. Expert in production AI systems.",
  },
];

const partnerships = [
  {
    name: "University Collaborations",
    description: "Research partnerships with leading universities for cutting-edge AI research.",
  },
  {
    name: "Industry Advisory Board",
    description: "Guidance from CTOs and VPs of Fortune 500 companies on real-world AI challenges.",
  },
  {
    name: "Open Source Contributions",
    description: "Active contributors to major AI frameworks and tools used by the global community.",
  },
];

export default function AICenterOfExcellencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-brand-orange/30 text-brand-orange mb-6">
              AI Center of Excellence
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Where Innovation Meets{" "}
              <span className="text-gradient">Implementation</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Our AI Center of Excellence combines research, enterprise projects, and talent development to drive innovation across industries. We bridge the gap between cutting-edge AI research and production-ready solutions.
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

      {/* About */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Driving AI Innovation
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  The AgileVision AI Center of Excellence is the heart of our innovation engine. Established in 2021, it brings together world-class researchers, engineers, and industry experts to tackle the most challenging problems in enterprise AI.
                </p>
                <p>
                  Our unique model combines fundamental research with practical application. Every research project has a clear path to production deployment, ensuring our work creates real business value.
                </p>
                <p>
                  We also serve as the training ground for our AI Career Programs, giving students direct exposure to cutting-edge research and enterprise projects under the guidance of our senior researchers.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-neutral-200">
                <CardContent className="pt-6">
                  <Beaker className="h-8 w-8 text-brand-orange mb-3" />
                  <h3 className="font-semibold text-neutral-900 mb-2">Research Focus</h3>
                  <p className="text-sm text-neutral-600">50+ active research projects across AI domains</p>
                </CardContent>
              </Card>
              <Card className="border-neutral-200">
                <CardContent className="pt-6">
                  <Award className="h-8 w-8 text-brand-orange mb-3" />
                  <h3 className="font-semibold text-neutral-900 mb-2">Industry Recognition</h3>
                  <p className="text-sm text-neutral-600">20+ published papers in top AI conferences</p>
                </CardContent>
              </Card>
              <Card className="border-neutral-200">
                <CardContent className="pt-6">
                  <Target className="h-8 w-8 text-brand-orange mb-3" />
                  <h3 className="font-semibold text-neutral-900 mb-2">Production Deployments</h3>
                  <p className="text-sm text-neutral-600">100+ AI solutions deployed at enterprise scale</p>
                </CardContent>
              </Card>
              <Card className="border-neutral-200">
                <CardContent className="pt-6">
                  <Lightbulb className="h-8 w-8 text-brand-orange mb-3" />
                  <h3 className="font-semibold text-neutral-900 mb-2">Innovation Pipeline</h3>
                  <p className="text-sm text-neutral-600">30+ patents filed for novel AI techniques</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">Focus Areas</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-neutral-600">
              Our Center of Excellence operates across four key pillars to drive end-to-end AI innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area) => (
              <Card key={area.title} className="border-neutral-200">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
                    <area.icon className="h-6 w-6 text-brand-orange" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">Our Capabilities</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-neutral-600">
              Deep expertise across the full spectrum of AI and machine learning technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-center gap-3 p-4 rounded-xl border border-neutral-200 bg-white"
              >
                <CheckCircle className="h-5 w-5 text-brand-orange flex-shrink-0" />
                <span className="text-neutral-700 font-medium">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Research Team
            </h2>
            <p className="text-lg text-neutral-600">
              World-class researchers and engineers driving AI innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="border-neutral-200">
                <CardContent className="pt-6">
                  <div className="h-16 w-16 rounded-full bg-brand-deep flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-neutral-900">{member.name}</h3>
                  <p className="text-sm text-brand-orange mb-1">{member.role}</p>
                  <p className="text-xs text-neutral-500 mb-2">{member.expertise}</p>
                  <p className="text-sm text-neutral-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">Collaborations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-lg text-neutral-600">
              We collaborate with leading institutions and organizations to advance AI innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partnership) => (
              <div key={partnership.name} className="text-center">
                <div className="h-16 w-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-brand-orange" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{partnership.name}</h3>
                <p className="text-neutral-600 text-sm">{partnership.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-brand-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Collaborate With Us
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Whether you&apos;re looking for AI research partnerships, enterprise solutions, or career opportunities in AI, we&apos;d love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-neutral-700 bg-transparent text-white hover:bg-neutral-800" asChild>
              <Link href="/programs">
                Join Our Programs
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
