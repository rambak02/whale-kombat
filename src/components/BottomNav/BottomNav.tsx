import { Link } from "react-router-dom";
import * as S from "./BottomNav.styled";

export const BottomNav = () => {
  return (
    <S.NavGrid>
      <S.Nav>
        <S.NavIconBybit src="/public/BybitWhite.png" />
        <Link to="/"><S.NavTextBybit>Exchange</S.NavTextBybit></Link>
      </S.Nav>
      <S.Nav>
        <S.NavIcon src="/public/healthicons_factory-worker.png" />
        <Link to="/mine"><S.NavText>Mine</S.NavText></Link>
      </S.Nav>
      <S.Nav>
        <S.NavIcon src="/public/fa-solid_user-friends.png" />
        <S.NavText>Friends</S.NavText>
      </S.Nav>
      <S.Nav>
        <S.NavIcon src="/public/ph_coins-fill.png" />
        <S.NavText>Earn</S.NavText>
      </S.Nav>
      <S.Nav>
        <S.NavIcon src="/public/whale.png"></S.NavIcon>
        <S.NavText>Airdrop</S.NavText>
      </S.Nav>
    </S.NavGrid>
  );
};
