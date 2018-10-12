import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';

const Returns = (props) => {
    const { returnPolicy } = props;

    return (
        <Grid container spacing={8} alignItems={'center'} wrap={'nowrap'}>
            <Grid item style={{ borderRight: `2px solid ${grey[400]}`, padding: '0 8px 0 0' }}><Typography variant={'subtitle1'}>returns</Typography></Grid>
            <Grid item style={{ paddingLeft: '8px' }}><Typography variant={'caption'}>{returnPolicy}</Typography></Grid>
        </Grid>
    );
}

export default Returns;

Returns.defaultProps = {
    returnPolicy: "n/a"
}

Returns.propTypes =
    {
        returnPolicy: PropTypes.string
    }