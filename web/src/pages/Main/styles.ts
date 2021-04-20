import styled from 'styled-components';
import { Drawer, Layout } from 'antd';

export const StyledLayout = styled(Layout)`
  padding: 5vh 10vw;
  width: 100vw;
  height: 90vh;

  @media only screen and (max-width: 1000px) {
    padding: 5vh 6vw;
  }

  .ant-card.ant-card-bordered {
    border-radius: 10px;
    min-width: 200px;
    &:hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    }
  }

  .view {
    color: grey;
    margin-right: 10px;
  }

  .edit {
    margin-right: 10px;
  }

  .delete {
    color: red;
  }
`;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-footer {
    text-align: right;
  }

  button {
    margin-right: 10px;
  }

  .row {
    margin-bottom: 15px;
  }
`;

export const Loading = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;
