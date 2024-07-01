import { GiftProps } from "../../types/type";
import * as S from "./Gift.styled";
import giftImg from "../../assets/gift.png";
import coinGold from "../../assets/coinGold.png"

export const Gift = ({ cash, title }: GiftProps) => {
  return (
    <S.Container>
      <S.GiftIcon src={giftImg} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>
          <S.RewardIcon src={coinGold}/>
          <S.RewardText>
            {" "}
            <S.RewardSpan> +{cash}</S.RewardSpan> для вас и вашего друга
          </S.RewardText>
        </S.Description>
      </S.Content>
    </S.Container>
  );
};
