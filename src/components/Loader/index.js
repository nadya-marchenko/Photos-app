import React from 'react';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import './index.css';

const Loader = () => 
    <section className='loader-area'>
        <HourglassEmptyIcon style={{ verticalAlign: 'middle' }} />
        <span className='loading-text'>Loading...</span>
    </section>;

export default Loader;