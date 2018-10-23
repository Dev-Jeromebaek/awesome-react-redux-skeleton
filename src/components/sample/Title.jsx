import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onChangeColor: PropTypes.func.isRequired,
};

function Title({ title, color, onChangeColor }) {
  const style = {
    color,
  };
  return (
        <div>
            <h1 style={style}>{title}</h1>
            <button type="button" onClick={onChangeColor}>
                changeColor
            </button>
        </div>
  );
}

Title.propTypes = propTypes;

export default Title;
