import { useContext } from "react";

import { PopBoostContext } from "../PopBoostContext";
import { PopBoostContextType } from "../../interfaces/interface";

export const usePopBoostContext = (): PopBoostContextType => {
   const context= useContext(PopBoostContext);
   
   if (context === null) {
      throw new Error("error")
   }

   return context;

   }