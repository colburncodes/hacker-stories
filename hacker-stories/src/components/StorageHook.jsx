import { useState, useEffect } from "react";

const useStorageState = (initialState) => {
  const [value, setValue] = useState(
    localStorage.getItem("value") || initialState
  );

  useEffect(() => {
    localStorage.setItem("value", value);
  }, [value]);

  return [value, setValue];
};

export default useStorageState;
