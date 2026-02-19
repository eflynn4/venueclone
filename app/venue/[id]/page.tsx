"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";

import HeroSearchBar from "@/components/HeroSearchBar";
import FiltersCard from "@/components/FiltersCard";
import { MOCK_VENUES } from "@/data/mockVenues";

export const dynamic = "force-dynamic";

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

export default function VenuePage() {
  const params = useParams<{ id: string }>();
  const searchParams = useSearchParams();
  const initialQuery = (searchParams.get("q") ?? "").trim();

  const venue = useMemo(() => {
    const id = params?.id;
    return MOCK_VENUES.find((v) => v.id === id) ?? null;
  }, [params?.id]);

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

  const allTypes = useMemo(() => {
    const set = new Set<string>();
    MOCK_VENUES.forEach((v) => venueTypeTokens(v.type).forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const matchesFilters = useMemo(() => {
    if (!venue) return false;

    if (venue.price > price) return false;

    if (selectedTypes.length) {
      const tokens = venueTypeTokens(venue.type);
      if (!selectedTypes.some((t) => tokens.includes(t))) return false;
    }

    if (selectedLocations.length) {
      if (!selectedLocations.includes(venue.location)) return false;
    }

    return true;
  }, [venue, price, selectedTypes, selectedLocations]);

  if (!venue) {
    return (
      <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-6 pb-16 pt-12">
          <section className="rounded-2xl bg-white p-8 shadow-xl">
            <h1 className="text-2xl font-extrabold text-slate-900">Venue not found</h1>
            <p className="mt-2 text-slate-600">
              That venue id doesn’t exist in <code>MOCK_VENUES</code>.
            </p>
            <a
              href="/search"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Back to search
            </a>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          {/* LEFT: small search + filters */}
          <aside className="space-y-6">

            <HeroSearchBar
              widthClass="w-full"
              heightClass="h-[60px]"
              placeholder="Find a venue..."
            />

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
          </aside>

          {/* RIGHT: venue detail */}
          <section className="rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="relative h-56 w-full overflow-hidden rounded-2xl md:h-64 md:w-[340px]">
                <Image
                  src={venue.imageSrc}
                  alt={venue.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h1 className="text-2xl font-extrabold text-slate-900">
                      {venue.name}
                    </h1>
                    <div className="mt-1 text-sm text-slate-600">
                      {venue.location} • {venue.type}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-900">
                      ⭐ {venue.rating.toFixed(1)}
                    </div>
                    <div className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-900">
                      ${venue.price}
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs font-semibold text-slate-500">Capacity</div>
                    <div className="mt-1 text-lg font-extrabold text-slate-900">
                      {venue.capacity && venue.capacity > 0 ? venue.capacity : "—"}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs font-semibold text-slate-500">Type</div>
                    <div className="mt-1 text-lg font-extrabold text-slate-900">
                      {venue.type}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-xs font-semibold text-slate-500">Location</div>
                    <div className="mt-1 text-lg font-extrabold text-slate-900">
                      {venue.location}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={venue.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                  >
                    Visit website
                  </a>

                  <a
                    href={`/search?q=${encodeURIComponent(venue.location)}`}
                    className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200"
                  >
                    More in {venue.location}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t pt-6">
              <h2 className="text-lg font-bold text-slate-900">About this venue</h2>
              <p className="mt-3 whitespace-pre-line text-slate-700">
                {venue.description?.trim()
                  ? venue.description
                  : "No description available yet."}
              </p>
            </div>

            {!matchesFilters && (
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <div className="text-sm font-bold text-amber-900">
                  This venue doesn’t match your current filters
                </div>
                <div className="mt-1 text-sm text-amber-900/80">
                  Tweak filters on the left to make it “eligible” again (or clear them).
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
