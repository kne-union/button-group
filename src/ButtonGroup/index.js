import React, { useMemo, useState, Fragment, useLayoutEffect } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
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
  const { list: originalList, more, moreType, compact, showLength: showLengthProps, getPopupContainer, trigger, itemClassName, ...props } = Object.assign({}, p);
  const list = useMemo(() => originalList.filter(item => !item?.hidden), [originalList]);
  const spaceProps = pick(props, ['size', 'split', 'align', 'style']);
  // ButtonGroup 的 size 给 Space 做间距；按钮尺寸取 list item 上更常见的 size，保证「更多」与外露按钮一致
  const moreButtonSize = useMemo(() => {
    for (const item of list) {
      if (item && typeof item !== 'function' && item.size) {
        return item.size;
      }
    }
    return undefined;
  }, [list]);
  const isControlled = Number.isInteger(showLengthProps);
  // 未测量前不展示全部按钮，避免表格行「先变高再回弹」；可见区至少留 1 个按钮占位，避免高度先塌再撑起
  const [showLengthState, setShowLength] = useState(0);
  const [ready, setReady] = useState(isControlled);
  const showLength = isControlled ? showLengthProps : showLengthState;
  const visibleLength = !isControlled && !ready && list.length > 0 ? Math.max(showLength, 1) : showLength;
  const computedLength = useRefCallback(() => {
    const el = targetRef.current,
      moreEl = moreRef.current,
      widthEl = ref.current;
    if (!el || !widthEl) {
      return;
    }

    const buttonEls = el.querySelectorAll('.button-group-item');
    if (buttonEls.length === 0) {
      return;
    }

    const amountWidth = Math.floor(widthEl.clientWidth),
      moreBtnWidth = moreEl?.clientWidth || 0,
      buttonWidthList = [].map.call(buttonEls, el => el.offsetWidth);
    const targetLength = areaWidthComputed({
      amountWidth,
      moreBtnWidth,
      buttonWidthList,
      spaceProps,
      compact
    });
    setShowLength(prev => (prev === targetLength ? prev : targetLength));
    setReady(true);
  });
  const ref = useResize(computedLength);
  const targetRef = useResize(computedLength);
  const moreRef = useResize(computedLength);
  const otherList = list.slice(showLength);

  useLayoutEffect(() => {
    if (isControlled) {
      return;
    }
    if (list.length === 0) {
      setShowLength(0);
      setReady(true);
      return;
    }
    computedLength();
  }, [list, computedLength, isControlled]);

  const renderButton = (renderItem, index, isDropdown) => {
    if (typeof renderItem === 'function') {
      return renderItem(
        {
          key: index,
          className: classnames('button-group-item', style['btn-item'], itemClassName)
        },
        { isDropdown }
      );
    }
    const { className, confirm, buttonComponent, tooltipProps, hidden, isDelete, isModal, ...props } = renderItem;

    const isConfirm = confirm || !!props.message || isDelete;
    const CurrentButton = buttonComponent || (isConfirm ? ConfirmButton : LoadingButton);
    const currentButton = (
      <CurrentButton
        {...Object.assign(
          {},
          props,
          isConfirm
            ? {
                danger: isDelete !== false,
                isDelete: isDelete !== false,
                ...(isModal || isDropdown
                  ? {
                      isModal: true
                    }
                  : {})
              }
            : {},
          isDropdown ? { type: 'default' } : {}
        )}
        key={index}
        className={classnames('button-group-item', className, itemClassName)}
      />
    );
    return tooltipProps ? <Tooltip {...tooltipProps}>{currentButton}</Tooltip> : currentButton;
  };

  const renderMoreButton = () =>
    more ||
    (moreType === 'link' ? (
      <Button type="link" size={moreButtonSize} icon={<EllipsisOutlined style={{ fontSize: moreButtonSize === 'small' ? 14 : 16 }} />} className={classnames('button-group-item', itemClassName, style['more-link-btn'])} />
    ) : (
      <Button size={moreButtonSize}>
        {formatMessage({ id: 'more' })}
        <DownOutlined />
      </Button>
    ));

  const SpaceComponent = compact ? Space.Compact : Space;

  return (
    <div className={classnames(style['button-group'], { [style['is-ready']]: ready })}>
      <div className={style['width-container']} ref={ref} />
      <div className={style['hidden-container']}>
        <div className={style['hidden-inner']} ref={moreRef}>
          {renderMoreButton()}
        </div>
        <div className={style['hidden-inner']} ref={targetRef}>
          <SpaceComponent {...spaceProps}>
            {list.map((item, index) => (
              <Fragment key={index}>{renderButton(item, index, false)}</Fragment>
            ))}
          </SpaceComponent>
        </div>
      </div>
      <div className={style['visible-content']}>
        <SpaceComponent {...spaceProps}>
          {list.slice(0, visibleLength).map((item, index) => (
            <Fragment key={index}>{renderButton(item, index, false)}</Fragment>
          ))}
          {ready && otherList.length > 0 && (
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
              {renderMoreButton()}
            </Dropdown>
          )}
        </SpaceComponent>
      </div>
    </div>
  );
});

export default ButtonGroup;
