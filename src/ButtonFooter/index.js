import React, { useState } from 'react';
import classnames from 'classnames';
import useResize from '@kne/use-resize';
import style from './style.module.scss';

const ButtonFooter = ({ children, className }) => {
  const [height, setHeight] = useState(0);
  const ref = useResize(dom => {
    setHeight(dom.clientHeight);
  });
  return (
    <div
      className={classnames(style['button-footer'], className)}
      style={{
        '--footer-height': `${height}px`
      }}
    >
      <div ref={ref} className={style['inner']}>
        {children}
      </div>
    </div>
  );
};

export default ButtonFooter;
