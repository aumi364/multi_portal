import styled from '@emotion/styled';
import { Row } from 'antd';
import Icon from '@ant-design/icons';

export const RowWrapper = styled(Row)`
  background: linear-gradient(#17b2c0, #6d5fa9);
  height: 100vh;
  position: relative;

  .login-content {
    width: 40rem;
    padding: 5rem;
    box-shadow: ${props => props.theme.shadow[10]};
    background-color: #fff;
    border-radius: 0.6rem;
  }
`;

export const Logo = styled.img`
  width: 40px;
`;
