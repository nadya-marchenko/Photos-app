import React from 'react';
import { MessageWrapper } from './NoResult.styled';
import WarningIcon from '@material-ui/icons/Warning';
import { NoResultOptions } from './NoResult.d';

const NoResult = ({ message }: NoResultOptions) => (
  <MessageWrapper>
    <WarningIcon />
    <span>{message}</span>
  </MessageWrapper>
);

export default NoResult;
