import { useEffect, useRef, useState } from "react";
import * as S from "./Clicker.styled";
import { postMiningTaps } from "../../api";
import { throttle } from "lodash";
import { useUserContext } from "../../context/hooks/useUser";
import { Character } from "../Character/Character";
import { addFloatingNumber } from "./utils/addFloatingNumber";

export const Clicker = () => {
	const { user, updateCoins, minusEnergy, energy } = useUserContext();
	const [accumulatedCoins, setAccumulatedCoins] = useState<number>(0);
	const [accumulatedEnergy, setAccumulatedEnergy] = useState<number>(0);

	const blockRef = useRef<HTMLDivElement>(null);

	const handleClick = (event: React.TouchEvent<HTMLDivElement>) => {
		[...((event.changedTouches as unknown) as Touch[])].forEach((touch) => {
			addFloatingNumber({
				left: touch.pageX,
				top: touch.pageY,
				value: energy ? `+${user?.multitap_lvl}` : "+0",
				target: blockRef.current,
			});
		});

		if (user) {
			const formulaTap = user.multitap_lvl;
			minusEnergy();
			updateCoins(user.coins + formulaTap);
			setAccumulatedCoins((prevCoins) => prevCoins + formulaTap);
			setAccumulatedEnergy((prevEnergy) => prevEnergy + formulaTap);
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
				onTouchStart={(e) => handleClick(e)}
			>
				<div className="relative w-[270px] h-[270px] flex justify-center items-center rounded-full bg-[radial-gradient(60%_60%,#45B3E7_0%,#114760_100%)]">
					<S.ClickerBlock ref={blockRef}>
						<S.ImgBlock>
							<Character level={user?.level || 1} />
						</S.ImgBlock>
					</S.ClickerBlock>
				</div>
			</div>
		</div>
	);
};
