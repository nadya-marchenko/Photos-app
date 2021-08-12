import React from 'react';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import { LoaderArea, LoaderText } from './Loader.styled';

const Loader = () => 
    <LoaderArea>
        <HourglassEmptyIcon style={{ verticalAlign: 'middle' }} />
        <LoaderText>Loading...</LoaderText>
    </LoaderArea>;

export default Loader;