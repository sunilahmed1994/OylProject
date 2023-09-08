import React from 'react';
import { View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { appStyles } from '../services/utilities/appstyle';

const CustomCheckbox = ({  isChecked, onCheckChange,tintcolor="" }) => {
  return (
    <View style={appStyles.checkboxContainer}>
      <CheckBox
        value={isChecked}
        onValueChange={onCheckChange}
        style={appStyles.checkBox} // Apply custom checkbox style
        tintColors={{ true: tintcolor, false: tintcolor }}
      />
    </View>
   
  );
};



export default CustomCheckbox;
