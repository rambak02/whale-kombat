import { postMiningPurchase } from "../../../api";
import { useBoostsContext } from "../../../context/hooks/useBoosts";
import { usePopupContext } from "../../../context/hooks/usePopup";
import * as S from "./PopMine.styled";
import { Img } from "react-image";
import { BoostsContext } from "../../../interfaces/interface";
import closeImg from "../../../assets/close.svg";
import coinGold from "../../../assets/coinGold.png"

type PopEarnProps = {
  boost: Boost | null;
};

type Boost = {
  id: string;
  name: string;
  image: string;
  profit_per_hour: number;
  level: number;
  cost: number;
};

export const PopMine = ({ boost }: PopEarnProps) => {
  const { handleClosePopup } = usePopupContext();
  const { boosts, setBoosts }: BoostsContext = useBoostsContext();
  const handleBuyMine = () => {
    if (boost) {
      postMiningPurchase(boost.id, boost.level).then((updatedBoost) => {
        const updatedBoosts = boosts.map((b) =>
          b.id === updatedBoost.id ? updatedBoost : b
        );
        setBoosts(updatedBoosts);
        handleClosePopup();
      });
    }
  };
  if (boost) {
    return (
      <S.PopupBackground>
        <S.ModalOverlay id="boostModal">
          <S.ModalButton onClick={handleClosePopup}>
            <Img src={closeImg}/>
          </S.ModalButton>
          <S.Content>
            <Img src={boost.image} />
            <S.Text>
              <S.Title>{boost.name}</S.Title>
              <S.RewardBlock>
                <S.RewardImg src={coinGold} />
                <S.Reward>
                  +{Number(boost.profit_per_hour) + 1 + " в час"}{" "}
                </S.Reward>
              </S.RewardBlock>
            </S.Text>
          </S.Content>
          <S.ButtonCheck>
            <S.ButtonText onClick={() => handleBuyMine}>
              Купить за {boost.cost}
            </S.ButtonText>
            <S.RewardImg src={coinGold} />
          </S.ButtonCheck>
        </S.ModalOverlay>
      </S.PopupBackground>
    );
  }
};
