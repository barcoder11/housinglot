import type { Listing } from "../data/listings";

type ListingCardProps = {
  listing: Listing;
};

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <li className="rounded-lg border border-slate-200 p-4">
      <p className="font-medium">{listing.title}</p>
      <p className="text-sm text-slate-600">
        {listing.borough} · {listing.bedrooms === 0 ? "Studio" : `${listing.bedrooms} BR`} · ${listing.rent}/month
      </p>
    </li>
  );
}
