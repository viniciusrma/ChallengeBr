import React from 'react';
// import { Link } from 'react-router-dom';
import { StyledHeader } from './styles';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Search } = Input;

const onSearch = (value: any) => console.log(value);

const Header: React.FC = () => {
  return (
    <StyledHeader theme="dark">
      <div className="logo">
        <h1>ChallengeBr</h1>
      </div>
      {/* <div className="navigation">
        <Link id="link_home" className="link" to="/">
          Home
        </Link>
        <Link id="link_companies" className="link" to="/companies">
          Companies
        </Link>
      </div> */}
      <Search
        placeholder="Buscar empresa"
        onSearch={onSearch}
        style={{ width: '200px' }}
      />
      <div className="user">
        <UserOutlined />
        <h4>Username</h4>
      </div>
    </StyledHeader>
  );
};

export default Header;
