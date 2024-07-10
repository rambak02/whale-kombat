import { Clicker } from "../../components/Clicker/Clicker";
import * as S from "./MainPage.styled";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { MiningInfo } from "../../components/MiningInfo/MiningInfo";
import { PopBoost } from "../../components/popups/PopBoost/PopBoost";
import { usePopupContext } from "../../context/hooks/usePopup";
import { useUserContext } from "../../context/hooks/useUser";
import coinGold from "../../assets/coinGold.png";
import { Energy } from "../../components/Energy/Energy";
import { Header } from "../../components/Header/Header";
import { useLoadingContext } from "../../context/hooks/useLoading";
import { Loader } from "../../components/Loader/Loader";

export const MainPage = () => {
  const { handleOpenPopup, isPopupOpen, currentPopup } = usePopupContext();
  const { user } = useUserContext();
  const { isLoading, progress, incrementProgress } = useLoadingContext();

  return (
    <S.Container>
      {isLoading ? (
        <Loader progress={progress} />
      ) : (
        <>
          <Header />
          <S.Content>
            <MiningInfo onClick={() => handleOpenPopup("boost")} />
            <S.BalanceBlock>
              <S.BalanceIcon src={coinGold} onLoad={incrementProgress} />
              <S.Balance> {user?.coins}</S.Balance>
            </S.BalanceBlock>
            <S.ProgressBarBlock>
              <S.LevelBlock>
                <S.LevelTitle>Название уровня &gt;</S.LevelTitle>
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
        </>
      )}
    </S.Container>
  );
};
