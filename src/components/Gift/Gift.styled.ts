import styled from "styled-components";

export const Container = styled.div`
  height: 88px;
  padding: 12px 16px 12px 16px;
  border-radius: 10px;
  background: radial-gradient(
    149.3% 149.3% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
  display: flex;
  align-items: flex-start;
`;
export const GiftIcon = styled.img`
  width: 64px;
  height: 64px;
`;
export const Content = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-left: 15px;
  justify-content: stretch;
`;
export const Title = styled.div`
  color: white;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
`;
export const Description = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const RewardIcon = styled.img`
  width: 17px;
  height: 17px;
`;
export const RewardText = styled.div`
  color: white;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
`;
export const RewardSpan = styled.span`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  color: rgba(255, 218, 109, 1);
`;
