import { usePopupContext } from "../../../context/hooks/usePopup";
import * as S from "./PopTask.styled";
import { Img } from "react-image";

export const PopTask = () => {
  const { handleClosePopup, currentPopup } = usePopupContext();
  return (
    <S.PopupBackground>
      <S.ModalOverlay id="boostModal">
        <S.ModalButton onClick={handleClosePopup}>
          <Img src="../../..//close.svg" />
        </S.ModalButton>
        {currentPopup === "telegram" ? (
          <S.Content>
            <S.TaskImg src="../../..//telegramIcon.png" />
            <S.Text>
              <S.Title>Присоединяйся к нашему Telegram каналу</S.Title>
              <S.Subscribe>Подписаться</S.Subscribe>
              <S.RewardBlock>
                <S.RewardImg src="../../..//Vector.svg" />
                <S.Reward>+25 000</S.Reward>
              </S.RewardBlock>
            </S.Text>
          </S.Content>
        ) : (
          <>
            <S.TaskImg src="../../../../public/xtwitter.png" />
            <S.Text>
              <S.Title>Следите за нашим аккаунтом в X</S.Title>
              <S.Subscribe>Подписаться</S.Subscribe>
              <S.RewardBlock>
                <S.RewardImg src="../../..//Vector.svg" />
                <S.Reward>+25 000</S.Reward>
              </S.RewardBlock>
            </S.Text>
          </>
        )}
        <S.ButtonCheck>
          <S.ButtonText>Проверить</S.ButtonText>
        </S.ButtonCheck>
      </S.ModalOverlay>
    </S.PopupBackground>
  );
};
