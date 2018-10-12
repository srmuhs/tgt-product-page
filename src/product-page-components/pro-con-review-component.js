import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Rating from './rating-component';

const styles = theme => ({
    root: {
        backgroundColor: grey[200]
    }
});
const ProConReviews = (props) => {

    const { classes, pro, con } = props;
    const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    return (
        <Grid container className={classes.root} style={{ padding: '8px' }}>
            <Grid item xs={12} container spacing={32}>
                <Grid item xs={6}>
                    <Typography variant={'subtitle2'}>PRO</Typography>
                    <Typography variant={'caption'}>most helpful 4-5 star review</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant={'subtitle2'}>CON</Typography>
                    <Typography variant={'caption'}>most helpful 1-2 star review</Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} style={{ padding: '10px 0' }}>
                <Divider />
            </Grid>
            <Grid item xs={12} container spacing={32}>
                <Grid item xs={6}>
                    <Rating rating={5} variant={'small'} />
                    <Typography variant={'subtitle2'}>{pro.title}</Typography>
                    <Typography variant={'caption'}>{pro.review}</Typography>
                    <br />
                    <Typography variant={'caption'}><b>{pro.screenName}</b> {new Date(pro.datePosted).toLocaleString('en-us', dateOptions)}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Rating rating={5} variant={'small'} />
                    <Typography variant={'subtitle2'}>{con.title}</Typography>
                    <Typography variant={'caption'}>{con.review}</Typography>
                    <br />
                    <Typography variant={'caption'}><b>{con.screenName}</b> {new Date(con.datePosted).toLocaleString('en-us', dateOptions)}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(ProConReviews);
