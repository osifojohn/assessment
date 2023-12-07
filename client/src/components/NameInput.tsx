import { addUserDetailToLocalStorage } from '../utils/localStorage';
import { nameInputProps } from '../utils/types';
import Input from './forms/Input';
import Label from './forms/Label';

export default function NameInput({ name, setName }: nameInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    addUserDetailToLocalStorage({ key: 'name', val: value });
  };

  return (
    <div
      className="justify-self-center gap-6 mb-6 mt-10"
      onClick={(e) => e.stopPropagation()}
    >
      <div>
        <Label labelFor="name" labelText="Name" />
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Enter your name"
          handleChange={handleChange}
          customClass="w-[340px]"
        />
      </div>
    </div>
  );
}
