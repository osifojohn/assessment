import { useCallback, useState } from 'react';
import { useOnboardingForm } from '../../hooks/useOnboardingForm';
import type {
  AccountSetup,
  OnboardingFormData,
  PersonalInfo,
  Preferences,
  StepConfig,
} from '../../types';
import { PersonalInfoStep } from './components/steps/PersonalInfoStep';
import { AccountSetupStep } from './components/steps/AccountSetupStep';
import { PreferencesStep } from './components/steps/PreferencesStep';
import { Button } from '../../components/ui/Button';
import { ProgressIndicator } from '../../components/ui/ProgressIndicator';

export const OnboardingModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    currentStep,
    errors,
    formData,
    updateFormData,
    nextStep,
    prevStep,
    resetForm,
  } = useOnboardingForm();

  const steps: StepConfig[] = [
    {
      id: 0,
      title: 'Personal Info',
      icon: '/icons/user.svg',
      component: PersonalInfoStep,
    },
    {
      id: 1,
      title: 'Account Setup',
      icon: '/icons/settings.svg',
      component: AccountSetupStep,
    },
    {
      id: 2,
      title: 'Preferences',
      icon: '/icons/palette.svg',
      component: PreferencesStep,
    },
  ];

  const handleSubmit = useCallback(() => {
    console.log('Form submitted:', formData);
    alert('🎉 Onboarding completed successfully! Welcome to Quixess!');
    setIsOpen(false);
    resetForm();
  }, [formData, resetForm]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    resetForm();
  };

  const renderCurrentStep = () => {
    const currentStepConfig = steps[currentStep];
    const StepComponent = currentStepConfig.component;

    const stepData =
      currentStep === 0
        ? formData.personalInfo
        : currentStep === 1
        ? formData.accountSetup
        : formData.preferences;

    const stepKey =
      currentStep === 0
        ? 'personalInfo'
        : currentStep === 1
        ? 'accountSetup'
        : 'preferences';

    return (
      <StepComponent
        data={stepData}
        onChange={(data: PersonalInfo | AccountSetup | Preferences) =>
          updateFormData(stepKey as keyof OnboardingFormData, data)
        }
        errors={errors}
      />
    );
  };

  if (!isOpen) {
    return (
      <div className="flex h-[100vh] items-center  p-4">
        <div className="text-center max-w-2xl flex items-center flex-col  mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/icons/settings.svg"
                alt="Quixess Logo"
                className="w-16 h-16 filter brightness-0 invert"
              />
            </div>
            <h1 className="text-5xl font-bold  dark:text-gray-100 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to Quixess
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-lg mx-auto">
              Complete your onboarding journey to unlock all features and
              personalize your experience
            </p>
          </div>
          <Button
            onClick={openModal}
            variant="primary"
            size="lg"
            className="shadow-xl cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
          >
            🚀 Start Your Journey
          </Button>
        </div>
      </div>
    );
  }

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-hidden transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white p-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-bold">Get Started</h1>
            <button
              onClick={closeModal}
              className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white hover:bg-opacity-20 rounded-full"
              aria-label="Close modal"
            >
              <img
                src="/icons/close.svg"
                alt="Close"
                className="w-6 h-6 cursor-pointer hover:opacity-80 filter brightness-0 invert"
              />
            </button>
          </div>

          <ProgressIndicator steps={steps} currentStep={currentStep} />
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 bg-gray-50 dark:bg-gray-900">
          <div className="transition-all duration-500 ease-in-out transform">
            {renderCurrentStep()}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t dark:border-gray-700 bg-white dark:bg-gray-800 px-8 md:px-12 py-6 flex justify-between items-center">
          <Button
            onClick={prevStep}
            variant="ghost"
            disabled={isFirstStep}
            size="lg"
          >
            Back
          </Button>

          <div className="text-sm text-gray-500 dark:text-gray-400">
            Step {currentStep + 1} of {steps.length}
          </div>

          {isLastStep ? (
            <Button
              onClick={handleSubmit}
              variant="success"
              size="lg"
              className="shadow-xl"
            >
              Complete Setup
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              variant="primary"
              size="lg"
              className="shadow-xl"
            >
              Continue
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
