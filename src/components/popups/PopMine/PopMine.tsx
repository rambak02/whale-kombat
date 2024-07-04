import { postMiningPurchase } from "../../../api";
import { usePopupContext } from "../../../context/hooks/usePopup";
import * as S from "./PopMine.styled";
import { Img } from "react-image";
import closeImg from "../../../assets/close.svg";
import coinGold from "../../../assets/coinGold.png"
import{ useOffersContext } from "../../../context/hooks/useOffers";
import { Offer } from "../../models/response/IOffers";

type PopMineProps = {
  offer: Offer | null;
};


export const PopMine = ({ offer }: PopMineProps) => {
  const { handleClosePopup } = usePopupContext();
  const { updateOffer } = useOffersContext()
  const handleBuyMine = () => {
    if (offer) {
      postMiningPurchase(offer.id, offer.level).then((updatedBoost) => {
       updateOffer(updatedBoost);
        handleClosePopup();
      });
    }
  };
  if (offer) {
    return (
      <S.PopupBackground>
        <S.ModalOverlay id="boostModal">
          <S.ModalButton onClick={handleClosePopup}>
            <Img src={closeImg}/>
          </S.ModalButton>
          <S.Content>
            <Img src={offer.image} />
            <S.Text>
              <S.Title>{offer.name}</S.Title>
              <S.Description>
              
            </S.Description>
              <S.RewardBlock>
                <S.RewardImg src={coinGold} />
                <S.Reward>
                  +{Number(offer.profit_per_hour) + 1 + " в час"}{" "}
                </S.Reward>
              </S.RewardBlock>
            </S.Text>
          </S.Content>
          <S.ButtonCheck>
            <S.ButtonText onClick={() => handleBuyMine}>
              Купить за {offer.cost}
            </S.ButtonText>
            <S.RewardImg src={coinGold} />
          </S.ButtonCheck>
        </S.ModalOverlay>
      </S.PopupBackground>
    );
  }
};
