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

      const result = await refresh(params || {});
      const output = result?.output || result;
      const errorStack = result?.errorStack;

      // 执行 afterFetch 钩子
      if (afterFetch) {
        afterFetch({ data: output, errorStack });
      }

      if (errorStack && Object.keys(errorStack).length > 0) {
        if (onError) {
          onError(errorStack);
        }
        return;
      }

      if (onSuccess) {
        onSuccess({ data: output });
      }
      if (onClick) {
        onClick({ data: output });
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
