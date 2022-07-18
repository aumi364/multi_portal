import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Row } from 'antd';
import { authStore } from '../../store/auth';

const MyComponent = props => {
  const login = authStore(state => state?.login);
  const onFinish = formData => {
    if (formData) {
      login({ token: 'dummyjwttoken', user: { name: 'dummy' } });
    }

    // navigate(`/${PRIVATE_ROUTE.DASHBOARD}/${PRIVATE_ROUTE.HOME}`);
  };
  return (
    <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
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
  );
};

MyComponent.propTypes = {};

export default MyComponent;
