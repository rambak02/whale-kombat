import { CompanyProps } from "../../types/type";
import * as S from "./Company.styled";

export const Company = ({ title, image, selected }: CompanyProps) => {
  return (
    <S.Container $selected={selected}>
      <S.TaskContent>
        <img src={image} />
        <S.TaskInfo>
          <S.Title $selected={selected}>{title}</S.Title>
        </S.TaskInfo>
      </S.TaskContent>
      {selected ?  <img src="/public/ic_round-done.png" /> : <img src="/public/not-done.svg" /> }
     
    </S.Container>
  );
};
