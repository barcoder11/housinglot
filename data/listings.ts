export type Borough = "Manhattan" | "Brooklyn" | "Queens" | "Bronx" | "Staten Island";

export type Listing = {
  id: number;
  title: string;
  borough: Borough;
  rent: number;
  bedrooms: number;
};

export const sampleListings: Listing[] = [
  { id: 1, title: "Upper Manhattan Studio", borough: "Manhattan", rent: 2200, bedrooms: 0 },
  { id: 2, title: "Park Slope One Bedroom", borough: "Brooklyn", rent: 2800, bedrooms: 1 },
  { id: 3, title: "Astoria Two Bedroom", borough: "Queens", rent: 2600, bedrooms: 2 },
  { id: 4, title: "Riverdale One Bedroom", borough: "Bronx", rent: 1900, bedrooms: 1 },
  { id: 5, title: "St. George Two Bedroom", borough: "Staten Island", rent: 2100, bedrooms: 2 },
  { id: 6, title: "Sunset Park Studio", borough: "Brooklyn", rent: 1800, bedrooms: 0 },
];
