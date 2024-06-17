import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { getBoosts } from "../api";

interface BoostsProviderProps {
  children: ReactNode;
}

export const BoostsContext = createContext(null);

export const  BoostsProvider: FC<BoostsProviderProps> = ({ children }) => {
  const [boosts, setBoosts] = useState<string[] | null>([]);

  useEffect(() => {

    const fetchCards = async () => {
      try {
        const boosts = await getBoosts();
        setBoosts(boosts);
      } catch (error) {
        console.log(error);
      } 
    };

    fetchCards();
  }, []);
  return (
    <BoostsContext.Provider value={{ boosts, setBoosts }}>
      {children}
    </BoostsContext.Provider>
  );
}
