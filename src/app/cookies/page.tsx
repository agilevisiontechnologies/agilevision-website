import { Badge } from "@/components/ui/badge";

export default function CookiesPage() {
  return (
    <>
      <section className="bg-brand-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="border-brand-orange/30 text-brand-orange mb-6"
            >
              Legal
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-lg text-neutral-400">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-neutral max-w-none">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            What Are Cookies
          </h2>
          <p className="text-neutral-600 mb-6">
            Cookies are small text files placed on your device when you visit
            our website. They help us provide a better experience by remembering
            your preferences and understanding how you use our site.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Types of Cookies We Use
          </h2>
          <ul className="text-neutral-600 mb-6 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for the website to
              function properly.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors
              interact with our website.
            </li>
            <li>
              <strong>Preference Cookies:</strong> Remember your settings and
              preferences.
            </li>
            <li>
              <strong>Marketing Cookies:</strong> Used to deliver relevant
              advertisements (with your consent).
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Managing Cookies
          </h2>
          <p className="text-neutral-600 mb-6">
            You can control cookies through your browser settings. Disabling
            certain cookies may affect the functionality of our website.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Contact
          </h2>
          <p className="text-neutral-600 mb-6">
            For questions about our Cookie Policy, contact us at
            privacy@agilevisiontech.com.
          </p>
        </div>
      </section>
    </>
  );
}
