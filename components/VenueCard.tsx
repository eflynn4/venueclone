import Image from "next/image";

type Venue = {
  id: string;
  name: string;
  location: string;
  price: number;
  capacity: number;
  rating: number;
  imageSrc: string;
};

export default function VenueCard({ venue }: { venue: Venue }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-44 w-full">
        <Image
          src={venue.imageSrc}
          alt={venue.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <div className="text-lg font-bold text-slate-900">{venue.name}</div>
        <div className="text-sm text-slate-600">{venue.location}</div>

        <div className="mt-3 flex items-end justify-between">
          <div className="flex items-center gap-4 text-sm text-slate-700">
            <div className="flex items-center gap-1">
              <span>👤</span>
              <span>{venue.capacity}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⭐</span>
              <span>{venue.rating.toFixed(2)}</span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm font-bold text-slate-900">
              ${venue.price}/hr
            </div>
            <button className="mt-2 rounded-full bg-[var(--color-navyblue)] px-6 py-1.5 text-sm font-semibold text-white hover:bg-[var(--color-navyblue-dark)]">
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
