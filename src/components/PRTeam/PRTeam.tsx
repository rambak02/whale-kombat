import { useState } from "react";
// import { Boost } from "../Boost/Boost";
import * as S from "./PRTeam.styled";
import { Img } from "react-image";

import { Dispatch, SetStateAction } from "react";
import { useBoostsContext } from "../../context/hooks/useBoosts";
import { BoostsContext } from "../../interfaces/interface";
import { Boost } from "../Boost/Boost";

type Boost = {
  id: string;
  name: string;
  image: string;
  profit_per_hour: number;
  level: number;
  cost: number;
};

type PRTeamProps = {
  handleOpenPopup: () => void;
  onClick: Dispatch<SetStateAction<Boost | null>>;
};

export const PRTeam = ({ handleOpenPopup, onClick }: PRTeamProps) => {
  const [subTelegram, setSubTelegram] = useState<boolean>(false);
  const { boosts }: BoostsContext = useBoostsContext();
  return (
    <>
      {subTelegram ? (
        <S.BoostsContainer onClick ={handleOpenPopup}>
          {boosts.map((boost) => (
            <Boost onClick={() => onClick(boost)} boost={boost} />
          ))}
        </S.BoostsContainer>
      ) : (
        <S.BlockContainer>
          <Img src="../../..//ph_coins-fill-white.png" />
          <S.BlockText>
            Присоединяйтесь к нашему каналу в Telegram, чтобы разброкировать
          </S.BlockText>
          <S.BlockButton onClick={() => setSubTelegram(true)}>
            Unlock
          </S.BlockButton>
        </S.BlockContainer>
      )}
    </>
  );
};
