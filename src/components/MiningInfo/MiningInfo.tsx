import * as S from "./MiningInfo.styled";

interface MiningInfoProps {
  onClick: () => void;
}


export const MiningInfo: React.FC<MiningInfoProps> = ({ onClick }) => {
  return (
    <S.MiningInfoBlock>
      <S.MiningInfoContainer>
        <S.ProfitOneClickTitle>Прибыль за тап</S.ProfitOneClickTitle>
        <S.ProfitOneClickContent>
          <img src="/public/Vector.svg"></img>
          <S.ProfitOneClickCount>+2</S.ProfitOneClickCount>
        </S.ProfitOneClickContent>
      </S.MiningInfoContainer>
      <S.MiningInfoContainer>
        <S.CoinsUpTitle>Монет для апа</S.CoinsUpTitle>
        <S.CoinsUpCount>10M</S.CoinsUpCount>
      </S.MiningInfoContainer>
      <S.MiningInfoContainer>
        <S.ProfitPerHourTitle>Прибыль в час</S.ProfitPerHourTitle>
        <S.ProfitPerHourContent>
          <img src="/public/Vector.svg" />
          <S.ProfitOneClickCount>+128,35K</S.ProfitOneClickCount>
          <img id="popBoost" src="/public/icons.svg" onClick={onClick} />
        </S.ProfitPerHourContent>
      </S.MiningInfoContainer>
    </S.MiningInfoBlock>
  );
};
