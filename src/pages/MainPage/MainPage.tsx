import { useState } from "react";
import { Clicker } from "../../components/Clicker/Clicker";
import * as S from "./MainPage.styled";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { MiningInfo } from "../../components/MiningInfo/MiningInfo";
import { constRoutes } from "../../paths";
import { Link } from "react-router-dom";
import { PopBoost } from "../../components/popups/PopBoost/PopBoost";
import { usePopupContext } from "../../context/hooks/usePopup";
import { authUser } from "../../api";

declare global {
  interface Window {
    Telegram: {
      WebApp: {
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
  const [balance, setBalance] = useState<number>(0);

  const { handleOpenPopup, isPopupOpen, currentPopup } = usePopupContext();

  const initData = tg.initData;
  authUser(initData);

  return (
    <S.Container>
      <S.Header>
        <S.UserBlock>
          <S.UserImg alt="user" src={tg.initDataUnsafe.user.photo_url || ""}/>
          <S.Username>
            {tg.initDataUnsafe?.user?.first_name}
          </S.Username>
        </S.UserBlock>

        <Link to={constRoutes.CRYPTOCOMPANIES}>
          <S.BybitBlock>
            <S.BybitImg src="../../..//Bybit.svg" alt="bybit" />
            <S.BybitText>Bybit</S.BybitText>
          </S.BybitBlock>
        </Link>
      </S.Header>
      <S.Content>
        <MiningInfo onClick={() => handleOpenPopup("boost")} />
        <S.BalanceBlock>
          <S.BalanceIcon src="../../..//Vector.svg"></S.BalanceIcon>
          <S.Balance> {balance}</S.Balance>
        </S.BalanceBlock>
        <S.ProgressBarBlock>
          <S.LevelBlock>
            <S.LevelTitle>Название уровня {">"}</S.LevelTitle>
            <S.Level>
              Level <S.LevelNumber>7/10</S.LevelNumber>
            </S.Level>
          </S.LevelBlock>
          <S.ProgressBar></S.ProgressBar>
        </S.ProgressBarBlock>
        <Clicker onClick={() => setBalance((prev) => prev + 1)} />
        <BottomNav />
      </S.Content>
      {isPopupOpen && currentPopup === "boost" && <PopBoost />}
    </S.Container>
  );
};
