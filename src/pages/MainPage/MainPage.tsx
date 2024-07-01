import { Clicker } from "../../components/Clicker/Clicker";
import * as S from "./MainPage.styled";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { MiningInfo } from "../../components/MiningInfo/MiningInfo";
import { PopBoost } from "../../components/popups/PopBoost/PopBoost";
import { usePopupContext } from "../../context/hooks/usePopup";
import { authUser } from "../../api";
import { useUserContext } from "../../context/hooks/useUser";
import userImg from "../../assets/whale.png";
import coinGold from "../../assets/coinGold.png";
import { useEffect } from "react";
declare global {
  interface Window {
    Telegram: {
      WebApp: {
        ready(): unknown;
        initData: string;
        initDataUnsafe: WebAppInitData;
      };
    };
  }
}

interface WebAppInitData {
  query_id: string;
  user: WebAppUser;
  auth_date: number;
  hash: string;
}

interface WebAppUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  photo_url?: string;
}

export const MainPage = () => {
  const tg = window.Telegram.WebApp;

  const { handleOpenPopup, isPopupOpen, currentPopup } = usePopupContext();
  const { user, setUser } = useUserContext();

  const initDataUnsafe = tg.initDataUnsafe;
  useEffect(() => {
    const authenticatedUser = async () => {
      const authenticatedUser = await authUser(initDataUnsafe);
      if (authenticatedUser) {
        setUser(authenticatedUser);
      }
    };

    authenticatedUser()
    alert(initDataUnsafe);
  }, [initDataUnsafe, setUser]);


  return (
    <S.Container>
      <S.Header>
        <S.UserBlock>
          <S.UserImg alt="user" src={userImg} />
          <S.Username>{" " + tg.initDataUnsafe?.user?.first_name + "" + tg.initDataUnsafe?.user?.last_name}</S.Username>
        </S.UserBlock>
      </S.Header>
      <S.Content>
        <MiningInfo onClick={() => handleOpenPopup("boost")} />
        <S.BalanceBlock>
          <S.BalanceIcon src={coinGold}></S.BalanceIcon>
          <S.Balance> {user?.coins}</S.Balance>
        </S.BalanceBlock>
        <S.ProgressBarBlock>
          <S.LevelBlock>
            <S.LevelTitle>Название уровня {">"}</S.LevelTitle>
            <S.Level>
              Level <S.LevelNumber>{user?.level}/10</S.LevelNumber>
            </S.Level>
          </S.LevelBlock>
          <S.ProgressBar></S.ProgressBar>
        </S.ProgressBarBlock>
        <Clicker />
        <BottomNav />
      </S.Content>
      {isPopupOpen && currentPopup === "boost" && <PopBoost />}
    </S.Container>
  );
};
