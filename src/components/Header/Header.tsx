import { useUserContext } from "../../context/hooks/useUser";
import userImg from "../../assets/characters/whale.png";
import { Image } from "@nextui-org/react";

export const Header = () => {
	const { user } = useUserContext();

	return (
		<div className="flex justify-between items-center m-4">
			<div className="flex items-center gap-1">
				<Image
					alt="photo"
					width={36}
					height={36}
					className="object-cover"
					src={user?.photo ? user.photo : userImg}
				/>
				<p className="text-white text-sm font-montserrat pt-1">{user?.username}</p>
			</div>
      {/* <div className="bg-[#03577F] rounded-lg p-2 ">
      <Image
					alt="bybit"
					width={36}
					height={36}
					className="object-cover text-white -mt-px cursor-pointer"
					src={byBitImg}
				/>
      </div> */}
		</div>
	);
};
