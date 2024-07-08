import { Clicker } from "../../components/Clicker/Clicker";
import * as S from "./MainPage.styled";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { MiningInfo } from "../../components/MiningInfo/MiningInfo";
import { PopBoost } from "../../components/popups/PopBoost/PopBoost";
import { usePopupContext } from "../../context/hooks/usePopup";
import { useUserContext } from "../../context/hooks/useUser";
import coinGold from "../../assets/coinGold.png";
import { Energy } from "../../components/Energy/Energy";
import { Header } from "../../components/Header/Header";
import { useEffect, useState } from "react";
import $api from "../../components/http";

interface ILevelCost {
	level: number;
	cost: number;
}

export const MainPage = () => {
	const { handleOpenPopup, isPopupOpen, currentPopup } = usePopupContext();
	const { user } = useUserContext();

	const [levelsCost, setLevelsCost] = useState<ILevelCost[]>([]);
	const [progress, setProgress] = useState<number>(0);
	const [forUpgrade, setForUpgrade] = useState<number>(0);

	useEffect(() => {
		if (levelsCost.length) return;

		$api
			.get("/mining/level-cost")
			.then(({ data }) => setLevelsCost(data?.payload || []))
			.catch((error) => console.log(error));
	}, []);

	useEffect(() => {
		if (!user || !levelsCost.length) return;

		const currentLevelCost = levelsCost?.find(
			(i: ILevelCost) => i.level === user?.level
		)?.cost;

		setForUpgrade(currentLevelCost ? currentLevelCost - user.coins : 0);
		setProgress(
			currentLevelCost
				? Math.round((currentLevelCost - user.coins) / (currentLevelCost / 100))
				: 0
		);
	}, [levelsCost, user]);

	return (
		<S.Container>
			<Header />
			<S.Content>
				<S.TopWrapper>
					<MiningInfo
           forUpgrade={forUpgrade}
           onClick={() => handleOpenPopup("boost")} 
           />
					<S.BalanceBlock>
						<S.BalanceIcon src={coinGold}></S.BalanceIcon>
						<S.Balance> {user?.coins}</S.Balance>
					</S.BalanceBlock>
					<S.ProgressBarBlock>
						<S.LevelBlock>
							<S.LevelTitle>Название уровня &gt;</S.LevelTitle>
							<S.Level>
								Level <S.LevelNumber>{user?.level}/10</S.LevelNumber>
							</S.Level>
						</S.LevelBlock>
						<S.ProgressBarWrapper>
							<S.ProgressBarBg />
							<S.ProgressBar width={progress} />
						</S.ProgressBarWrapper>
					</S.ProgressBarBlock>
				</S.TopWrapper>

				<Clicker />
				<Energy />
				<BottomNav />
			</S.Content>
			{isPopupOpen && currentPopup === "boost" && <PopBoost />}
		</S.Container>
	);
};
