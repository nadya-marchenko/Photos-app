import React from 'react';
import PropTypes from 'prop-types';
import { MessageWrapper } from './NoResult.styled';
import WarningIcon from '@material-ui/icons/Warning';

const NoResult = ({ message }) => 
    <MessageWrapper>
        <WarningIcon />
        <span>{message}</span>
    </MessageWrapper>;

NoResult.propTypes = {
    message: PropTypes.string.isRequired
};

export default NoResult;
