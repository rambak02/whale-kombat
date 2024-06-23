import { GiftProps } from "../../types/type";
import * as S from "./Gift.styled";

export const Gift = ({ cash, title }: GiftProps) => {
  return (
    <S.Container>
      <S.GiftIcon src="../../..//gift.png" />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>
          <S.RewardIcon src="../../..//Vector.svg" />
          <S.RewardText>
            {" "}
            <S.RewardSpan> +{cash}</S.RewardSpan> для вас и вашего друга
          </S.RewardText>
        </S.Description>
      </S.Content>
    </S.Container>
  );
};
