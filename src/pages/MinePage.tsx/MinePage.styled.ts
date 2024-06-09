import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  width: 100vw;
  background: linear-gradient(0deg, #7ad4df 0%, #03577f 86.39%, #1c1c1d 100%);
`;

export const TimeBlock = styled.div`
  height: 20px;
  width: 93%;
  gap: 5px;
  display: flex;
  justify-content: flex-end;
`;
export const Time = styled.div`
  color: black;
  width: 43px;
  height: 8px;
  font-family: "Roboto";
  font-size: 11px;
  font-weight: 500;
  line-height: 21px;
  text-align: right;
`;
export const TimeBlockIcon = styled.img`
  height: 20px;
  width: 20px;
`;
export const Content = styled.div`
  background: linear-gradient(360deg, #de8300 0%, #ffedd1 100%);
  border-top: 3px solid rgba(229, 153, 43, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 36px 36px 0px 0px;
  justify-content: space-around;
  gap: 10px;
  padding-bottom: 30px;
`;
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
  font-size: 3rem;
  line-height: 21px;
  color: black;
`;
export const BalanceIcon = styled.img`
  width: 59px;
  height: 59px;
`;

export const ComboBlock = styled.div`
  display: flex;
  width: 93%;
  height: 42px;
  padding: 12px 16px 12px 16px;
  border-radius: 10px;
  justify-content: space-between;
  background: radial-gradient(
    149.3% 149.3% at 50% 50%,
    #7ad4df 0%,
    #03577f 100%
  );
`;
export const ComboTitle = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
`;
export const ComboCashBLock = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
export const ComboIcon = styled.img`
  width: 17px;
  height: 17px;
`;
export const ComboCash = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
`;
export const ComboIconCheck = styled.img`
  width: 19.5px;
  height: 19.5px;
`;

export const ComboCardBlock = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  height: 110px;
`;

export const ComboCard = styled.div`
  background: rgba(94, 193, 202, 1);
  border-top: 1px solid rgba(229, 153, 43, 1);
  width: 110px;
  height: 110px;
  padding: 8px;
  gap: 12px;
  border-radius: 10px;
`;

export const ComboCardContent = styled.div`
  background: rgba(60, 147, 173, 1);
  padding: 15px;
  height: 94px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ComboCardText = styled.div`
  color: black;
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
`;
