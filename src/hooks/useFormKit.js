import { useState } from "react";
import { validateStep } from "../utils/validateStep";

export const useFormKit = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    country: "",
    phone: "",
    message: "",
    accept: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isStepValid = () => {
    const errors = validateStep(formValues, currentStep);
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const nextStep = () => {
    if (isStepValid()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const submitForm = () => {
    if (!isStepValid()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormValues({
      fullName: "",
      email: "",
      country: "",
      phone: "",
      message: "",
      accept: false,
    });
    setFormErrors({});
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  return {
    formValues,
    formErrors,
    currentStep,
    isSubmitting,
    isSubmitted,
    handleChange,
    nextStep,
    prevStep,
    submitForm,
    resetForm,
  };
};
