declare interface ICompanies {
  id: string;
  name: string;
  cnpj: number;
  demand: number;
  billing: string;
  about: string;
  created_at: Date;
  updated_at: Date;
}

declare interface INewCompany {
  name: string;
  cnpj: number;
  demand: number;
  billing: string;
  about: string;
}

declare interface Props {
  toggleVisibility(): void;
}

declare interface IParamsProps {
  id: string;
}
