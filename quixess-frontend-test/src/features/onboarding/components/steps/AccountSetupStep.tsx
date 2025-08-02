import { InputField } from '../../../../components/ui/InputField.tsx';
import { StepHeader } from '../../../../components/ui/StepHeader';
import type { AccountSetup, FormStepProps } from '../../../../types';

export const AccountSetupStep: React.FC<FormStepProps<AccountSetup>> = ({
  data,
  onChange,
  errors = {},
}) => {
  return (
    <div className="space-y-8">
      <StepHeader
        title="Set up your account"
        description="Choose your username and create a secure password to protect your account"
      />

      <div className="space-y-6">
        <InputField
          id="username"
          label="Username"
          value={data.username}
          onChange={(value) => onChange({ ...data, username: value })}
          placeholder="Choose a unique username"
          error={errors.username}
          required
        />

        <InputField
          id="password"
          label="Password"
          type="password"
          value={data.password}
          onChange={(value) => onChange({ ...data, password: value })}
          placeholder="Create a secure password"
          error={errors.password}
          required
        />
      </div>
    </div>
  );
};
