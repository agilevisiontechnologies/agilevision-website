import { Badge } from "@/components/ui/badge";

export default function PrivacyPage() {
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
              Privacy Policy
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
            1. Information We Collect
          </h2>
          <p className="text-neutral-600 mb-6">
            We collect information you provide directly, such as when you fill
            out forms, apply for programs, request demos, or contact us. This
            may include your name, email address, phone number, company
            information, and educational background.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-neutral-600 mb-6">
            We use your information to provide our services, process
            applications, communicate with you, send marketing materials (with
            your consent), improve our offerings, and comply with legal
            obligations.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            3. Information Sharing
          </h2>
          <p className="text-neutral-600 mb-6">
            We do not sell your personal information. We may share your
            information with hiring partners (with your consent for placement
            purposes), service providers who assist our operations, and as
            required by law.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            4. Data Security
          </h2>
          <p className="text-neutral-600 mb-6">
            We implement industry-standard security measures to protect your
            personal information, including encryption, access controls, and
            regular security audits.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            5. Your Rights
          </h2>
          <p className="text-neutral-600 mb-6">
            You have the right to access, correct, or delete your personal
            information. You can also opt out of marketing communications at
            any time by contacting us or using the unsubscribe link in our
            emails.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            6. Contact Us
          </h2>
          <p className="text-neutral-600 mb-6">
            If you have questions about this Privacy Policy, please contact us
            at privacy@agilevisiontech.com or write to us at our Hyderabad
            office.
          </p>
        </div>
      </section>
    </>
  );
}
