import React from 'react';
import { useFetch } from '@kne/react-fetch';
import LoadingButton from '../LoadingButton';

const FetchButton = ({ api, onClick, ...props }) => {
  const fetchApi = useFetch(
    Object.assign({}, api, {
      auto: false
    })
  );
  const { isLoading, refresh } = fetchApi;
  return (
    <LoadingButton
      {...props}
      loading={isLoading}
      onClick={async () => {
        const { output: data, errorStack } = await refresh({});
        if (Object.values(errorStack).length > 0) {
          return;
        }
        onClick && onClick({ data });
      }}
    />
  );
};

export default FetchButton;
