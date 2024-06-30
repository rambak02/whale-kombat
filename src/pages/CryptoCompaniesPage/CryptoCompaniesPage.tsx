import { useState } from "react";
import { BottomNav } from "../../components/BottomNav/BottomNav";
import { Company } from "../../components/Company/Company";
import { initialCompanies } from "../../utils/companies";
import * as S from "./CryptoCompanies.styled";

export const CryptoCompaniesPage = () => {
  const [companies, setCompanies] = useState(initialCompanies);
 
 const handleCompanySelect = (selectedCompanyName : string) => {
   setCompanies(companies.map(company => ({
    ...company, 
    selected: company.name === selectedCompanyName,
   })));
 }

  return (
    <S.Container>
      <S.Title>Сменить биржу</S.Title>
      {companies.map((company) => (
        <Company selected={company.selected} key={company.name} title={company.name} image={company.icon} onSelect={()=> handleCompanySelect(company.name)} />
      ))}
      <BottomNav/>
    </S.Container>
  );
};
