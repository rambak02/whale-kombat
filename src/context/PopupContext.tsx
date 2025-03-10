import { createContext, useState, FC } from 'react';
import { PopupContextType, PopupProviderProps } from '../interfaces/interface';

export const PopupContext = createContext<PopupContextType | null>(null);

export const PopupProvider: FC<PopupProviderProps> = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [currentPopup, setCurrentPopup] = useState<string | null>(null);

  const handleOpenPopup = (popupName: string) => {
    setCurrentPopup(popupName);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setCurrentPopup(null);
    setIsPopupOpen(false);
  };

  return (
    <PopupContext.Provider value={{ isPopupOpen, currentPopup, handleOpenPopup, handleClosePopup }}>
      {children}
    </PopupContext.Provider>
  );
};