import coinGold from "../../assets/coinGold.png";
import { Card, CardBody, Divider, Image } from "@nextui-org/react";
type BoostProps = {
	onClick: () => void;
	offer: Boost;
};

type Boost = {
	id: string;
	name: string;
	image: string;
	profit_per_hour: number;
	level: number;
	cost: number;
};
export const Boost = ({ offer, onClick }: BoostProps) => {
	return (
		<>
			<Card
				radius="sm"
				isBlurred
				shadow="sm"
				className="bg-primary-light min-h-[110px]"
			>
				<CardBody className="flex flex-col justify-between" id={offer.id}  onClick={onClick}>
					<div className="flex flex-row gap-3">
						<Image src={offer.image} alt="img" width={50} height={50} />
						<div className="flex flex-col text-xs text-primary">
							<p className="font-semibold">{offer.name}</p>
							<p className="text-[10px] mt-1">Прибыль в час</p>
							<div className="flex items-center -mt-0.5">
								<Image
									src={coinGold}
									alt="img"
									width={25}
									height={25}
									className="-ml-1"
								/>
								<p className="font-semibold text-primary text-xs">
									{offer.profit_per_hour}
								</p>
							</div>
						</div>
					</div>
					<Divider className="my-1" />
					<div className="flex justify-between items-center text-sm font-semibold text-primary -mb-1.5">
						<p>lvl {offer.level || 0}</p>
						<div className="flex items-center">
							<Image
								src={coinGold}
								alt="img"
								width={30}
								height={30}
								className="-ml-1"
							/>
							<p className="font-semibold text-primary text-sm">{offer.cost}</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</>
	);
};
