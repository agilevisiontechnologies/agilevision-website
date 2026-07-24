import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Video,
  FileText,
  Newspaper,
  Code,
  Database,
  Brain,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    icon: Newspaper,
    name: "AI News",
    description: "Latest developments in artificial intelligence and machine learning.",
  },
  {
    icon: Code,
    name: "Java Articles",
    description: "Deep dives into Java ecosystem, Spring Boot, and enterprise development.",
  },
  {
    icon: Database,
    name: "Data Engineering",
    description: "Tutorials and best practices for building data pipelines.",
  },
  {
    icon: Brain,
    name: "AI/ML Tutorials",
    description: "Step-by-step guides for machine learning and deep learning projects.",
  },
  {
    icon: FileText,
    name: "Whitepapers",
    description: "In-depth research reports on enterprise AI adoption and best practices.",
  },
  {
    icon: Video,
    name: "Webinars",
    description: "Live and recorded sessions with industry experts.",
  },
];

const featuredArticles = [
  {
    category: "AI News",
    title: "The Future of Enterprise AI: Trends for 2026",
    description:
      "Explore the emerging AI trends that will shape enterprise technology in the coming year.",
    date: "Jan 15, 2026",
    readTime: "8 min read",
  },
  {
    category: "Java",
    title: "Building Microservices with Spring Boot 3",
    description:
      "A comprehensive guide to building production-ready microservices with the latest Spring Boot.",
    date: "Jan 12, 2026",
    readTime: "12 min read",
  },
  {
    category: "Data Engineering",
    title: "Real-Time Data Pipelines with Kafka and Spark",
    description:
      "Learn how to build scalable real-time data processing pipelines.",
    date: "Jan 10, 2026",
    readTime: "10 min read",
  },
  {
    category: "AI/ML",
    title: "Introduction to Large Language Models",
    description:
      "Understanding the architecture and capabilities of modern LLMs.",
    date: "Jan 8, 2026",
    readTime: "15 min read",
  },
  {
    category: "Spring Boot",
    title: "Spring Security Best Practices for Enterprise",
    description:
      "Securing your Spring Boot applications with industry-standard practices.",
    date: "Jan 5, 2026",
    readTime: "10 min read",
  },
  {
    category: "Cloud",
    title: "Multi-Cloud Strategy for Enterprise Applications",
    description:
      "How to design and implement a successful multi-cloud architecture.",
    date: "Jan 3, 2026",
    readTime: "8 min read",
  },
];

const upcomingWebinars = [
  {
    title: "Building AI-Powered Enterprise Applications",
    speaker: "Rajesh Verma, Head of AI CoE",
    date: "Feb 5, 2026",
    time: "6:00 PM IST",
  },
  {
    title: "Career Paths in Data Engineering",
    speaker: "Priya Menon, CTO",
    date: "Feb 12, 2026",
    time: "6:00 PM IST",
  },
  {
    title: "CBS Modernization: A Technical Deep Dive",
    speaker: "Dr. Anand Krishnan, CEO",
    date: "Feb 19, 2026",
    time: "6:00 PM IST",
  },
];

export default function ResourcesPage() {
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
              Resources
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Knowledge &{" "}
              <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Stay ahead with the latest in AI, software engineering, and
              enterprise technology. Articles, tutorials, webinars, and
              whitepapers from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="border-neutral-200 hover:border-brand-orange/50 transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-brand-orange" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Featured Articles
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Latest from Our Blog
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Card
                key={article.title}
                className="h-full border-neutral-200 hover:border-brand-orange/50 transition-colors group"
              >
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-lg group-hover:text-brand-orange transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 text-sm mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-neutral-500">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              Webinars
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Upcoming Webinars
            </h2>
            <p className="text-lg text-neutral-600">
              Join our live sessions with industry experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingWebinars.map((webinar) => (
              <Card key={webinar.title} className="border-neutral-200">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-brand-orange text-sm mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {webinar.date} | {webinar.time}
                    </span>
                  </div>
                  <h3 className="font-semibold text-neutral-900 mb-2">
                    {webinar.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    {webinar.speaker}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Register Free
                  </Button>
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
            Stay Updated
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
            Subscribe to our newsletter for the latest articles, webinars, and
            industry insights.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Subscribe to Newsletter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
