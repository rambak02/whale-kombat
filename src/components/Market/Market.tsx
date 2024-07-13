import { useGetMiningOffersQuery } from "../../redux/services/miningApi"
import { Boost } from "../Boost/Boost";
import { Offer } from "../models/response/IOffers";
import * as S from "./Market.styled";
import { Dispatch, SetStateAction } from "react";

type MarketProps = {
	handleOpenPopup: () => void;
	onClick: Dispatch<SetStateAction<Offer | null>>;
};

export const Market = ({ handleOpenPopup, onClick }: MarketProps) => {
	const { data: offers } = useGetMiningOffersQuery('markets')

	return (
		<S.Container>
			<S.Cards onClick={handleOpenPopup}>
				{offers?.map((offer: Offer) => (
					<Boost key={offer.id} onClick={() => onClick(offer)} offer={offer} />
				))}
			</S.Cards>
		</S.Container>
	);
};
