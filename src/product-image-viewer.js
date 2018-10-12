import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ZoomIn from '@material-ui/icons/ZoomIn';
import Close from '@material-ui/icons/Close';
import Hidden from '@material-ui/core/Hidden';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
    carouselImage: {
        width: '40px !important',
        height: '40px',
        '&:hover': {
            border: `1px solid ${grey[500]}`,
            borderRadius: '2px'
        }
    },
    imgSlider: {
        color: 'black !important'
    }
});

class ProductImageViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeImg: props.images[0].PrimaryImage[0].image,
            imgCollection: [props.images[0].PrimaryImage[0], ...props.images[0].AlternateImages]
        };
    }

    renderCarousel() {
        const { classes } = this.props;
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <Slider className='slider' {...settings} prevArrow={<ChevronLeft />} nextArrow={<ChevronRight />}>
                {
                    this.state.imgCollection.map(img => {
                        return (<img className={classes.carouselImage} src={img.image} alt={img.image} onClick={() => this.setState({ activeImg: img.image })} />)
                    })
                }
            </Slider>
        )
    }

    render() {
        console.log(this.state);
        return (
            <Grid container direction={'column'} spacing={8}>
                <Grid item style={{ textAlign: 'center', flexGrow: '1', width: '100%' }}>
                    <img style={{ width: '100%', maxWidth: '930px' }} src={this.state.activeImg} alt='product-img' />
                </Grid>
                <Hidden xsDown>
                    <Grid item style={{ textAlign: 'center' }}>
                        <IconButton onClick={() => this.setState({ showImageModal: true })}><ZoomIn /></IconButton><Typography variant={'caption'} style={{ display: 'inline-block' }}>View Larger</Typography>
                    </Grid>
                </Hidden>
                <Grid item style={{ textAlign: 'center' }}>
                    {this.renderCarousel()}
                </Grid>
                <Modal
                    onClose={() => this.setState({ showImageModal: false })}
                    open={this.state.showImageModal}>
                    <div style={{ textAlign: 'center', position: 'relative', width: '100%' }}>
                        <img style={{ width: '80%' }} src={this.state.activeImg} alt='product-img' />
                        <IconButton style={{ top: '10px', right: '10px', position: 'absolute' }} onClick={() => this.setState({ showImageModal: false })}><Close /></IconButton>
                    </div>
                </Modal>
            </Grid>
        )
    }
}

export default withStyles(styles)(ProductImageViewer);

ProductImageViewer.propTypes = {
    images: PropTypes.array
}