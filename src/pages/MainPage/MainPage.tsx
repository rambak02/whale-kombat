import { useState } from "react";
import { Clicker } from "../../components/Clicker/Clicker";
import * as S from "./MainPage.styled";

export const MainPage = () => {
  const [balance, setBalance] = useState<number>(0);
  return (
    <S.Container>
      <S.Title>Whale Kombat</S.Title>
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
