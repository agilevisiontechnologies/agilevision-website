"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "AI Development", href: "/services/ai-development" },
      { name: "Software Development", href: "/services/software-development" },
      { name: "CBS Modernization", href: "/services/cbs-modernization" },
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      { name: "Digital Transformation", href: "/services/digital-transformation" },
      { name: "Enterprise AI", href: "/services/enterprise-ai" },
    ],
  },
  { name: "Products", href: "/products" },
  {
    name: "Career Programs",
    href: "/programs",
    children: [
      { name: "AI Full Stack Java Engineer", href: "/programs/ai-full-stack-java" },
      { name: "AI Data Engineering", href: "/programs/ai-data-engineering" },
      { name: "AI & Machine Learning", href: "/programs/ai-machine-learning" },
      { name: "Business Analyst", href: "/programs/business-analyst" },
    ],
  },
  { name: "Hiring Partners", href: "/hiring-partners" },
  { name: "Resources", href: "/resources" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-brand-gradient flex items-center justify-center">
                <span className="text-white font-bold text-sm">AV</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-neutral-900 leading-tight">
                  Agile<span className="text-brand-orange">Vision</span>
                </span>
                <span className="text-[10px] font-normal text-neutral-400 tracking-widest uppercase leading-tight">
                  Technologies
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors",
                    "rounded-lg hover:bg-neutral-100"
                  )}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        openDropdown === item.name && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 w-64 pt-2">
                    <div className="bg-white rounded-xl border border-neutral-200 shadow-lg py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button variant="outline" className="border-neutral-300" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild>
              <Link href="/programs">Explore Programs</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 rounded-lg text-neutral-600 hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 py-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 px-4 space-y-3">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="/programs" onClick={() => setMobileMenuOpen(false)}>
                  Explore Programs
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
