import * as S from "./MiningInfo.styled";
import coinGold from "../../assets/coinGold.png";
import icon from "../../assets/icons.svg";
import { useUserContext } from "../../context/hooks/useUser";
import { getShortNumber } from "../../utils/getShortNumber";
import { Image } from "@nextui-org/react";

interface MiningInfoProps {
	onClick: () => void;
	forUpgrade?: number;
}

export const MiningInfo: React.FC<MiningInfoProps> = ({
	forUpgrade = 0,
	onClick,
}) => {
	const { user } = useUserContext();

	return (
		<S.MiningInfoBlock>
			<S.MiningInfoContainer>
				<S.ProfitOneClickTitle>Прибыль за тап</S.ProfitOneClickTitle>
				<S.ProfitOneClickContent>
					<S.CoinImg src={coinGold}></S.CoinImg>
					<S.ProfitOneClickCount>+{user?.multitap_lvl}</S.ProfitOneClickCount>
				</S.ProfitOneClickContent>
			</S.MiningInfoContainer>
			<S.MiningInfoContainer>
				<S.CoinsUpTitle>Монет для апа</S.CoinsUpTitle>
				<S.CoinsUpCount>{getShortNumber(forUpgrade)}</S.CoinsUpCount>
			</S.MiningInfoContainer>
			<S.MiningInfoContainer>
				<S.ProfitPerHourTitle>Прибыль в час</S.ProfitPerHourTitle>
				<S.ProfitPerHourContent>
					<S.CoinImg src={coinGold} />
					<S.ProfitOneClickCount>
						{getShortNumber(user?.passive_profit ? user.passive_profit : 0)}
					</S.ProfitOneClickCount>
					<Image
						alt="info"
						width={18}
						height={18}
						className="object-cover text-white -mt-px cursor-pointer z-0"
						src={icon}
            id="popBoost"
            onClick={onClick}
					/>
				</S.ProfitPerHourContent>
			</S.MiningInfoContainer>
		</S.MiningInfoBlock>
	);
};
