import { useState } from "react";
import { Clicker } from "../../components/Clicker/Clicker";
import * as S from "./MinePage.styled";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { MiningInfo } from "../../components/MiningInfo/MiningInfo.styled";

export const MinePage = () => {
  const [balance, setBalance] = useState<number>(0);
  return (
    <S.Container>
      <S.Content>
        <MiningInfo />
        <S.BalanceBlock>
          <S.BalanceIcon src="/public/Vector.svg"></S.BalanceIcon>
          <S.Balance> {balance}</S.Balance>
        </S.BalanceBlock>
        <S.TimeBlock>
          <S.Time>19:56:45</S.Time>
          <S.TimeBlockIcon src="/public/iconsBlack.png" />
        </S.TimeBlock>
        <S.ComboBlock>
          <S.ComboTitle>Комбо</S.ComboTitle>
          <S.ComboCashBLock>
            <S.ComboIcon src="/public/Vector.svg" />
            <S.ComboCash>+ 5 000 000</S.ComboCash>
            <S.ComboIconCheck src="/public/Subtract.png" />
          </S.ComboCashBLock>
        </S.ComboBlock>
        <S.ComboCardBlock>
          <S.ComboCard>
            <S.ComboCardContent>
                <img src="/public/iconCombo1.png"/>
                <S.ComboCardText>BisDev team</S.ComboCardText>
            </S.ComboCardContent>
          </S.ComboCard>
          <S.ComboCard>
            <S.ComboCardContent>
                <img src="/public/comboIcon.png"/>
            </S.ComboCardContent>
          </S.ComboCard>
          <S.ComboCard>
            <S.ComboCardContent>
            <img src="/public/comboIcon.png"/>
            </S.ComboCardContent>
          </S.ComboCard>
        </S.ComboCardBlock>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Clicker onClick={() => setBalance((prev) => prev + 1)} />
        <BottomNav />
      </S.Content>
    </S.Container>
  );
};
