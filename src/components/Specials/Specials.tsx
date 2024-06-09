import { Card } from "../Card/Card";
import * as S from "./Specials.styled";

export const Specials = () => {
  return (
    <S.Specials>
      <S.SpecialsNav>
        <S.Nav>Мои карточки</S.Nav>
        <S.Nav>Новые карточки</S.Nav>
        <S.Nav>Упущенные карточки</S.Nav>
      </S.SpecialsNav>
      <S.Container>
        <S.Cards>
          <Card />
          <Card />
          <Card />
          <Card />
        </S.Cards>
      </S.Container>
    </S.Specials>
  );
};
