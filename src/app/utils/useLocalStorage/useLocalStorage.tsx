import { useState, useEffect } from 'react';

function getSavedValue(key: string, initialValue: string) {
  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) {
    return savedValue;
  } else {
    return initialValue;
  }
}

function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}

export default useLocalStorage;
