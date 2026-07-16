import React, { useState, forwardRef } from 'react';
import { Button } from 'antd';
import useRefCallback from '@kne/use-ref-callback';

export const useLoading = callback => {
  const [isLoading, setIsLoading] = useState(false);

  const callbackHandler = useRefCallback((...args) => {
    setIsLoading(true);
    return Promise.resolve(callback && callback(...args))
      .then(() => {
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.error(err);
      });
  });
  return {
    isLoading,
    setIsLoading,
    callback: callbackHandler
  };
};

const LoadingButton = forwardRef(({ onClick, children, loading, ...props }, ref) => {
  const { isLoading, callback } = useLoading(onClick);
  return (
    <Button ref={ref} {...props} loading={loading || isLoading} onClick={callback}>
      {typeof children === 'function' ? children(loading || isLoading) : children}
    </Button>
  );
});

LoadingButton.displayName = 'LoadingButton';

export default LoadingButton;
