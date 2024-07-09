import { useEffect, useState } from "react";
import * as S from "./Clicker.styled";
import { clickNumbers } from "../../interfaces/interface";
import { postMiningTaps } from "../../api";
import { throttle } from "lodash";
import { useUserContext } from "../../context/hooks/useUser";
import { Character } from "../Character/Character";

export const Clicker = () => {
  const {user, updateCoins, minusEnergy, energy} = useUserContext()
  //цифры появляющиеся при клике
  const [clickNumbers, setClickNumbers] = useState<clickNumbers[]>([]);
  const [accumulatedCoins, setAccumulatedCoins] = useState<number>(0);
  const [accumulatedEnergy, setAccumulatedEnergy] = useState<number>(0);
 
  //элемент появляется в том месте, где был совершен клик
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = event;
    //расчет координат относительно всей страницы
    const absoluteX = clientX + window.scrollX;
    const absoluteY = clientY + window.scrollY;

    const newClick = {
      id: Date.now(),
      x: absoluteX,
      y: absoluteY,
    };

    setClickNumbers((prevClicks) => [...prevClicks, newClick]);

    const timeOut = setTimeout(() => {
      setClickNumbers((prevClicks) =>
        prevClicks.filter((click) => click.id !== newClick.id)
      );
      return () => clearTimeout(timeOut);
    }, 900);
    if (user) {
      const formulaTap = user.multitap_lvl;
      minusEnergy()
      updateCoins(user.coins + formulaTap);
      setAccumulatedCoins((prevCoins) => prevCoins + formulaTap);
      setAccumulatedEnergy((prevEnergy) => {
      return prevEnergy + formulaTap 
       
      }
    
    );
     
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
      <S.ClickerBorder onClick={handleClick}>
        <S.ClickerBlock>
          <S.ImgBlock>
          <Character level={user?.level || 1}/>
          {clickNumbers.map((click) => (
            <S.Number key={click.id} $left={click.x} $top={click.y}>
              {energy ? `+${user?.multitap_lvl}` : "+0" }
            </S.Number>
          ))}
          </S.ImgBlock>
        </S.ClickerBlock>
      </S.ClickerBorder>
    </>
  );
};
