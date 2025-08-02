import { useCallback, useState } from 'react';
import type { OnboardingFormData, ValidationErrors } from '../types';
import { ValidationService } from '../utils/validation';

export const useOnboardingForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [formData, setFormData] = useState<OnboardingFormData>({
    personalInfo: { fullName: '', email: '' },
    accountSetup: { username: '', password: '' },
    preferences: { theme: 'light', newsletter: false },
  });

  const updateFormData = useCallback(
    <K extends keyof OnboardingFormData>(
      section: K,
      data: OnboardingFormData[K]
    ) => {
      setFormData((prev) => ({ ...prev, [section]: data }));
    },
    []
  );

  const validateCurrentStep = useCallback(
    (step: number): boolean => {
      let stepErrors: ValidationErrors = {};

      switch (step) {
        case 0:
          stepErrors = ValidationService.validatePersonalInfo(
            formData.personalInfo
          );
          break;
        case 1:
          stepErrors = ValidationService.validateAccountSetup(
            formData.accountSetup
          );
          break;
        case 2:
          // Preferences step has no validation
          break;
        default:
          break;
      }

      setErrors(stepErrors);
      return Object.keys(stepErrors).length === 0;
    },
    [formData]
  );

  const nextStep = useCallback(() => {
    if (validateCurrentStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, validateCurrentStep]);

  const prevStep = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    setErrors({});
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      personalInfo: { fullName: '', email: '' },
      accountSetup: { username: '', password: '' },
      preferences: { theme: 'light', newsletter: false },
    });
    setCurrentStep(0);
    setErrors({});
  }, []);

  return {
    currentStep,
    errors,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    resetForm,
    validateCurrentStep,
  };
};
