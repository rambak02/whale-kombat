import { Link } from "react-router-dom";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { Gift } from "../../components/Gift/Gift";
import { constRoutes } from "../../paths";
import * as S from "./Friends.styled";
import { Img } from "react-image";

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
          <S.FriendsListRefresh src="../../..//mynaui_refresh.svg" />
        </S.FriendsListHeader>
        <Link to={constRoutes.FRIENDSPROGRESS}>
          <S.Friends>
            <S.FriendBlock>
              <Img src="../../..//iconFriends.png" />
              <S.FriendInfo>
                <S.FriendName>Name</S.FriendName>
                <S.FriendLevel>
                  <S.Level>Уровень</S.Level>
                  <Img src="../../..//Vector.svg" />
                  <S.FriendCash>5,09K</S.FriendCash>
                </S.FriendLevel>
              </S.FriendInfo>
            </S.FriendBlock>
            <S.FriendReward>
              <Img src="../../..//Vector.svg" />
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
          <Img src="../../..//mage_user-plus.png" />
        </S.InviteFriendContent>
        <S.CopyLink>
          <Img src="../../..//fluent_copy-20-regular.svg" />
        </S.CopyLink>
      </S.InviteFriend>
      <BottomNav />
    </S.Container>
  );
};
