import styled from "styled-components";

export const Container = styled.div`
  width: 375px;
  height: 65px;
  padding: 16px;
  background: radial-gradient(
    149.3% 149.3% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;
export const TaskContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 10px;
`;
export const TaskInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  text-align: left;
`;
export const RewardBlock = styled.div`
    display: flex;
    align-items: center;
`

export const TaskReward = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
`;
