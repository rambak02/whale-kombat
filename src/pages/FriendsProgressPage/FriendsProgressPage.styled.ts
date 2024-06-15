import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(0deg, #7ad4df 0%, #03577f 86.39%, #1c1c1d 100%);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 20px 20px 95px 20px;
  position: relative;
`;

export const FriendsProgress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 93%;
  height: 256px;
`;

export const FriendsProgressContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  justify-content: space-evenly;
`;

export const FriendCharacter = styled.div`
  display: flex;
  justify-content: center;
`;
export const FriendCharacterBackground = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    77.48% 77.48% at 50% 50%,
    #bef3f2 0%,
    #00602d 100%
  );
  border-radius: 100px;
  box-shadow: 0px 0px 40px 30px #bff4f366;
  width: 181px;
  height: 181px;
  border: 20px;
  filter: blur(20px);
  z-index: 1;
`;

export const FriendCharacterImg = styled.img`
  width: 140.5px;
  height: 167.5px;
  position: relative;
  z-index: 2;
`;

export const FriendNext = styled.img``;

export const FriendPrev = styled.img``;

export const FriendsTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  margin-top: 18px;
`;
export const Title = styled.div`
  font-family: "Roboto";
  font-size: 36px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
`;
export const Description = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
`;

export const FriendsList = styled.ul`
  margin-top: 20px;
  width: 93%;
  height: 356px;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
