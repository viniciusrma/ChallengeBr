import React, { useState, useEffect } from 'react';
import { Card, List } from 'antd';
import { StyledLayout } from './styles';
import api from '../../services/api';

// const data = [
//   {
//     title: 'Empresa 1',
//   },
//   {
//     title: 'Empresa 2',
//   },
//   {
//     title: 'Empresa 3',
//   },
//   {
//     title: 'Empresa 4',
//   },
//   {
//     title: 'Empresa 5',
//   },
//   {
//     title: 'Empresa 6',
//   },
//   {
//     title: 'Empresa 7',
//   },
//   {
//     title: 'Empresa 8',
//   },
//   {
//     title: 'Empresa 9',
//   },
//   {
//     title: 'Empresa 10',
//   },
//   {
//     title: 'Empresa 11',
//   },
//   {
//     title: 'Empresa 12',
//   },
//   {
//     title: 'Empresa 13',
//   },
//   {
//     title: 'Empresa 14',
//   },
//   {
//     title: 'Empresa 15',
//   },
//   {
//     title: 'Empresa 16',
//   },
//   {
//     title: 'Empresa 17',
//   },
//   {
//     title: 'Empresa 18',
//   },
// ];

interface ICompanies {
  id: number;
  name: string;
  cnpj: number;
  demand: number;
  billing: string;
  about: string;
  created_at: Date;
  updated_at: Date;
}

const Home: React.FC = () => {
  const [companies, setCompanies] = useState<ICompanies[]>([]);

  async function loadCompanies() {
    const response = await api.get('/companies');
    console.log(response);
    setCompanies(response.data);
  }

  useEffect(() => {
    loadCompanies();
  }, []);

  return (
    <StyledLayout>
      <List
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 8,
        }}
        grid={{
          gutter: 12,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={companies}
        renderItem={(item, index) => (
          <List.Item>
            <Card className="card" title={item.name}>
              {item.about}
            </Card>
          </List.Item>
        )}
      />
    </StyledLayout>
  );
};

export default Home;
