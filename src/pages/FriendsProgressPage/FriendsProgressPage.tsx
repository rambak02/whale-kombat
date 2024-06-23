import { BottomNav } from "../../components/BottomNav/BottomNav";
import { Friend } from "../../components/Friend/Friend";
import * as S from "./FriendsProgressPage.styled";

export const FriendsProgressPage = () => {
  return (
    <S.Container>
      <S.FriendsProgress>
        <S.FriendsProgressContent>
          <S.FriendPrev src="../../..//prev.png" />
          <S.FriendCharacter>
            <S.FriendCharacterBackground></S.FriendCharacterBackground>
            <S.FriendCharacterImg src="../../..//dolphin.png" />
          </S.FriendCharacter>

          <S.FriendNext src="../../..//next.png" />
        </S.FriendsProgressContent>

        <S.FriendsTitle>
          <S.Title>Lord</S.Title>
          <S.Description>from 1B+</S.Description>
        </S.FriendsTitle>
      </S.FriendsProgress>
      <S.FriendsList>
        <Friend />
        <Friend />
        <Friend />
        <Friend />
        <Friend />
      </S.FriendsList>
      <BottomNav />
    </S.Container>
  );
};
