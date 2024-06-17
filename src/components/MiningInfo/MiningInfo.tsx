import * as S from "./MiningInfo.styled";
import { Img } from "react-image";

interface MiningInfoProps {
  onClick: () => void;
}


export const MiningInfo: React.FC<MiningInfoProps> = ({ onClick }) => {
  return (
    <S.MiningInfoBlock>
      <S.MiningInfoContainer>
        <S.ProfitOneClickTitle>Прибыль за тап</S.ProfitOneClickTitle>
        <S.ProfitOneClickContent>
          <Img src="/public/Vector.svg"></Img>
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
          <Img src="/public/Vector.svg" />
          <S.ProfitOneClickCount>+128,35K</S.ProfitOneClickCount>
          <Img id="popBoost" src="/public/icons.svg" onClick={onClick} />
        </S.ProfitPerHourContent>
      </S.MiningInfoContainer>
    </S.MiningInfoBlock>
  );
};
