import withBootstrap from '@/wrappers/withBootstrap';
import React from 'react';

const Button: React.FC = ({ children = <></> }) => {
  return <button className='btn btn-primary'>{children}</button>;
};

export default withBootstrap(Button);
