import { useState } from "react";
import * as S from "./MinePage.styled";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { MiningInfo } from "../../components/MiningInfo/MiningInfo";
import { Market } from "../../components/Market/Market";
import { PRTeam } from "../../components/PRTeam/PRTeam";
import { Legal } from "../../components/Legal/Legal";
import { Specials } from "../../components/Specials/Specials";
import { usePopupContext } from "../../context/hooks/usePopup";
import { PopBoost } from "../../components/popups/PopBoost/PopBoost";
import { PopMine } from "../../components/popups/PopMine/PopMine";
import { Offer } from "../../components/models/response/IOffers";
import { useGetProgress } from "../../hooks/useGetProgress";
import Container from "../../components/layout/Container";
import BalanceBlock from "../../components/BalanceBlock";
import { Tab, Tabs } from "@nextui-org/react";

export const MinePage: React.FC = () => {
	const { forUpgrade } = useGetProgress();

	const { handleOpenPopup, isPopupOpen, currentPopup } = usePopupContext();

	const [currentPopMine, setCurrentPopMine] = useState<Offer | null>(null);

	const tabs = [
		{
			id: "markets",
			label: "Markets",
			content: (
				<Market
					onClick={setCurrentPopMine}
					handleOpenPopup={() => handleOpenPopup("mine")}
				/>
			),
		},
		{
			id: "pr&team",
			label: "PR & Team",
			content: (
				<PRTeam
					onClick={setCurrentPopMine}
					handleOpenPopup={() => handleOpenPopup("mine")}
				/>
			),
		},
		{
			id: "legal",
			label: "Legal",
			content: (
				<Legal
					onClick={setCurrentPopMine}
					handleOpenPopup={() => handleOpenPopup("mine")}
				/>
			),
		},
		{
			id: "specials",
			label: "Specials",
			content: (
				<Specials
					onClick={setCurrentPopMine}
					handleOpenPopup={() => handleOpenPopup("mine")}
				/>
			),
		},
	];

	return (
		<Container>
			<S.Content>
				<S.TopWrapper>
					<MiningInfo
						forUpgrade={forUpgrade}
						onClick={() => handleOpenPopup("boost")}
					/>
					<BalanceBlock />

					<div className="flex w-full flex-col mt-4">
						<Tabs
							aria-label="Dynamic tabs"
							items={tabs}
							color="primary"
							fullWidth
							className="dark"
						>
							{(item) => (
								<Tab key={item.id} title={item.label}>
									{item.content}
								</Tab>
							)}
						</Tabs>
					</div>
				</S.TopWrapper>
				<BottomNav />
			</S.Content>
			{isPopupOpen && currentPopup === "boost" && <PopBoost />}
			{isPopupOpen && currentPopup === "mine" && (
				<PopMine offer={currentPopMine} />
			)}
		</Container>
	);
};
