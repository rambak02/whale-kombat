import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;
export const Title = styled.h1`
  font-family: "Poppins";
  font-weight: 300;
  line-height: 30px;
  margin-top: 40px;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ffd700;
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
`
export const Nav = styled.div`
  background-color: yellow;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`
export const ProgressBar = styled.div`
  width: 80%;
  height: 20px;
  background: linear-gradient(90deg, #FF1616 0%, #C1255F 30.14%, #992F8E 49.61%, #2D60E2 74.41%, #83C72D 99.22%);
  border: 2px solid gray;
  margin: 0 auto 1rem;
  border-radius: 10px;
  @media (min-width: 800px) {
    max-width: 400px;
  }
`;
