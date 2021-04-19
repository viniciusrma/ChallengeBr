import React, { useState, useEffect, useCallback } from 'react';
import { Button, Card, Col, Form, Input, List, PageHeader, Row } from 'antd';
import { StyledDrawer, StyledLayout } from './styles';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

const Main: React.FC = () => {
  const [companies, setCompanies] = useState<ICompanies[]>([]);
  const [drawerVisibility, setDrawerVisibility] = useState(false);

  const history = useHistory();

  async function loadCompanies() {
    const response = await api.get('/companies');
    console.log(response);
    setCompanies(response.data);
  }

  useEffect(() => {
    loadCompanies();
  }, []);

  function newCompany() {
    history.push('/register_company');
  }

  function showRecordOnDrawer(company: ICompanies) {
    setDrawerVisibility(true);
  }

  const closeDrawer = useCallback(() => {
    setDrawerVisibility(false);
  }, []);

  return (
    <StyledLayout>
      <PageHeader
        ghost={true}
        title="Empresas cadastradas"
        extra={[
          <Button key="0" type="primary" onClick={newCompany}>
            Nova empresa
          </Button>,
        ]}
      />
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
            <Card
              className="card"
              title={item.name}
              onClick={() => {
                showRecordOnDrawer(item);
              }}
            >
              {item.about}
            </Card>
          </List.Item>
        )}
      />
      <StyledDrawer
        visible={drawerVisibility}
        width={500}
        placement="right"
        closable={false}
        onClose={closeDrawer}
        title="Detalhes da empresa"
        footer={
          <div>
            <Button onClick={closeDrawer}>Cancel</Button>
            <Button onClick={closeDrawer} type="primary">
              Submit
            </Button>
          </div>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="name" label="Name">
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="url" label="Url">
                <Input
                  style={{ width: '100%' }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </StyledDrawer>
    </StyledLayout>
  );
};

export default Main;
