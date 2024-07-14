import { Clicker } from "../../components/Clicker/Clicker";
import * as S from "./MainPage.styled";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { MiningInfo } from "../../components/MiningInfo/MiningInfo";
import Container from "../../components/layout/Container";
import { PopBoost } from "../../components/popups/PopBoost/PopBoost";
import { usePopupContext } from "../../context/hooks/usePopup";
import { Energy } from "../../components/Energy/Energy";
import { Header } from "../../components/Header/Header";
import { useGetProgress } from "../../hooks/useGetProgress";
import { useUserContext } from "../../context/hooks/useUser";
import BalanceBlock from "../../components/BalanceBlock"
// import { Loader } from "../../components/Loader/Loader";
// import { useLoadingContext } from "../../context/hooks/useLoading";

export const MainPage = () => {
	const { user } = useUserContext();
    // const {loadingProgress} = useLoadingContext()
	const { handleOpenPopup, isPopupOpen, currentPopup } = usePopupContext();
	const { progress, forUpgrade } = useGetProgress();

	return (
		<>
			{user ? (
				<Container>
					{/* <S.Container> */}
					<Header />
					<div className="flex flex-col px-4 h-[90vh]">
						<div className="">
							<MiningInfo
								forUpgrade={forUpgrade}
								onClick={() => handleOpenPopup("boost")}
							/>

							<S.ProgressBarBlock>
								<S.LevelBlock>
									<p className="text-white font-medium font-montserrat">
										Название уровня &gt;
									</p>
									<S.Level>
										Level <S.LevelNumber>{user?.level}/10</S.LevelNumber>
									</S.Level>
								</S.LevelBlock>
								<S.ProgressBarWrapper>
									<S.ProgressBarBg />
									<S.ProgressBar width={progress} />
								</S.ProgressBarWrapper>
							</S.ProgressBarBlock>

							<BalanceBlock />
						</div>

						<div className="relative flex flex-col justify-center">
							<Clicker />
							<Energy />
						</div>
						<BottomNav />
					</div>
					{isPopupOpen && currentPopup === "boost" && <PopBoost />}
					{/* </S.Container> */}
				</Container>
			) : null}
		</>
	);
};
