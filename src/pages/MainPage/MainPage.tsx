import { Clicker } from "../../components/Clicker/Clicker";
import * as S from "./MainPage.styled";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { MiningInfo } from "../../components/MiningInfo/MiningInfo";
import { constRoutes } from "../../paths";
import { Link } from "react-router-dom";
import { PopBoost } from "../../components/popups/PopBoost/PopBoost";
import { usePopupContext } from "../../context/hooks/usePopup";
import { authUser } from "../../api";
import { useUserContext } from "../../context/hooks/useUser";

/** Исключить. Взамен предлагаю использовать типы, описанные в готовом пакете.
 *  Например https://www.npmjs.com/package/@types/telegram-web-app
 */
declare global {
  interface Window {
    Telegram: {
      WebApp: {
        ready(): unknown;
        initData: string;
        initDataUnsafe: WebAppInitData;
      };
    };
  }
}

interface WebAppInitData {
  query_id: string;
  user: WebAppUser;
  auth_date: number;
  hash: string;
}

interface WebAppUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  photo_url?: string;
}

export const MainPage = () => {
  const tg = window.Telegram.WebApp;

  const { handleOpenPopup, isPopupOpen, currentPopup } = usePopupContext();
  const { user } = useUserContext()

  const initData = tg.initData;
  authUser(initData);

  /** Header и Content вынести в отдельные компоненты. */
  /**  + вся консоль красная, обсудим устно.
   *   + вместо {">"} используй &gt;
   *   + также завтра будет пара вопросов по Popup
   */
  return (
    <S.Container>
      <S.Header>
        <S.UserBlock>
          <S.UserImg alt="user" src="../../../public/whale.png" />
          <S.Username>
            {tg.initDataUnsafe?.user?.first_name}
          </S.Username>
        </S.UserBlock>

        <Link to={constRoutes.CRYPTOCOMPANIES}>
          <S.BybitBlock>
            <S.BybitImg src="../../..//Bybit.svg" alt="bybit" />
            <S.BybitText>Bybit</S.BybitText>
          </S.BybitBlock>
        </Link>
      </S.Header>
      <S.Content>
        <MiningInfo onClick={() => handleOpenPopup("boost")} />
        <S.BalanceBlock>
          <S.BalanceIcon src="../../..//Vector.svg"></S.BalanceIcon>
          <S.Balance> {user?.coins}</S.Balance>
        </S.BalanceBlock>
        <S.ProgressBarBlock>
          <S.LevelBlock>
            <S.LevelTitle>Название уровня &gt;</S.LevelTitle>
            <S.Level>
              Level <S.LevelNumber>{user?.level}/10</S.LevelNumber>
            </S.Level>
          </S.LevelBlock>
          <S.ProgressBar></S.ProgressBar>
        </S.ProgressBarBlock>
        <Clicker />
        <BottomNav />
      </S.Content>
      {isPopupOpen && currentPopup === "boost" && <PopBoost />}
    </S.Container>
  );
};
