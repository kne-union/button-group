import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import useResize from '@kne/use-resize';
import throttle from 'lodash/throttle';
import style from './style.module.scss';

const ButtonFooter = ({ children, className, innerClassName, target }) => {
  const [height, setHeight] = useState(0);
  const [outside, setOutside] = useState(false);
  const ref = useResize(dom => {
    setHeight(dom.clientHeight);
  });
  useEffect(() => {
    const handlerResize = throttle(() => {
      setOutside(window.innerWidth <= 768);
    }, 300);
    window.addEventListener('resize', handlerResize);
    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, []);
  const inner = (
    <div ref={ref} className={classnames(style['inner'], innerClassName)}>
      {children}
    </div>
  );
  return (
    <div
      className={classnames(style['button-footer'], className)}
      style={{
        '--footer-height': `${height}px`
      }}
    >
      {outside ? createPortal(inner, target || document.body) : inner}
    </div>
  );
};

export default ButtonFooter;
