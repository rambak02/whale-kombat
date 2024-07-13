import { Dispatch, SetStateAction } from "react";
import * as S from "./Legal.styled";
import { Boost } from "../Boost/Boost";
import { Offer } from "../models/response/IOffers";
import { useGetMiningOffersQuery } from "../../redux/services/miningApi"

type LegalProps = {
  handleOpenPopup: () => void;
  onClick: Dispatch<SetStateAction<Offer | null>>;
};
export const Legal = ({ handleOpenPopup, onClick }: LegalProps) => {
  const { data: offers } = useGetMiningOffersQuery('legal')
  
  return (
    <S.Container>
			<S.Cards onClick={handleOpenPopup}>
      {offers?.map((offer: Offer) => (
        <Boost onClick={() => onClick(offer)} offer={offer} />
      ))}
			</S.Cards>
		</S.Container>
  );
};
