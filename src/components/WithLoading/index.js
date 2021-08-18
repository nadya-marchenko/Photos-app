import React from 'react';
import Loader from '../Loader';

const WithLoading = Component => {
    return ({ isLoading, ...props }) => isLoading ? <Loader /> : <Component {...props} />;
};

export default WithLoading;