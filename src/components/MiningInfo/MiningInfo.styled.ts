import styled from "styled-components";

export const MiningInfoBlock = styled.div`
  width: 100%;
  display: flex;
  margin: 20px;
  align-items: center;
  justify-content: space-evenly;
`;
export const ProfitOneClick = styled.div`
  background: rgba(94, 193, 202, 1);
  min-width: 110px;
  min-height: 48px;
  border-radius: 10px;
`;
export const ProfitOneClickTitle = styled.div`
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: black;
`;
export const ProfitOneClickContent = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;
export const ProfitOneClickCount = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  color: black;
`;
export const CoinsBeforeUp = styled(ProfitOneClick)``;
export const CoinsUpTitle = styled(ProfitOneClickTitle)``;
export const CoinsUpCount = styled(ProfitOneClickCount)``;
export const ProfitPerHour = styled(ProfitOneClick)``;
export const ProfitPerHourTitle = styled(ProfitOneClickTitle)``;
export const ProfitPerHourContent = styled(ProfitOneClickContent)``;
export const ProfitPerHourCount = styled(ProfitOneClickCount)``;
