import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ProductDetails from './product-details';
import { fetchProductDetails } from './services';
import CircularProgress from '@material-ui/core/CircularProgress';

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
            <Grid item xs={12} sm={6}>
              Product Image Viewer
          </Grid>
            <Grid item xs={12} sm={6}>
              <ProductDetails productData={productData} />
            </Grid>
            <Grid item xs={12} sm={6}>
              Product Review Component
          </Grid>
          </Grid>}
      </MuiThemeProvider>
    );
  }
}

export default ProductPage;
