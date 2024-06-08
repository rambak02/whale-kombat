import styled from "styled-components";

export const NavGrid = styled.nav`
  align-items: center;
  background: radial-gradient(
    149.3% 149.3% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
  border-radius: 24px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  width: 345px;
  height: 65px;
`;
export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
export const NavIcon = styled.img`
  width: 24px;
  height: 24px;
`;
export const NavText = styled.div`
  color: black;
  font-family: "Raleway";
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
`;
export const NavTextBybit = styled(NavText)`
  color: white;
`;
export const NavIconBybit = styled(NavIcon)`
  width: 44px;
  height: 15px;
`;
