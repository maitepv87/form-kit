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
    formErrors,
    resetForm,
  } = useFormKit();

  const renderStep = () => {
    const props = {
      values: formValues,
      onChange: handleChange,
      errors: formErrors,
    };

    switch (currentStep) {
      case 1:
        return <FormStep1 {...props} />;
      case 2:
        return <FormStep2 {...props} />;
      case 3:
        return <FormStep3 {...props} />;
      default:
        return null;
    }
  };

  return (
    <FormLayout title="Get in Touch" currentStep={currentStep}>
      {isSubmitted ? (
        <SuccessMessage onReset={resetForm} />
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
