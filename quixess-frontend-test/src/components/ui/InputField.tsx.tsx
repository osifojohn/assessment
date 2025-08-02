import type React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = false,
  className = '',
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 border-2 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
        }`}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p
          id={`${id}-error`}
          className="text-sm text-red-600  dark:text-red-400 flex items-center mt-1"
          role="alert"
        >
          <span className=" mr-1">⚠</span>
          {error}
        </p>
      )}
    </div>
  );
};
