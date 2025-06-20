export const Stepper = ({ currentStep }) => {
  const steps = ["Info", "Contact", "Confirm"];

  return (
    <div className="relative flex items-center justify-between mb-6">
      {/* Línea gris horizontal */}
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 z-0" />

      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        return (
          <div key={label} className="relative z-10 flex-1 text-center">
            <div
              className={`w-8 h-8 mx-auto rounded-full text-white text-sm flex items-center justify-center ${
                isActive ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              {stepNumber}
            </div>
            <p className="text-xs text-gray-600 mt-1">{label}</p>
          </div>
        );
      })}
    </div>
  );
};
