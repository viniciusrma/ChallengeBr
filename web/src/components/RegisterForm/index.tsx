import { Button, Cascader, Form, Input, PageHeader } from 'antd';
import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import { StyledLayout } from './styles';

const RegisterForm: React.FC = () => {
  const { TextArea } = Input;

  const [company, addCompany] = useState<INewCompany>({
    name: '',
    cnpj: 0,
    demand: 0,
    billing: '',
    about: '',
  });

  function updatedCompany(e: ChangeEvent<HTMLInputElement>) {
    addCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(company);
  }

  return (
    <StyledLayout>
      <PageHeader
        ghost={true}
        title="Cadastrar nova empresa"
        extra={[
          <Button key="0" type="default">
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
            name="billing"
            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCompany(e)}
          />
        </Form.Item>

        <Form.Item label="Faturamento">
          <Cascader
            options={[
              {
                value: 'Até R$ 10 milhões',
                label: 'Até R$ 10 milhões',
              },
              {
                value: 'De R$ 10 a R$ 50 milhões',
                label: 'De R$ 10 a R$ 50 milhões',
              },
              {
                value: 'De R$ 50 a R$ 200 milhões',
                label: 'De R$ 50 a R$ 200 milhões',
              },
              {
                value: 'De R$ 200 a R$ 500 milhões',
                label: 'De R$ 200 a R$ 500 milhões',
              },
              {
                value: 'Acima de  R$ 500 milhões',
                label: 'Acima de  R$ 500 milhões',
              },
            ]}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submeter
          </Button>
        </Form.Item>
      </Form>
    </StyledLayout>
  );
};

export default RegisterForm;
