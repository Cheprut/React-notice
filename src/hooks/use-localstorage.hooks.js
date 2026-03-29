import { useEffect, useState } from "react";

export function useLocalStorage(key) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(key));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  function saveData(data) {
    localStorage.setItem(key, JSON.stringify(data));
    setData(data);
  }

  return [data, saveData];
}
