/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback } from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  List,
  message,
  PageHeader,
  Row,
  Select,
  Spin,
  Tooltip,
} from 'antd';
import { Loading, StyledDrawer, StyledLayout } from './styles';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
} from '@ant-design/icons';

const Main: React.FC = () => {
  const [companies, setCompanies] = useState<ICompanies[]>([]);
  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const [currentCompany, setCurrentCompany] = useState<ICompanies | null>(null);
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [demand, setDemand] = useState('');
  const [billing, setBilling] = useState('');
  const [about, setAbout] = useState('');
  const [drawerUpdate, setDrawerUpdate] = useState(false);

  const history = useHistory();

  const { Option } = Select;

  useEffect(() => {
    api
      .get('/companies')
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const handleDrawerUpdate = useCallback(
    (id?: string) => {
      if (companies) {
        if (currentCompany) {
          setCurrentCompany(null);
        } else if (id) {
          const company = companies.find((item) => item.id === id);
          if (company) {
            setCurrentCompany(company);
          }
        }
        setDrawerUpdate(!drawerUpdate);
      }
    },
    [companies, currentCompany, drawerUpdate, setCurrentCompany],
  );

  const handleUpdate = useCallback(async () => {
    if (!currentCompany) return;

    const updatedCompany = {
      id: currentCompany.id,
      name: name === '' ? currentCompany.name : name,
      cnpj: cnpj === '' ? currentCompany.cnpj : cnpj,
      demand: demand === '' ? currentCompany.demand : demand,
      billing: billing === '' ? currentCompany.billing : billing,
      about: about === '' ? currentCompany.about : about,
    };

    await api.put(`/companies/${currentCompany.id}`, updatedCompany);

    setName('');
    setCnpj('');
    setDemand('');
    setBilling('');
    setAbout('');

    handleDrawerUpdate();

    message.success('Empresa atualizada com sucesso.', 3);

    window.setTimeout(function () {
      location.reload();
    }, 1000);
  }, [name, cnpj, demand, billing, about, currentCompany, handleDrawerUpdate]);

  const handleDelete = useCallback(
    async (id: string) => {
      await api.delete(`/companies/${id}`);

      const remainingCompanies = companies.filter(
        (company) => company.id !== id,
      );
      setCompanies(remainingCompanies);
      message.success('Cliente removido com sucesso.', 3);
    },
    [companies],
  );

  function showRecordOnDrawer(company: ICompanies) {
    setCurrentCompany(company);
    setDrawerVisibility(true);
  }

  const closeDrawer = useCallback(() => {
    setDrawerVisibility(false);
  }, []);

  function newCompany() {
    history.push('/register_company');
  }

  return (
    <StyledLayout>
      <PageHeader
        ghost={true}
        title="Empresas cadastradas"
        extra={[
          <Button
            key="1"
            type="primary"
            icon={<PlusOutlined />}
            onClick={newCompany}
          >
            Novo
          </Button>,
        ]}
      />

      {!companies && (
        <Loading>
          <Spin />
        </Loading>
      )}

      <List
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 12,
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
        renderItem={(company, index) => (
          <List.Item>
            <Card
              className="card"
              title={company.name}
              extra={
                <div className="options">
                  <Tooltip placement="top" title={'Visualizar'}>
                    <a
                      href="#"
                      className="view"
                      onClick={() => {
                        showRecordOnDrawer(company);
                      }}
                    >
                      <EyeOutlined />
                    </a>
                  </Tooltip>
                  <Tooltip placement="top" title={'Editar'}>
                    <a
                      href="#"
                      className="edit"
                      onClick={() => handleDrawerUpdate(company.id)}
                    >
                      <EditOutlined />
                    </a>
                  </Tooltip>
                  <Tooltip placement="top" title={'Excluir'}>
                    <a
                      href="#"
                      className="delete"
                      onClick={() => company.id && handleDelete(company.id)}
                    >
                      <DeleteOutlined />
                    </a>
                  </Tooltip>
                </div>
              }
            >
              {company.about}
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
      >
        <Row className="row">
          <Col span={12}>
            <h3 className="company">Nome da empresa</h3>
            <p title="Empresa">{currentCompany?.name}</p>
          </Col>
          <Col span={12}>
            <h3 className="company">CNPJ</h3>
            <p title="Empresa">{currentCompany?.cnpj}</p>
          </Col>
        </Row>
        <Row className="row">
          <Col span={12}>
            <h3 className="company">Demanda</h3>
            <p title="Empresa">{currentCompany?.demand}</p>
          </Col>
          <Col span={12}>
            <h3 className="company">Faturamento anual</h3>
            <p title="Empresa">{currentCompany?.billing}</p>
          </Col>
        </Row>
        <Row className="row">
          <Col span={12}>
            <h3 className="company">Sobre</h3>
            <p title="Empresa">{currentCompany?.about}</p>
          </Col>
        </Row>
      </StyledDrawer>

      <StyledDrawer
        title="Atualizar empresa"
        width={500}
        destroyOnClose
        onClose={() => handleDrawerUpdate()}
        visible={drawerUpdate}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button
              onClick={() => handleDrawerUpdate()}
              style={{ marginRight: 8 }}
            >
              Cancelar
            </Button>
            <Button onClick={handleUpdate} type="primary">
              Salvar
            </Button>
          </div>
        }
      >
        <Form layout="vertical">
          <Form.Item name="name" label="Nome da Empresa">
            <Input
              onChange={(e) => setName(e.target.value)}
              defaultValue={currentCompany?.name}
            />
          </Form.Item>

          <Form.Item label="CNPJ">
            <Input
              name="cnpj"
              onChange={(e) => setCnpj(e.target.value)}
              defaultValue={currentCompany?.cnpj}
            />
          </Form.Item>

          <Form.Item label="Demanda">
            <Input
              name="demand"
              onChange={(e) => setDemand(e.target.value)}
              defaultValue={currentCompany?.demand}
            />
          </Form.Item>

          <Form.Item label="Sobre">
            <Input
              className="about"
              name="about"
              onChange={(e) => setAbout(e.target.value)}
              defaultValue={currentCompany?.about}
            />
          </Form.Item>

          <Form.Item label="Faturamento">
            <Select
              onChange={(value) => setBilling(value)}
              defaultValue={currentCompany?.billing}
            >
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
        </Form>
      </StyledDrawer>
    </StyledLayout>
  );
};

export default Main;
