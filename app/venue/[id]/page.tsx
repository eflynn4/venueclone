import { Suspense } from "react";
import VenuePageClient from "./VenuePageClient";

export const dynamic = "force-dynamic"; // works here (server file)

export default function Page() {
  return (
    <Suspense fallback={null}>
      <VenuePageClient />
    </Suspense>
  );
}