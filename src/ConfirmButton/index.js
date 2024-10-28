import React, { useState, isValidElement } from 'react';
import { Popconfirm, Modal, Button, Flex, Typography } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import { useLoading } from '../LoadingButton';
import classnames from 'classnames';
import useRefCallback from '@kne/use-ref-callback';
import style from './style.module.scss';

const ConfirmButton = p => {
  const locale = Object.assign(
    {},
    {
      message: '确定要删除吗？',
      confirm: '确定',
      delete: '删除',
      cancel: '取消'
    },
    p.locale
  );
  const { title, message, isDelete, showCancel, cancelText, onCancel, isModal, okText, placement, children, onClick, getContainer, renderModal, ...props } = Object.assign(
    {},
    {
      isDelete: true
    },
    p,
    { locale }
  );

  const [open, setOpen] = useState(false);
  const { isLoading, callback } = useLoading(onClick);

  const handlerConfirm = useRefCallback(() => {
    setOpen(true);
  });

  const confirmContent = (
    <Flex
      className={style['confirm-content']}
      vertical
      gap={8}
      onClick={e => {
        e.stopPropagation();
      }}
    >
      {title && (
        <Flex align="flex-start" gap={8} className={style['title']}>
          {isDelete && <InfoCircleFilled className="title-icon" />}
          {title}
        </Flex>
      )}
      <Flex
        align="flex-start"
        gap={8}
        className={classnames(style['content'], {
          [style['has-title']]: title
        })}
      >
        {!title && isDelete ? <InfoCircleFilled className="title-icon" /> : null}
        {message || locale.message}
      </Flex>
    </Flex>
  );

  const renderChildren = () => {
    if (typeof children === 'function') {
      return children({
        ...props,
        onClick: handlerConfirm
      });
    }
    return (
      <Button
        {...props}
        loading={isLoading}
        onClick={() => {
          handlerConfirm();
        }}
      >
        {children}
      </Button>
    );
  };

  if (isModal) {
    const modalProps = {
      open,
      onCancel: () => {
        setOpen(false);
        onCancel && onCancel();
      },
      wrapClassName: style['modal'],
      okText: okText ? okText : isDelete ? locale.delete : locale.confirm,
      cancelText: cancelText || locale.cancel,
      onOk: e => {
        setOpen(false);
        return callback(e);
      },
      closable: false,
      okButtonProps: {
        danger: isDelete
      },
      getContainer,
      children: confirmContent
    };
    return (
      <>
        {typeof renderModal === 'function' ? renderModal(modalProps) : <Modal {...modalProps} />}
        {renderChildren()}
      </>
    );
  }
  return (
    <Popconfirm
      overlayClassName={classnames(style['overlay'], {
        [style['is-danger']]: isDelete
      })}
      okButtonProps={{
        danger: isDelete
      }}
      title={confirmContent}
      open={open}
      getPopupContainer={getContainer}
      onCancel={onCancel}
      placement={placement}
      showCancel={showCancel}
      okText={okText ? okText : isDelete ? locale.delete : locale.confirm}
      cancelText={cancelText || locale.cancel}
      onOpenChange={setOpen}
      onConfirm={e => {
        callback(e);
      }}
    >
      {renderChildren()}
    </Popconfirm>
  );
};

export const ConfirmLink = ({ children, ...p }) => {
  return <ConfirmButton {...p}>{props => <Typography.Link {...props}>{children}</Typography.Link>}</ConfirmButton>;
};

export const ConfirmText = ({ children, ...p }) => {
  return <ConfirmButton {...p}>{props => <Typography.Text {...props}>{children}</Typography.Text>}</ConfirmButton>;
};

export const withConfirm = WrappedComponent => {
  console.warn('后续版本可能删除该api，请不要使用');
  return ({ children, ...p }) => {
    return <ConfirmButton {...p}>{props => <WrappedComponent {...props}>{children}</WrappedComponent>}</ConfirmButton>;
  };
};

export default ConfirmButton;
