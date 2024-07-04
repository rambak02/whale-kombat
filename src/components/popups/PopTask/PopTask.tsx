import { usePopupContext } from "../../../context/hooks/usePopup";
import * as S from "./PopTask.styled";
import { Img } from "react-image";
import closeImg from "../../../assets/close.svg";
import telegramIcon from "../../../assets/telegramIcon.png"
import coinGold from "../../../assets/coinGold.png"
import xIcon from "../../../assets/xtwitter.png"

export const PopTask = () => {
  const { handleClosePopup, currentPopup } = usePopupContext();
  return (
    <S.PopupBackground>
      <S.ModalOverlay id="boostModal">
        <S.ModalButton onClick={handleClosePopup}>
          <Img src={closeImg} />
        </S.ModalButton>
        {currentPopup === "telegram" ? (
          <S.Content>
            <S.TaskImg src={telegramIcon} />
            <S.Text>
              <S.Title>Присоединяйся к нашему Telegram каналу</S.Title>
              <S.Subscribe>Подписаться</S.Subscribe>
              <S.RewardBlock>
                <S.RewardImg src={coinGold} />
                <S.Reward>+25 000</S.Reward>
              </S.RewardBlock>
            </S.Text>
          </S.Content>
        ) : (
          <>
            <S.TaskImg src={xIcon} />
            <S.Text>
              <S.Title>Следите за нашим аккаунтом в X</S.Title>
              <S.Subscribe>Подписаться</S.Subscribe>
              <S.RewardBlock>
                <S.RewardImg src={coinGold} />
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
