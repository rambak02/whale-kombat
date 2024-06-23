import { usePopupContext } from "../../../context/hooks/usePopup";
import * as S from "./PopTelegram.styled";
import { Img } from "react-image";

export const PopTelegram = () => {
  const { handleClosePopup } = usePopupContext();
  return (
    <S.PopupBackground>
      <S.ModalOverlay id="boostModal">
        <S.ModalButton onClick={handleClosePopup}>
          <Img src="../../..//close.svg" />
        </S.ModalButton>
        <S.Content>
          <Img src="../../..//telegramIcon.png" />
          <S.Text>
            <S.Title>Присоединяйся к нашему Telegram каналу</S.Title>
            <S.Subscribe>Подписаться</S.Subscribe>
            <S.RewardBlock>
              <S.RewardImg src="../../..//Vector.svg" />
              <S.Reward>+25 000</S.Reward>
            </S.RewardBlock>
          </S.Text>
        </S.Content>
        <S.ButtonCheck>
          <S.ButtonText>Проверить</S.ButtonText>
        </S.ButtonCheck>
      </S.ModalOverlay>
    </S.PopupBackground>
  );
};
