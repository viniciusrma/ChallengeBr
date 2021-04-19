import styled from 'styled-components';
import { Layout } from 'antd';

export const StyledLayout = styled(Layout)`
  padding: 50px 100px;
  width: 100vw;
  height: 90vh;

  .ant-card.ant-card-bordered {
    border-radius: 10px;
    &:hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    }
  }
`;
