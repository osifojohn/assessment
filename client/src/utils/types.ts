import {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  ChangeEvent,
} from 'react';

export interface SectorItem {
  name: string;
  children?: SectorItem[];
}

export interface SelectSectorsGroupInterface {
  children: JSX.Element | JSX.Element[] | null;
  label: string;
}

export interface SelectOptionsInterface {
  children: JSX.Element | string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isChecked?: boolean;
}

export interface SelectProps {
  data: SectorItem[];
  onChange: (arg: SectorItem[]) => void;
  sectors: SectorItem[];
  openDropDown: boolean;
  setOpenDropDown: Dispatch<SetStateAction<boolean>>;
}

export interface SelectToggleProps {
  setOpenDropDown: Dispatch<SetStateAction<boolean>>;
  openDropDown: boolean;
  count: number;
}

export interface FormActionProps {
  isLoading: boolean;
  action: 'submit' | 'button' | 'reset';
  text: string;
}

export interface InputProps {
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[] | undefined;
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  customClass?: string;
  checked?: boolean;
  required?: boolean;
}

export interface FormExtraProps {
  agreeToTerms: boolean;
  setAgreeToTerms: (arg: boolean) => void;
}

export interface nameInputProps {
  name: string;
  setName: (val: string) => void;
}

export interface labelProps {
  labelFor: string;
  labelText: string;
  customClassName?: string;
}

export type localStorageKey = string;
export type formValuesTypes = string | boolean | SectorItem[];
