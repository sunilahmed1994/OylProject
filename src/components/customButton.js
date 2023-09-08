import React from 'react';
import { TouchableOpacity, Text, } from 'react-native';
import { appStyles } from '../services/utilities/appstyle';
import LinearGradient from 'react-native-linear-gradient';
const CustomButton = ({ text, onPress, disabled,gradientBlack,gradientWhite,styletouchableContainer,styleGradientContainer }) => {
  return (
    <TouchableOpacity style={ styletouchableContainer} onPress={onPress}>
      { gradientWhite && (
        <LinearGradient
        colors={['#FFFFFF', '#FFFFCC']} // Specify the gradient colors
        style={styleGradientContainer}
        start={{x:0,y:0}}
        end={{x:1,y:1}}
        >
            <Text style={appStyles.touchableButtonText}>{text}</Text>
        </LinearGradient>
        )}
        { gradientBlack && (
        <LinearGradient
        colors={['#293D3D', '#000000']} // Specify the gradient colors
        style={styleGradientContainer}
        start={{x:0,y:0}}
        end={{x:1,y:1}}
        >
            <Text style={appStyles.touchableBlackButtonText}>{text}</Text>
        </LinearGradient>
        )}
    </TouchableOpacity>
  );
};



export default CustomButton;
