import { SelectToggleProps } from '../../utils/types';
import Label from '../forms/Label';

export const SelectSectorsToggle = ({
  openDropDown,
  setOpenDropDown,
  count,
}: SelectToggleProps) => {
  // const [open, setOpen] = state;

  const handleClick = () => setOpenDropDown(!openDropDown);

  return (
    <>
      <div onClick={handleClick}>
        <Label labelFor="sectors" labelText="Sectors" />
      </div>
      <button
        className=" w-[350px] h-[40px] border-[1.5px] rounded-lg text-left px-3 "
        onClick={handleClick}
      >
        {count > 0 ? `${count} selected` : 'Select'}
      </button>
    </>
  );
};
