import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(0deg, #7ad4df 0%, #03577f 86.39%, #1c1c1d 100%);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  padding: 20px 20px 58px 20px;

`;

export const CoinImg = styled.img`
  width: 286px;
  height: 286px;
`;
export const Title = styled.div`
  font-family: "Roboto";
  font-size: 36px;
  font-weight: 700;
  line-height: 43.2px;
  text-align: center;
`;
export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px;
  position: relative;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;

  &::before {
    content: "";
    position: absolute;
    left: 11px;
    top: 42px;
    bottom: 0;
    width: 2px;
    background: #cccccc59;
    height: 156px;
  }
`;

export const Task = styled.li`
  display: flex;
  align-items: center;
  margin: 20px 0;
  &::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #ccc;
    background: white;
    margin-right: 10px;
    position: relative;
  }
  &.completed::before {
    width: 24px;
    height: 24px;
    background: #4caf50;
    background-image: url("/public/check-circle-filled-done.png");
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: center;
  }
  &:last-child::before {
    border-color: #f0d1a1;
  }
  &.completed:last-child::before {
    background: #f0d1a1;
  }
`;
