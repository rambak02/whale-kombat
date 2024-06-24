import { useContext } from "react";
import { UserContext } from "../UserContext";

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error("error");
  }

  return context;
};