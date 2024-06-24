import { usePopupContext } from "../../../context/hooks/usePopup";
import * as S from "./PopMine.styled";
import { Img } from "react-image";

type PopEarnProps = {
name: string,
avatar: string,
profit: number,
level: number,
cost: number,
}

export const PopMine = ({ name, avatar, profit, level, cost }: PopEarnProps) => {
  const { handleClosePopup } = usePopupContext();
  return (
    <S.PopupBackground>
      <S.ModalOverlay id="boostModal">
        <S.ModalButton onClick={handleClosePopup}>
          <Img src="../../..//close.svg" />
        </S.ModalButton>
        <S.Content>
          <Img src={avatar} />
          <S.Text>
            <S.Title>{name} {level + 1}</S.Title>
            <S.RewardBlock>
              <S.RewardImg src="../../..//Vector.svg" />
              <S.Reward>{profit}</S.Reward>
            </S.RewardBlock>
          </S.Text>
        </S.Content>
        <S.ButtonCheck>
          <S.ButtonText>Купить за {cost}</S.ButtonText>
        </S.ButtonCheck>
      </S.ModalOverlay>
    </S.PopupBackground>
  );
};
