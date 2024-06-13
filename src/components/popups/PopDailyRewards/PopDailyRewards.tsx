import { usePopupContext } from "../../../context/hooks/usePopup";
import * as S from "./PopDailyReward.styled";
import { dailyRewards } from "../../../utils/dailyRewards";
import { DayReward } from "./DayReward/DayReward";

export const PopDailyReward = () => {
  const { handleClosePopup } = usePopupContext();
  return (
    <S.PopupBackground>
      <S.ModalOverlay id="boostModal">
        <S.ModalButton onClick={handleClosePopup}>
          <img src="/public/close.svg" />
        </S.ModalButton>
        <S.Content>
          <S.DailyRewardImg src="/public/dailyRewardIcon.png" />
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
                day={dayReward.day}
                reward={dayReward.reward}
                collected={dayReward.collected}
              />
            ))}
          </S.DailyRewardContainer>
        </S.Content>
      </S.ModalOverlay>
    </S.PopupBackground>
  );
};
