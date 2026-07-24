import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AgileVision Technologies | AI-Powered Technology Company",
    template: "%s | AgileVision Technologies",
  },
  description:
    "AgileVision Technologies is an AI-powered technology company delivering enterprise software solutions while developing industry-ready AI professionals through its AI Center of Excellence.",
  keywords: [
    "AI development",
    "enterprise software",
    "CBS modernization",
    "AI career programs",
    "technology company",
    "digital transformation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AgileVision Technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
