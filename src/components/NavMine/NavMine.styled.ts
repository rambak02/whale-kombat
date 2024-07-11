import styled, { keyframes } from "styled-components";
import { NavMineTextProps } from "../../interfaces/interface";

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

export const NavMineContainer = styled.div`
  width: 1px;
  height: 1px;
`;
export const NavMineBlock = styled.div`
  display: flex;
  width: 100%;
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
  animation: ${left} 0.2s;
`;
export const NavMine = styled.div<NavMineTextProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
