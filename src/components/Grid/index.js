import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Grid = (props) => {
    return(
        <section className='layout'>
            {React.Children.toArray(props.children).map((item) => {
                return (
                <article style={{ flexBasis: `${(12 / props.col / 12) * 100 - 15}%`}}>
                    {item}
                </article>
             )   
          })}
        </section>
    )
}

Grid.propTypes = {
    col: PropTypes.number.isRequired
}

export default Grid;