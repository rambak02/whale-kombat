import { Link } from "react-router-dom";
import * as S from "./BottomNav.styled";
import { constRoutes } from "../../paths";

export const BottomNav = () => {
  return (
    <S.NavGrid>
      <S.Nav>
        <Link to={constRoutes.HOME}>
          <S.NavIconBybit src="/public/BybitWhite.png" />

          <S.NavTextBybit>Exchange</S.NavTextBybit>
        </Link>
      </S.Nav>
      <S.Nav>
        <Link to={constRoutes.MINE}>
          <S.NavIcon src="/public/healthicons_factory-worker.png" />

          <S.NavText>Mine</S.NavText>
        </Link>
      </S.Nav>
      <S.Nav>
        <Link to={constRoutes.FRIENDS}>
          <S.NavIcon src="/public/fa-solid_user-friends.png" />

          <S.NavText>Friends</S.NavText>
        </Link>
      </S.Nav>
      <S.Nav>
        <Link to={constRoutes.EARN}>
          <S.NavIcon src="/public/ph_coins-fill.png" />

          <S.NavText>Earn</S.NavText>
        </Link>
      </S.Nav>
      <S.Nav>
        <Link to={constRoutes.AIRDROP}>
          <S.NavIcon src="/public/whale.png"></S.NavIcon>

          <S.NavText>Airdrop</S.NavText>
        </Link>
      </S.Nav>
    </S.NavGrid>
  );
};
