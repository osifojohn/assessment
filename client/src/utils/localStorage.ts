import { localStorageKey, formValuesTypes } from './types';

export const addUserDetailToLocalStorage = ({
  key,
  val,
}: {
  key: localStorageKey;
  val: formValuesTypes;
}) => {
  localStorage.setItem(key, JSON.stringify(val));
};

export const removeUserDetailFromLocalStorage = (key: localStorageKey) => {
  localStorage.removeItem(key);
};

export const getUserDetailFromLocalStorage = (key: localStorageKey) => {
  const result = localStorage.getItem(key);
  return result ? JSON.parse(result) : null;
};
