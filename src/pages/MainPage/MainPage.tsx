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
        <S.MiningInfo>
          <S.ProfitOneClick>
            <S.ProfitOneClickTitle>Прибыль за тап</S.ProfitOneClickTitle>
            <S.ProfitOneClickContent>
              <img src="/public/Vector.svg"></img>
              <S.ProfitOneClickCount>+2</S.ProfitOneClickCount>
            </S.ProfitOneClickContent>
          </S.ProfitOneClick>
          <S.CoinsBeforeUp>
            <S.CoinsUpTitle>Монет для апа</S.CoinsUpTitle>
            <S.CoinsUpCount>10M</S.CoinsUpCount>
          </S.CoinsBeforeUp>
          <S.ProfitPerHour>
            <S.ProfitPerHourTitle>Прибыль в час</S.ProfitPerHourTitle>
            <S.ProfitPerHourContent>
            <img src="/public/Vector.svg" />
            <S.ProfitOneClickCount>+128,35K</S.ProfitOneClickCount>
            <img src="/public/icons.svg"/>
            </S.ProfitPerHourContent>
          </S.ProfitPerHour>
        </S.MiningInfo>
        <S.BalanceBlock>
          <S.BalanceIcon src="/public/Vector.svg"></S.BalanceIcon>
        <S.Balance> {balance}</S.Balance>
        </S.BalanceBlock>
        <S.ProgressBar></S.ProgressBar>
        <Clicker onClick={() => setBalance((prev) => prev + 1)} />
        <S.NavGrid>
          <S.Nav></S.Nav>
          <S.Nav></S.Nav>
          <S.Nav></S.Nav>
          <S.Nav></S.Nav>
          <S.Nav></S.Nav>
        </S.NavGrid>
      </S.Content>
    </S.Container>
  );
};
