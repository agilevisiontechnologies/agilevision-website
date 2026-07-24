import { Badge } from "@/components/ui/badge";

export default function TermsPage() {
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
              Terms of Service
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
            1. Acceptance of Terms
          </h2>
          <p className="text-neutral-600 mb-6">
            By accessing or using AgileVision Technologies&apos; services, you
            agree to be bound by these Terms of Service. If you do not agree to
            these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            2. Services
          </h2>
          <p className="text-neutral-600 mb-6">
            AgileVision Technologies provides AI development services, enterprise
            software solutions, AI career programs, and talent solutions. The
            specific terms of each service are governed by separate agreements
            and contracts.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            3. Program Enrollment
          </h2>
          <p className="text-neutral-600 mb-6">
            Enrollment in AI Career Programs is subject to eligibility criteria,
            payment of applicable fees, and acceptance of the program-specific
            terms provided at the time of enrollment.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            4. Intellectual Property
          </h2>
          <p className="text-neutral-600 mb-6">
            All content, materials, and intellectual property on our website and
            in our programs are owned by AgileVision Technologies. Reproduction
            or distribution without written permission is prohibited.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            5. Limitation of Liability
          </h2>
          <p className="text-neutral-600 mb-6">
            AgileVision Technologies shall not be liable for any indirect,
            incidental, or consequential damages arising from the use of our
            services. Our liability is limited to the amount paid for the
            specific service.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            6. Contact
          </h2>
          <p className="text-neutral-600 mb-6">
            For questions about these Terms, contact us at
            legal@agilevisiontech.com.
          </p>
        </div>
      </section>
    </>
  );
}
