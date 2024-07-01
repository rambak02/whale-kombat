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
import { useUserContext } from "../../context/hooks/useUser";
import { PopMine } from "../../components/popups/PopMine/PopMine";
import { Boost } from "../../interfaces/interface";
import coinGold from "../../assets/coinGold.png"

export const MinePage: React.FC = () => {
  const STATUS_MARKET = "Markets";
  const STATUS_PRTEAM = "PR&Team";
  const STATUS_LEGAL = "Legal";
  const STATUS_SPECIALS = "Specials";
  const [status, setStatus] = useState(STATUS_MARKET);

  const { handleOpenPopup, isPopupOpen, currentPopup } = usePopupContext();

  const [currentPopMine, setCurrentPopMine] = useState<Boost | null>(null);

  const { user } = useUserContext();
  return (
    <S.Container>
      <S.Content>
        <MiningInfo onClick={() => handleOpenPopup("boost")} />
        <S.BalanceBlock>
          <S.BalanceIcon src={coinGold}></S.BalanceIcon>
          <S.Balance>{user?.coins}</S.Balance>
        </S.BalanceBlock>
        <NavMine setStatus={setStatus} />
        {status === STATUS_MARKET && (
          <Market
            onClick={setCurrentPopMine}
            handleOpenPopup={() => handleOpenPopup("mine")}
          />
        )}
        {status === STATUS_PRTEAM && (
          <PRTeam
            onClick={setCurrentPopMine}
            handleOpenPopup={() => handleOpenPopup("mine")}
          />
        )}
        {status === STATUS_LEGAL && (
          <Legal
            onClick={setCurrentPopMine}
            handleOpenPopup={() => handleOpenPopup("mine")}
          />
        )}
        {status === STATUS_SPECIALS && (
          <Specials
            onClick={setCurrentPopMine}
            handleOpenPopup={() => handleOpenPopup("mine")}
          />
        )}
        <Clicker />
        <BottomNav />
      </S.Content>
      {isPopupOpen && currentPopup === "boost" && <PopBoost />}
      {isPopupOpen && currentPopup === "mine" && (
        <PopMine boost={currentPopMine} />
      )}
    </S.Container>
  );
};
