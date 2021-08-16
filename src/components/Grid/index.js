import React from 'react';
import PropTypes from 'prop-types';
import { GridLayout } from './Grid.styled';

const Grid = ({ children, col }) => 
    <GridLayout maxColumnCount={col}>
        {React.Children.toArray(children).map((item) =>
            item
        )}
    </GridLayout>;

Grid.propTypes = {
    col: PropTypes.string.isRequired
}

export default Grid;