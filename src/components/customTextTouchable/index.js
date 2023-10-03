import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { appStyles } from '../../services/utilities/appstyle';

const CustomTouchableText = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} > 
        <Text style={style}>{text}</Text>
    </TouchableOpacity>
  );
};


export default CustomTouchableText;
