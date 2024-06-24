import { Link, useLocation } from "react-router-dom";
import * as S from "./BottomNav.styled";
import { constRoutes } from "../../paths";
import { useEffect, useState } from "react";
import { preloadImage } from "./helpers/helper";

const navItems = [
  {
    route: constRoutes.HOME,
    iconSrc: "../../..//bybit.png",
    iconSelectedSrc: "../../..//bybit.png",
    text: "Exchange",
    textComponent: S.NavTextBybit,
  },
  {
    route: constRoutes.MINE,
    iconSrc: "../../..//healthicons_factory-worker.png",
    iconSelectedSrc: "../../..//healthicons_factory-worker.svg",
    text: "Mine",
    textComponent: S.NavText,
  },
  {
    route: constRoutes.FRIENDS,
    iconSrc: "../../..//fa-solid_user-friends.png",
    iconSelectedSrc: "../../..//fa-solid_user-friends-wh.png",
    text: "Friends",
    textComponent: S.NavText,
  },
  {
    route: constRoutes.EARN,
    iconSrc: "../../..//ph_coins-fill-bl.png",
    iconSelectedSrc: "../../..//ph_coins-fill-white.png",
    text: "Earn",
    textComponent: S.NavText,
  },
  {
    route: constRoutes.AIRDROP,
    iconSrc: "../../..//whale.png",
    iconSelectedSrc: "../../..//whale.png",
    text: "Airdrop",
    textComponent: S.NavText,
  },
];

const preloadImages = () => {
  const promises = navItems.map(item => preloadImage(item.iconSrc).then(() => preloadImage(item.iconSelectedSrc)));
  return Promise.all(promises);
};

export const BottomNav = () => {
  const location = useLocation();
  const [isSelected, setIsSelected] = useState<string | null>(
    location.pathname
  );

  useEffect(() => {
    setIsSelected(location.pathname);

    preloadImages();
  }, [location.pathname]);

  return (
    <S.NavGrid>
      {navItems.map((item) => {
        return (
          <Link to={item.route} key={item.route}>
            <S.Nav onClick={() => setIsSelected(item.route)}>
              <S.NavIcon
                src={
                  isSelected === item.route
                    ? item.iconSelectedSrc
                    : item.iconSrc
                }
              />
              <item.textComponent $isSelected={isSelected === item.route}>
                {item.text}
              </item.textComponent>
            </S.Nav>
          </Link>
        );
      })}
    </S.NavGrid>
  );
};
