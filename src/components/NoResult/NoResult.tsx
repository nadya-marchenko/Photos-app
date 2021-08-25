import React from 'react';
import { MessageWrapper } from './NoResult.styled';
import WarningIcon from '@material-ui/icons/Warning';
import { NoResultProps } from './NoResult.d';

const NoResult = ({ message }: NoResultProps) => (
  <MessageWrapper>
    <WarningIcon />
    <span>{message}</span>
  </MessageWrapper>
);

export default NoResult;
