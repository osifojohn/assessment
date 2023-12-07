import { SelectSectorsGroupInterface } from '../../utils/types';

export const SelectSectorsGroup = ({
  children,
  label,
}: SelectSectorsGroupInterface) => {
  return (
    <fieldset className="flex-1 flex flex-col ml-5">
      <legend className="text-gray-400">{label}</legend>
      <fieldset className="ml-5">{children}</fieldset>
    </fieldset>
  );
};
