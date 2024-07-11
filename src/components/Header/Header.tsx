import { useUserContext } from "../../context/hooks/useUser";
import * as S from "./Header.styled"



export const Header = () => {
    const { user } = useUserContext();
    return (
        <S.Header>
        <S.UserBlock>
          <S.UserImg alt="user" src={user?.photo ? user.photo : ""} />
          <S.Username>{user?.username}</S.Username>
        </S.UserBlock>
      </S.Header>
    )
}