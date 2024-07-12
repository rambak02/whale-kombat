import whaleImg from "../assets/characters/whale.png";
import sharkImg from "../assets/characters/shark.png";
import clownImg from "../assets/characters/clown.png";
import crabImg from "../assets/characters/crab.png";
import dolphinImg from "../assets/characters/dolphin.png";
import hedgehogImg from "../assets/characters/hedgehog.png";
import octopusImg from "../assets/characters/octopus.png";
import seahorseImg from "../assets/characters/seahorse.png";
import shrimpImg from "../assets/characters/shrimp.png";
import turtleImg from "../assets/characters/turtle.png";

interface Character {
    level: number,
    src: string
}

export const characters: Character[] = [
  { level: 1, src: shrimpImg },
  { level: 2, src: seahorseImg },
  { level: 3, src: crabImg },
  { level: 4, src: clownImg },
  { level: 5, src: hedgehogImg },
  { level: 6, src: turtleImg },
  { level: 7, src: octopusImg },
  { level: 8, src: dolphinImg },
  { level: 9, src: sharkImg },
  { level: 10, src: whaleImg }
];