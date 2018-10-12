import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    container: {
        border: `1px solid ${grey[400]}`,
        borderRadius: '4px',
        padding: '5px'
    },
    icon: {
        color: grey[400],
        verticalAlign: 'middle',
        cursor: 'pointer'
    }
});

class Qty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 1
        };

        this.decrementQty = this.decrementQty.bind(this);
        this.incrementQty = this.incrementQty.bind(this);
    }

    incrementQty() {
        this.setState(prevState => ({
            qty: ++prevState.qty
        }));
    }

    decrementQty() {
        if (this.state.qty > 1) {
            this.setState(prevState => ({
                qty: --prevState.qty
            }));
        }
    }

    render() {
        const { classes } = this.props;
        const { qty } = this.state;

        return (
            <Grid container className={classes.container} alignItems={'center'}>
                <Grid item style={{ flexGrow: '1' }}><Typography variant={'caption'}>quantity:</Typography></Grid>
                <Grid item><Icon className={classes.icon} onClick={this.decrementQty}>remove_circle</Icon></Grid>
                <Grid item style={{ padding: '0 5px' }}><Typography variant={'caption'}>{qty}</Typography></Grid>
                <Grid item ><Icon className={classes.icon} onClick={this.incrementQty}>add_circle</Icon></Grid>
            </Grid>
        );
    };

}

export default withStyles(styles)(Qty);
