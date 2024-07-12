import { Link } from "react-router-dom";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { Gift } from "../../components/Gift/Gift";
import { constRoutes } from "../../paths";
import * as S from "./Friends.styled";
import { Img } from "react-image";
import refreshIcon from "../../assets/mynaui_refresh.svg";
import iconFriend from "../../assets/iconFriends.png";
import coinGold from "../../assets/coinGold.png";
import inviteFriend from "../../assets/mage_user-plus.png";
import copyLink from "../../assets/fluent_copy-20-regular.svg";
import { useFriendsContext } from "../../context/hooks/useFriends";
import { useUserContext } from "../../context/hooks/useUser";
import { useEffect, useState } from "react";
import { getShortNumber } from "../../utils/getShortNumber"

export const FriendsPage = () => {
	const { friends } = useFriendsContext();
	const { user } = useUserContext();

	const [copied, setCopied] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCopied(false);
		}, 3000);

		return () => {
			clearTimeout(timeout);
		};
	}, [copied]);

	const TELEGRAM_APP_URL = "https://t.me/ocean_kombat_bot/start"
	const invitationText = 'Отправь приглашение другу'
	const link = `https://telegram.me/share/url?url=${TELEGRAM_APP_URL}?startapp=${user?.id}&text=${invitationText}`;

	return (
		<S.Container>
			<S.Header>
				<S.Title>Пригласите друзей</S.Title>
				<S.Description>Вы и ваш друг получите бонусы</S.Description>
			</S.Header>
			<S.GiftsContainer>
				<S.Gifts>
					<Gift cash={5000} title="Пригласите друга" />
					<Gift cash={25000} title="Пригласите друга с Telegram Premium" />
				</S.Gifts>
				<S.MoreGifts>Больше бонусов</S.MoreGifts>
			</S.GiftsContainer>
			<S.FriendsContainer>
				<S.FriendsListHeader>
					<S.FriendsListTitle>Список ваших друзей</S.FriendsListTitle>
					<S.FriendsListRefresh src={refreshIcon} />
				</S.FriendsListHeader>
				<Link to={constRoutes.FRIENDSPROGRESS}>
					{friends?.map((friend) => {
						return (
							<S.Friends>
								<S.FriendBlock>
									<S.FriendImg src={iconFriend} />
									<S.FriendInfo>
										<S.FriendName>{friend.invited.username}</S.FriendName>
										<S.FriendLevel>
											<S.Level>Уровень {friend.invited.level}</S.Level>
											<S.CoinImg src={coinGold} />
											<S.FriendCash>
												{getShortNumber(friend.invited.coins)}
											</S.FriendCash>
										</S.FriendLevel>
									</S.FriendInfo>
								</S.FriendBlock>
								<S.FriendReward>
									<S.CoinImg src={coinGold} />
									<div>{getShortNumber(friend.reward)}</div>
								</S.FriendReward>
							</S.Friends>
						);
					})}
				</Link>
			</S.FriendsContainer>

			<S.InviteFriend>
				{copied ? <S.Success>Cсылка скопирована</S.Success> : null}

				<S.InviteFriendContent to={link} >
					<S.InviteFriendContentText>
						Пригласите друга
					</S.InviteFriendContentText>
					<Img src={inviteFriend} />
				</S.InviteFriendContent>

				<S.CopyLink
					onClick={() =>
						navigator.clipboard
							.writeText(`${TELEGRAM_APP_URL}?startapp=${user?.id}`)
							.then(() => setCopied(true))
					}
				>
					<Img src={copyLink} />
				</S.CopyLink>
			</S.InviteFriend>
			<BottomNav />
		</S.Container>
	);
};
