import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Highlights = (props) => {
    const { features } = props;
    return (
        <React.Fragment>
            <Typography variant={'h5'}>product highlights</Typography>
            <ul>
                {features.map(feature => <Typography variant={'caption'} style={{ padding: '5px 0' }}><li dangerouslySetInnerHTML={{ __html: feature }} /></Typography>)}
            </ul>
        </React.Fragment>
    );
}

export default Highlights;

Highlights.defaultProps = {
    features: []
}

Highlights.propTypes =
    {
        features: PropTypes.array
    };