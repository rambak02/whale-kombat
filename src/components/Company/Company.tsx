import { CompanyProps } from "../../types/type";
import * as S from "./Company.styled";

export const Company = ({ title, image, completed }: CompanyProps) => {
  return (
    <S.Container $completed={completed}>
      <S.TaskContent>
        <img src={image} />
        <S.TaskInfo>
          <S.Title $completed={completed}>{title}</S.Title>
        </S.TaskInfo>
      </S.TaskContent>
      {completed ?  <img src="/public/ic_round-done.png" /> : <img src="/public/not-done.svg" /> }
     
    </S.Container>
  );
};
