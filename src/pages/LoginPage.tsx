import Login from '../features/login/Login';
import LoginLayout from '../layouts';
import React from 'react';

const LoginPage = () => {
  return (
    <>
      <LoginLayout>
        <Login />
      </LoginLayout>
    </>
  );
};

export default LoginPage;
