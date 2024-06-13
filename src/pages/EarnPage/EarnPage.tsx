import { BottomNav } from "../../components/BottomNav/BottomNav";
import { WeeklyTask } from "../../components/WeeklyTask/WeeklyTask";
import * as S from "./EarnPage.styled";
import { PopTelegram } from "../../components/popups/PopTelegram/PopTelegram";
import { usePopupContext } from "../../context/hooks/usePopup";
import { PopDailyReward } from "../../components/popups/PopDailyRewards/PopDailyRewards";

export const EarnPage = () => {
  const { handleOpenPopup, isPopupOpen, currentPopup } = usePopupContext();

  return (
    <S.Container>
      <S.Title>Еженедельные задачи</S.Title>
      <WeeklyTask
      onClick={()=> handleOpenPopup("dailyReward")}
        title="Ежедневная награда"
        image={"/public/calendar.png"}
        reward={1000000}
      />
      <S.Title>Еженедельные задачи</S.Title>
      <WeeklyTask onClick={()=> handleOpenPopup("telegram")} title="Присоединяйся к нaшему
Telegram каналу" image={"/public/telegramIcon.png"} reward={5000}/>
      <WeeklyTask onClick={()=> handleOpenPopup("telegram")} title="Следите за нашим аккаунтом в X" image="/public/xtwitter.png" reward={5000}/>
      <WeeklyTask onClick={()=> handleOpenPopup("telegram")} title="Выберите биржу" image="/public/whale.png" reward={5000}/>
      <BottomNav />
       {isPopupOpen && currentPopup === "telegram" && <PopTelegram/>}
       {isPopupOpen && currentPopup === "dailyReward" && <PopDailyReward/> }
    </S.Container>
  );
};
