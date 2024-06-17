import { CompanyProps } from "../../types/type";
import * as S from "./Company.styled";
import { Img} from "react-image";

export const Company = ({ title, image, selected }: CompanyProps) => {
  return (
    <S.Container $selected={selected}>
      <S.TaskContent>
        <Img src={image} />
        <S.TaskInfo>
          <S.Title $selected={selected}>{title}</S.Title>
        </S.TaskInfo>
      </S.TaskContent>
      {selected ?  <Img src="/public/ic_round-done.png" /> : <Img src="/public/not-done.svg" /> }
     
    </S.Container>
  );
};
