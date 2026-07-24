"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: ["info.agilevision@gmail.com"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 99292 50909"],
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["Business Bay, Tarabai Park", "Kolhapur, India"],
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-brand-orange/30 text-brand-orange mb-6">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Whether you need AI development services, want to explore our career programs, or are interested in partnership opportunities, we&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-neutral-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-neutral-50 rounded-xl">
                <h3 className="font-semibold text-neutral-900 mb-2">Office Hours</h3>
                <p className="text-neutral-600 text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-neutral-200">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {formState === "success" ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        Message Sent Successfully
                      </h3>
                      <p className="text-neutral-600">
                        We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                            Company
                          </label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company Name"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 123 456 7890"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-medium text-neutral-700 mb-2">
                          Inquiry Type *
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          required
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                        >
                          <option value="">Select inquiry type</option>
                          <option value="enterprise">Enterprise AI Solutions</option>
                          <option value="programs">AI Career Programs</option>
                          <option value="hiring">Hiring Partner</option>
                          <option value="consulting">IT Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your requirements..."
                          className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none"
                        />
                      </div>

                      <Button type="submit" size="lg" disabled={formState === "submitting"}>
                        {formState === "submitting" ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
