import React from 'react';
import { AlignCenterWrapper, Logo } from '../../components/styled';
import logo from '../../favicon.svg';

const SplashScreen = props => {
  return (
    <AlignCenterWrapper>
      <Logo src={logo} alt={'logo'} />
    </AlignCenterWrapper>
  );
};

SplashScreen.propTypes = {};

export default SplashScreen;
