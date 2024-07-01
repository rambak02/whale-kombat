import { usePopupContext } from "../../../context/hooks/usePopup";
import * as S from "./PopDailyReward.styled";
import { dailyRewards } from "../../../utils/dailyRewards";
import { DayReward } from "./DayReward/DayReward";
import { Img } from "react-image";
import closeImg from "../../../assets/close.svg"
import dailyRewardIcon from "../../../assets/dailyRewardIcon.png"

export const PopDailyReward = () => {
  const { handleClosePopup } = usePopupContext();
  return (
    <S.PopupBackground>
      <S.ModalOverlay id="boostModal">
        <S.ModalButton onClick={handleClosePopup}>
          <Img src={closeImg} />
        </S.ModalButton>

        <S.Content>
          <S.DailyRewardImg src={dailyRewardIcon} />
          <S.Text>
            <S.Title>Ежедневная награда</S.Title>
            <S.Description>
              Забирайте монеты за ежедневный вход в игру без пропусков. Кнопку
              “Забрать” нужно нажимать ежедневно, иначе счетчик дней начнется
              заново
            </S.Description>
          </S.Text>

          <S.DailyRewardContainer>
            {dailyRewards.map((dayReward) => (
              <DayReward
                key={dayReward.day}
                day={dayReward.day}
                reward={dayReward.reward}
                collected={dayReward.collected}
              />
            ))}
          </S.DailyRewardContainer>
        </S.Content>
        <S.ButtonCheck>Возвращайтесь завтра</S.ButtonCheck>
      </S.ModalOverlay>
    </S.PopupBackground>
  );
};
