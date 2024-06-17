import { useState } from "react";
import { Boost } from "../Boost/Boost";
import * as S from "./PRTeam.styled";

export const PRTeam = () => {
  const [subTelegram, setSubTelegram] = useState<boolean>(false);

  return (
    <>
      {subTelegram ? (
        <S.BoostsContainer>
          <Boost />
          <Boost />
          <Boost />
          <Boost />
          <Boost />
          <Boost />
          <Boost />
          <Boost />
        </S.BoostsContainer>
      ) : (
        <S.BlockContainer>
            <mg src="/public/ph_coins-fill-white.png" />
            <S.BlockText>Присоединяйтесь к нашему каналу
            в Telegram, чтобы разброкировать</S.BlockText>
            <S.BlockButton onClick={() => setSubTelegram(true)}>Unlock</S.BlockButton>
        </S.BlockContainer>
      )}
    </>
  );
};
