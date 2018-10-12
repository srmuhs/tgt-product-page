import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        height: '20px',
        backgroundColor: grey[200],
        color: grey[80],
        padding: '0 0',
        boxShadow: 'none'
    }
});

const CallToAction = (props) => {
    const { classes } = props;
    return (
        <Grid container spacing={8}>
            <Grid item xs={4}>
                <Button className={classes.button} variant="contained" size="medium" fullWidth>
                    <Typography variant={'caption'}>ADD TO REGISTRY</Typography>
                </Button>
            </Grid>
            <Grid item xs={4}>
                <Button className={classes.button} variant="contained" size="medium" fullWidth>
                    <Typography variant={'caption'}>ADD TO LIST</Typography>
                </Button>
            </Grid>
            <Grid item xs={4}>
                <Button className={classes.button} variant="contained" size="medium" fullWidth>
                    <Typography variant={'caption'}>SHARE</Typography>
                </Button>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(CallToAction);
