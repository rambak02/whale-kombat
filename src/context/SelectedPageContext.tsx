import { createContext, useState, FC, ReactNode } from "react";

interface SelectedIndexContextType {
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
}

interface SelectedIndexProps {
    children: ReactNode;
  }

export const SelectedIndexContext =
  createContext<SelectedIndexContextType | null>(null);

export const SelectedIndexProvider: FC<SelectedIndexProps> = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  return (
    <SelectedIndexContext.Provider
      value={{ selectedIndex, setSelectedIndex }}
    >
      {children}
    </SelectedIndexContext.Provider>
  );
};
