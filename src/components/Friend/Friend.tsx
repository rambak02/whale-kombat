import * as S from "./Friend.styled"

export const Friend = () => {
  return (
    <S.FriendContainer>
      <S.Friend>
        <S.FriendImg src="/public/userList.png" />
        <S.FriendDescription>
          <S.FriendNameContainer>
            <S.CoinIcon src="/public/Vector.svg" />
            <S.FriendName>Crypto Whale</S.FriendName>
          </S.FriendNameContainer>
          <S.FriendScore>
            <S.ScoreImg src="/public/Vector.svg" />
            <S.Score>2 785 396</S.Score>
          </S.FriendScore>
        </S.FriendDescription>
      </S.Friend>
      <S.Top>1</S.Top>
    </S.FriendContainer>
  );
};
