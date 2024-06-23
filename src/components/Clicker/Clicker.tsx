import { useState } from "react";
import { CLickerProps } from "../../types/type";
import * as S from "./Clicker.styled";
import { clickNumbers } from "../../interfaces/interface";

export const Clicker = ({ onClick }: CLickerProps) => {
  //цифры появляющиеся при клике
  const [clickNumbers, setClickNumbers] = useState<clickNumbers[]>([]);

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
  };

  return (
    <>
      <S.ClickerBorder>
        <S.ClickerBlock onClick={onClick}>
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
