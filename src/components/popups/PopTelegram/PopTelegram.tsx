import { usePopupContext } from "../../../context/hooks/usePopup";
import * as S from "./PopTelegram.styled"

export const PopTelegram = () => {
  const {handleClosePopup} = usePopupContext()
    return (
      <S.PopupBackground>
      <S.ModalOverlay id="boostModal">
        <S.ModalButton onClick={handleClosePopup}>
          <img src="/public/close.svg" />
        </S.ModalButton>
        <S.Content>
          <img src="/public/telegramIcon.png" />
          <S.Text>
            <S.Title>Присоединяйся к нашему Telegram каналу</S.Title>
            <S.Subscribe>
              Подписаться
            </S.Subscribe>
            <S.RewardBlock><S.RewardImg src="/public/Vector.svg" /><S.Reward>+25 000</S.Reward></S.RewardBlock>
          </S.Text>
        </S.Content>
        <S.ButtonCheck>
          <S.ButtonText>Проверить</S.ButtonText>
        </S.ButtonCheck>
      </S.ModalOverlay>
      </S.PopupBackground>
    );
  };
  