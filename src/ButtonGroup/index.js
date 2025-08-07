import React, { startTransition, useMemo, useState } from 'react';
import useResize from '@kne/use-resize';
import { Button, Dropdown, Space, Tooltip } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import useRefCallback from '@kne/use-ref-callback';
import classnames from 'classnames';
import LoadingButton from '../LoadingButton';
import ConfirmButton from '../ConfirmButton';
import pick from 'lodash/pick';
import areaWidthComputed from './areaWidthComputed';
import style from './style.module.scss';
import { createWithIntlProvider, useIntl } from '@kne/react-intl';
import zhCn from '../locale/zh-CN';

const ButtonGroup = createWithIntlProvider(
  'zh-CN',
  zhCn,
  'button-group'
)(p => {
  const { formatMessage } = useIntl();
  const {
    list: originalList,
    more,
    compact,
    showLength: showLengthProps,
    getPopupContainer,
    trigger,
    ...props
  } = Object.assign(
    {},
    {
      more: (
        <Button>
          {formatMessage({ id: 'more' })}
          <DownOutlined />
        </Button>
      )
    },
    p
  );
  const list = useMemo(() => originalList.filter(item => !item?.hidden), [originalList]);
  const spaceProps = pick(props, ['size', 'split', 'align', 'style']);
  const [showLengthState, setShowLength] = useState(list.length && 1);
  const showLength = Number.isInteger(showLengthProps) ? showLengthProps : showLengthState;
  const computedLength = useRefCallback(() => {
    const el = targetRef.current,
      moreEl = moreRef.current,
      widthEl = ref.current;
    if (!el) {
      return;
    }

    const buttonEls = el.querySelectorAll('.button-group-item');
    if (!buttonEls) {
      return;
    }
    if (buttonEls.length === 0) {
      return;
    }

    const amountWidth = widthEl.clientWidth,
      moreBtnWidth = moreEl.clientWidth,
      buttonWidthList = [].map.call(buttonEls, el => el.offsetWidth);
    const targetLength = areaWidthComputed({
      amountWidth,
      moreBtnWidth,
      buttonWidthList,
      spaceProps,
      compact
    });
    startTransition(() => {
      setShowLength(targetLength);
    });
  });
  const ref = useResize(computedLength);
  const targetRef = useResize(computedLength);
  const moreRef = useResize(computedLength);
  const otherList = list.slice(showLength);

  const renderButton = (renderItem, index, isDropdown) => {
    if (typeof renderItem === 'function') {
      return renderItem(
        {
          key: index,
          className: classnames('button-group-item', style['btn-item'])
        },
        { isDropdown }
      );
    }
    const { className, confirm, buttonComponent, tooltipProps, ...props } = renderItem;
    const isConfirm = confirm || props.message;
    const CurrentButton = buttonComponent || (isConfirm ? ConfirmButton : LoadingButton);
    const currentButton = (
      <CurrentButton
        danger={isConfirm && props.isDelete !== false}
        {...Object.assign(
          {},
          props,
          isConfirm && (props.isModal || isDropdown)
            ? {
                isModal: true
              }
            : {}
        )}
        key={index}
        className={classnames('button-group-item', className)}
      />
    );
    return tooltipProps ? <Tooltip {...tooltipProps}>{currentButton}</Tooltip> : currentButton;
  };

  const SpaceComponent = compact ? Space.Compact : Space;

  return (
    <>
      <div className={style['width-container']} ref={ref} />
      <div className={style['hidden-container']}>
        <div className={style['hidden-inner']} ref={moreRef}>
          {more}
        </div>
        <div className={style['hidden-inner']} ref={targetRef}>
          <SpaceComponent {...spaceProps}>{list.map(renderButton)}</SpaceComponent>
        </div>
      </div>
      <SpaceComponent {...spaceProps}>
        {list.slice(0, showLength).map((item, index) => renderButton(item, index, false))}
        {otherList.length > 0 && (
          <Dropdown
            getPopupContainer={getPopupContainer}
            trigger={trigger}
            rootClassName={style['menu-list']}
            menu={{
              items: otherList.map((item, index) => {
                return {
                  key: index,
                  label: renderButton(item, index, true)
                };
              })
            }}
          >
            {more}
          </Dropdown>
        )}
      </SpaceComponent>
    </>
  );
});

export default ButtonGroup;
