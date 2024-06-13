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