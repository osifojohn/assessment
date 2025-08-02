interface CheckboxFieldProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  id,
  label,
  checked,
  onChange,
  className = '',
}) => {
  return (
    <div className={`flex items-start space-x-3 ${className}`}>
      <div className="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-5 h-5 text-blue-600 bg-gray-100 border-2 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 transition-all duration-200"
        />
      </div>
      <label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-5 cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};
