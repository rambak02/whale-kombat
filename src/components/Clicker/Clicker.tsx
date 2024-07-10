import { useEffect, useRef, useState } from "react";
import * as S from "./Clicker.styled";
import { postMiningTaps } from "../../api";
import { throttle } from "lodash";
import { useUserContext } from "../../context/hooks/useUser";
import clickerImg from "../../assets/whale.png";
import { addFloatingNumber } from './utils/addFloatingNumber';

export const Clicker = () => {
  const {user, updateCoins, minusEnergy, energy} = useUserContext()
  const [accumulatedCoins, setAccumulatedCoins] = useState<number>(0);
  const [accumulatedEnergy, setAccumulatedEnergy] = useState<number>(0);
 
  const blockRef = useRef<HTMLDivElement>(null)

  const handleClick = (event: React.TouchEvent<HTMLDivElement>) => {
    [...event.changedTouches as unknown as Touch[]].forEach(touch => {
      addFloatingNumber({
        left: touch.pageX,
        top: touch.pageY,
        value: energy ? `+${user?.multitap_lvl}` : '+0',
        target: blockRef.current,
      });
    });

    if (user) {
      const formulaTap = user.multitap_lvl;
      minusEnergy()
      updateCoins(user.coins + formulaTap);
      setAccumulatedCoins((prevCoins) => prevCoins + formulaTap);
      setAccumulatedEnergy((prevEnergy) => prevEnergy + formulaTap);
    }
  };

  const throttledPostMiningTaps = 
    throttle(async () => {
      if (accumulatedCoins > 0 || accumulatedEnergy > 0) {
        await postMiningTaps(energy, accumulatedCoins);
        setAccumulatedCoins(0);
        setAccumulatedEnergy(0);
      }
    }, 500);

  useEffect(() => {
    const interval = setInterval(() => {
      throttledPostMiningTaps();
    }, 300);

    return () => clearInterval(interval);
  }, [throttledPostMiningTaps]);
  return (
    <>
      <S.ClickerBorder onTouchStart={ e => handleClick(e)}>
        <S.ClickerBlock ref={blockRef}>
          <S.ClickerImg src={clickerImg} />
        </S.ClickerBlock>
      </S.ClickerBorder>
    </>
  );
};
