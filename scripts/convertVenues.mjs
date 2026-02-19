import fs from "fs";
import path from "path";
import XLSX from "xlsx";

function parseCapacity(attendeesRaw) {
  if (!attendeesRaw) return null;

  const s = String(attendeesRaw);

  // Taking largest number from "total number of attendees" - different wording like "up to 120" and "max seated:175 / max standing: 100"
  const nums = s.match(/\d+/g)?.map(Number) ?? [];
  if (!nums.length) return null;
  return Math.max(...nums);
}

function slugId(name, city, state, idx) {
  const base = `${name ?? "venue"}-${city ?? ""}-${state ?? ""}-${idx}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return base;
}

const inputPath = path.resolve("data/Sample Test Venues.xlsx");
const wb = XLSX.readFile(inputPath);
const sheet = wb.Sheets[wb.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet, { defval: "" });

const venues = rows.map((r, idx) => {
  const name = r["Venue Name"];
  const city = r["Venue City"];
  const state = r["Venue State"];
  const type = r["Venue Type"];
  const description = r["Venue Description"];
  const website = r["Venue Website"];
  const attendees = r["Total Number of Attendees"];

  const capacity = parseCapacity(attendees) ?? 0;

  // Deterministic placeholder
  const price = 150;
  const rating = 5;

  return {
    id: slugId(name, city, state, idx),
    name,
    location: [city, state].filter(Boolean).join(", "),
    type,
    description,
    website,
    capacity,
    price,
    rating: Number(rating.toFixed(2)),
    imageSrc: "/previewVenue.png",
  };
});

const out = `// AUTO-GENERATED from Excel\nexport const MOCK_VENUES = ${JSON.stringify(
  venues,
  null,
  2
)} as const;\n`;

fs.writeFileSync("data/mockVenues.ts", out, "utf8");

console.log(`Wrote ${venues.length} venues to data/mockVenues.ts`);