import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Rating from '../product-components/rating-component';
import ProConReviews from '../product-components/pro-con-review-component';

const ProductReviews = (props) => {
    const { reviews} = props;

    return (

        <Grid container>
            <Grid item xs={12} container alignItems={'baseline'} spacing={8}>
                <Grid item>
                    <Rating rating={Number(reviews.consolidatedOverallRating)} />
                </Grid>
                <Grid item style={{ flexGrow: '1' }}>
                    <Typography variant={'caption'}><b>overall</b></Typography>
                </Grid>
                <Grid item>
                    <a href='/#'><Typography variant={'caption'}><b>view all {reviews.totalReviews} reviews</b></Typography></a>
                </Grid>
            </Grid >
            <Grid item xs={12} style={{ paddingTop: '10px' }}>
                <ProConReviews pro={reviews.Pro[0]} con={reviews.Con[0]} />
            </Grid>
        </Grid >
    )
}


export default ProductReviews;

ProductReviews.propTypes = {
    reviews: PropTypes.object
}