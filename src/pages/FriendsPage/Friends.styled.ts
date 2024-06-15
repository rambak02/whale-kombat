import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);

  }
`;

const left = keyframes`
0% { transform: translateX(-15px);
     opacity: 0; }
50% { transform: translateX(-10px); 
 opacity: 0.5;
}
100% { transform: translateX(0); 
opacity: 1;
}
`;

const right = keyframes`
0% { transform: translateX(15px);
     opacity: 0; }
50% { transform: translateX(10px); 
 opacity: 0.5;
}
100% { transform: translateX(0); 
opacity: 1;
}
`;

export const Container = styled.div`
  padding-top: 15px;
  background: linear-gradient(0deg, #7ad4df 0%, #03577f 86.39%, #1c1c1d 100%);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.div`
 margin-top: 5px;
  color: white;
  font-family: "Roboto";
  font-size: 36px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.03em;
  text-align: center;
  animation: ${left} 0.3s;
`;
export const Description = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.03em;
  text-align: center;
  animation: ${right} 0.3s;
`;
export const GiftsContainer = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Gifts = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  margin: 14px;
`;
export const MoreGifts = styled.div`
  color: #5ec1ca;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.03em;
  text-align: center;
`;
export const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
`;

export const FriendsListHeader = styled.div`
  width: 85vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FriendsListTitle = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: -0.03em;
  text-align: left;
`;
export const FriendsListRefresh = styled.img`
  width: 24px;
  height: 24px;
`;
export const Friends = styled.div`
  display: flex;
  background: radial-gradient(
    149.3% 149.3% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
  align-items: center;
  justify-content: space-evenly;
  padding: 7px 0px;
  border-radius: 10px;
`;
export const FriendBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const FriendInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
export const FriendReward = styled.div`
  display: flex;
  align-items: center;
`;
export const FriendCash = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
`;
export const FriendLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const Level = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
`;
export const FriendName = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  text-align: left;
`;
export const InviteFriend = styled.div`
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  gap: 2px;
  bottom: 82px;
  z-index: 1;
  animation: ${slideUp} 0.3s;
`;
export const InviteFriendContent = styled.div`
  gap: 10px;
  height: 100%;
  background: linear-gradient(360deg, #de8300 0%, #ffedd1 100%);
  display: flex;
  border-radius: 20px;
  width: 290px;
  align-items: center;
  justify-content: center;
  animation: ${pulse} 1s infinite;
`;
export const InviteFriendContentText = styled.button`
  color: black;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  background: center;
  border: none;
`;
export const CopyLink = styled.div`
  display: flex;
  padding: 10px;
  height: 100%;
  background: linear-gradient(360deg, #de8300 0%, #ffedd1 100%);
  border-radius: 20px;
  align-items: center;
`;
