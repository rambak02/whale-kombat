import { useEffect, useState } from "react";
// import { Boost } from "../Boost/Boost";
import * as S from "./PRTeam.styled";
import { Img } from "react-image";

import { Dispatch, SetStateAction } from "react";
import { Boost } from "../Boost/Boost";
import phCoinsWhite from "../../assets/ph_coins-fill-white.png"
import { useOffersContext } from "../../context/hooks/useOffers";
import { Offer } from "../models/response/IOffers";

type PRTeamProps = {
  handleOpenPopup: () => void;
  onClick: Dispatch<SetStateAction<Offer | null>>;
};

export const PRTeam = ({ handleOpenPopup, onClick }: PRTeamProps) => {
  const [subTelegram, setSubTelegram] = useState<boolean>(false);
  const {offers, fetchOffers} = useOffersContext();

  useEffect(() => {
    fetchOffers("p&rteam");
  },[fetchOffers])
  return (
    <>
      {subTelegram ? (
        <S.BoostsContainer onClick={handleOpenPopup}>
          {offers?.map((offer) => (
            <Boost onClick={() => onClick(offer)} offer={offer} />
          ))}
        </S.BoostsContainer>
      ) : (
        <S.BlockContainer>
          <Img src={phCoinsWhite} />
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
