import * as S from "./Card.styled";

export const Card = () => {
  return (
    <S.Card>
      <S.CardImg src="/public/random.png" />
      <div>
        <S.CardTitle>Название</S.CardTitle>
        <S.Description>Описание</S.Description>
        <S.Profit>
        <S.ProfitInf>
        <S.ProfitText>Прибыль в час</S.ProfitText>
        <S.ProfitIcon>
        <S.CoinIcon src="/public/Vector.svg" />
        <S.ProfitCount>+40</S.ProfitCount>
        </S.ProfitIcon>
        </S.ProfitInf>
      </S.Profit>
      </div>
      <S.LevelContainer>
          <S.Level>lvl 0</S.Level>
          <S.LevelCost>
            <S.CoinIconCost src="/public/Vector.svg" />
            <S.Cost>250</S.Cost>
          </S.LevelCost>
        </S.LevelContainer>
    </S.Card>
  );
};
