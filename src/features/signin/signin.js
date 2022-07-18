import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import {
  AlignCenterWrapper,
  Logo,
  SigninContent,
} from '../../components/styled';
import { Title } from '../../components/styled/typography';
import logo from '../../favicon.svg';
import { useGetCurrentUserRole } from '../../hooks/useGetCurrentUserRole';
import { authStore } from '../../store/auth';
import { Navigate } from 'react-router';
import UserAuthForm from '../forms/userAuthForm';

const Signin = () => {
  const currentUserRole = useGetCurrentUserRole();
  const token = authStore(state => state?.token);
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  useEffect(() => {
    if (token) {
      setRedirectToReferrer(true);
    }
  }, [token]);

  const { from } = location.state || {
    from: { pathname: `/${currentUserRole}/dashboard` },
  };

  if (redirectToReferrer) {
    return <Navigate to={from} />;
  }

  return (
    <AlignCenterWrapper>
      {/* <LangSwithcer /> */}
      <SigninContent>
        <Logo src={logo} alt={'logo'} />
        <Title>Ant design</Title>
        <Divider />
        <UserAuthForm />
      </SigninContent>
    </AlignCenterWrapper>
  );
};

export default Signin;
