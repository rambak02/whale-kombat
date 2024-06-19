import { ReactNode } from "react";

export interface NavMineTextProps {
  $focus: boolean;
}

export interface NavMineProps {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

export interface CompanyStyledProps {
  $selected: boolean;
}

export interface PopupProps {
  $isOpen: boolean;
}
export interface PopupContextType {
  isPopupOpen: boolean;
  currentPopup: string | null;
  handleOpenPopup: (popupName: string) => void;
  handleClosePopup: () => void;
}

export interface DailyRewardsContainerType {
 $collected: boolean;
}
export interface PopupProviderProps {
  children: ReactNode;
}

export interface Boost {
  name: string;
  avatar: string;
  profit: number;
  level: number;
  cost: number;
  id: string;
}
export interface BoostsContext {
  boosts: Boost[];
}

export interface clickNumbers {
  id: number;
  x: number;
  y: number;
}

export interface NumberProps {
  $left: number;
  $top: number;
}