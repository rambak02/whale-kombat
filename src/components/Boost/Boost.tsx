import { BoostType } from "../../types/type";
import * as S from "./Boost.styled";
export const Boost = ({ name, avatar, profit, level, cost }: BoostType) => {
   


  return (
    <S.BoostContainer>
      <S.Content>
        <S.Logo src={avatar} alt="img" />
        <S.Profit>
          <S.Title>{name}</S.Title>
          <S.ProfitInf>
            <S.ProfitText>Прибыль в час</S.ProfitText>
            <S.ProfitIcon>
              <S.CoinIcon src="../../..//Vector.svg" />
              <S.ProfitCount>+{profit}</S.ProfitCount>
            </S.ProfitIcon>
          </S.ProfitInf>
        </S.Profit>
      </S.Content>
      <S.LevelContainer>
        <S.Level>lvl {level}</S.Level>
        <S.LevelCost>
          <S.CoinIconCost src="../../..//Vector.svg" />
          <S.Cost>{cost}</S.Cost>
        </S.LevelCost>
      </S.LevelContainer>
    </S.BoostContainer>
  );
};
