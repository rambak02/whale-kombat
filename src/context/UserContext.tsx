import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { authUser, getUser } from "../api";

export interface User {
  id: string;
  username: string;
  coins: number;
  photo: string;
  last_passive_coin_update: number;
  level: number;
  energy: number;
  energy_change: number;
  multitap_lvl: number;
  energy_lvl: number;
  available_energy_reset: number;
  daily_count: number;
  daily_last_dt: number;
}

interface UserContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  updateCoins: (coins: number) => void;
}
interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const updateCoins = (coins: number) => {
    if (user) {
      setUser({
        ...user,
        coins,
      });
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const tg = window.Telegram.WebApp;
        const initData = tg.initData
        const authResponse = await authUser(initData);
        alert(JSON.stringify(authResponse))
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error("Error user profile:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, updateCoins }}>
      {children}
    </UserContext.Provider>
  );
};
