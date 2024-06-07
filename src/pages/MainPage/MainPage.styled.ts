import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(0deg, #7ad4df 0%, #03577f 86.39%, #1c1c1d 100%);
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;
export const UserBlock = styled.div`
  width: 82px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const UserImg = styled.img``;
export const Username = styled.div`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`;
export const BybitBlock = styled.div`
  background: radial-gradient(
    149.3% 149.3% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
  width: 101.11px;
  height: 36px;
  padding: 12px 16px 12px 16px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const BybitImg = styled.img``;

export const BybitText = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: black;
`;
export const Content = styled.div`
  background: linear-gradient(360deg, #de8300 0%, #ffedd1 100%);
  border-top: 3px solid rgba(229, 153, 43, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 36px 36px 0px 0px;
  height: 645px;
`;
export const MiningInfo = styled.div`
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
export const BalanceBlock = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
export const Balance = styled.div`
  font-family: "Roboto";
  font-weight: 700;
  text-align: center;
  font-size: 2rem;
  line-height: 21px;
  color: black;
`;
export const BalanceIcon = styled.img`
  width: 59px;
  height: 59px;
`;
export const NavGrid = styled.nav`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
export const Nav = styled.div`
  background-color: yellow;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
export const ProgressBar = styled.div`
  width: 80%;
  height: 20px;
  background: linear-gradient(90deg, #fff176 0%, #f2891a 100%);
  margin: 0 auto 1rem;
  border-radius: 10px;
  @media (min-width: 800px) {
    max-width: 400px;
  }
`;
