import { useState, useEffect } from "react";

const useStorageState = (initialState) => {
  const [value, setValue] = useState(
    localStorage.getItem("value") || initialState
  );

  useEffect(() => {
    localStorage.setItem("value", value);
    2;
  }, [value]);

  return [value, setValue];
};

export default useStorageState;
