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

declare interface IModalConfirmDelete {
  title: string;
  message: string;
  onOk: () => any;
}

declare interface IRouteContext {
  getRoutes: () => Promise<void>;
  getRouteById: (id: string) => Promise<ICompanies | any>;
  createRoute: (route: ICompanies) => Promise<{ error: any }>;
  updateRoute: (route: ICompanies) => Promise<{ error: any }>;
  deleteRoute: (id: string) => Promise<void>;
}
