import { FunctionComponent } from "react";
import { useUserContext } from "../context/hooks/useUser";
import coinGold from "../assets/coinGold.png";
import { motion } from "framer-motion";

interface BalanceBlockProps {}

const BalanceBlock: FunctionComponent<BalanceBlockProps> = () => {
	const { user } = useUserContext();

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0 }}
			className="flex gap-3 items-center justify-center mt-2.5"
		>
			<img
				src={coinGold}
				alt="coin"
				className="w-[50px] h-[50px] -ml-3 mt-1.5"
			/>
			<p className="text-3xl mt-[3px] font-bold text-white">
				{user?.coins.toLocaleString("ru")}
			</p>
		</motion.div>
	);
};

export default BalanceBlock;
