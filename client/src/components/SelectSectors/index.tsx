import { useCallback, useEffect, useMemo, useRef } from 'react';

import { SectorItem, SelectProps } from '../../utils/types';
import { SelectSectorsOption } from './SelectSectorsOption';
import { SelectSectorsGroup } from './SelectSectorsGroup';
import { SelectSectorsToggle } from './SelectToggle';
import { addUserDetailToLocalStorage } from '../../utils/localStorage';

export default function SelectSectors({
  data,
  sectors,
  onChange,
  openDropDown,
  setOpenDropDown,
}: SelectProps) {
  const dropDownRef = useRef(null);

  const handleChange = useCallback(
    (item: SectorItem) => () => {
      const initialIndex = sectors.findIndex(
        (valueItem) => valueItem.name === item.name
      );

      const newValue = [...sectors];
      if (initialIndex > -1) newValue.splice(initialIndex, 1);
      else newValue.push(item);

      onChange([...newValue]);
      addUserDetailToLocalStorage({ key: 'sectors', val: [...newValue] });
    },

    [sectors, onChange]
  );

  const isChecked = useCallback(
    (item: SectorItem) => {
      return !!sectors.find((valueItem) => valueItem.name === item.name);
    },
    [sectors]
  );

  const populateGroups = useCallback(
    (list?: SectorItem[]) => {
      if (!list) return null;
      return list?.map((item: SectorItem) => {
        if (!item?.children?.length)
          return (
            <SelectSectorsOption
              onClick={handleChange(item)}
              isChecked={isChecked(item)}
              key={item.name}
            >
              {item.name}
            </SelectSectorsOption>
          );

        return (
          <SelectSectorsGroup label={item.name} key={item.name}>
            {populateGroups(item.children)}
          </SelectSectorsGroup>
        );
      });
    },
    [handleChange, isChecked]
  );

  const dropdown = useMemo(() => {
    if (!openDropDown) return null;
    return (
      <div className="h-[200px] w-[350px] overflow-y-auto">
        {' '}
        <div className="w-full flex flex-col  h-[10px] p-3">
          {populateGroups(data)}
        </div>
      </div>
    );
  }, [data, populateGroups, openDropDown]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.target !== dropDownRef.current) {
        setOpenDropDown(false);
      }
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <div
      className="w-fit justify-self-center mb-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <SelectSectorsToggle
        openDropDown={openDropDown}
        setOpenDropDown={setOpenDropDown}
        count={sectors.length}
      />
      {dropdown}
    </div>
  );
}
