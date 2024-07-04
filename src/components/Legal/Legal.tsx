import { Dispatch, SetStateAction, useEffect } from "react";
import * as S from "./Legal.styled";
import { Boost } from "../Boost/Boost";
import { Offer } from "../models/response/IOffers";
import { useOffersContext } from "../../context/hooks/useOffers";

type LegalProps = {
  handleOpenPopup: () => void;
  onClick: Dispatch<SetStateAction<Offer | null>>;
};
export const Legal = ({ handleOpenPopup, onClick }: LegalProps) => {
  const { offers, fetchOffers } = useOffersContext();
  useEffect(()=> {
  fetchOffers("legal")
  })
  return (
    <S.BoostsContainer onClick={handleOpenPopup}>
      {offers?.map((offer) => (
        <Boost onClick={() => onClick(offer)} offer={offer} />
      ))}
    </S.BoostsContainer>
  );
};
