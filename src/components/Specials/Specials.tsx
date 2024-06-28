import { Dispatch, SetStateAction } from "react";
import { Card } from "../Card/Card";
import * as S from "./Specials.styled";
import { useBoostsContext } from "../../context/hooks/useBoosts";
import { BoostsContext } from "../../interfaces/interface";

type Boost = {
  id: string;
  name: string;
  image: string;
  profit_per_hour: number;
  level: number;
  cost: number;
};

type SpeacialsProps = {
  handleOpenPopup: () => void;
  onClick: Dispatch<SetStateAction<Boost | null>>;
};

export const Specials = ({handleOpenPopup, onClick}: SpeacialsProps) => {
  const { boosts }: BoostsContext = useBoostsContext();
  return (
    <S.Specials>
      <S.SpecialsNav>
        <S.Nav>Мои карточки</S.Nav>
        <S.Nav>Новые карточки</S.Nav>
        <S.Nav>Упущенные карточки</S.Nav>
      </S.SpecialsNav>
      <S.Container>
        <S.Cards onClick={handleOpenPopup}>
        {boosts.map((boost) => (
            <Card onClick={() => onClick(boost)} boost={boost} />
          ))}
        </S.Cards>
      </S.Container>
    </S.Specials>
  );
};
