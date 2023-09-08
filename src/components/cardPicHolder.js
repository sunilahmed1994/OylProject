import React from 'react';
import { TouchableOpacity, Text,View,Image } from 'react-native';
import { appStyles } from '../services/utilities/appstyle';

const CardPicHolder = ({  toggleImagePress,style,source}) => {
  return (
    <View style={style}>
       <TouchableOpacity onPress={toggleImagePress}><Image source={source}/></TouchableOpacity>
      </View>
  );
};



export default CardPicHolder;
