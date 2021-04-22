import { getRepository } from 'typeorm';
import { Companies } from '../entity/Companies';
import { request, Request, Response } from 'express';

export const getCompanies = async (request: Request, response: Response) => {
  const companies = await getRepository(Companies).find();
  return response.json(companies);
};

export const saveCompany = async (request: Request, response: Response) => {
  const company = await getRepository(Companies).save(request.body);
  response.json(company);
};

export const getCompany = async (request: Request, response: Response) => {
  const { id } = request.params;
  const company = await getRepository(Companies).findOne(id);
  return response.json(company);
};

export const getCompanyByTitle = async (request: Request, response: Response) => {
  const { name } = request.params;
  const company = await getRepository(Companies).findOne(name);
  return response.json(company);
};

export const updateCompany = async (request: Request, response: Response) => {
  const { id } = request.params;
  const company = await getRepository(Companies).update(id, request.body);
  if (company.affected === 1) {
    const companyUpdated = await getRepository(Companies).findOne(id);
    return response.json(companyUpdated);
  }
  return response.status(404).json({ message: 'Company not found' });
};

export const removeCompany = async (request: Request, response: Response) => {
  const { id } = request.params;
  const company = await getRepository(Companies).delete(id);
  if (company.affected === 1) {
    const companyUpdated = await getRepository(Companies).findOne(id);
    return response.json({ message: 'Company removed' });
  }
  return response.status(404).json({ message: 'Company not found' });
};
