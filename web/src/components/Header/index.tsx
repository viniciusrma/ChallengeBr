import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <h1>ChallengeBr</h1>
      </div>
      <div className="navigation">
        <Link id="link_home" className="link" to="/">
          Home
        </Link>
        <Link id="link_companies" className="link" to="/companies">
          Companies
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
