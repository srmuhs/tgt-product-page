import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ProductDetails from './product-details';
import ProductImageViewer from './product-page-components/product-image-viewer';
import ProductReviewCard from './product-reviews';
import { fetchProductDetails } from './services';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  typography: {
    useNextVariants: false,
    suppressDeprecationWarnings: true
  }
});

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      productData: fetchProductDetails().CatalogEntryView[0],
      isLoading: false
    });
  }

  render() {
    const { productData, isLoading } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        {!isLoading &&
          <Grid container style={{ padding: '100px 30px' }}>
            <Grid container item xs={12} sm={6} direction={'column'} spacing={32} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              <Grid item style={{ margin: '0 50px ', textAlign: 'center' }}>
                <Typography variant={'h5'}>{productData.title}</Typography>
              </Grid>
              <Grid container item>
                <ProductImageViewer images={productData.Images} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ProductDetails productData={productData} />
            </Grid>
            <Grid item container xs={12} sm={6} alignItems={'baseline'} spacing={8}>
              <Grid item xs={12}>
                <ProductReviewCard reviews={productData.CustomerReview[0]}/>
              </Grid>
            </Grid >
          </Grid >
        }
      </MuiThemeProvider>
    );
  }
}

export default ProductPage;
