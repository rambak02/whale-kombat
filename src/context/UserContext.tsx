import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { getUser, postMiningTaps } from "../api";
import AuthService from "../components/service/AuthService";
import { getMaxEnergy } from "../utils/formuls";
import { useLoadingContext } from "./hooks/useLoading";

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
  energy_lvl: number ;
  available_energy_reset: number;
  daily_count: number;
  daily_last_dt: number;
  passive_profit: number;
}

interface UserContextProps {
   user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  minusEnergy: () => void;
  updateCoins: (coins: number) => void;
  energy: number;
  resetEnergy: (energy: number) => void;
  multi: number;
}
interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const multi = user?.energy_lvl || 1 
  const [energy, setEnergy] = useState(0);
  const addedEnergy = 3;
  const {incrementProgress} = useLoadingContext()

  const minusEnergy = () => {
    if (user) {
      if (energy <= 0) {
        return 
      }
      setEnergy(energy - user.multitap_lvl);
    }
    
  };

  const resetEnergy = (energy: number) => {
   setEnergy(energy);
  }
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (energy < getMaxEnergy(multi)) {
        setEnergy(prevEnergy => {
         const newEnergy = Math.min(getMaxEnergy(multi), prevEnergy + addedEnergy)
         postMiningTaps(newEnergy, 0)
         return newEnergy
        });
       
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [energy]);

  const updateCoins = (coins: number) => {
    if (energy <= 0) {
      return 
    }
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
        // const tg = window.Telegram.WebApp
        const initData =
          "query_id=AAFYCeMcAAAAAFgJ4xzSwQ8I&user=%7B%22id%22%3A484641112%2C%22first_name%22%3A%22%D0%A0%D0%B0%D0%BC%D0%B0%D0%BB%22%2C%22last_name%22%3A%22%D0%91%D0%B0%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%22%2C%22username%22%3A%22rabltrabl%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1720097864&hash=3c17818991ce5d3de2628092c1cff31a70bbb35002a9c6317c9cba40161237b5";
        const JSONresponse = await AuthService.initDataUser(initData);
        const response = JSON.stringify(JSONresponse.data);
        const tokens = JSON.parse(response);
        localStorage.setItem("token", tokens.access);
        const userData = await getUser();
        setUser(userData);
        setEnergy(userData?.energy);
        incrementProgress();
      } catch (e) {
        console.error("error", e);
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, updateCoins, minusEnergy, energy, resetEnergy, multi }}>
      {children}
    </UserContext.Provider>
  );
};