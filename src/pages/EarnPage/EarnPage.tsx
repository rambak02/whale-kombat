import { BottomNav } from "../../components/BottomNav/BottomNav";
import { WeeklyTask } from "../../components/WeeklyTask/WeeklyTask";
import * as S from "./EarnPage.styled";
import { PopTask } from "../../components/popups/PopTask/PopTask";
import { usePopupContext } from "../../context/hooks/usePopup";
import { PopDailyReward } from "../../components/popups/PopDailyRewards/PopDailyRewards";
// import calendarImg from "../../assets/calendar.png";
// import telegramIcon from "../../assets/telegramIcon.png";
// import xIcon from "../../assets/xtwitter.png";
import { useEffect, useState } from "react";
import $api from "../../components/http";
import userImg from "../../assets/characters/whale.png";

interface IQuest {
	text: string;
	type: string;
	reward: number;
	image: string;
	completed: boolean;
}

export const EarnPage = () => {
	const { handleOpenPopup, isPopupOpen, currentPopup } = usePopupContext();

	const [quests, setQuests] = useState([]);
	const [completedQuests, setCompletedQuests] = useState([]);

	useEffect(() => {
		$api
			.get("/mining/quests")
			.then(({ data }) => {
				setQuests(data.filter((item: IQuest) => item.completed));
				setCompletedQuests(data.filter((item: IQuest) => !item.completed));
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<S.Container>
			<S.Title>Еженедельные задачи</S.Title>
			{completedQuests.map((item: IQuest) => (
				<WeeklyTask
					key={item.text}
					onClick={() => handleOpenPopup("dailyReward")}
					title={item.text}
					image={item.image ? item.image : userImg}
					reward={item.reward}
          completed
				/>
			))}

			<S.Title>Еженедельные задачи</S.Title>
      {quests.map((item: IQuest) => (
				<WeeklyTask
					key={item.text}
					onClick={() => handleOpenPopup("dailyReward")}
					title={item.text}
					image={item.image ? item.image : userImg}
					reward={item.reward}
				/>
			))}
			{/* <WeeklyTask
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
			/> */}
			<BottomNav />
			{isPopupOpen && currentPopup === "telegram" && <PopTask />}
			{isPopupOpen && currentPopup === "x" && <PopTask />}
			{isPopupOpen && currentPopup === "dailyReward" && <PopDailyReward />}
		</S.Container>
	);
};
