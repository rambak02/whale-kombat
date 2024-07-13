import { Dispatch, SetStateAction } from "react";
import * as S from "./Specials.styled";
import { Offer } from "../models/response/IOffers"
import { Boost } from "../Boost/Boost"
import { useGetMiningOffersQuery } from "../../redux/services/miningApi"

type SpeacialsProps = {
	handleOpenPopup: () => void;
	onClick: Dispatch<SetStateAction<Offer | null>>;
};

export const Specials = ({ handleOpenPopup, onClick }: SpeacialsProps) => {
	const { data: offers } = useGetMiningOffersQuery('specials')

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
