import { CheckboxField } from '../../../../components/ui/CheckboxField';
import { SelectField } from '../../../../components/ui/SelectField';
import { StepHeader } from '../../../../components/ui/StepHeader';
import type { FormStepProps, Preferences } from '../../../../types';

export const PreferencesStep: React.FC<FormStepProps<Preferences>> = ({
  data,
  onChange,
}) => {
  const themeOptions = [
    { value: 'light', label: '☀️ Light Theme' },
    { value: 'dark', label: '🌙 Dark Theme' },
  ];

  return (
    <div className="space-y-8">
      <StepHeader
        title="Customize your experience"
        description="Set your preferences to make the platform truly yours"
      />

      <div className="space-y-8">
        <SelectField
          id="theme"
          label="Theme Selection"
          value={data.theme}
          onChange={(value) =>
            onChange({ ...data, theme: value as 'light' | 'dark' })
          }
          options={themeOptions}
        />

        <CheckboxField
          id="newsletter"
          label="Subscribe to our newsletter for the latest updates, tips, and exclusive content delivered to your inbox"
          checked={data.newsletter}
          onChange={(checked) => onChange({ ...data, newsletter: checked })}
        />
      </div>
    </div>
  );
};
