import * as S from "./PopBoost.styled";

interface PopBoostProps {
  handleClosePopup: () => void;
}

export const PopBoost: React.FC<PopBoostProps> = ({ handleClosePopup }) => {
  return (
    <S.ModalOverlay id="boostModal">
      <button onClick={handleClosePopup}>
        <img src="/public/close.svg" />
      </button>
      <S.Content>
        <img src="/public/rocket.png" />
        <S.Text>
          <S.Title>Увеличьте вашу прибыль</S.Title>
          <div>
            Перейдите в меню добычи и купите улучшения для вашей биржи, чтобы
            увеличить
          </div>
          <div>Заработайте в оффлайне в течении 3 часов</div>
        </S.Text>
      </S.Content>
      <button>
        <div></div>
      </button>
    </S.ModalOverlay>
  );
};
