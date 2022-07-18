import styled from '@emotion/styled';

export const AlignCenterWrapper = styled.div(({ theme }) => ({
  background: `linear-gradient(${theme.primary.main}, ${theme.secondary.main})`,
  height: '100vh',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const SigninContent = styled.div(({ theme }) => ({
  width: '40rem',
  padding: '5rem',
  backgroundColor: '#fff',
  borderRadius: '0.6rem',
  boxShadow: theme.shadow[10],
}));

export const Logo = styled.img({ width: '40px' });
