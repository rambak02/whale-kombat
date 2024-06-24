import { useCallback, useEffect, useState } from "react";
import * as S from "./Clicker.styled";
import { clickNumbers } from "../../interfaces/interface";
import { postMiningTaps } from "../../api";
import { throttle } from "lodash";
import { useUserContext } from "../../context/hooks/useUser";

export const Clicker = () => {
  //цифры появляющиеся при клике
  const [clickNumbers, setClickNumbers] = useState<clickNumbers[]>([]);
  const [accumulatedCoins, setAccumulatedCoins] = useState<number>(0);
  const [accumulatedEnergy, setAccumulatedEnergy] = useState<number>(0);

  const { user } = useUserContext();

  //элемент появляется в том месте, где был совершен клик
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = event;
    //расчет координат относительно всей страницы
    const rect = document.body.getBoundingClientRect();
    const absoluteX = clientX + rect.left;
    const absoluteY = clientY + rect.top;

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
      setAccumulatedCoins((prevCoins) => prevCoins + (1 + user?.multitap_lvl));
      setAccumulatedEnergy(
        (prevEnergy) => prevEnergy + (1 + user?.multitap_lvl)
      );
    }
  };

  const throttledPostMiningTaps = useCallback(
    throttle(async () => {
      if (accumulatedCoins > 0 || accumulatedEnergy > 0) {
        await postMiningTaps(accumulatedEnergy, accumulatedCoins);
        setAccumulatedCoins(0);
        setAccumulatedEnergy(0);
      }
    }, 5000),
    [accumulatedCoins, accumulatedEnergy]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      throttledPostMiningTaps();
    }, 5000);

    return () => clearInterval(interval);
  }, [throttledPostMiningTaps]);
  return (
    <>
      <S.ClickerBorder>
        <S.ClickerBlock >
          <S.ClickerImg
            src="../../..../../..//whale.png"
            onClick={handleClick}
          />
          {clickNumbers.map((click) => (
            <S.Number key={click.id} $left={click.x} $top={click.y}>
              +1
            </S.Number>
          ))}
        </S.ClickerBlock>
      </S.ClickerBorder>
    </>
  );
};
