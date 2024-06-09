import { useRef, useState } from "react";
import * as S from "./NavMine.styled";
import { NavMineProps } from "../../interfaces/interface";

export const NavMine: React.FC<NavMineProps> = ({ setStatus }) => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(0);
  const menuItems = ["Markets", "PR&Team", "Legal", "Specials"];

  //Для прокрутки пользователя к определенной части страницы
  const sectionMineBlock = useRef<HTMLDivElement>(null);

  //Пользователя направляет на определенную часть страницы

  const scrollToSection = (section: React.RefObject<HTMLDivElement>) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMenuItemClick = (item: string, index: number) => {
    setStatus(item);
    setFocusedIndex(index);
  };

  return (
    <>
      <div ref={sectionMineBlock}></div>
      <S.NavMineBlock>
        {menuItems.map((item, index) => (
          <S.NavMine
            onClick={() => scrollToSection(sectionMineBlock)}
            $focus={focusedIndex === index}
            key={index}
          >
            <S.NavMineText
              $focus={focusedIndex === index}
              onClick={() => handleMenuItemClick(item, index)}
            >
              {item}
            </S.NavMineText>
          </S.NavMine>
        ))}
      </S.NavMineBlock>
    </>
  );
};
