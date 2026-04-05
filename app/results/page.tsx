import Link from "next/link";
import ListingCard from "../../components/ListingCard";
import { sampleListings } from "../../data/listings";

type SearchParamValue = string | string[] | undefined;

type ResultsPageProps = {
  searchParams: {
    householdSize?: SearchParamValue;
    annualIncome?: SearchParamValue;
    borough?: SearchParamValue;
    maxRent?: SearchParamValue;
  };
};

const readParam = (value: SearchParamValue): string | undefined => {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
};

export default function ResultsPage({ searchParams }: ResultsPageProps) {
  const householdSize = readParam(searchParams.householdSize) ?? "Not provided";
  const annualIncome = readParam(searchParams.annualIncome) ?? "Not provided";
  const borough = readParam(searchParams.borough) ?? "Not provided";
  const maxRentRaw = readParam(searchParams.maxRent);
  const maxRent = Number(maxRentRaw ?? "0");
  const safeMaxRent = Number.isFinite(maxRent) ? maxRent : 0;

  const filteredListings = sampleListings.filter(
    (listing) => listing.borough === borough && listing.rent <= safeMaxRent,
  );

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-8 sm:py-10">
      <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight">Housing Helper NYC</h1>
        <p className="mt-2 text-slate-600">Your housing estimate results</p>

        <div className="mt-8 grid gap-3 rounded-lg bg-slate-50 p-4 text-sm">
          <p>
            <span className="font-semibold">Household size:</span> {householdSize}
          </p>
          <p>
            <span className="font-semibold">Annual income:</span> ${annualIncome}
          </p>
          <p>
            <span className="font-semibold">Borough preference:</span> {borough}
          </p>
          <p>
            <span className="font-semibold">Max rent:</span> ${maxRentRaw ?? "Not provided"}
          </p>
        </div>

        <h2 className="mt-8 text-xl font-semibold">Sample apartment matches</h2>

        {filteredListings.length === 0 ? (
          <p className="mt-3 rounded-md bg-amber-50 p-3 text-amber-900">
            No sample listings matched your borough and max rent.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </ul>
        )}

        <p className="mt-8 rounded-md bg-blue-50 p-3 text-sm text-blue-900">
          All eligibility results are estimates only and are not guaranteed.
        </p>

        <Link href="/" className="mt-6 inline-block text-sm font-medium text-slate-700 underline">
          Back to form
        </Link>
      </section>
    </main>
  );
}
