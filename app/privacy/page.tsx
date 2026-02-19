import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | VenueHorn",
  description: "How VenueHorn collects, uses, and protects personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-[calc(100vh-60px)] flex justify-center px-6 py-12">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white/95 p-10 text-slate-900 shadow-xl backdrop-blur">
        <p className="text-sm font-semibold text-slate-500">Last Updated: March 1, 2025</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-4 text-lg text-slate-700">
          This Privacy Policy explains how VenueHorn collects, uses, shares, and safeguards information when you use our
          AI-powered platform to discover, plan, book, and manage venues and events. Use of the Platform is also subject
          to our{" "}
          <Link href="/terms" className="font-semibold text-[var(--color-navyblue)] hover:text-[var(--color-navyblue-light)] hover:underline">
            Terms of Service
          </Link>.
        </p>

        <div className="mt-10 space-y-8">
          <section id="introduction" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">1. Introduction</h2>
            <p className="text-slate-700">
              VenueHorn acts as a marketplace intermediary between users and venue providers. This Policy describes the
              information we handle in connection with that role and the choices you have regarding your personal data.
            </p>
          </section>

          <section id="information-we-collect" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">2. Information We Collect</h2>
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              <li><span className="font-semibold text-slate-900">Account information:</span> name, contact details, login credentials, and profile preferences you provide.</li>
              <li><span className="font-semibold text-slate-900">Usage data:</span> search queries, saved venues, bookings, interactions with recommendations, and log data such as timestamps and feature engagement.</li>
              <li><span className="font-semibold text-slate-900">Device and technical data:</span> device identifiers, browser type, IP address, language settings, and diagnostic information.</li>
              <li><span className="font-semibold text-slate-900">Communications:</span> messages you send us (including support requests), and responses to surveys or feedback prompts.</li>
              <li><span className="font-semibold text-slate-900">Payment-related information:</span> billing details processed through our payment partners; we do not store full payment credentials on our systems.</li>
            </ul>
          </section>

          <section id="how-we-use-information" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">3. How We Use Information</h2>
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              <li>Operate, maintain, and improve the Platform, including personalized recommendations and search results.</li>
              <li>Process bookings, payments, and other transactions you initiate with venue providers.</li>
              <li>Communicate with you about your account, updates, security alerts, and support requests.</li>
              <li>Conduct analytics to understand performance, troubleshoot issues, and develop new features.</li>
              <li>Protect the Platform, prevent fraud or misuse, and enforce our policies.</li>
              <li>Send marketing or promotional messages where permitted; you may opt out of such communications at any time.</li>
            </ul>
          </section>

          <section id="sharing-of-information" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">4. Sharing of Information</h2>
            <ul className="list-disc space-y-2 pl-5 text-slate-700">
              <li><span className="font-semibold text-slate-900">Venue providers:</span> to facilitate inquiries, proposals, bookings, and related support you request.</li>
              <li><span className="font-semibold text-slate-900">Service providers:</span> vendors that assist with hosting, analytics, customer support, communications, and payment processing.</li>
              <li><span className="font-semibold text-slate-900">Legal and compliance:</span> to comply with applicable law, enforce our Terms, or protect the rights, safety, and property of VenueHorn, users, or others.</li>
              <li><span className="font-semibold text-slate-900">Business transfers:</span> in connection with a merger, acquisition, financing, or sale of all or a portion of our business.</li>
            </ul>
          </section>

          <section id="cookies-and-tracking" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">5. Cookies &amp; Tracking</h2>
            <p className="text-slate-700">
              We use cookies and similar technologies to keep you signed in, remember preferences, measure engagement,
              and improve recommendations. You can adjust cookie settings in your browser; disabling cookies may affect
              Platform functionality.
            </p>
          </section>

          <section id="data-retention" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">6. Data Retention</h2>
            <p className="text-slate-700">
              We retain information for as long as needed to provide the Platform, fulfill the purposes outlined in this
              Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no
              longer required, we delete or de-identify it.
            </p>
          </section>

          <section id="data-security" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">7. Data Security</h2>
            <p className="text-slate-700">
              We implement administrative, technical, and physical safeguards designed to protect information. No system
              can be guaranteed fully secure, and you share information at your own risk while we work to safeguard it.
            </p>
          </section>

          <section id="your-rights" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">8. Your Rights</h2>
            <p className="text-slate-700">
              Depending on your location, you may have rights to access, correct, delete, or restrict certain personal
              data, receive a copy in portable format, or object to specific processing (including direct marketing).
              You can exercise these rights or update preferences by contacting{" "}
              <a href="mailto:support@venuehorn.com" className="font-semibold text-[var(--color-navyblue)] hover:text-[var(--color-navyblue-light)] hover:underline">
                support@venuehorn.com
              </a>.
            </p>
          </section>

          <section id="childrens-privacy" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">9. Children&apos;s Privacy</h2>
            <p className="text-slate-700">
              The Platform is not intended for children under 13, and we do not knowingly collect personal information
              from them. If we become aware of such data, we will remove it and take appropriate steps to close the
              related account.
            </p>
          </section>

          <section id="international-users" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">10. International Users</h2>
            <p className="text-slate-700">
              Information may be transferred to and processed in countries outside your own, which may have different
              data protection laws. We take steps to protect data in accordance with this Policy wherever it is handled.
            </p>
          </section>

          <section id="changes-to-policy" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">11. Changes to This Policy</h2>
            <p className="text-slate-700">
              We may update this Privacy Policy to reflect operational, legal, or regulatory changes. If updates are
              material, we will provide reasonable notice through the Platform or other appropriate means. Continued use
              after changes become effective signifies acceptance of the updated Policy.
            </p>
          </section>

          <section id="contact-information" className="space-y-3">
            <h2 className="text-2xl font-semibold text-slate-900">12. Contact Information</h2>
            <p className="text-slate-700">
              For privacy questions or requests, contact us at{" "}
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
