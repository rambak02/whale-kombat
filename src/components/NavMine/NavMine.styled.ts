import styled from "styled-components";
import { NavMineTextProps } from "../../interfaces/interface";

export const NavMineContainer = styled.div`
width: 1px;
height: 1px;
`
export const NavMineBlock = styled.div`
  display: flex;
  width: 93%;
  height: 42px;
  padding: 12px 16px 12px 16px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  background: radial-gradient(
    149.3% 149.3% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
`;
export const NavMine = styled.div<NavMineTextProps>`
  background: ${(props) => (props.$focus ? "#FFEBCD" : "")};
  padding: 5px;
  border-radius: 10px;
`;
export const NavMineText = styled.div<NavMineTextProps>`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: ${(props) => (props.$focus ? "black" : "white")};
`;
