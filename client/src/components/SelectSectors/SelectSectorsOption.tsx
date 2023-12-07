import { SelectOptionsInterface } from '../../utils/types';

export const SelectSectorsOption = ({
  children,
  onClick,
  isChecked,
}: SelectOptionsInterface) => {
  return (
    <div
      className="w-full h-[40px] flex justify-between items-center hover:bg-slate-300 cursor-pointer"
      onClick={onClick}
    >
      <label htmlFor={`checkbox-${children}`}>{children}</label>
      <input
        type="checkbox"
        id={`checkbox-${children}`}
        className="ml-5"
        checked={isChecked}
        onChange={() => {}}
      />
    </div>
  );
};
