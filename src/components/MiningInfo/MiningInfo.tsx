import * as S from "./MiningInfo.styled";
import coinGold from "../../assets/coinGold.png"
import icon from "../../assets/icons.svg"

interface MiningInfoProps {
  onClick: () => void;
}

export const MiningInfo: React.FC<MiningInfoProps> = ({ onClick }) => {
  return (
    <S.MiningInfoBlock>
      <S.MiningInfoContainer>
        <S.ProfitOneClickTitle>Прибыль за тап</S.ProfitOneClickTitle>
        <S.ProfitOneClickContent>
          <S.CoinImg src={coinGold}></S.CoinImg>
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
          <S.CoinImg src={coinGold} />
          <S.ProfitOneClickCount>+128,35K</S.ProfitOneClickCount>
          <S.CoinImg
            id="popBoost"
            src={icon}
            onClick={onClick}
          />
        </S.ProfitPerHourContent>
      </S.MiningInfoContainer>
    </S.MiningInfoBlock>
  );
};
