import Footer from '../features/login/components/Footer';
import React from 'react';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="Login-body">
      {children}
      <Footer />
    </div>
  );
};

export default LoginLayout;
