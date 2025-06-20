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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
        <ErrorMessage message={errors.message} />
      </div>

      <div className="flex items-start">
        <div className="flex-shrink-0">
          <input
            id="accept"
            name="accept"
            type="checkbox"
            checked={values.accept}
            onChange={onChange}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="accept" className="font-medium text-gray-700">
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
