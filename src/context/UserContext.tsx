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
<<<<<<< HEAD
        const initData = tg.initData;
        alert(initData);
        // const authResponse = await authUser(initDataUnsafe);
        // const token = authResponse.initdataunsafe.token;
=======
        const initDataUnsafe = tg.initDataUnsafe || {
          "query_id": "AAFYCeMcAAAAAFgJ4xzxi6eD",
          "user": {
            "id": 484641112,
            "first_name": "Рамал",
            "last_name": "Бакиров",
           " username": "rabltrabl",
            "language_code": "ru",
            "allows_write_to_pm": true,
          },
         " auth_date": "1720015044",
          "hash": "d3ffa9f1b6a883eedd4894a0a8c5677c791f20c78ebed21a09973367738b6076",
        };
        const authResponse = await authUser(initDataUnsafe);
>>>>>>> 956986ed8c5a170e9ffb78cb80d92aaaa5d21930
        const userData = await getUser();
        console.log(userData);
        setUser(authResponse);
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
