import * as S from "./PRTeam.styled";
import { Img } from "react-image";

import { Dispatch, SetStateAction, useState } from "react";
import { Boost } from "../Boost/Boost";
import phCoinsWhite from "../../assets/ph_coins-fill-white.png";
import { Offer } from "../models/response/IOffers";
import { useGetMiningOffersQuery } from "../../redux/services/miningApi";
import { Button } from "@nextui-org/react";

type PRTeamProps = {
	handleOpenPopup: () => void;
	onClick: Dispatch<SetStateAction<Offer | null>>;
};

export const PRTeam = ({ handleOpenPopup, onClick }: PRTeamProps) => {
	const [subTelegram, setSubTelegram] = useState<boolean>(false);
	const { data: offers } = useGetMiningOffersQuery("pr&team");

	return (
		<>
			{subTelegram ? (
				<S.BoostsContainer onClick={handleOpenPopup}>
					{offers?.map((offer: Offer) => (
						<Boost onClick={() => onClick(offer)} offer={offer} />
					))}
				</S.BoostsContainer>
			) : (
				<S.BlockContainer>
					<Img src={phCoinsWhite} />
					<S.BlockText>
						Присоединяйтесь к нашему каналу в Telegram, чтобы разброкировать
					</S.BlockText>
					<Button
						size="lg"
						color="secondary"
						className="text-primary font-semibold text-lg mt-6"
						onClick={() => setSubTelegram(true)}
					>
						Unlock
					</Button>
				</S.BlockContainer>
			)}
		</>
	);
};
