import { Link, useLocation } from "react-router-dom";
import * as S from "./BottomNav.styled";
import { constRoutes } from "../../paths";
import { useEffect, useState } from "react";

const navItems = [
  {
    route: constRoutes.HOME,
    iconSrc: "/public/bybit.png",
    iconSelectedSrc: "/public/bybit.png",
    text: "Exchange",
    textComponent: S.NavTextBybit,
  },
  {
    route: constRoutes.MINE,
    iconSrc: "/public/healthicons_factory-worker.png",
    iconSelectedSrc: "/public/healthicons_factory-worker.svg",
    text: "Mine",
    textComponent: S.NavText,
  },
  {
    route: constRoutes.FRIENDS,
    iconSrc: "/public/fa-solid_user-friends.png",
    iconSelectedSrc: "/public/fa-solid_user-friends-wh.png",
    text: "Friends",
    textComponent: S.NavText,
  },
  {
    route: constRoutes.EARN,
    iconSrc: "/public/ph_coins-fill-bl.png",
    iconSelectedSrc: "/public/ph_coins-fill-white.png",
    text: "Earn",
    textComponent: S.NavText,
  },
  {
    route: constRoutes.AIRDROP,
    iconSrc: "/public/whale.png",
    iconSelectedSrc: "/public/whale.png",
    text: "Airdrop",
    textComponent: S.NavText,
  },
];

export const BottomNav = () => {
  const location = useLocation();
  const [isSelected, setIsSelected] = useState<string | null>(
    location.pathname
  );

  useEffect(() => {
    setIsSelected(location.pathname);
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
