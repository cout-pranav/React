import { useState, useEffect } from "react";

function getSavedValue(key, initialValue) {
  const raw = localStorage.getItem(key);
  if (raw !== null) {
    try {
      return JSON.parse(raw);
    } catch {
      // corrupt value — fall back to initialValue
    }
  }
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

  return [storedValue, setStoredValue];
}