import React from 'react';
import 'assets/bootstrap/bootstrap.scss';

const withBootstrap = (WrappedComponent: any) => {
  const Wrapper: React.FC = (props: any) => {
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withBootstrap;
