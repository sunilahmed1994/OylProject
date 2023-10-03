import {React,useState} from 'react';
import { TextInput, View, Text, TouchableOpacity, Image,  } from 'react-native';
import { appStyles } from '../../services/utilities/appstyle';

const CustomInput = ({ 
  label, 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry, 
  keyboardType, 
  source, 
  toggleImagePress, 
  maxLength, 
  styleContainer, 
  styleInput, 
  inputtext2,
  onFocus,
  onBlur, 
  isFocused,
}) => {
  
  
  return (
    <View style={[styleContainer, isFocused ? { backgroundColor: '#FFFFC8' } : 'white',]}>
      <View style={{ flex: 4 }}>
        <Text style={[appStyles.label, appStyles.fontBold]}>{label}</Text>
        {onChangeText ? (
          <TextInput
            style={[styleInput]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            maxLength={maxLength} // Add the maxLength prop
            onFocus={onFocus}
            onBlur={onBlur}

          />
        ) : (
          <Text style={inputtext2}>{value}</Text>
        )}
      </View>
      <View style={{ flex: 0.5 }}>
        <TouchableOpacity onPress={toggleImagePress}><Image source={source} /></TouchableOpacity>
      </View>
    </View>
  );
};



export default CustomInput;
