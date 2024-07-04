import { Clicker } from "../../components/Clicker/Clicker";
import * as S from "./MainPage.styled";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { MiningInfo } from "../../components/MiningInfo/MiningInfo";
import { PopBoost } from "../../components/popups/PopBoost/PopBoost";
import { usePopupContext } from "../../context/hooks/usePopup";
import { useUserContext } from "../../context/hooks/useUser";
import userImg from "../../assets/whale.png";
import coinGold from "../../assets/coinGold.png";
import { Energy } from "../../components/Energy/Energy";

export const MainPage = () => {
  const tg = window.Telegram.WebApp;

  const { handleOpenPopup, isPopupOpen, currentPopup } = usePopupContext();
  const { user } = useUserContext();

  return (
    <S.Container>
      <S.Header>
        <S.UserBlock>
          <S.UserImg alt="user" src={userImg} />
          <S.Username>{" " + tg.initDataUnsafe.user?.first_name}</S.Username>
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
            <S.LevelTitle>
              Название уровня
              &gt;</S.LevelTitle>
            <S.Level>
              Level <S.LevelNumber>{user?.level}/10</S.LevelNumber>
            </S.Level>
          </S.LevelBlock>
          <S.ProgressBar></S.ProgressBar>
        </S.ProgressBarBlock>
        <Clicker />
        <Energy />
        <BottomNav />
      </S.Content>
      {isPopupOpen && currentPopup === "boost" && <PopBoost />}
    </S.Container>
  );
};
