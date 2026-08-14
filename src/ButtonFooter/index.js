import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import classnames from 'classnames';
import { MOBILE_POPUP_COVER, useMobilePopupMount } from '@kne/responsive-utils';
import style from './style.module.scss';

const PLACEMENT_MAP = {
  top: { vertical: 'top', horizontal: 'center' },
  topStart: { vertical: 'top', horizontal: 'start' },
  topEnd: { vertical: 'top', horizontal: 'end' },
  bottom: { vertical: 'bottom', horizontal: 'center' },
  bottomStart: { vertical: 'bottom', horizontal: 'start' },
  bottomEnd: { vertical: 'bottom', horizontal: 'end' }
};

const resolvePlacement = placement => PLACEMENT_MAP[placement] || PLACEMENT_MAP.bottom;

const resolveTarget = target => {
  if (!target) {
    return null;
  }
  return typeof target === 'function' ? target() : target;
};

const ButtonFooter = ({ children, className, innerClassName, target, placement = 'bottom' }) => {
  const rootRef = useRef(null);
  const [mountNode, setMountNode] = useState(null);
  const customTarget = resolveTarget(target);
  const { vertical, horizontal } = useMemo(() => resolvePlacement(placement), [placement]);
  const { isMobile, fixedModeClass, getMountNode, anchorRef } = useMobilePopupMount({
    cover: MOBILE_POPUP_COVER.viewport,
    ...(customTarget ? { getPopupContainer: () => customTarget } : {})
  });

  const setRef = useCallback(
    node => {
      rootRef.current = node;
      anchorRef(node);
    },
    [anchorRef]
  );

  useLayoutEffect(() => {
    if (!isMobile) {
      setMountNode(null);
      return;
    }
    setMountNode(customTarget || getMountNode(rootRef.current));
  }, [customTarget, getMountNode, isMobile]);

  const inner = (
    <div
      className={classnames(
        style['inner'],
        style['inner-mobile'],
        style[`placement-${vertical}`],
        style[`justify-${horizontal}`],
        fixedModeClass,
        innerClassName
      )}
    >
      {children}
    </div>
  );

  return (
    <div ref={setRef} className={classnames(style['button-footer'], isMobile && style['is-mobile'], className)}>
      {isMobile && mountNode && createPortal(inner, mountNode)}
      {children}
    </div>
  );
};

export default ButtonFooter;
