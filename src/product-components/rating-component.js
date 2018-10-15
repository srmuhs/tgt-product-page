import React from 'react';
import Star from '@material-ui/icons/Star';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import PropTypes from 'prop-types';

const Rating = (props) => {

    return (
        <div>
            {[...Array(5)].map((i, index) => {
                return (
                    <Star key={index} style={{ color: index <= props.rating - 1 ? red[800] : grey[400], fontSize: props.variant === 'small' ? '14px' : '24px' }} />
                )
            })}
        </div>
    )
}

export default Rating;

Rating.defaultProps = {
    rating: 0,
    variant: 'large'
}
Rating.propTypes = {
    rating: PropTypes.number,
    variant: PropTypes.string
}