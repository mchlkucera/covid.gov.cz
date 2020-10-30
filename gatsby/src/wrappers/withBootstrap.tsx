import React from 'react';
import 'assets/bootstrap/bootstrap.scss';

const withBootstrap = <T extends {}>(WrappedComponent: React.FC<T>) => {
  const Wrapper: React.FC<T> = (props: any) => {
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withBootstrap;
