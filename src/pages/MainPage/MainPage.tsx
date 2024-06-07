import { useState } from "react";
import { Clicker } from "../../components/Clicker/Clicker";
import * as S from "./MainPage.styled";

export const MainPage = () => {
  const [balance, setBalance] = useState<number>(0);
  return (
    <S.Container>
      <S.Header>
        <S.UserBlock>
          <S.UserImg alt="user" src="/public/Ellipse 2.png" />
          <S.Username>Ivan</S.Username>
        </S.UserBlock>

        <S.BybitBlock>
          <S.BybitImg src="/public/Bybit.svg" alt="bybit" />
          <S.BybitText>Bybit</S.BybitText>
        </S.BybitBlock>
      </S.Header>
      <S.Content>
        <S.Balance>$ {balance}</S.Balance>
        <S.ProgressBar></S.ProgressBar>
        <Clicker onClick={() => setBalance((prev) => prev + 1)} />
      </S.Content>
      <S.NavGrid>
        <S.Nav></S.Nav>
        <S.Nav></S.Nav>
        <S.Nav></S.Nav>
        <S.Nav></S.Nav>
        <S.Nav></S.Nav>
      </S.NavGrid>
    </S.Container>
  );
};
