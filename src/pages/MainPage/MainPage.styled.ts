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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Balance = styled.div`
  font-family: "Poppins";
  font-weight: 700;
  text-align: center;
  font-size: 2rem;
  color: #ffd700;
  margin-bottom: 1rem;
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
