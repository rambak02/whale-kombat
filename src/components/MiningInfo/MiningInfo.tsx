import * as S from "./MiningInfo.styled";
import coinGold from "../../assets/coinGold.png"
import icon from "../../assets/icons.svg"
import { useUserContext } from "../../context/hooks/useUser";

interface MiningInfoProps {
  onClick: () => void;
}

export const MiningInfo: React.FC<MiningInfoProps> = ({ onClick }) => {
  const { user } = useUserContext()
  function formatNumber(number: number = 0) {
    if (number >= 1000000000) {
        return (number / 1000000000).toFixed(1) + 'B';
    } else if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'м';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'к';
    } else {
        return number.toString();
    }
}
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
          <S.ProfitOneClickCount>{formatNumber(user?.last_passive_coin_update)}</S.ProfitOneClickCount>
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
