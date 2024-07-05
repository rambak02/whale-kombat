import { useUserContext } from "../../context/hooks/useUser";
import * as S from "./Header.styled"
import userImg from "../../assets/whale.png";



export const Header = () => {
    const { user } = useUserContext();
    return (
        <S.Header>
        <S.UserBlock>
          <S.UserImg alt="user" src={userImg} />
          <S.Username>{" " + user?.username}</S.Username>
        </S.UserBlock>
      </S.Header>
    )
}