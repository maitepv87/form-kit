import { ErrorMessage } from "./ErrorMessage";

export const FormStep3 = ({ values, onChange, errors }) => {
  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={onChange}
          rows={4}
          placeholder="Tell us more about your project or question..."
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        ></textarea>
        <ErrorMessage message={errors.message} />
      </div>

      <div className="flex items-start">
        <div className="flex-shrink-0 pt-1">
          <input
            id="accept"
            name="accept"
            type="checkbox"
            checked={values.accept}
            onChange={onChange}
            className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
        </div>
        <div className="ml-3 text-sm leading-relaxed text-gray-700">
          <label htmlFor="accept" className="font-medium">
            I accept the{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              terms and conditions
            </a>
            .
          </label>
          <ErrorMessage message={errors.accept} />
        </div>
      </div>
    </div>
  );
};
