"use client";

import HeroSearchBar from "../../components/HeroSearchBar";
import FiltersCard from "../../components/FiltersCard";
import VenueCard from "../../components/VenueCard";
import { useSearchParams } from "next/navigation";
import { useState, useMemo } from "react";
import { MOCK_VENUES } from "@/data/mockVenues";
import Link from "next/link";

export default function SearchPageClient() {
  const params = useSearchParams();
  const query = (params.get("q") ?? "").trim().toLowerCase();

  const [price, set_price] = useState(1000);

  const [locationQuery, setLocationQuery] = useState("");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  function addLocation(loc: string) {
    setSelectedLocations((prev) => (prev.includes(loc) ? prev : [...prev, loc]));
    setLocationQuery("");
  }
  function removeLocation(loc: string) {
    setSelectedLocations((prev) => prev.filter((x) => x !== loc));
  }
  function clearLocations() {
    setSelectedLocations([]);
  }

  const allLocations = useMemo(() => {
    const set = new Set<string>();
    MOCK_VENUES.forEach((v) => set.add(v.location));
    return Array.from(set).sort();
  }, []);

  const [amenities, set_amenities] = useState<string[]>([]);
  function toggle_amenity(a: string) {
    set_amenities((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]
    );
  }

  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  function toggleType(t: string) {
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  }

  function normalizeType(t: string) {
    const s = t.trim().toLowerCase();
    if (s === "event venue") return "event space";
    if (s === "bar/club") return "bar / club";
    return s;
  }

  function venueTypeTokens(raw: string) {
    return raw
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean)
      .map(normalizeType);
  }

  const allTypes = useMemo(() => {
    const set = new Set<string>();
    MOCK_VENUES.forEach((v) => {
      venueTypeTokens(v.type).forEach((t) => set.add(t));
    });
    return Array.from(set).sort();
  }, []);

  const filtered_venues = useMemo(() => {
    const q = query.trim().toLowerCase();

    return MOCK_VENUES.filter((v) => {
      if (v.price > price) return false;

      if (q) {
        const hay = `${v.name} ${v.location} ${v.type}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }

      if (selectedTypes.length) {
        const tokens = venueTypeTokens(v.type);
        if (!selectedTypes.some((t) => tokens.includes(t))) return false;
      }

      if (selectedLocations.length) {
        if (!selectedLocations.includes(v.location)) return false;
      }

      return true;
    });
  }, [price, query, selectedTypes, selectedLocations]);

  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-12">
        <h1 className="text-center text-5xl mb-6 font-extrabold text-white [text-shadow:0_4px_16px_rgba(0,0,0,0.35)]">
          {query ? <>Your AI Powered Results for '{query}'</> : <>Your AI Powered Results</>}
        </h1>

        <div className="mt-0 flex justify-center">
          <HeroSearchBar initialQuery={query} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          <FiltersCard
            price={price}
            set_price={set_price}
            amenities={amenities}
            toggle_amenity={toggle_amenity}
            types={allTypes}
            selectedTypes={selectedTypes}
            toggleType={toggleType}
            clearTypes={() => setSelectedTypes([])}
            allLocations={allLocations}
            locationQuery={locationQuery}
            setLocationQuery={setLocationQuery}
            selectedLocations={selectedLocations}
            addLocation={addLocation}
            removeLocation={removeLocation}
            clearLocations={clearLocations}
          />

          <section className="rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-xl font-bold text-slate-900">Your Results</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {filtered_venues.map((v) => (
                <Link key={v.id} href={`/venue/${v.id}`} className="block">
                  <VenueCard venue={v} />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}