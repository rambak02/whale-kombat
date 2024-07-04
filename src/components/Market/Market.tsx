import { useOffersContext } from "../../context/hooks/useOffers";
import { Boost } from "../Boost/Boost";
import { Offer } from "../models/response/IOffers";
import * as S from "./Market.styled";
import { Dispatch, SetStateAction, useEffect} from "react";

type MarketProps = {
handleOpenPopup: () => void;
onClick: Dispatch<SetStateAction<Offer | null>> 
}

export const Market = ({handleOpenPopup, onClick}:MarketProps,) => {
 const { offers, fetchOffers } = useOffersContext();

 useEffect(() => {
 fetchOffers("market")
 })
 
  return (
    <S.BoostsContainer onClick = {handleOpenPopup}>
      {offers?.map((offer) => (
        <Boost 
        key={offer.id}
        onClick = {()=> onClick(offer)}
         offer={offer}
        />
      ))}
    </S.BoostsContainer>
  );
};
