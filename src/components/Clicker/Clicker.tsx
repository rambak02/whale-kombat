import { CLickerProps } from "../../types/type";
import * as S from "./Clicker.styled";

export const Clicker = ({ onClick }: CLickerProps) => {
  return (
    <>
    <S.ClickerBorder>
    <S.ClickerBlock onClick={onClick}>
      <S.ClickerImg src="/public/whale.png" />
    </S.ClickerBlock>
    </S.ClickerBorder>
    </>
  );
};
