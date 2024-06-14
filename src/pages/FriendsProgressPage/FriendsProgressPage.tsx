import * as S from "./FriendsProgressPage.styled"

export const FriendsProgressPage = () => {
    return (
     <S.Container>
      <S.FriendsProgress>
    <div></div>
    <div>
        <S.FriendCharacter>
            <S.FriendCharacterBackground></S.FriendCharacterBackground>
            <S.FriendCharacterImg src="/public/dolphin.jpg" />
        </S.FriendCharacter>
        <div>
          <div>Lord</div>
          <div>from 1B+</div>
        </div>
    </div>
    <div></div>
      </S.FriendsProgress>
      <S.FriendsList>
        <div>
            <img src="/public/userList.png"/>
            <div>
                <div>
                    <img src="/public/Vector.svg"/>
                    <div>Crypto Whale</div>
                </div>
                <div>
                    <img src="/public/Vector.svg" />
                    <div>2 785 396</div>
                </div>
            </div>
            <div>1</div>
        </div>
      </S.FriendsList>
     </S.Container>

    )
}