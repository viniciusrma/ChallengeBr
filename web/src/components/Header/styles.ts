import styled from 'styled-components';
import { Menu } from 'antd';

export const StyledHeader = styled(Menu)`
  display: flex;
  align-items: center;
  justify-content: space-between ;
  height: 10vh;
  padding: 0px 20px;

  .logo {
    padding: 10px;
    h1 {
      margin: 0px;
      color: #fff;
    }
  }

  .navigation {
    width: auto;
    padding: 0px 20px;
    justify-content: space-between;
  }

  .link {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: blue;
    }
  }

  #link_home {
    margin-right: 10px;
  }

  .user {
    display: flex;
    align-self: center;

  }

  span.anticon.anticon-user {
    margin-right: 10px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  h4 {
    color: #fff;
    margin: auto;
  }
`;
