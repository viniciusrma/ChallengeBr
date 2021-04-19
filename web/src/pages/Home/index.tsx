import { Card, List } from 'antd';
import React from 'react';
import { StyledLayout } from './styles';

const data = [
  {
    title: 'Empresa 1',
  },
  {
    title: 'Empresa 2',
  },
  {
    title: 'Empresa 3',
  },
  {
    title: 'Empresa 4',
  },
  {
    title: 'Empresa 5',
  },
  {
    title: 'Empresa 6',
  },
  {
    title: 'Empresa 7',
  },
  {
    title: 'Empresa 8',
  },
  {
    title: 'Empresa 9',
  },
  {
    title: 'Empresa 10',
  },
  {
    title: 'Empresa 11',
  },
  {
    title: 'Empresa 12',
  },
  {
    title: 'Empresa 13',
  },
  {
    title: 'Empresa 14',
  },
  {
    title: 'Empresa 15',
  },
  {
    title: 'Empresa 16',
  },
  {
    title: 'Empresa 17',
  },
  {
    title: 'Empresa 18',
  },
];

const Home: React.FC = () => {
  return (
    <StyledLayout>
      <List
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 12,
        }}
        grid={{
          gutter: 20,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              <p>Sobre...</p>
            </Card>
          </List.Item>
        )}
      />
    </StyledLayout>
  );
};

export default Home;
