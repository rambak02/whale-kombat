import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as S from "./Legal.styled";
import { Boost } from "../Boost/Boost";
import { Offer } from "../models/response/IOffers";
import $api from "../http"

type LegalProps = {
  handleOpenPopup: () => void;
  onClick: Dispatch<SetStateAction<Offer | null>>;
};
export const Legal = ({ handleOpenPopup, onClick }: LegalProps) => {
  const [offers, setOffers] = useState<Offer[]>([]);

	useEffect(() => {
		$api
			.get(`/mining/offers/legal`)
			.then(({ data }) => setOffers(data))
			.catch((error) => console.log(error));
	}, []);
  
  return (
    <S.Container>
			<S.Cards onClick={handleOpenPopup}>
      {offers?.map((offer) => (
        <Boost onClick={() => onClick(offer)} offer={offer} />
      ))}
			</S.Cards>
		</S.Container>
  );
};
