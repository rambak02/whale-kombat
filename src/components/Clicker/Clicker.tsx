import { useEffect, useState } from "react";
import * as S from "./Clicker.styled";
import { clickNumbers } from "../../interfaces/interface";
import { postMiningTaps } from "../../api";
import { throttle } from "lodash";
import { useUserContext } from "../../context/hooks/useUser";
import clickerImg from "../../assets/whale.png";

export const Clicker = () => {
	const { user, updateCoins, minusEnergy, energy } = useUserContext();
	//цифры появляющиеся при клике
	const [clickNumbers, setClickNumbers] = useState<clickNumbers[]>([]);
	const [accumulatedCoins, setAccumulatedCoins] = useState<number>(0);
	const [accumulatedEnergy, setAccumulatedEnergy] = useState<number>(0);

	//элемент появляется в том месте, где был совершен клик
	const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const { clientX, clientY } = event;
		//расчет координат относительно всей страницы
		const absoluteX = clientX + window.scrollX;
		const absoluteY = clientY + window.scrollY;

		const newClick = {
			id: Date.now(),
			x: absoluteX,
			y: absoluteY,
		};

		setClickNumbers((prevClicks) => [...prevClicks, newClick]);

		const timeOut = setTimeout(() => {
			setClickNumbers((prevClicks) =>
				prevClicks.filter((click) => click.id !== newClick.id)
			);
			return () => clearTimeout(timeOut);
		}, 900);
		if (user) {
			const formulaTap = user.multitap_lvl;
			minusEnergy();
			updateCoins(user.coins + formulaTap);
			setAccumulatedCoins((prevCoins) => prevCoins + formulaTap);
			setAccumulatedEnergy((prevEnergy) => {
				return prevEnergy + formulaTap;
			});
		}
	};

	const throttledPostMiningTaps = throttle(async () => {
		if (accumulatedCoins > 0 || accumulatedEnergy > 0) {
			await postMiningTaps(energy, accumulatedCoins);
			setAccumulatedCoins(0);
			setAccumulatedEnergy(0);
		}
	}, 500);

	useEffect(() => {
		const interval = setInterval(() => {
			throttledPostMiningTaps();
		}, 300);

		return () => clearInterval(interval);
	}, [throttledPostMiningTaps]);
	return (
		<div className="mt-3 flex w-full items-center justify-center">
			<div
				className="w-[300px] h-[300px] flex justify-center items-center bg-gray-500 bg-gradient-to-b from-[#44B9CC] from-0% via-[#26829B] via-50% to-[#052939] to-100% rounded-full"
				onClick={handleClick}
			>
				<div
					className="relative w-[270px] h-[270px] flex justify-center items-center rounded-full bg-[radial-gradient(60%_60%,#45B3E7_0%,#114760_100%)]"
				>
          <S.ClickerBlock>
						<S.ClickerImg src={clickerImg} />
            {clickNumbers.map((click) => (
							<S.Number key={click.id} $left={click.x - 100} $top={click.y - 280}>
								{energy ? `+${user?.multitap_lvl}` : "+0"}
							</S.Number>
						))}
					</S.ClickerBlock>
        </div>
			</div>
		</div>
	);
};
