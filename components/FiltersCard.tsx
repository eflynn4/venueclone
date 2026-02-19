import { useMemo, useRef, useState } from "react";

type FiltersCardProps = {
  price: number;
  set_price: (value: number) => void;

  amenities: string[];
  toggle_amenity: (a: string) => void;

  types: string[];
  selectedTypes: string[];
  toggleType: (t: string) => void;

  clearTypes: () => void;

  allLocations: string[];
  locationQuery: string;
  setLocationQuery: (value: string) => void;

  selectedLocations: string[];
  addLocation: (loc: string) => void;
  removeLocation: (loc: string) => void;
  clearLocations: () => void;
};

export default function FiltersCard( {
  price,
  set_price,
  amenities,
  toggle_amenity,
  types,
  selectedTypes,
  toggleType,
  clearTypes,
  allLocations,
  locationQuery,
  setLocationQuery,
  selectedLocations,
  addLocation,
  removeLocation,
  clearLocations, } : FiltersCardProps) {
    const AMENITIES = ["Parking", "Wifi", "Restrooms", "Seating", "Bar"];
    const [open, setOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    function titleCase(s: string) {
      return s
        .split(" ")
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    }

    const locationOptions = useMemo(() => {
      const q = locationQuery.trim().toLowerCase();
      if (!q) return [];
      return allLocations
        .filter(loc => loc.toLowerCase().includes(q))
        .filter(loc => !selectedLocations.includes(loc))
        .slice(0, 8); // limit dropdown
    }, [allLocations, locationQuery, selectedLocations]);

    return (
      <aside className="h-fit rounded-2xl bg-white p-6 shadow-xl">
        <h3 className="text-center text-lg font-bold text-slate-900">Filters</h3>

        <Input_Range_Price_Slider price={price} set_price={set_price} />

        {/* Location Autocomplete */}
        <div className="mt-6">
          <div className="text-sm font-semibold text-slate-900">Location</div>

          <div className="relative mt-2">
            <input
              ref={inputRef}
              value={locationQuery}
              onChange={(e) => {
                setLocationQuery(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && locationOptions[0]) {
                  e.preventDefault();
                  addLocation(locationOptions[0]);
                  setOpen(false);
                }
                if (e.key === "Escape") setOpen(false);
              }}
              placeholder="Search City/State"
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none"
            />

            {open && locationOptions.length > 0 && (
              <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg">
                {locationOptions.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      addLocation(loc);
                      setOpen(false);
                      inputRef.current?.focus();
                    }}
                    className="w-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Selected locations */}
          {selectedLocations.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedLocations.map((loc) => (
                <div
                  key={loc}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                >
                  <span>{loc}</span>
                  <button
                    type="button"
                    onClick={() => removeLocation(loc)}
                    className="text-slate-400 hover:text-slate-700"
                    aria-label={`Remove ${loc}`}
                  >
                    ×
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={clearLocations}
                className="ml-1 text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                Clear locations
              </button>
            </div>
          )}
        </div>



        <div className="mt-6">
          <div className="text-sm font-semibold text-slate-900">Type</div>

          <div className="mt-3 flex flex-wrap gap-2">
            {types.map((t) => {
              const active = selectedTypes.includes(t);

              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => toggleType(t)}
                  className={[
                    "rounded-full px-3 py-1 text-sm border transition",
                    active
                      ? "bg-[var(--color-navyblue)] text-white border-[var(--color-navyblue)]"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50",
                  ].join(" ")}
                >
                  {titleCase(t)}
                </button>
              );
            })}
          </div>

          {selectedTypes.length > 0 && (
            <button
              type="button"
              onClick={() => selectedTypes.forEach(toggleType)}
              className="mt-3 text-sm font-semibold text-slate-600 hover:text-slate-900"
            >
              Clear types
            </button>
          )}
        </div>


        <div className="mt-6">
          <div className="text-sm font-semibold text-slate-900">Amenities [Placeholder]</div>

          <div className="mt-3 space-y-2 text-sm text-slate-700">
            {AMENITIES.map((a) => (
              <label key={a} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={amenities.includes(a)}
                  onChange={() => toggle_amenity(a)}
                />
                {a}
              </label>
            ))}
          </div>
        </div>
      </aside>
    );
}
  

type Input_Range_Price_Slider_Props = {
  price: number;
  set_price: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
};

export function Input_Range_Price_Slider({
  price,
  set_price,
  min = 0,
  max = 1000,
  step = 50,
}: Input_Range_Price_Slider_Props) {
  const pct = ((price - min) / (max - min)) * 100;

  return (
    <div className="mt-6">
      <div className="text-sm font-semibold text-slate-900">Price</div>

      <div className="mt-2 flex items-center justify-between text-sm text-slate-700">
        <span>${min}</span>
        <span>${max}</span>
      </div>

      <div className="relative mt-2 h-2 w-full rounded-full bg-slate-200">
        <div
          className="h-2 rounded-full bg-[var(--color-navyblue)]"
          style={{ width: `${pct}%` }}
        />

        <input
          type="range"
          id="price_range"
          name="price_range"
          min={min}
          max={max}
          step={step}
          value={price}
          onChange={(e) => set_price(Number(e.target.value))}
          aria-label="Price"
          className="absolute inset-0 h-2 w-full cursor-pointer opacity-0"
        />
      </div>

      <div className="mt-2 text-sm text-slate-700">
        Selected: <span className="font-semibold text-slate-900">${price}</span>
      </div>
    </div>
  );
}
