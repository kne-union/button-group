import React, { useMemo, Fragment } from 'react';
import { DownOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, Tooltip } from 'antd';
import classnames from 'classnames';
import pick from 'lodash/pick';
import OverflowItems, { useOverflowItems } from '@kne/overflow-items';
import LoadingButton from '../LoadingButton';
import ConfirmButton from '../ConfirmButton';
import style from './style.module.scss';
import { createWithIntlProvider, useIntl } from '@kne/react-intl';
import zhCn from '../locale/zh-CN';

const PLACE_MAP = {
  start: { vertical: 'center', horizontal: 'start' },
  center: { vertical: 'center', horizontal: 'center' },
  end: { vertical: 'center', horizontal: 'end' },
  topStart: { vertical: 'top', horizontal: 'start' },
  top: { vertical: 'top', horizontal: 'center' },
  topEnd: { vertical: 'top', horizontal: 'end' },
  bottomStart: { vertical: 'bottom', horizontal: 'start' },
  bottom: { vertical: 'bottom', horizontal: 'center' },
  bottomEnd: { vertical: 'bottom', horizontal: 'end' }
};

const resolvePlace = place => PLACE_MAP[place] || PLACE_MAP.start;

const resolveGap = (spaceProps, compact) => {
  if (compact) {
    return 0;
  }
  const size = spaceProps?.size;
  if (['small', 'middle', 'large'].indexOf(size) > -1) {
    return (['small', 'middle', 'large'].indexOf(size) + 1) * 8;
  }
  if (Number.isInteger(size)) {
    return size;
  }
  return 8;
};

const toShareItems = list =>
  list.map((item, index) => {
    if (typeof item === 'function') {
      return { key: `fn-${index}` };
    }
    return {
      key: item?.key ?? item?.children ?? item?.message ?? index,
      children: typeof item?.children === 'string' || typeof item?.children === 'number' ? item.children : undefined
    };
  });

const ButtonGroup = createWithIntlProvider(
  'zh-CN',
  zhCn,
  'button-group'
)(p => {
  const { formatMessage } = useIntl();
  const { list: originalList, more, moreType, compact, showLength: showLengthProps, getPopupContainer, trigger, placement, menuClassName, itemClassName, className, shareKey, place, ...props } = Object.assign({}, p);
  const list = useMemo(() => originalList.filter(item => !item?.hidden), [originalList]);
  const spaceProps = pick(props, ['size', 'split', 'align', 'style']);
  const { vertical: placeVertical, horizontal: placeHorizontal } = resolvePlace(place);
  const gap = resolveGap(spaceProps, compact);
  const shareItems = useMemo(() => toShareItems(list), [list]);

  const moreButtonSize = useMemo(() => {
    for (const item of list) {
      if (item && typeof item !== 'function' && item.size) {
        return item.size;
      }
    }
    return undefined;
  }, [list]);

  const isControlled = Number.isInteger(showLengthProps);
  const {
    setContainerRef,
    setMeasureRef,
    setMoreMeasureRef,
    visibleCount,
    ready: measureReady,
    shouldMeasure
  } = useOverflowItems({
    itemCount: list.length,
    items: shareItems,
    shareKey,
    enabled: !isControlled && list.length > 0,
    gap,
    beforeReady: 'min',
    debounce: 80,
    itemSelector: '[data-overflow-item]'
  });

  const ready = isControlled || measureReady;
  const showLength = isControlled ? showLengthProps : visibleCount;
  const visibleLength = !isControlled && !ready && list.length > 0 ? Math.max(showLength, 1) : showLength;
  const otherList = list.slice(showLength);

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
    const { className: itemCls, confirm, buttonComponent, tooltipProps, hidden, isDelete, isModal, ...btnProps } = renderItem;

    const isConfirm = confirm || !!btnProps.message || isDelete;
    const CurrentButton = buttonComponent || (isConfirm ? ConfirmButton : LoadingButton);
    const currentButton = (
      <CurrentButton
        {...Object.assign(
          {},
          btnProps,
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
        className={classnames('button-group-item', itemCls, itemClassName)}
      />
    );
    return tooltipProps ? <Tooltip {...tooltipProps}>{currentButton}</Tooltip> : currentButton;
  };

  const renderMoreButton = () =>
    more ||
    (moreType === 'link' ? (
      // 不用 icon 属性，避免 ant-btn-icon-only 固定方形尺寸导致相对文字 link 偏上
      <Button type="link" size={moreButtonSize} className={classnames('button-group-item', itemClassName, style['more-link-btn'])}>
        <EllipsisOutlined style={{ fontSize: moreButtonSize === 'small' ? 14 : 16 }} />
      </Button>
    ) : (
      <Button size={moreButtonSize}>
        {formatMessage({ id: 'more' })}
        <DownOutlined />
      </Button>
    ));

  const SpaceComponent = compact ? Space.Compact : Space;
  const { align: spaceAlign, ...restSpaceProps } = spaceProps;

  return (
    <div className={classnames(style['button-group'], { [style['is-ready']]: ready, [style['is-fixed']]: isControlled, [style['is-placed']]: !!place }, className)}>
      {shouldMeasure ? (
        <div ref={setMeasureRef} className={style['hidden-container']} aria-hidden style={{ gap }}>
          {list.map((item, index) => (
            <div key={index} data-overflow-item className={style['hidden-inner']}>
              {renderButton(item, index, false)}
            </div>
          ))}
          <div ref={setMoreMeasureRef} className={style['hidden-inner']}>
            {renderMoreButton()}
          </div>
        </div>
      ) : null}
      <div ref={setContainerRef} className={classnames(style['visible-content'], style[`place-horizontal-${placeHorizontal}`], style[`place-vertical-${placeVertical}`])}>
        <SpaceComponent {...restSpaceProps} align={spaceAlign ?? 'center'}>
          {list.slice(0, visibleLength).map((item, index) => (
            <Fragment key={index}>{renderButton(item, index, false)}</Fragment>
          ))}
          {ready && otherList.length > 0 && (
            <Dropdown
              getPopupContainer={getPopupContainer}
              trigger={trigger}
              placement={placement || 'bottomLeft'}
              rootClassName={classnames(style['menu-list'], menuClassName)}
              menu={{
                items: otherList.map((item, index) => {
                  return {
                    key: index,
                    label: renderButton(item, index, true)
                  };
                })
              }}
            >
              <span className={style['more-trigger']}>{renderMoreButton()}</span>
            </Dropdown>
          )}
        </SpaceComponent>
      </div>
    </div>
  );
});

ButtonGroup.Share = OverflowItems.Share;

export default ButtonGroup;
