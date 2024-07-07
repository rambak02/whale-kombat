import coinGold from "../../assets/coinGold.png";
import { Clicker } from "../../components/Clicker/Clicker";
import { Energy } from "../../components/Energy/Energy";
import { Header } from "../../components/Header/Header";
import { MiningInfo } from "../../components/MiningInfo/MiningInfo";
import { PopBoost } from "../../components/popups/PopBoost/PopBoost";
import { usePopupContext } from "../../context/hooks/usePopup";
import { useUserContext } from "../../context/hooks/useUser";
import css from './MainPage.module.scss';

export const MainPage = () => {
  const { handleOpenPopup, isPopupOpen, currentPopup } = usePopupContext();
  const { user } = useUserContext();

  return (
    <div className={css['main-page']}>
      <Header />
      <div className={css['main-page__content']}>
        <MiningInfo onClick={() => handleOpenPopup("boost")} />
        <div className={css['balance']}>
          <img className={css['balance__icon']} src={coinGold} />
          <div className={css['balance__amount']}>{user?.coins}</div>
        </div>
        <div className={css['progress']}>
          <div className={css['level']}>
            <div>Название уровня &gt;</div>
            <div className={css['level__text']}>
              Level <span className={css['level__value']}>{user?.level}/10</span>
            </div>
          </div>
          <div className={css['progress__bar']}></div>
        </div>
        <Clicker />
        <Energy />
      </div>
      {isPopupOpen && currentPopup === "boost" && <PopBoost />}
    </div>
  );
};
