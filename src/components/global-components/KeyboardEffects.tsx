import { useEffect } from "react";

export const useShiftKeyEffect = (
  statusBtnShopping:boolean,
  setBtnShopping: React.Dispatch<React.SetStateAction<boolean>>
) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.shiftKey) {
        setBtnShopping((prevStatus) => !prevStatus);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [setBtnShopping]);
};
