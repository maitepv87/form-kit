export const SuccessMessage = () => {
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
    </div>
  );
};
