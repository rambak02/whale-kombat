import { BottomNav } from "../../components/BottomNav/BottomNav"
import { Gift } from "../../components/Gift/Gift"
import * as S from "./Friends.styled";

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
                <Gift cash={25000} title="Пригласите друга с Telegram Premium"/>
            </S.Gifts>
            <S.MoreGifts>Больше бонусов</S.MoreGifts>
            </S.GiftsContainer>
            <S.FriendsContainer>
                <S.FriendsListHeader>
                    <S.FriendsListTitle>Список ваших друзей</S.FriendsListTitle>
                    <S.FriendsListRefresh src="/public/mynaui_refresh.svg" />
                </S.FriendsListHeader>
                <S.Friends>
                    <S.FriendBlock>
                    <img src="/public/iconFriends.png" />
                    <S.FriendInfo>
                        
                        <S.FriendName>Name</S.FriendName>
                        <S.FriendLevel>
                            <S.Level>Уровень</S.Level>
                            <img src="/public/Vector.svg"/>
                            <S.FriendCash>5,09K</S.FriendCash>
                        </S.FriendLevel>
                    </S.FriendInfo>
                    </S.FriendBlock>
                    <S.FriendReward>
                        <img src="/public/Vector.svg"/>
                        <div>+25K</div>
                    </S.FriendReward>
                </S.Friends>
            </S.FriendsContainer>
            <S.InviteFriend>
                <S.InviteFriendContent>
                    <S.InviteFriendContentText>Пригласите друга</S.InviteFriendContentText>
                    <img src="/public/mage_user-plus.png"/>
                </S.InviteFriendContent>
                <S.CopyLink>
                <img src="/public/fluent_copy-20-regular.svg" />
                </S.CopyLink>
            </S.InviteFriend>
            <BottomNav />
        </S.Container>
    )
    }