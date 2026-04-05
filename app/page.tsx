import HousingForm from "../components/HousingForm";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl items-center px-4 py-8 sm:py-12">
      <section className="w-full rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">Housing Helper NYC</h1>
        <HousingForm />
      </section>
    </main>
  );
}
