import { useEffect, useState } from "react"
import { useGetLevelsCostQuery } from "../redux/services/miningApi"
import { useUserContext } from "../context/hooks/useUser"

interface ILevelCost {
	level: number;
	cost: number;
}

export const useGetProgress = () => {
  const { user } = useUserContext();
	const { data: levelsCost } = useGetLevelsCostQuery(null)

	const [progress, setProgress] = useState<number>(0);
	const [forUpgrade, setForUpgrade] = useState<number>(0);

	useEffect(() => {
		if (!user || !levelsCost?.payload?.length) return;

		const currentLevelCost = levelsCost.payload.find(
			(i: ILevelCost) => i.level === user.level + 1
		)?.cost;

		setForUpgrade(currentLevelCost ? currentLevelCost - user.coins : 0);
		setProgress(
			currentLevelCost
				? 100 -
						Math.round(
							(currentLevelCost - user.coins) / (currentLevelCost / 100)
						)
				: 0
		);
	}, [user, levelsCost]);

  return { progress, forUpgrade };
}