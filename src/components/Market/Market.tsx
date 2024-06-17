import { useBoostsContext } from "../../context/hooks/useBoosts";
import { BoostsContext } from "../../interfaces/interface";
import { Boost } from "../Boost/Boost";
import * as S from "./Market.styled";

export const Market = () => {
  const { boosts }: BoostsContext = useBoostsContext();
  return (
    <S.BoostsContainer>
      {boosts.map((boost) => (
        <Boost
          key={boost.id}
          name={boost.name}
          avatar={boost.avatar}
          profit={boost.profit}
          level={boost.level}
          cost={boost.cost}
        />
      ))}
    </S.BoostsContainer>
  );
};
