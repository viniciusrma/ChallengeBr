import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  background-color: black;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
  height: 10vh;

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

  .ant-input-group-addon{
    display: none;
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
    color: #fff;
  }

  h4 {
    color: #fff;
    margin: auto;
  }
`;
