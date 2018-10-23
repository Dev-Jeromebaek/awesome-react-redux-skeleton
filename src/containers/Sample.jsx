import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Title from '../components/sample/Title';
import Image from '../components/sample/Image';

import * as actions from '../actions';
import { getModuleColor } from '../modules';

function createWarning(funcName) {
  return () => console.warn(`${funcName} is not defined in Counter.jsx`);
}

const propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  sampleAction1: PropTypes.func,
  sampleAction2: PropTypes.func,
  changeColor: PropTypes.func,
};

const defaultProps = {
  sampleAction1: createWarning('sampleAction1'),
  sampleAction2: createWarning('sampleAction2'),
  changeColor: createWarning('changeColor'),
};

class Sample extends Component {
    setColor = () => {
      const { changeColor } = this.props;
      changeColor(getModuleColor());
    };

    render() {
      const {
        title,
        color,
        image,
        sampleAction1,
        sampleAction2,
      } = this.props;
      return (
            <div>
                <Title
                  title={title}
                  color={color}
                  onChangeColor={this.setColor}
                  sampleAction1={sampleAction1}
                />
                <Image image={image} sampleAction2={sampleAction2} />
            </div>
      );
    }
}

const mapStateToProps = state => ({
  title: state.sampleReducer1.title,
  color: state.sampleReducer1.color,
  image: state.sampleReducer2.image,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

Sample.propTypes = propTypes;
Sample.defaultProps = defaultProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sample);
