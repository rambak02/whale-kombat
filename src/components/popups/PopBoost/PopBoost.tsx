import { Link } from "react-router-dom";
import { usePopupContext } from "../../../context/hooks/usePopup";
import { constRoutes } from "../../../paths";
import * as S from "./PopBoost.styled";
import { Img } from "react-image";

export const PopBoost = () => {
  const { handleClosePopup } = usePopupContext();
  return (
    <S.PopupBackground>
      <S.ModalOverlay id="boostModal">
        <S.ModalButton onClick={handleClosePopup}>
          <Img src="/public/close.svg" />
        </S.ModalButton>
        <S.Main>
          <S.Content>
            <Img src="/public/rocket.png" />
            <S.Text>
              <S.Title>Увеличьте вашу прибыль</S.Title>
              <S.Description>
                Перейдите в меню добычи и купите улучшения для вашей биржи,
                чтобы увеличить
              </S.Description>
              <S.DescriptionOffline>
                Заработайте в оффлайне в течении 3 часов
              </S.DescriptionOffline>
            </S.Text>
          </S.Content>
        </S.Main>
        <Link to={constRoutes.BOOST}>
          <S.ButtonStartMine>
            <S.ButtonText>Начать добычу</S.ButtonText>
            <Img src="/public/Vector.svg" alt="" />
          </S.ButtonStartMine>
        </Link>
      </S.ModalOverlay>
    </S.PopupBackground>
  );
};
