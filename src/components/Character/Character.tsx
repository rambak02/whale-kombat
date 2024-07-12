import { characters } from "../../consts/characters";

interface CharacterProps {
    level: number
}

export const Character: React.FC<CharacterProps> = ( {level} ) => {
  const character =
    characters.find((char) => char.level === level) || characters[0];
  return <img src={character.src} alt="character" />;
};