import { createContext, useState, ReactNode, FC } from 'react';
import { PopBoostContextType } from '../interfaces/interface';



export const PopBoostContext = createContext<PopBoostContextType | null>(null);

interface PopBoostProviderProps {
  children: ReactNode;
}

export const PopBoostProvider: FC<PopBoostProviderProps> = ({ children }) => {
  const [isPopBoostOpen, setIsPopBoostOpen] = useState<boolean>(false);

  const handleOpenPopBoost = () => {
    setIsPopBoostOpen(true);
  };

  const handleClosePopBoost = () => {
    setIsPopBoostOpen(false);
  };

  return (
    <PopBoostContext.Provider value={{ isPopBoostOpen, handleOpenPopBoost, handleClosePopBoost }}>
      {children}
    </PopBoostContext.Provider>
  );
};