export interface BaseFormData {
  [key: string]: any;
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

export interface StepConfig {
  id: number;
  title: string;
  icon: string;
  component: React.ComponentType<any>;
}

export interface FormStepProps<T = BaseFormData> {
  data: T;
  onChange: (data: T) => void;
  errors?: ValidationErrors;
}
