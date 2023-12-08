import { FormActionProps } from '../../utils/types';

export default function FormAction({
  action,
  isLoading,
  text,
  handleClick,
}: FormActionProps) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <button
        onClick={handleClick}
        type={action}
        disabled={isLoading}
        className="text-white sm:justify-self-start bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {isLoading ? 'Loading...' : text}
      </button>
    </div>
  );
}
