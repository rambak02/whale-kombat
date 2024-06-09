import * as S from "./MiningInfo.styled";

export const MiningInfo = () => {
  return (
    <S.MiningInfoBlock>
      <S.ProfitOneClick>
        <S.ProfitOneClickTitle>Прибыль за тап</S.ProfitOneClickTitle>
        <S.ProfitOneClickContent>
          <img src="/public/Vector.svg"></img>
          <S.ProfitOneClickCount>+2</S.ProfitOneClickCount>
        </S.ProfitOneClickContent>
      </S.ProfitOneClick>
      <S.CoinsBeforeUp>
        <S.CoinsUpTitle>Монет для апа</S.CoinsUpTitle>
        <S.CoinsUpCount>10M</S.CoinsUpCount>
      </S.CoinsBeforeUp>
      <S.ProfitPerHour>
        <S.ProfitPerHourTitle>Прибыль в час</S.ProfitPerHourTitle>
        <S.ProfitPerHourContent>
          <img src="/public/Vector.svg" />
          <S.ProfitOneClickCount>+128,35K</S.ProfitOneClickCount>
          <img src="/public/icons.svg" />
        </S.ProfitPerHourContent>
      </S.ProfitPerHour>
    </S.MiningInfoBlock>
  );
};
