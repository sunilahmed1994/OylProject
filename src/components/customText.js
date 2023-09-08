import React from 'react';
import { Text } from 'react-native';

const CustomText = ({ children, style }) => {
  return <Text style={ [style,]}>{children}</Text>;
};



export default CustomText;
