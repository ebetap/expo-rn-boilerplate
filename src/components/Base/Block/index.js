import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { sizes, colors } from '../../../constants/theme';

const handlePaddingAndMargin = (type, value) => {
  const { horizontal, vertical, top, bottom, left, right } = value;

  if (typeof value === 'number') {
    return {
      [`${type}`]: value
    };
  }

  return {
    [`${type}Horizontal`]: horizontal,
    [`${type}Vertical`]: vertical,
    [`${type}Top`]: top,
    [`${type}Bottom`]: bottom,
    [`${type}Left`]: left,
    [`${type}Right`]: right
  };
};

const Block = props => {
  const { style, blockRef, children, ...blockProps } = props;

  const blockStyles = [style];

  return (
    <View ref={blockRef} style={blockStyles} {...blockProps}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Block;
