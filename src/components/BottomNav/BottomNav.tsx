import { Link } from "react-router-dom";
import * as S from "./BottomNav.styled";
import { constRoutes } from "../../paths";

export const BottomNav = () => {
  return (
    <S.NavGrid>
      <S.Nav>
        <S.NavIconBybit src="/public/BybitWhite.png" />
        <Link to={constRoutes.HOME}>
          <S.NavTextBybit>Exchange</S.NavTextBybit>
        </Link>
      </S.Nav>
      <S.Nav>
        <S.NavIcon src="/public/healthicons_factory-worker.png" />
        <Link to={constRoutes.MINE}>
          <S.NavText>Mine</S.NavText>
        </Link>
      </S.Nav>
      <S.Nav>
        <S.NavIcon src="/public/fa-solid_user-friends.png" />
        <Link to={constRoutes.FRIENDS}>
          <S.NavText>Friends</S.NavText>
        </Link>
      </S.Nav>
      <S.Nav>
        <S.NavIcon src="/public/ph_coins-fill.png" />
        <Link to={constRoutes.EARN}> <S.NavText>Earn</S.NavText></Link>
      </S.Nav>
      <S.Nav>
        <S.NavIcon src="/public/whale.png"></S.NavIcon>
        <S.NavText>Airdrop</S.NavText>
      </S.Nav>
    </S.NavGrid>
  );
};
