import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import throttle from 'lodash/throttle';
import style from './style.module.scss';

const ButtonFooter = ({ children, className, innerClassName, target }) => {
  const [outside, setOutside] = useState(false);
  useEffect(() => {
    const handlerResize = throttle(() => {
      setOutside(window.innerWidth <= 768);
    }, 300);
    handlerResize();
    window.addEventListener('resize', handlerResize);
    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, []);
  const inner = <div className={classnames(style['inner'], innerClassName)}>{children}</div>;
  return (
    <div className={classnames(style['button-footer'], className)}>
      {outside && createPortal(inner, target || document.body)}
      {children}
    </div>
  );
};

export default ButtonFooter;
