
import { usePopupContext } from "../../../context/hooks/usePopup";
import * as S from "./PopBoost.styled";
import { Img } from "react-image";

export const PopBoost = () => {
  const { handleClosePopup } = usePopupContext();
  return (
    <S.PopupBackground>
          <S.ModalButton onClick={handleClosePopup}>
          <Img src="/public/close.svg" />
        </S.ModalButton>
      <S.ModalOverlay id="boostModal">
        <S.Main>
        <S.Content>
          <Img src="/public/rocket.png" />
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
          <Img src="/public/Vector.svg" alt="" />
        </S.ButtonStartMine>
      </S.ModalOverlay>
    </S.PopupBackground>
  );
};
