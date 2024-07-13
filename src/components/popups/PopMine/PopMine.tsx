import { usePopupContext } from "../../../context/hooks/usePopup";
import * as S from "./PopMine.styled";
import { Img } from "react-image";
import closeImg from "../../../assets/close.svg";
import coinGold from "../../../assets/coinGold.png";
import { Offer } from "../../models/response/IOffers";
import { Button, Image } from "@nextui-org/react";
import { usePostMiningPurchaseMutation } from "../../../redux/services/miningApi";

type PopMineProps = {
	offer: Offer | null;
};

export const PopMine = ({ offer }: PopMineProps) => {
	const { handleClosePopup } = usePopupContext();
	const [updateOffer] = usePostMiningPurchaseMutation();

	const handleBuyMine = () => {
		if (offer) {
			updateOffer({ offer_id: offer.id, level: offer.level })
				.unwrap()
				.then(() => {
					handleClosePopup();
				})
				.catch((error) => console.log(error));
		}
	};

	if (offer) {
		return (
			<S.PopupBackground>
				<S.ModalOverlay id="boostModal">
					<S.ModalButton onClick={handleClosePopup}>
						<Img src={closeImg} />
					</S.ModalButton>
					<div className="flex flex-col items-center text-primary">
						<Image
							src={offer.image}
							alt={offer.name}
							width={150}
							height={150}
						/>
						<S.Text>
							<S.Title>{offer.name}</S.Title>
							<S.Description></S.Description>
							<S.RewardBlock>
								<S.RewardImg src={coinGold} />
								<S.Reward>
									{Number(offer.profit_per_hour) + 1}
									<span className="text-2xl font-normal"> в час</span>
								</S.Reward>
							</S.RewardBlock>
						</S.Text>
					</div>
					<Button
						fullWidth
						size="lg"
						color="secondary"
						className="text-primary font-semibold text-lg mt-6"
						onClick={() => handleBuyMine}
					>
						Купить за
						{<Image src={coinGold} alt="coin" width={30} height={30} />}
						<span className="-ml-2.5">{offer.cost}</span>
					</Button>
				</S.ModalOverlay>
			</S.PopupBackground>
		);
	}
};
