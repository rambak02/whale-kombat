import { useState } from "react";
import { Clicker } from "../../components/Clicker/Clicker";
import * as S from "./MinePage.styled";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { MiningInfo } from "../../components/MiningInfo/MiningInfo";
import { NavMine } from "../../components/NavMine/NavMine";
import { Market } from "../../components/Market/Market";
import { PRTeam } from "../../components/PRTeam/PRTeam";
import { Legal } from "../../components/Legal/Legal";
import { Specials } from "../../components/Specials/Specials";
import { usePopupContext } from "../../context/hooks/usePopup";
import { PopBoost } from "../../components/popups/PopBoost/PopBoost";
import { Img } from "react-image";

export const MinePage: React.FC = () => {
  const STATUS_MARKET = "Markets";
  const STATUS_PRTEAM = "PR&Team";
  const STATUS_LEGAL = "Legal";
  const STATUS_SPECIALS = "Specials";
  const [status, setStatus] = useState(STATUS_MARKET);
  const [balance, setBalance] = useState<number>(0);

  const { handleOpenPopup, isPopupOpen, currentPopup } = usePopupContext();

  return (
    <S.Container>
      <S.Content>
        <MiningInfo onClick={() => handleOpenPopup("boost")} />
        <S.BalanceBlock>
          <S.BalanceIcon src="../../..//Vector.svg"></S.BalanceIcon>
          <S.Balance> {balance}</S.Balance>
        </S.BalanceBlock>
        <S.TimeBlock>
          <S.Time>19:56:45</S.Time>
          <S.TimeBlockIcon src="../../..//iconsBlack.png" />
        </S.TimeBlock>
        <S.ComboBlock>
          <S.ComboTitle>Комбо</S.ComboTitle>
          <S.ComboCashBLock>
            <S.ComboIcon src="../../..//Vector.svg" />
            <S.ComboCash>+ 5 000 000</S.ComboCash>
            <S.ComboIconCheck src="../../..//Subtract.png" />
          </S.ComboCashBLock>
        </S.ComboBlock>
        <S.ComboCardBlock>
          <S.ComboCard>
            <S.ComboCardContent>
              <Img src="../../..//iconCombo1.png" />
              <S.ComboCardText>BisDev team</S.ComboCardText>
            </S.ComboCardContent>
          </S.ComboCard>
          <S.ComboCard>
            <S.ComboCardContent>
              <Img src="../../..//comboIcon.png" />
            </S.ComboCardContent>
          </S.ComboCard>
          <S.ComboCard>
            <S.ComboCardContent>
              <Img src="../../..//comboIcon.png" />
            </S.ComboCardContent>
          </S.ComboCard>
        </S.ComboCardBlock>
        <NavMine setStatus={setStatus} />
        {status === STATUS_MARKET && <Market />}
        {status === STATUS_PRTEAM && <PRTeam />}
        {status === STATUS_LEGAL && <Legal />}
        {status === STATUS_SPECIALS && <Specials />}
        <Clicker onClick={() => setBalance((prev) => prev + 1)} />
        <BottomNav />
      </S.Content>
      {isPopupOpen && currentPopup === "boost" && <PopBoost />}
    </S.Container>
  );
};
