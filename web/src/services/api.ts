import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3030',
});

export default api;

export const fetchCompanies = (searchTitle: string) => {
  return api
    .get('/', {
      params: { s: searchTitle, type: 'company' },
    })
    .then((response) => response.data.Search);
};
