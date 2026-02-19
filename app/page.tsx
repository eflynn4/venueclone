import Image from "next/image";
import HeroSearchBar from "../components/HeroSearchBar";

export default function Home() {
  return (
    <div className="relative z-30 min-h-[calc(100vh-60px)] flex flex-col text-center text-white items-center justify-center -translate-y-16">

        <h1 className="text-[56px] font-extrabold leading-[1.1] text-shadow-[4px_4px_4px_rgba(0,0,0,0.35)]">
          Discover Your Dream Venue,
          <br />
          Powered by AI Magic
        </h1>


        <p className="mt-4 mb-10 text-2xl font-semibold text-white/90 text-shadow-[2px_2px_2px_rgba(0,0,0,0.35)]">
          Tell our AI what you need, we&apos;ll find the perfect match!
        </p>

        <HeroSearchBar/>
    </div>
  );
}
