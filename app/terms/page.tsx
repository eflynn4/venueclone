import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | VenueHorn",
  description: "Terms governing use of the VenueHorn platform for venues and events.",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-[calc(100vh-60px)] flex justify-center px-6 py-12">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white/95 p-10 text-slate-900 shadow-xl backdrop-blur">
        <p className="text-sm font-semibold text-slate-500">Last Updated: March 1, 2025</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">Terms of Service</h1>
        <p className="mt-4 text-lg text-slate-700">
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of VenueHorn and any related
          services, features, or content (collectively, the &quot;Platform&quot;). By accessing or using the Platform,
          you agree to these Terms and our{" "}
          <Link href="/privacy" className="font-semibold text-[var(--color-navyblue)] hover:text-[var(--color-navyblue-light)] hover:underline">
            Privacy Policy
          </Link>. If you do not agree, you may not use the Platform.
        </p>

        <div className="mt-10 space-y-8">
          <section id="acceptance-of-terms" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">1. Acceptance of Terms</h2>
            <p className="text-slate-700">
              By creating an account, using the Platform, or continuing to access VenueHorn after any updates to these
              Terms, you confirm you are legally bound by the then-current Terms and acknowledge they form a binding
              agreement between you and VenueHorn.
            </p>
          </section>

          <section id="eligibility" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">2. Eligibility</h2>
            <p className="text-slate-700">
              You must be at least 18 years old and have the legal capacity to enter into a contract to use the
              Platform. By using the Platform, you represent and warrant that you meet these requirements.
            </p>
          </section>

          <section id="description-of-service" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">3. Description of Service</h2>
            <p className="text-slate-700">
              VenueHorn is an AI-powered platform that helps users discover, plan, book, and manage venues and events.
              The Platform enables users and venue providers to connect, but VenueHorn is an intermediary only and is
              not a party to any venue contracts, proposals, or agreements between users and venue providers.
            </p>
          </section>

          <section id="account-registration" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">4. Account Registration &amp; Security</h2>
            <p className="text-slate-700">
              You agree to provide accurate, current, and complete information during registration and to keep your
              credentials secure. You are responsible for all activity under your account and will promptly notify
              VenueHorn of any unauthorized use or security incident.
            </p>
          </section>

          <section id="user-content" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">5. User Content</h2>
            <p className="text-slate-700">
              You retain ownership of content you submit to the Platform. You grant VenueHorn a worldwide,
              non-exclusive, royalty-free license to host, store, reproduce, modify, publicly display, and distribute
              that content solely to operate, improve, and promote the Platform. You represent that you have all rights
              necessary to grant this license.
            </p>
          </section>

          <section id="prohibited-conduct" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">6. Prohibited Conduct</h2>
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              <li>Violating any applicable law or regulation.</li>
              <li>Misrepresenting your identity or affiliation, or impersonating others.</li>
              <li>Posting harmful, infringing, defamatory, obscene, or fraudulent content.</li>
              <li>Interfering with Platform security or attempting to access accounts without authorization.</li>
              <li>Engaging in automated scraping, data mining, or excessive requests that burden the Platform.</li>
              <li>Reverse engineering or copying Platform features for competitive use.</li>
            </ul>
          </section>

          <section id="payments-and-fees" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">7. Payments and Fees</h2>
            <p className="text-slate-700">
              Certain features may require payment of fees. Pricing, billing schedules, and payment terms will be
              presented at checkout or in supplemental terms. All charges are non-refundable unless expressly stated.
              Payments may be processed by third-party providers, and you authorize VenueHorn to charge your selected
              payment method for applicable amounts, including taxes and any late or failed-payment fees.
            </p>
          </section>

          <section id="intellectual-property" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">8. Intellectual Property</h2>
            <p className="text-slate-700">
              VenueHorn and its licensors retain all rights, title, and interest in the Platform, including all software,
              content, trademarks, and branding. Except as expressly permitted, you may not copy, distribute, modify,
              or create derivative works based on the Platform.
            </p>
          </section>

          <section id="third-party-services" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">9. Third-Party Services</h2>
            <p className="text-slate-700">
              The Platform may link to or integrate with third-party services. VenueHorn does not control and is not
              responsible for those services. Use of third-party services is at your own risk and may be subject to
              separate terms.
            </p>
          </section>

          <section id="disclaimers" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">10. Disclaimers</h2>
            <p className="text-slate-700">
              The Platform is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. VenueHorn disclaims all warranties,
              express or implied, including merchantability, fitness for a particular purpose, and non-infringement.
              VenueHorn does not guarantee availability, accuracy, or suitability of any venue listings or bookings.
            </p>
          </section>

          <section id="limitation-of-liability" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">11. Limitation of Liability</h2>
            <p className="text-slate-700">
              To the fullest extent permitted by law, VenueHorn and its affiliates will not be liable for indirect,
              incidental, consequential, special, or punitive damages, or loss of profits, data, or goodwill. The total
              liability of VenueHorn for any claim arising out of or relating to the Platform will not exceed the amount
              you paid to VenueHorn for Platform access in the twelve (12) months preceding the claim or one hundred
              dollars (USD $100), whichever is greater.
            </p>
          </section>

          <section id="indemnification" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">12. Indemnification</h2>
            <p className="text-slate-700">
              You agree to indemnify, defend, and hold harmless VenueHorn, its affiliates, and their respective officers,
              directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees)
              arising from your use of the Platform, your content, or your violation of these Terms.
            </p>
          </section>

          <section id="termination" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">13. Termination</h2>
            <p className="text-slate-700">
              VenueHorn may suspend or terminate your access to the Platform at any time for any reason, including for
              violation of these Terms. You may stop using the Platform at any time. Sections that by their nature should
              survive termination will continue in effect.
            </p>
          </section>

          <section id="governing-law" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">14. Governing Law &amp; Dispute Resolution</h2>
            <p className="text-slate-700">
              These Terms are governed by the laws of [Jurisdiction], without regard to conflict of law principles.
              Any dispute arising out of or relating to the Platform will be resolved in the courts or forums located in
              [Jurisdiction], unless VenueHorn elects an alternative dispute resolution process permitted by law.
            </p>
          </section>

          <section id="changes-to-terms" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">15. Changes to Terms</h2>
            <p className="text-slate-700">
              VenueHorn may update these Terms from time to time. Material changes will be notified through the Platform
              or by other reasonable means. Your continued use after changes take effect constitutes acceptance of the
              updated Terms.
            </p>
          </section>

          <section id="contact-information" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">16. Contact Information</h2>
            <p className="text-slate-700">
              For questions about these Terms, contact us at{" "}
              <a href="mailto:support@venuehorn.com" className="font-semibold text-[var(--color-navyblue)] hover:text-[var(--color-navyblue-light)] hover:underline">
                support@venuehorn.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
