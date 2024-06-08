import * as S from "./Boosts.styled";
export const Boost = () => {
  return (
    <S.BoostContainer>
      <S.Content>
      <S.Logo src="/public/Bitcoin Coin.png" />
      <S.Profit>
        <S.Title>BTC pairs</S.Title>
        <S.ProfitInf>
        <S.ProfitText>Прибыль в час</S.ProfitText>
        <S.ProfitIcon>
        <S.CoinIcon src="/public/Vector.svg" />
        <S.ProfitCount>+40</S.ProfitCount>
        </S.ProfitIcon>
        </S.ProfitInf>
      </S.Profit>
      </S.Content>
      <S.LevelContainer>
        <S.Level>lvl 0</S.Level>
        <S.LevelCost>
          <S.CoinIconCost src="/public/Vector.svg"/>
          <S.Cost>250</S.Cost>
        </S.LevelCost>
      </S.LevelContainer>
    </S.BoostContainer>
  );
};
