export const validateStep = (values, currentStep) => {
  const errors = {};

  if (currentStep === 1) {
    if (!values.fullName.trim()) {
      errors.fullName = "Full name is required.";
    }
    if (!values.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Invalid email format.";
    }
  }

  if (currentStep === 2) {
    if (!values.country) {
      errors.country = "Please select a country.";
    }
    if (!values.phone.trim()) {
      errors.phone = "Phone number is required.";
    }
  }

  if (currentStep === 3) {
    if (!values.message.trim()) {
      errors.message = "Please enter a message.";
    }
    if (!values.accept) {
      errors.accept = "You must accept the terms.";
    }
  }

  return errors;
};
