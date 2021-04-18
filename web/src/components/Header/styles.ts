import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 10vh;
  padding: 0px 20px;
  background: pink;

  .logo {
    padding: 10px;
    h1 {
      margin: 0px;
    }
  }

  .navigation {
    width: auto;
    padding: 0px 20px;
    justify-content: space-between;
  }

  .link {
    text-decoration: none;
    color: #000;

    &:hover{
      color: blue;
    }
  }

  #link_home {
    margin-right: 10px;
  }
`;
