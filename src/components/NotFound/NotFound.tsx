import React from 'react';
import { PageNotFound } from './NotFound.styled';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';

const NotFound = () => (
  <PageNotFound data-testid="not-found">
    <NotListedLocationIcon data-testid="not-found-icon" />
    <h1>Page Not Found</h1>
  </PageNotFound>
);

export default NotFound;
