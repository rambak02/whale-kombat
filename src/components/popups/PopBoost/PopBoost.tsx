
import { usePopupContext } from "../../../context/hooks/usePopup";
import * as S from "./PopBoost.styled";

export const PopBoost = () => {
  const { handleClosePopup } = usePopupContext();
  return (
    <S.PopupBackground>
      <S.ModalOverlay id="boostModal">
        <S.Main>
        <S.ModalButton onClick={handleClosePopup}>
          <img src="/public/close.svg" />
        </S.ModalButton>
        <S.Content>
          <img src="/public/rocket.png" />
          <S.Text>
            <S.Title>Увеличьте вашу прибыль</S.Title>
            <S.Description>
              Перейдите в меню добычи и купите улучшения для вашей биржи, чтобы
              увеличить
            </S.Description>
            <S.DescriptionOffline>
              Заработайте в оффлайне в течении 3 часов
            </S.DescriptionOffline>
          </S.Text>
        </S.Content>
        </S.Main>
        <S.ButtonStartMine>
          <S.ButtonText>Начать добычу</S.ButtonText>
          <img src="/public/Vector.svg" alt="" />
        </S.ButtonStartMine>
      </S.ModalOverlay>
    </S.PopupBackground>
  );
};
