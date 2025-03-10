import styled from "styled-components";

export const BoostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

export const BlockContainer = styled.div`
  background: rgba(28, 28, 29, 0.7);
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 16px;
`;
export const BlockText = styled.div`
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #fff;
`;
export const BlockButton = styled.button`
  background: linear-gradient(360deg, #de8300 0%, #ffedd1 100%);
  width: 181px;
  height: 48px;
  padding: 12px 16px 12px 16px;
  border-radius: 20px;
`;
