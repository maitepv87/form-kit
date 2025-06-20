export const SuccessMessage = ({ onReset }) => {
  return (
    <div className="text-center space-y-4">
      <svg
        className="mx-auto h-16 w-16 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <h2 className="text-xl font-semibold text-gray-800">
        Form submitted successfully!
      </h2>
      <p className="text-gray-600">Thanks! We'll be in touch soon.</p>
      <button
        onClick={onReset}
        className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 border border-blue-300 rounded hover:bg-blue-50"
      >
        Fill another form
      </button>
    </div>
  );
};
