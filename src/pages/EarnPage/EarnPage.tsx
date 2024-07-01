import { BottomNav } from "../../components/BottomNav/BottomNav";
import { WeeklyTask } from "../../components/WeeklyTask/WeeklyTask";
import * as S from "./EarnPage.styled";
import { PopTask } from "../../components/popups/PopTelegram/PopTask";
import { usePopupContext } from "../../context/hooks/usePopup";
import { PopDailyReward } from "../../components/popups/PopDailyRewards/PopDailyRewards";
import calendarImg from "../../assets/calendar.png"
import telegramIcon from "../../assets/telegramIcon.png"
import xIcon from "../../assets/xtwitter.png"

export const EarnPage = () => {
  const { handleOpenPopup, isPopupOpen, currentPopup } = usePopupContext();

  return (
    <S.Container>
      <S.Title>Еженедельные задачи</S.Title>
      <WeeklyTask
        onClick={() => handleOpenPopup("dailyReward")}
        title="Ежедневная награда"
        image={calendarImg}
        reward={1000000}
      />
      <S.Title>Еженедельные задачи</S.Title>
      <WeeklyTask
        onClick={() => handleOpenPopup("telegram")}
        title="Присоединяйся к нaшему
Telegram каналу"
        image={telegramIcon}
        reward={5000}
      />
      <WeeklyTask
        onClick={() => handleOpenPopup("x")}
        title="Следите за нашим аккаунтом в X"
        image={xIcon}
        reward={5000}
      />
      <BottomNav />
      {isPopupOpen && currentPopup === "telegram" && <PopTask />}
      {isPopupOpen && currentPopup === "x" && <PopTask />}
      {isPopupOpen && currentPopup === "dailyReward" && <PopDailyReward />}
    </S.Container>
  );
};
