import { useEffect, useState } from "react"
import $api from "../components/http"
import { useUserContext } from "../context/hooks/useUser"


interface ILevelCost {
	level: number;
	cost: number;
}

export const useGetProgress = () => {
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

		const currentLevelCost = levelsCost.find(
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
	}, [levelsCost, user]);

  return { progress, forUpgrade };
}