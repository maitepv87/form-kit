import { useState } from "react";

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

  const totalSteps = 3;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const submitForm = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500); // Simula envío
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
  };
};
