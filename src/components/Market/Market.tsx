import { useBoostsContext } from "../../context/hooks/useBoosts";
import { BoostsContext } from "../../interfaces/interface";
import { Boost } from "../Boost/Boost";
import * as S from "./Market.styled";
import { Dispatch, SetStateAction } from "react";

type Boost = {
  id: string,
name: string,
image: string,
profit_per_hour: number,
level: number,
cost: number,
}

type MarketProps = {
handleOpenPopup: () => void;
onClick: Dispatch<SetStateAction<Boost | null>> 
}

export const Market = ({handleOpenPopup, onClick}:MarketProps,) => {
  const { boosts }: BoostsContext = useBoostsContext();
  return (
    <S.BoostsContainer onClick = {handleOpenPopup}>
      {boosts.map((boost) => (
        <Boost onClick = {()=> onClick(boost)}
         boost={boost}
        />
      ))}
    </S.BoostsContainer>
  );
};
