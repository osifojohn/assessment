import { InputProps } from '../../utils/types';

const fixedInputClass =
  ' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

export default function Input({
  handleChange,
  value,
  id,
  name,
  type,
  placeholder = '',
  checked,
  customClass,
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      name={name}
      className={customClass + fixedInputClass}
      placeholder={placeholder}
      checked={type === 'checkbox' ? checked : undefined}
      onChange={handleChange}
    />
  );
}
