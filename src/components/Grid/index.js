import React from 'react';
import PropTypes from 'prop-types';
import { GridItem, GridLayout } from './Grid.styled';

const Grid = ({ children, col }) => {
    return(
        <GridLayout maxColumnCount={col}>
            {React.Children.toArray(children).map((item) => {
                return (
                <GridItem maxColumnCount={col}>
                    {item}
                </GridItem>
             )   
          })}
        </GridLayout>
    )
}

Grid.propTypes = {
    col: PropTypes.string.isRequired
}

export default Grid;