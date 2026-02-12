import React from 'react';
import { useFetch } from '@kne/react-fetch';
import LoadingButton from '../LoadingButton';

const FetchButton = ({ api, onClick, params, onSuccess, onError, beforeFetch, afterFetch, fetchOptions, ...props }) => {
  const fetchApi = useFetch(
    Object.assign({}, api, {
      auto: false
    })
  );
  const { isLoading, refresh } = fetchApi;

  const handleClick = async () => {
    try {
      // 执行 beforeFetch 钩子
      if (beforeFetch) {
        const shouldProceed = await beforeFetch();
        if (shouldProceed === false) {
          return;
        }
      }

      const { output: data, errorStack } = await refresh(params || {});

      // 执行 afterFetch 钩子
      if (afterFetch) {
        afterFetch({ data, errorStack });
      }

      if (Object.values(errorStack).length > 0) {
        if (onError) {
          onError(errorStack);
        }
        return;
      }

      if (onSuccess) {
        onSuccess({ data });
      }
      if (onClick) {
        onClick({ data });
      }
    } catch (error) {
      if (onError) {
        onError(error);
      }
    }
  };

  return <LoadingButton {...props} loading={isLoading} onClick={handleClick} />;
};

export default FetchButton;
