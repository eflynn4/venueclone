import Link from "next/link";
import { Search, Facebook, Instagram, Phone, Mail, Twitter, X} from "lucide-react";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-slate-700 hover:text-slate-900 hover:underline underline-offset-4"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex justify-center gap-4">
          <Link
            href="#"
            aria-label="Facebook"
            className="grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-white hover:bg-slate-800"
          >

            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="currentColor"
              aria-hidden="true"
            >
              <Facebook />
            </svg>
          </Link>

          <Link
            href="#"
            aria-label="Twitter"
            className="grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-white hover:bg-slate-800"
          >

            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="currentColor"
              aria-hidden="true"
            >

                <path d="M18.9 2H22l-6.8 7.8L23 22h-6.7l-5.2-6.7L5.2 22H2l7.3-8.4L1 2h6.8l4.7 6.1L18.9 2zm-1.2 18h1.8L6.9 3.9H5L17.7 20z" />
            </svg>
          </Link>

          <Link
            href="#"
            aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-white hover:bg-slate-800"
          >

            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="currentColor"
              aria-hidden="true"
            >
                <Instagram/>
            </svg>
          </Link>
        </div>


        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* For Users */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">For Users</h3>
            <ul className="mt-2 space-y-2">
              <li><FooterLink href="/browse">Browse Venues</FooterLink></li>
              <li><FooterLink href="/how-it-works">How It Works</FooterLink></li>
              <li><FooterLink href="/pricing">Pricing / Packages</FooterLink></li>
              <li><FooterLink href="/faqs">FAQs</FooterLink></li>
            </ul>
          </div>

          {/* For Vendors */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">For Vendors</h3>
            <ul className="mt-2 space-y-2">
              <li><FooterLink href="/list-your-venue">List Your Venue</FooterLink></li>
              <li><FooterLink href="/vendor-dashboard">Vendor Dashboard</FooterLink></li>
              <li><FooterLink href="/vendor-resources">Vendor Resources</FooterLink></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Company</h3>
            <ul className="mt-2 space-y-2">
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/careers">Careers</FooterLink></li>
              <li><FooterLink href="/blog">Blog/News</FooterLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Legal</h3>
            <ul className="mt-2 space-y-2">
              <li><FooterLink href="/terms">Terms of Service</FooterLink></li>
              <li><FooterLink href="/privacy">Privacy Policy</FooterLink></li>
              <li>
                <FooterLink href="/refunds">
                  Refund &amp; Cancellation Policy
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Support</h3>
            <ul className="mt-2 space-y-2 text-slate-700">
              <li className="flex gap-1">
                <span>Email:</span>
                <a
                  className="hover:text-slate-900 hover:underline underline-offset-4"
                  href="mailto:support@yourdomain.com"
                >
                  support@yourdomain.com
                </a>
              </li>
              <li className="flex gap-1">
                <span>Phone:</span>
                <a
                  className="hover:text-slate-900 hover:underline underline-offset-4"
                  href="tel:+1XXXXXXXXXX"
                >
                  +1 (XXX) XXX-XXXX
                </a>
              </li>
              <li>
                <FooterLink href="/chat">Chat with us</FooterLink>{" "}
              </li>
              <li><FooterLink href="/help">Contact form / Help Center</FooterLink></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
