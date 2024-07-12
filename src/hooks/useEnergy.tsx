import { useEffect, useState } from "react";
import { useGetUserQuery } from "../redux/services/userApi";
import { useOnTapMutation } from "../redux/services/miningApi";

export const useEnergy = () => {
	const { data: user } = useGetUserQuery(null);

	const [energy, setEnergy] = useState(0);

	const multi = user?.energy_lvl || 1;
	const maxEnergy = 1000 + 500 * multi;
	const addedEnergy = 3;

	const minusEnergy = () => {
		if (user) {
			if (energy <= 0) {
				return;
			}
			setEnergy(energy - user?.multitap_lvl || 1);
		}
	};

	const [onTap] = useOnTapMutation();

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (energy < 1500) {
				setEnergy((prevEnergy) => {
					const newEnergy = Math.min(maxEnergy, prevEnergy + addedEnergy);
					onTap({
						current_energy: newEnergy,
						earned: 0,
					}).unwrap().catch((error) => console.log(error));
					return newEnergy;
				});
			}
		}, 1000);

		return () => clearInterval(intervalId);
	}, [energy]);

	return { energy, minusEnergy };
};
