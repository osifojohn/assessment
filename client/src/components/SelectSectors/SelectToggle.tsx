import { SelectToggleProps } from '../../utils/types';
import Label from '../forms/Label';

export const SelectSectorsToggle = ({
  openDropDown,
  setOpenDropDown,
  count,
  sectorsIsLoading,
}: SelectToggleProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    setOpenDropDown(!openDropDown);
  };

  return (
    <>
      <div onClick={handleClick}>
        <Label labelFor="sectors" labelText="Sectors" />
      </div>
      <button
        className=" w-[350px] h-[40px] border-[1.5px] rounded-lg text-left px-3 "
        onClick={handleClick}
      >
        {count > 0
          ? `${count} selected`
          : sectorsIsLoading
          ? 'Loading...'
          : 'Select'}
      </button>
    </>
  );
};
