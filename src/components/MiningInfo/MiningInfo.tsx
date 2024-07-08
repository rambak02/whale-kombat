import * as S from "./MiningInfo.styled";
import coinGold from "../../assets/coinGold.png"
import icon from "../../assets/icons.svg"
import { useUserContext } from "../../context/hooks/useUser";
import { formatNumber } from "../../utils/format";

interface MiningInfoProps {
  onClick: () => void;
}

export const MiningInfo: React.FC<MiningInfoProps> = ({ onClick }) => {
  const { user } = useUserContext()
  return (
    <S.MiningInfoBlock>
      <S.MiningInfoContainer>
        <S.ProfitOneClickTitle>Прибыль за тап</S.ProfitOneClickTitle>
        <S.ProfitOneClickContent>
          <S.CoinImg src={coinGold}></S.CoinImg>
          <S.ProfitOneClickCount>+{user?.multitap_lvl}</S.ProfitOneClickCount>
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
          <S.ProfitOneClickCount>{formatNumber(user?.passive_profit) || 0}</S.ProfitOneClickCount>
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
