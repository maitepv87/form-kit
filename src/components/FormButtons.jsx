export const FormButtons = ({
  showBack = true,
  isLastStep = false,
  onBack,
  onNext,
  onSubmit,
  isSubmitting = false,
}) => {
  const handlePrimaryClick = (e) => {
    e.preventDefault();
    if (isLastStep) {
      onSubmit();
    } else {
      onNext();
    }
  };

  return (
    <div className="flex justify-between pt-6">
      {showBack ? (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Back
        </button>
      ) : (
        <span />
      )}

      <button
        type="button"
        onClick={handlePrimaryClick}
        disabled={isSubmitting}
        className={`inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
          ${
            isSubmitting
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
      >
        {isSubmitting ? (
          <span className="animate-pulse">Sending...</span>
        ) : isLastStep ? (
          "Submit"
        ) : (
          "Next"
        )}
      </button>
    </div>
  );
};
