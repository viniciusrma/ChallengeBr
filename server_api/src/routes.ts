import { Router, Request, Response } from 'express';

import {
  getCompanies,
  getCompany,
  getCompanyByTitle,
  removeCompany,
  saveCompany,
  updateCompany,
} from './controller/CompaniesController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hello' });
});
routes.get('/companies', getCompanies);
routes.get('/companies/:id', getCompany);
routes.get('/companies/search/:name', getCompanyByTitle);
routes.post('/companies', saveCompany);
routes.put('/companies/:id', updateCompany);
routes.delete('/companies/:id', removeCompany);

export default routes;
