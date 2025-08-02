import { InputField } from '../../../../components/ui/InputField.tsx';
import { StepHeader } from '../../../../components/ui/StepHeader';
import type { FormStepProps, PersonalInfo } from '../../../../types';

export const PersonalInfoStep: React.FC<FormStepProps<PersonalInfo>> = ({
  data,
  onChange,
  errors = {},
}) => {
  return (
    <div className="space-y-8">
      <StepHeader
        title="Tell us about yourself"
        description="We need some basic information to get started on your journey"
      />

      <div className="space-y-6">
        <InputField
          id="fullName"
          label="Full Name"
          value={data.fullName}
          onChange={(value) => onChange({ ...data, fullName: value })}
          placeholder="Enter your full name"
          error={errors.fullName}
          required
        />

        <InputField
          id="email"
          label="Email Address"
          type="email"
          value={data.email}
          onChange={(value) => onChange({ ...data, email: value })}
          placeholder="Enter your email address"
          error={errors.email}
          required
        />
      </div>
    </div>
  );
};
