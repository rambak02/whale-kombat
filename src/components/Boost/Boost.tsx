import { Dispatch, SetStateAction } from "react";
import * as S from "./Boost.styled";
type BoostProps = {
  onClick: Dispatch<SetStateAction<null>>;
  boost: Boost;
};

type Boost = {
  id: string;
  name: string;
  image: string;
  profit_per_hour: number;
  level: number;
  cost: number;
};
export const Boost = ({ boost, onClick }: BoostProps) => {
  return (
    <S.BoostContainer id={boost.id} onClick={() => onClick}>
      <S.Content>
        <S.Logo src={boost.image} alt="img" />
        <S.Profit>
          <S.Title>{boost.name}</S.Title>
          <S.ProfitInf>
            <S.ProfitText>Прибыль в час</S.ProfitText>
            <S.ProfitIcon>
              <S.CoinIcon src="../../..//Vector.svg" />
              <S.ProfitCount>+{boost.profit_per_hour} в час</S.ProfitCount>
            </S.ProfitIcon>
          </S.ProfitInf>
        </S.Profit>
      </S.Content>
      <S.LevelContainer>
        <S.Level>lvl {boost.level}</S.Level>
        <S.LevelCost>
          <S.CoinIconCost src="../../..//Vector.svg" />
          <S.Cost>{boost.cost}</S.Cost>
        </S.LevelCost>
      </S.LevelContainer>
    </S.BoostContainer>
  );
};
