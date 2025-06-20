import { ErrorMessage } from "./ErrorMessage";

export const FormStep1 = ({ values, onChange, errors }) => {
  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={values.fullName}
          onChange={onChange}
          placeholder="Jon Snow"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        <ErrorMessage message={errors.fullName} />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={onChange}
          placeholder="you@example.com"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>
    </div>
  );
};
