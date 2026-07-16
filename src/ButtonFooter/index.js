import React from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import { useIsMobile } from '@kne/responsive-utils';
import style from './style.module.scss';

const ButtonFooter = ({ children, className, innerClassName, target }) => {
  const isMobile = useIsMobile();
  const inner = <div className={classnames(style['inner'], isMobile && style['inner-mobile'], innerClassName)}>{children}</div>;
  return (
    <div className={classnames(style['button-footer'], isMobile && style['is-mobile'], className)}>
      {isMobile && createPortal(inner, target || document.body)}
      {children}
    </div>
  );
};

export default ButtonFooter;
