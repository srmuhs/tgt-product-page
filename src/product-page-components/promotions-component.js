import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    promoColor: {
        color: red[800]
    }
});

const Promotions = (props) => {
    const { promotions, classes } = props;

    return (
        <Grid container>
            {
                promotions.map(promotion => {
                    return (
                        <Grid item xs={12} key={promotion.promotionIdentifier} >
                            <Grid container spacing={8} alignItems={'center'} wrap={'nowrap'}>
                                <Grid item><Icon className={classes.promoColor}>local_offer</Icon></Grid>
                                <Grid item><Typography className={classes.promoColor} variant={'body2'}>{promotion.Description[0].shortDescription}</Typography></Grid>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Grid>
    );

}

export default withStyles(styles)(Promotions);

Promotions.defaultProps = {
    promotions: []
}

Promotions.propTypes =
    {
        promotions: PropTypes.array
    };