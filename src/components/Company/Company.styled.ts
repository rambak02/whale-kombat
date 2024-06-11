import styled from "styled-components";
import { CompanyStyledProps } from "../../interfaces/interface";

export const Container = styled.div<CompanyStyledProps>`
  width: 93%;
  height: 65px;
  padding: 16px;
  background: radial-gradient(
    149.3% 149.3% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
  background: ${(props) =>
    props.$selected
      ? "radial-gradient(170.59% 170.59% at 50% 50%, #FFEDD1 0%, #DE8300 100%)"
      : "radial-gradient(149.3% 149.3% at 50% 50%, #7AD4DF 0%, #03577F 100%)"};
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

export const Title = styled.div<CompanyStyledProps>`
font-family: "Roboto";
font-size: 20px;
font-weight: 700;
line-height: 20px;
text-align: left;
color: ${(props) =>
    props.$selected
      ? "black"
      : "white"};
`;
