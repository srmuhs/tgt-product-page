import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const Pricing = (props) => {
    const { price, priceQualifier } = props;

    return (
        <Grid container spacing={8} alignItems={'baseline'}>
            <Grid item ><Typography variant={'h6'}>{price}</Typography></Grid>
            <Grid item><Typography variant={'caption'}>{priceQualifier}</Typography></Grid>
        </Grid>
    );
}

export default Pricing;

Pricing.defaultProps = {
    price: "n/a",
    priceQualifier: 'n/a'
}

Pricing.propTypes =
    {
        price: PropTypes.string,
        priceQualifier: PropTypes.string
    }