import withBootstrap from '@/wrappers/withBootstrap';
import React from 'react';

interface IProps {
  title: string;
  mainUrl?: string;
  subText: string;
  subUrl?: string;
}

const Box: React.FC<IProps> = ({
  title = '',
  mainUrl = '#',
  subText = '',
  subUrl = '#',
}) => {
  return (
    <div className='col-12 col-sm-6 col-lg-4 box'>
      <div className='box__inner'>
        <h3 className='box__title' style={{ height: 78 }}>
          <a href={mainUrl} className='inverse'>
            {title}
          </a>
        </h3>
        <a
          href={subUrl}
          className='btn btn-inverse btn--raw btn--more box__more'
        >
          {subText}
        </a>
      </div>
    </div>
  );
};

export default withBootstrap<IProps>(Box);
