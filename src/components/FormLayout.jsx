import { Stepper } from "./Stepper";

export const FormLayout = ({
  title = "FormKit",
  currentStep = 1,
  children,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          {title}
        </h1>
        <Stepper currentStep={currentStep} />
        {children}
      </div>
    </div>
  );
};
