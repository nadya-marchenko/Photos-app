import React from 'react';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import { LoaderArea, LoaderText } from './Loader.styled';

const Loader = () => 
    <LoaderArea className='loader-area'>
        <HourglassEmptyIcon style={{ verticalAlign: 'middle' }} />
        <LoaderText className='loading-text'>Loading...</LoaderText>
    </LoaderArea>;

export default Loader;