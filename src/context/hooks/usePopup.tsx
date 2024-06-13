import { useContext } from "react";

import { PopupContext } from "../PopupContext";
import { PopupContextType } from "../../interfaces/interface";

export const usePopupContext = (): PopupContextType => {
  const context = useContext(PopupContext);

  if (context === null) {
    throw new Error("error");
  }

  return context;
};
