import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex h-[60px] max-w-[100vw] items-center justify-between px-4 sm:px-6 lg:px-8">


        <Link href="/" className="shrink-0 h-full cursor-pointer select-none">
            <img
                src="/VHLogo.png"
                alt="Venuehorn"
                className="h-full w-auto object-contain px-4"
                draggable={false}
            />
        </Link>


        <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link href="/browse" className="hover:text-slate-900">
            Browse Venues
          </Link>
          <Link href="/list-your-venue" className="hover:text-slate-900">
            List Your Venue
          </Link>
          <Link href="/login" className="hover:text-slate-900">
            Log In
          </Link>

          <Link
            href="/signup"
            className="rounded-md bg-[var(--color-navyblue)] px-4 py-2 text-white hover:bg-[var(--color-navyblue-light)]"
          >
            Sign Up
          </Link>
        </nav>
      </div>


      <div className="h-px w-full bg-slate-200" />
    </header>
  );
}
