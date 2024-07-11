import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Card } from "../Card/Card";
import * as S from "./Specials.styled";
import $api from "../http";
import { Offer } from "../models/response/IOffers"

type SpeacialsProps = {
	handleOpenPopup: () => void;
	onClick: Dispatch<SetStateAction<Offer | null>>;
};

export const Specials = ({ handleOpenPopup, onClick }: SpeacialsProps) => {
	// const { offers, fetchOffers } = useOffersContext();

	// useEffect(()=> {
	//   fetchOffers("specials")
	// })

	const [offers, setOffers] = useState<Offer[]>([]);

	useEffect(() => {
		$api
			.get(`/mining/offers/specials`)
			.then(({ data }) => setOffers(data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<S.Specials>
			{/* <S.SpecialsNav>
				<S.Nav>
					Мои
					<br /> карточки
				</S.Nav>
				<S.Nav>
					Новые
					<br /> карточки
				</S.Nav>
				<S.Nav>
					Упущенные
					<br /> карточки
				</S.Nav>
			</S.SpecialsNav> */}
			<S.Container>
				<S.Cards onClick={handleOpenPopup}>
					{offers?.map((offer) => (
						<Card key={offer.id} onClick={() => onClick(offer)} boost={offer} />
					))}
				</S.Cards>
			</S.Container>
		</S.Specials>
	);
};
