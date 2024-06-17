import { useContext } from "react";

import { BoostsContext } from "../BoostsContext";

export const useBoostsContext = () => {
  const context = useContext(BoostsContext);

  if (context === null) {
    throw new Error("error");
  }

  return context;
};
