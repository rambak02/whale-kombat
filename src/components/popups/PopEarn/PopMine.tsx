import { usePopupContext } from "../../../context/hooks/usePopup";
import * as S from "./PopMine.styled";
import { Img } from "react-image";

type PopEarnProps = {
  boost: Boost | null ;
}

type Boost = {
name: string,
image: string,
profit_per_hour: number,
level: number,
cost: number,
}

export const PopMine = ({ boost }: PopEarnProps) => {
  const { handleClosePopup } = usePopupContext();
  if (boost ) {
    return (
      <S.PopupBackground >
        <S.ModalOverlay id="boostModal">
          <S.ModalButton onClick={handleClosePopup}>
            <Img src="../../..//close.svg" />
          </S.ModalButton>
          <S.Content>
            <Img src={boost.image} />
            <S.Text>
              <S.Title>{boost.name}</S.Title>
              <S.RewardBlock>
                <S.RewardImg src="../../..//Vector.svg" />
                <S.Reward>{boost.profit_per_hour}</S.Reward>
              </S.RewardBlock>
            </S.Text>
          </S.Content>
          <S.ButtonCheck>
            <S.ButtonText>Купить за {boost.cost}</S.ButtonText>
          </S.ButtonCheck>
        </S.ModalOverlay>
      </S.PopupBackground>
    );
  }
 
};
