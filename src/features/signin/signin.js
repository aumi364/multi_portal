import React from 'react';
import { Button, Divider, Form, Input, Row } from 'antd';
import { useLocation, useNavigate } from 'react-router';
import { Logo, RowWrapper } from '../../components/styled';
import { Title } from '../../components/styled/typography';
import logo from '../../favicon.svg';
import { authStore } from '../../store/auth';
import { useGetCurrentUserRole } from '../../hooks/useGetCurrentUserRole';

function UserAuthForm() {
  const navigate = useNavigate();

  const currentUserRole = useGetCurrentUserRole();

  const login = authStore(state => state.login);
  const onFinish = formData => {
    if (formData) {
      login({ token: 'dummyjwttoken', user: { name: 'dummy' } });
    }

    // navigate(`/${PRIVATE_ROUTE.DASHBOARD}/${PRIVATE_ROUTE.HOME}`);
  };

  return (
    <RowWrapper type="flex" justify="center" align="middle">
      {/* <LangSwithcer /> */}
      <div className="login-content">
        <Logo src={logo} alt={'logo'} />
        <Title>Ant design</Title>
        <Divider />
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            className="mb-3"
            name="email"
            rules={[{ required: true }, { type: 'email' }]}
            hasFeedback
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="mb-3"
            name="password"
            rules={[{ required: true }]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Row type="flex" justify="center">
            <Form.Item>
              <Button
                size="large"
                className="px-4"
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </div>
    </RowWrapper>
  );
}

export default UserAuthForm;
