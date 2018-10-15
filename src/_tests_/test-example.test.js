import React from 'react';
import { mount } from 'enzyme';
import { createShallow } from '@material-ui/core/test-utils';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import QTY from '../product-components/qty-component';

const theme = createMuiTheme({
    typography: {
        useNextVariants: false,
        suppressDeprecationWarnings: true
    }
});

describe('Quantity Product Component', () => {

    it('should match snapshot', () => {
        const wrapper = createShallow(<QTY />);
        expect(wrapper).toMatchSnapshot();
    });

    it('invoking incrementQty() should update state by 1', () => {
        const wrapper = mount(<MuiThemeProvider theme={theme}><QTY /></MuiThemeProvider>);
        expect(wrapper.find('Qty').instance().state.qty).toBe(1);
        wrapper.find('Qty').instance().incrementQty();
        expect(wrapper.find('Qty').instance().state.qty).toBe(2);
    });

    it('invoking decrementQty() should reduce state by 1', () => {
        const wrapper = mount(<MuiThemeProvider theme={theme}><QTY /></MuiThemeProvider>);
        wrapper.find('Qty').instance().setState({ qty: 2 });
        expect(wrapper.find('Qty').instance().state.qty).toBe(2);
        wrapper.find('Qty').instance().decrementQty();
        expect(wrapper.find('Qty').instance().state.qty).toBe(1);
    });

    it('invoking decrementQty() should NOT reduce state to 0 if qty is 1', () => {
        const wrapper = mount(<MuiThemeProvider theme={theme}><QTY /></MuiThemeProvider>);
        expect(wrapper.find('Qty').instance().state.qty).toBe(1);
        wrapper.find('Qty').instance().decrementQty();
        expect(wrapper.find('Qty').instance().state.qty).toBe(1);
    });
})