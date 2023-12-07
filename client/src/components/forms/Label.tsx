import { labelProps } from '../../utils/types';

const Label = ({ labelFor, labelText }: labelProps) => {
  return (
    <label
      onClick={(e) => e.stopPropagation()}
      htmlFor={labelFor}
      className=" block mb-2 cursor-pointer text-sm font-medium text-gray-900 dark:text-white"
    >
      {labelText}
    </label>
  );
};

export default Label;
