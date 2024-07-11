import { Boost } from "../Boost/Boost";
import $api from "../http";
import { Offer } from "../models/response/IOffers";
import * as S from "./Market.styled";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type MarketProps = {
	handleOpenPopup: () => void;
	onClick: Dispatch<SetStateAction<Offer | null>>;
};

export const Market = ({ handleOpenPopup, onClick }: MarketProps) => {
	//  const { offers, fetchOffers } = useOffersContext();

	//  useEffect(() => {
	//  fetchOffers("market")
	//  })

	const [offers, setOffers] = useState<Offer[]>([]);

	useEffect(() => {
		$api
			.get(`/mining/offers/markets`)
			.then(({ data }) => setOffers(data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<S.Container>
			<S.Cards onClick={handleOpenPopup}>
				{offers.map((offer) => (
					<Boost key={offer.id} onClick={() => onClick(offer)} offer={offer} />
				))}
			</S.Cards>
		</S.Container>
	);
};
