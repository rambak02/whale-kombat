import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { getBoosts } from "../api";
import { Boost } from "../interfaces/interface";

interface BoostsContextProps {
  boosts: Boost[];
  setBoosts: React.Dispatch<React.SetStateAction<Boost[]>>;
}
interface BoostsProviderProps {
  children: ReactNode;
}

export const BoostsContext = createContext<BoostsContextProps | null>(null);

export const BoostsProvider: FC<BoostsProviderProps> = ({ children }) => {
  const [boosts, setBoosts] = useState<Boost[]>([]);

  useEffect(() => {
    const fetchBoosts = async () => {
      try {
        const boosts = await getBoosts();
        setBoosts(boosts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBoosts();
  }, []);
  return (
    <BoostsContext.Provider value={{ boosts, setBoosts }}>
      {children}
    </BoostsContext.Provider>
  );
};
