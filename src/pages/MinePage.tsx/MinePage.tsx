import { useState } from "react";
import { Clicker } from "../../components/Clicker/Clicker";
import * as S from "./MinePage.styled";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { MiningInfo } from "../../components/MiningInfo/MiningInfo.styled";
import { Boost } from "../../components/Boosts/Boosts";

export const MinePage: React.FC = () => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const menuItems = ["Markets", "PR&Team", "Legal", "Specials"];
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
              <img src="/public/iconCombo1.png" />
              <S.ComboCardText>BisDev team</S.ComboCardText>
            </S.ComboCardContent>
          </S.ComboCard>
          <S.ComboCard>
            <S.ComboCardContent>
              <img src="/public/comboIcon.png" />
            </S.ComboCardContent>
          </S.ComboCard>
          <S.ComboCard>
            <S.ComboCardContent>
              <img src="/public/comboIcon.png" />
            </S.ComboCardContent>
          </S.ComboCard>
        </S.ComboCardBlock>
        <S.NavMineBlock>
          {menuItems.map((item, index) => (
            <S.NavMine $focus={focusedIndex === index} key={index}>
              <S.NavMineText
                $focus={focusedIndex === index}
                onClick={() => setFocusedIndex(index)}
              >
                {item}
              </S.NavMineText>
            </S.NavMine>
          ))}
        </S.NavMineBlock>
        <S.BoostsContainer>
          <Boost/>
          <Boost/>
          <Boost/>
          <Boost/>
          <Boost/>
          <Boost/>
          <Boost/>
          <Boost/>
        </S.BoostsContainer>
        <Clicker onClick={() => setBalance((prev) => prev + 1)} />
        <BottomNav />
      </S.Content>
    </S.Container>
  );
};
