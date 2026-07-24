import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Users,
  Award,
  Lightbulb,
  Shield,
  TrendingUp,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We exist to bridge the gap between enterprise AI needs and industry-ready talent.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We invest in research and development to stay ahead of technology curves.",
  },
  {
    icon: Shield,
    title: "Trust & Quality",
    description: "Every solution we deliver meets enterprise-grade security and reliability standards.",
  },
  {
    icon: Users,
    title: "People Centric",
    description: "Our success is measured by the careers we launch and the businesses we transform.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "We foster a culture of continuous learning and professional development.",
  },
  {
    icon: Heart,
    title: "Impact Focused",
    description: "We focus on solutions that create measurable business outcomes.",
  },
];

const leadership = [
  {
    name: "Dr. Anand Krishnan",
    role: "Founder & CEO",
    bio: "Former AI Research Lead at Microsoft. 20+ years in enterprise technology and AI.",
  },
  {
    name: "Priya Menon",
    role: "Chief Technology Officer",
    bio: "Ex-Infosys VP. Expert in enterprise architecture and digital transformation.",
  },
  {
    name: "Rajesh Verma",
    role: "Head of AI Center of Excellence",
    bio: "PhD in Machine Learning. Led AI initiatives at Google and Amazon.",
  },
  {
    name: "Sneha Gupta",
    role: "VP - Talent Solutions",
    bio: "15+ years in enterprise talent acquisition. Built high-performance teams at TCS.",
  },
];

const timeline = [
  { year: "2018", event: "AgileVision Technologies founded with a vision to bridge AI talent gap" },
  { year: "2019", event: "Launched first AI Career Program with 50 students" },
  { year: "2020", event: "Expanded enterprise AI consulting services" },
  { year: "2021", event: "AI Center of Excellence established" },
  { year: "2022", event: "500+ enterprise projects delivered" },
  { year: "2023", event: "Expanded to 3 cities with 100+ hiring partners" },
  { year: "2024", event: "Launched CBS Modernization practice" },
  { year: "2025", event: "5000+ industry-ready engineers trained" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-brand-orange/30 text-brand-orange mb-6">
              About AgileVision
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building the Future of{" "}
              <span className="text-gradient">AI Technology</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              AgileVision Technologies is an AI-powered technology company delivering enterprise software solutions while developing industry-ready AI professionals through our AI Center of Excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Founded in 2018, AgileVision Technologies has grown from a focused AI consulting firm to a comprehensive technology partner serving enterprises across industries.
                </p>
                <p>
                  We operate at the intersection of enterprise technology and talent development. Our AI Center of Excellence conducts cutting-edge research while simultaneously developing the next generation of AI engineers through project-based learning programs.
                </p>
                <p>
                  Our dual focus enables us to offer something unique: enterprise clients get access to production-ready AI solutions, while our program graduates gain real-world experience working on actual enterprise projects.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="border-neutral-200">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-brand-orange mb-2">200+</div>
                  <div className="text-sm text-neutral-600">Enterprise Projects</div>
                </CardContent>
              </Card>
              <Card className="border-neutral-200">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-brand-orange mb-2">5000+</div>
                  <div className="text-sm text-neutral-600">Engineers Trained</div>
                </CardContent>
              </Card>
              <Card className="border-neutral-200">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-brand-orange mb-2">150+</div>
                  <div className="text-sm text-neutral-600">Hiring Partners</div>
                </CardContent>
              </Card>
              <Card className="border-neutral-200">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-brand-orange mb-2">3</div>
                  <div className="text-sm text-neutral-600">Cities</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-neutral-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-brand-orange" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 leading-relaxed">
                  To bridge the gap between enterprise AI needs and industry-ready talent by delivering production-ready AI solutions while developing the next generation of technology leaders through project-based learning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-200">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-brand-orange" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 leading-relaxed">
                  To be the trusted partner for enterprises seeking AI transformation and the preferred destination for professionals building careers in artificial intelligence and technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-neutral-600">
              Our core values guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
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

      {/* Leadership */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">Leadership</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-neutral-600">
              Industry veterans with decades of experience in AI, enterprise technology, and talent development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader) => (
              <Card key={leader.name} className="border-neutral-200">
                <CardContent className="pt-6">
                  <div className="h-16 w-16 rounded-full bg-brand-deep flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl">
                      {leader.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-neutral-900">{leader.name}</h3>
                  <p className="text-sm text-brand-orange mb-2">{leader.role}</p>
                  <p className="text-sm text-neutral-600">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Growth Timeline
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-white p-6 rounded-xl border border-neutral-200">
                      <div className="text-brand-orange font-bold text-lg mb-2">{item.year}</div>
                      <p className="text-neutral-600">{item.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-brand-orange rounded-full -translate-x-1/2" />
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-brand-deep">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner With Us
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Whether you need AI development services, enterprise talent, or want to explore partnership opportunities, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-neutral-700 text-white hover:bg-neutral-800" asChild>
              <Link href="/hiring-partners">
                Become Hiring Partner
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
