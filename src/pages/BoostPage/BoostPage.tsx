import { BottomNav } from "../../components/BottomNav/BottomNav";
import { Img } from "react-image";
import * as S from "./BoostPage.styled";
import coinGold from "../../assets/coinGold.png"
import nerdFaceImg from "../../assets/emojione-monotone_nerd-face.png";
import notDoneImg from "../../assets/not-done.svg"
import { useUserContext } from "../../context/hooks/useUser";
export const BoostPage = () => {
  const {user} = useUserContext()
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
        <S.BoostContainer>
          <S.Boost>
            <Img src={nerdFaceImg} />
            <S.BoostInfo>
              <S.BoostTitle>Full energy</S.BoostTitle>
              <S.Description>6/6 доступно</S.Description>
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
                <S.Description>
                  <S.CoinIcon src={coinGold} />
                  2K ·
                </S.Description>
                <S.Level>2 lvl</S.Level>
              </S.BoostDescriptionBlock>
            </S.BoostInfo>
          </S.Boost>

          <Img src={notDoneImg}/>
        </S.BoostContainer>
        <S.BoostContainer>
          <S.Boost>
            <Img src={nerdFaceImg} />
            <S.BoostInfo>
              <S.BoostTitle>Energy limit</S.BoostTitle>
              <S.BoostDescriptionBlock>
                <S.Description>
                  <S.CoinIcon src={coinGold} />
                  2K ·
                </S.Description>
                <S.Level>2 lvl</S.Level>
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
