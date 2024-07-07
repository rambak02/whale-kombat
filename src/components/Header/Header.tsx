import userImg from "../../assets/whale.png";
import { useUserContext } from "../../context/hooks/useUser";
import css from './Header.module.scss';



export const Header = () => {
  const { user } = useUserContext();

  return (
    <header className={css['header']}>
      <div className={css['user']}>
        <div className={css['user__avatar-container']}>
          <img className={css['user__avatar']} src={userImg} alt="user-avatar" />
        </div>
        <div className={css['user__name']}>{" " + user?.username}</div>
      </div>
    </header>
  )
}