import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  image: PropTypes.string.isRequired,
};

function Image({ image }) {
  return <img src={image} alt="" />;
}

Image.propTypes = propTypes;

export default Image;
