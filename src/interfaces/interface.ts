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
export interface PopBoostContextType {
  isPopBoostOpen: boolean;
  handleOpenPopBoost: () => void;
  handleClosePopBoost: () => void;
}