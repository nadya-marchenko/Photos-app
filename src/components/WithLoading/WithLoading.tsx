import React from 'react';
import Loader from '../Loader/Loader';
import { WithLoadingProps } from './WithLoading.d';

const WithLoading =
  <P extends object>(
    Component: React.ComponentType<P>,
  ): React.FC<P & WithLoadingProps> =>
  ({ isLoading, ...props }: WithLoadingProps) =>
    isLoading ? <Loader /> : <Component {...(props as P)} />;

export default WithLoading;
