import React from 'react';
import Divider from '@material-ui/core/Divider';
import Pricing from './product-page-components/pricing-component';
import Promotions from './product-page-components/promotions-component';
import Returns from './product-page-components/returns-component';
import Qty from './product-page-components/qty-component';
import CallToAction from './product-page-components/cta-component';
import Highlights from './product-page-components/highlights-component';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

const ProductDetails = (props) => {
    const {
        productData: {
            purchasingChannelCode,
            Promotions: promotions,
            Offers,
            ItemDescription
        }
    } = props;

    return (
        <Grid container>
            <Grid item xs={12}>
                <Pricing price={Offers[0].OfferPrice[0].formattedPriceValue} priceQualifier={Offers[0].OfferPrice[0].priceQualifier} />
            </Grid>
            <Grid item xs={12} style={{ margin: '25px 0 5px 0' }} >
                <Divider />
            </Grid>
            <Grid item xs={12}>
                <Promotions promotions={promotions} />
            </Grid>
            <Grid item xs={12} style={{ margin: '5px 0 25px 0' }} >
                <Divider />
            </Grid>
            <Grid item xs={6} style={{ margin: '0 0 25px 0' }}>
                <Qty />
            </Grid>
            <Grid container item xs={12} spacing={8}>
                {(purchasingChannelCode === '0' || purchasingChannelCode === '2') && <Grid item xs={6}>
                    <Button style={{ backgroundColor: grey[900], color: grey[50] }} variant="contained" size="medium" fullWidth>
                        PICK UP IN STORE
                    </Button>
                </Grid>}
                {(purchasingChannelCode === '0' || purchasingChannelCode === '1') && <Grid item xs={6} >
                    <Button style={{ backgroundColor: red[700], color: grey[50] }} variant="contained" size="medium" fullWidth>
                        ADD TO CART
                    </Button>
                </Grid>}
            </Grid>
            <Grid item xs={12} style={{ marginTop: '25px' }}>
                <Returns returnPolicy={'This item must be returned with 30 days of the ship date. See return policy for details. Prices, promotions, styles and availablity may vary by store and online.'} />
            </Grid>
            <Grid item xs={12} style={{ marginTop: '25px' }}>
                <CallToAction />
            </Grid>
            <Grid item xs={12} style={{ marginTop: '15px' }}>
                <Highlights features={ItemDescription[0].features} />
            </Grid>
        </Grid>
    )
}

export default ProductDetails;

