import { Dispatch, SetStateAction, useEffect } from "react";
import { Card } from "../Card/Card";
import * as S from "./Specials.styled";
import { useOffersContext } from "../../context/hooks/useOffers";
import { Offer } from "../models/response/IOffers";

type SpeacialsProps = {
  handleOpenPopup: () => void;
  onClick: Dispatch<SetStateAction<Offer | null>>;
};

export const Specials = ({handleOpenPopup, onClick}: SpeacialsProps) => {
  const { offers, fetchOffers } = useOffersContext();
  useEffect(()=> {
  fetchOffers("specials")
  })

  return (
    <S.Specials>
      <S.SpecialsNav>
        <S.Nav>Мои<br/> карточки</S.Nav>
        <S.Nav>Новые<br/> карточки</S.Nav>
        <S.Nav>Упущенные<br/> карточки</S.Nav>
      </S.SpecialsNav>
      <S.Container>
        <S.Cards onClick={handleOpenPopup}>
        {offers?.map((offer) => (
            <Card onClick={() => onClick(offer)} boost={offer} />
          ))}
        </S.Cards>
      </S.Container>
    </S.Specials>
  );
};
