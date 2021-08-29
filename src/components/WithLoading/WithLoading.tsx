import { ReactComponentLike } from 'prop-types';
import Loader from '../Loader/Loader';
import { WithLoadingProps } from './WithLoading.d';

const WithLoading =
  (Component: ReactComponentLike) =>
  ({ isLoading, ...props }: WithLoadingProps) =>
    isLoading ? <Loader /> : <Component {...props} />;

export default WithLoading;
