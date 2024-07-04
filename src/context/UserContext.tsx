import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { getUser } from "../api";
import AuthService from "../components/service/AuthService";

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
        const initData =JSON.stringify(tg.initData);
        const JSONresponse = await AuthService.initDataUser(initData);
        const response = JSON.stringify(JSONresponse.data);
        const tokens = JSON.parse(response);
        localStorage.setItem("token", tokens.access);
        const userData = await getUser();
        setUser(userData);
      } catch (e) {
        console.error("error", e);
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
