import React from 'react';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import { LoaderArea, LoaderText } from './Loader.styled';

const Loader = () => (
  <LoaderArea data-testid="loading">
    <HourglassEmptyIcon data-testid="loading-icon" />
    <LoaderText>Loading...</LoaderText>
  </LoaderArea>
);

export default Loader;
