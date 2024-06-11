import { BottomNav } from "../../components/BottomNav/BottomNav";
import { Company } from "../../components/Company/Company";
import { companies } from "../../utils/companies";
import * as S from "./CryptoCompanies.styled";

export const CryptoCompaniesPage = () => {
  return (
    <S.Container>
      <S.Title>Сменить биржу</S.Title>
      {companies.map((company) => (
        <Company completed={company.completed} key={company.name} title={company.name} image={company.icon} />
      ))}
      <BottomNav/>
    </S.Container>
  );
};
