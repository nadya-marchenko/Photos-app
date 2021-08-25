import Loader from '../Loader/Loader';
import { WithLoadingProps } from './WithLoading.d';

const WithLoading =
  (Component: any) =>
  ({ isLoading, ...props }: WithLoadingProps) =>
    isLoading ? <Loader /> : <Component {...props} />;

export default WithLoading;
