import { addUserDetailToLocalStorage } from '../../utils/localStorage';
import { FormExtraProps } from '../../utils/types';
import Input from './Input';
import Label from './Label';

export default function FormExtra({
  agreeToTerms,
  setAgreeToTerms,
}: FormExtraProps) {
  const handleChange = () => {
    addUserDetailToLocalStorage({ key: 'agreeToTerms', val: !agreeToTerms });
    setAgreeToTerms(!agreeToTerms);
  };

  return (
    <div className="flex items-start my-8" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-center h-5">
        <Input
          id="agreeToTerms"
          name="agreeToTerms"
          type="checkbox"
          checked={agreeToTerms}
          handleChange={handleChange}
          customClass="w-[30px] mr-3"
        />
      </div>
      <Label labelFor="agreeToTerms" labelText="Agree to terms" />
    </div>
  );
}
