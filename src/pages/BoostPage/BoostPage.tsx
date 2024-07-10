import { BottomNav } from "../../components/BottomNav/BottomNav";
import { Img } from "react-image";
import * as S from "./BoostPage.styled";
import coinGold from "../../assets/coinGold.png";
import nerdFaceImg from "../../assets/emojione-monotone_nerd-face.png";
import notDoneImg from "../../assets/not-done.svg";
import { useUserContext } from "../../context/hooks/useUser";
import { resetEnergyApi } from "../../api";
import { useNavigate } from "react-router-dom";
import { constRoutes } from "../../paths";
import { getMaxEnergy } from "../../utils/formuls";
export const BoostPage = () => {
  const { user, resetEnergy, multi } = useUserContext();
  const navigate = useNavigate();
  

  const handleResetEnergy = async () => {
    if (!user?.available_energy_reset) {
      return;
    }
    try {
      await resetEnergyApi();
      resetEnergy(getMaxEnergy(multi))
      navigate(constRoutes.HOME);

    } catch (e) {
      console.error(e);
    }
  };
  return (
    <S.Container>
      <S.Title>Ваш баланс</S.Title>
      <S.BalanceContainer>
        <S.BalanceIcon src={coinGold} />
        <S.Balance>{user?.coins}</S.Balance>
      </S.BalanceContainer>
      <S.Tutorial>Как работает усиление</S.Tutorial>
      <S.BoostContent>
        <S.BoostHeader>Бесплатные еженедельные усилители</S.BoostHeader>
        <S.BoostContainer onClick={handleResetEnergy}>
          <S.Boost>
            <Img src={nerdFaceImg} />
            <S.BoostInfo>
              <S.BoostTitle>Full energy</S.BoostTitle>
              <S.Description>
                {user?.available_energy_reset}/2 доступно
              </S.Description>
            </S.BoostInfo>
          </S.Boost>
        </S.BoostContainer>
        <S.BoostContainer>
          <S.Boost>
            <Img src={nerdFaceImg} />
            <S.BoostInfo>
              <S.BoostTitle>Turbo</S.BoostTitle>
              <S.Description>Скоро будет</S.Description>
            </S.BoostInfo>
          </S.Boost>
        </S.BoostContainer>
        <S.BoostHeader>Усилители</S.BoostHeader>
        <S.BoostContainer>
          <S.Boost>
            <Img src={nerdFaceImg} />
            <S.BoostInfo>
              <S.BoostTitle>Multitap</S.BoostTitle>
              <S.BoostDescriptionBlock>
                <S.Level>{user?.multitap_lvl} lvl</S.Level>
              </S.BoostDescriptionBlock>
            </S.BoostInfo>
          </S.Boost>

          <Img src={notDoneImg} />
        </S.BoostContainer>
        <S.BoostContainer>
          <S.Boost>
            <Img src={nerdFaceImg} />
            <S.BoostInfo>
              <S.BoostTitle>Energy limit</S.BoostTitle>
              <S.BoostDescriptionBlock>
                <S.Level>{user?.energy_lvl} lvl</S.Level>
              </S.BoostDescriptionBlock>
            </S.BoostInfo>
          </S.Boost>
          <Img src={notDoneImg} />
        </S.BoostContainer>
      </S.BoostContent>
      <BottomNav />
    </S.Container>
  );
};
