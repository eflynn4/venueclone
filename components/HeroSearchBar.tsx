"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type HeroSearchBarProps = {
  initialQuery?: string;
  widthClass?: string;
  heightClass?: string;
  placeholder?: string;
};

export default function HeroSearchBar({
  initialQuery = "",
  widthClass = "w-[858px]",
  heightClass = "h-[70px]",
  placeholder = 'Tell us about your event. Example: “A sophisticated rooftop in Brooklyn for 50 people”',
}: HeroSearchBarProps) {
  const router = useRouter();

  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`
        flex items-center
        ${heightClass} ${widthClass}
        rounded-full bg-white
        px-4
        shadow-lg
      `}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="
          flex-1 bg-transparent
          px-4
          text-base text-slate-700
          placeholder:text-slate-500
          outline-none
        "
      />

      <button
        type="submit"
        className="
          flex h-[46px] w-[46px]
          flex-shrink-0
          items-center justify-center
          rounded-full
          bg-[var(--color-navyblue)]
          text-white
          hover:bg-[var(--color-navyblue-dark)]
          transition
        "
        aria-label="Search"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </form>
  );
}