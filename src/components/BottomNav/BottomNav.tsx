import { Link } from "react-router-dom";
import * as S from "./BottomNav.styled";
import { constRoutes } from "../../paths";

export const BottomNav = () => {
  return (
    <S.NavGrid>
       <Link to={constRoutes.HOME}>
      <S.Nav>
          <S.NavIconBybit src="/public/BybitWhite.png" />
          <S.NavTextBybit>Exchange</S.NavTextBybit>
      </S.Nav>
      </Link>
      <Link to={constRoutes.MINE}>
      <S.Nav>
          <S.NavIcon src="/public/healthicons_factory-worker.png" />
          <S.NavText>Mine</S.NavText>
      </S.Nav>
      </Link>
      <Link to={constRoutes.FRIENDS}>
      <S.Nav>
          <S.NavIcon src="/public/fa-solid_user-friends.png" />
          <S.NavText>Friends</S.NavText>
      </S.Nav>
      </Link>
      <Link to={constRoutes.EARN}>
      <S.Nav>
          <S.NavIcon src="/public/ph_coins-fill.png" />
          <S.NavText>Earn</S.NavText>
      </S.Nav>
      </Link>
      <Link to={constRoutes.AIRDROP}>
      <S.Nav>
          <S.NavIcon src="/public/whale.png"></S.NavIcon>
          <S.NavText>Airdrop</S.NavText>
      </S.Nav>
      </Link>
    </S.NavGrid>
  );
};
