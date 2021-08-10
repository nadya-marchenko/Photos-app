import React from 'react';
import PropTypes from 'prop-types';
import { GridItem, GridLayout } from './Grid.styled';

const Grid = ({ children, col }) => {
    return(
        <GridLayout>
            {React.Children.toArray(children).map((item) => {
                return (
                <GridItem key={children.key} style={{ flexBasis: `${(12 / col / 12) * 100 - 15}%`}}>
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