export interface BaseFormData {
  [key: string]: string | boolean | number | undefined;
}

export interface PersonalInfo extends BaseFormData {
  fullName: string;
  email: string;
}

export interface AccountSetup extends BaseFormData {
  username: string;
  password: string;
}

export interface Preferences extends BaseFormData {
  theme: 'light' | 'dark';
  newsletter: boolean;
}

export interface OnboardingFormData {
  personalInfo: PersonalInfo;
  accountSetup: AccountSetup;
  preferences: Preferences;
}

export interface ValidationErrors {
  [key: string]: string;
}

export type OnboardingStepData = PersonalInfo | AccountSetup | Preferences;

export interface StepConfig<T = OnboardingStepData> {
  id: number;
  title: string;
  icon: string;
  component: React.ComponentType<FormStepProps<T>>;
}

export interface FormStepProps<T = OnboardingStepData> {
  data: T;
  onChange: (data: T) => void;
  errors?: ValidationErrors;
}
