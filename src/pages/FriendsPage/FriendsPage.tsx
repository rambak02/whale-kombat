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
import copyLink from "../../assets/fluent_copy-20-regular.svg"


export const FriendsPage = () => {
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
          <S.Friends>
            <S.FriendBlock>
              <S.FriendImg src={iconFriend} />
              <S.FriendInfo>
                <S.FriendName>Name</S.FriendName>
                <S.FriendLevel>
                  <S.Level>Уровень</S.Level>
                  <S.CoinImg src={coinGold} />
                  <S.FriendCash>5,09K</S.FriendCash>
                </S.FriendLevel>
              </S.FriendInfo>
            </S.FriendBlock>
            <S.FriendReward>
              <S.CoinImg src={coinGold} />
              <div>+25K</div>
            </S.FriendReward>
          </S.Friends>
        </Link>
      </S.FriendsContainer>
      <S.InviteFriend>
        <S.InviteFriendContent>
          <S.InviteFriendContentText>
            Пригласите друга
          </S.InviteFriendContentText>
          <Img src={inviteFriend} />
        </S.InviteFriendContent>
        <S.CopyLink>
          <Img src={copyLink} />
        </S.CopyLink>
      </S.InviteFriend>
      <BottomNav />
    </S.Container>
  );
};
