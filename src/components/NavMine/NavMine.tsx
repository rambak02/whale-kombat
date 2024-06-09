import { useRef, useState } from "react";
import * as S from "./NavMine.styled";
import { NavMineProps } from "../../interfaces/interface";

export const NavMine: React.FC<NavMineProps> = ({ setStatus }) => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0);
  const menuItems = ["Markets", "PR&Team", "Legal", "Specials"];

  //Для прокрутки пользователя к определенной части страницы
  const sectionBoosts = useRef<HTMLDivElement>(null);

  //Пользователя направляет на определенную часть страницы

  const scrollToSection = (section: React.RefObject<HTMLDivElement>) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMenuItemClick = (item: string) => {
    scrollToSection(sectionBoosts);
    setStatus(item);
  };

  return (
    <>
      <div ref={sectionBoosts}></div>
      <S.NavMineBlock ref={sectionBoosts}>
        {menuItems.map((item, index) => (
          <S.NavMine
            onClick={() => handleMenuItemClick(item)}
            $focus={focusedIndex === index}
            key={index}
          >
            <S.NavMineText
              $focus={focusedIndex === index}
              onClick={() => setFocusedIndex(index)}
            >
              {item}
            </S.NavMineText>
          </S.NavMine>
        ))}
      </S.NavMineBlock>
    </>
  );
};
