import {
  FormLayout,
  FormStep1,
  FormStep2,
  FormStep3,
  FormButtons,
  SuccessMessage,
} from "../components";
import { useFormKit } from "../hooks/useFormKit";

export const FormKitPage = () => {
  const {
    currentStep,
    formValues,
    handleChange,
    nextStep,
    prevStep,
    isSubmitting,
    isSubmitted,
    submitForm,
  } = useFormKit();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FormStep1 values={formValues} onChange={handleChange} />;
      case 2:
        return <FormStep2 values={formValues} onChange={handleChange} />;
      case 3:
        return <FormStep3 values={formValues} onChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <FormLayout title="Get in Touch" currentStep={currentStep}>
      {isSubmitted ? (
        <SuccessMessage />
      ) : (
        <>
          {renderStep()}
          <FormButtons
            showBack={currentStep > 1}
            isLastStep={currentStep === 3}
            onNext={nextStep}
            onBack={prevStep}
            onSubmit={submitForm}
            isSubmitting={isSubmitting}
          />
        </>
      )}
    </FormLayout>
  );
};
