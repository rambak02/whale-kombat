import * as S from "./Friend.styled";
import userList from "../../assets/userList.png";
import coinGold from "../../assets/coinGold.png"
import React from "react";


export const Friend: React.FC = ( ) => {
  return (
    <S.FriendContainer>
      <S.Friend>
        <S.FriendImg src={userList} />
        <S.FriendDescription>
          <S.FriendNameContainer>
            <S.CoinIcon src={coinGold} />
            <S.FriendName>Crypto Whale</S.FriendName>
          </S.FriendNameContainer>
          <S.FriendScore>
            <S.ScoreImg src={coinGold} />
            <S.Score>2 785 396</S.Score>
          </S.FriendScore>
        </S.FriendDescription>
      </S.Friend>
      <S.Top>1</S.Top>
    </S.FriendContainer>
  );
};
