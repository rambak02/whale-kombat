import { Dispatch, SetStateAction } from "react";
import { useBoostsContext } from "../../context/hooks/useBoosts";
import { BoostsContext } from "../../interfaces/interface";
import * as S from "./Legal.styled";
import { Boost } from "../Boost/Boost";

type Boost = {
  id: string;
  name: string;
  image: string;
  profit_per_hour: number;
  level: number;
  cost: number;
};

type LegalProps = {
  handleOpenPopup: () => void;
  onClick: Dispatch<SetStateAction<Boost | null>>;
};
export const Legal = ({ handleOpenPopup, onClick }: LegalProps) => {
  const { boosts }: BoostsContext = useBoostsContext();
  return (
    <S.BoostsContainer onClick={handleOpenPopup}>
      {boosts.map((boost) => (
        <Boost onClick={() => onClick(boost)} boost={boost} />
      ))}
    </S.BoostsContainer>
  );
};
