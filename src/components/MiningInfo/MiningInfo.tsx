import * as S from "./MiningInfo.styled";

interface MiningInfoProps {
  onClick: () => void;
}

export const MiningInfo: React.FC<MiningInfoProps> = ({ onClick }) => {
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
          <img id="popBoost" src="/public/icons.svg" onClick={onClick} />
        </S.ProfitPerHourContent>
      </S.ProfitPerHour>
    </S.MiningInfoBlock>
  );
};
