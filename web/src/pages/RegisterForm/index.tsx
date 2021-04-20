/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, ChangeEvent, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, Input, PageHeader, Select } from 'antd';
import api from '../../services/api';
import { StyledLayout } from './styles';

const RegisterForm: React.FC = () => {
  const { Option } = Select;

  const history = useHistory();

  const { id } = useParams<IParamsProps>();

  const [company, addCompany] = useState<INewCompany>({
    name: '',
    cnpj: 0,
    demand: 0,
    billing: '',
    about: '',
  });

  useEffect(() => {
    if (id !== undefined) {
      findCompany(id);
    }
  }, [id]);

  function updatedCompany(e: ChangeEvent<HTMLInputElement>) {
    addCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    if (id !== undefined) {
      const response = await api.put(`/companies/${id}`, company);
    } else {
      const response = await api.post('/companies', company);
    }
    back();
  }

  async function findCompany(id: string) {
    const response = await api.get(`companies/${id}`);
    addCompany({
      name: response.data.name,
      cnpj: response.data.cnpj,
      demand: response.data.demand,
      about: response.data.about,
      billing: response.data.billing,
    });
  }

  function back() {
    history.goBack();
  }

  return (
    <StyledLayout>
      <PageHeader
        ghost={true}
        title="Cadastrar nova empresa"
        extra={[
          <Button key="0" type="default" onClick={back}>
            Voltar
          </Button>,
        ]}
      />
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 15,
        }}
        layout="horizontal"
        onFinish={onSubmit}
      >
        <Form.Item label="Nome da empresa">
          <Input
            name="name"
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCompany(e)}
          />
        </Form.Item>

        <Form.Item label="CNPJ">
          <Input
            name="cnpj"
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCompany(e)}
          />
        </Form.Item>

        <Form.Item label="Demanda">
          <Input
            name="demand"
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCompany(e)}
          />
        </Form.Item>

        <Form.Item label="Sobre">
          <Input
            className="about"
            name="about"
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCompany(e)}
          />
        </Form.Item>

        <Form.Item label="Faturamento">
          <Select defaultValue={company.billing}>
            <Option value="Até R$ 10 milhões" name="billing">
              Até R$ 10 milhões
            </Option>
            <Option value="De R$ 10 a R$ 50 milhões" name="billing">
              De R$ 10 a R$ 50 milhões
            </Option>
            <Option value="De R$ 50 a R$ 200 milhões" name="billing">
              De R$ 50 a R$ 200 milhões
            </Option>
            <Option value="De R$ 200 a R$ 500 milhões" name="billing">
              De R$ 200 a R$ 500 milhões
            </Option>
            <Option value="Acima de  R$ 500 milhões" name="billing">
              Acima de R$ 500 milhões
            </Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </StyledLayout>
  );
};

export default RegisterForm;
