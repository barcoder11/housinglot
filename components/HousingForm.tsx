export default function HousingForm() {
  return (
    <form action="/results" method="GET" className="space-y-5">
      <div>
        <label htmlFor="householdSize" className="mb-1 block text-sm font-medium text-slate-700">
          Household size
        </label>
        <input
          id="householdSize"
          name="householdSize"
          type="number"
          inputMode="numeric"
          step="1"
          min="1"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
        />
      </div>

      <div>
        <label htmlFor="annualIncome" className="mb-1 block text-sm font-medium text-slate-700">
          Annual income ($)
        </label>
        <input
          id="annualIncome"
          name="annualIncome"
          type="number"
          inputMode="numeric"
          step="1"
          min="0"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
        />
      </div>

      <div>
        <label htmlFor="borough" className="mb-1 block text-sm font-medium text-slate-700">
          Borough preference
        </label>
        <select
          id="borough"
          name="borough"
          required
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
        >
          <option value="">Select a borough</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Queens">Queens</option>
          <option value="Bronx">Bronx</option>
          <option value="Staten Island">Staten Island</option>
        </select>
      </div>

      <div>
        <label htmlFor="maxRent" className="mb-1 block text-sm font-medium text-slate-700">
          Max rent ($)
        </label>
        <input
          id="maxRent"
          name="maxRent"
          type="number"
          inputMode="numeric"
          step="1"
          min="0"
          required
          className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-slate-900 px-4 py-2.5 font-medium text-white hover:bg-slate-700"
      >
        See results
      </button>
    </form>
  );
}
