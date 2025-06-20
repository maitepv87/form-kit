import { ErrorMessage } from "./ErrorMessage";

const countries = [
  { code: "us", name: "United States" },
  { code: "es", name: "Spain" },
  { code: "mx", name: "Mexico" },
  { code: "co", name: "Colombia" },
  { code: "ar", name: "Argentina" },
  { code: "br", name: "Brazil" },
];

export const FormStep2 = ({ values, onChange, errors }) => {
  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Country
        </label>
        <select
          id="country"
          name="country"
          value={values.country}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled>
            Select your country
          </option>
          {countries.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
        <ErrorMessage message={errors.country} />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={values.phone}
          onChange={onChange}
          placeholder="+1 555-0123"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        <ErrorMessage message={errors.phone} />
      </div>
    </div>
  );
};
