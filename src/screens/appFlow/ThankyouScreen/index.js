import React, {useEffect,useState} from 'react';
import { View,   Image ,ImageBackground, TouchableOpacity } from 'react-native';
import { appStyles } from '../../../services/utilities/appstyle';
import CustomButton from '../../../components/customButton';
import CustomText from '../../../components/customText';
import { BackgroundBlack, Insta, ThumbsUp, fbLogo } from '../../../services/utilities/assets';

const Thumbsup = ThumbsUp.thumbsUp;
const fblogo = fbLogo.fbLogo;
const instalogo = Insta.Insta;

const ThankyouScreen = ({navigation}) => {

    const handleButtonPress = () => {
      navigation.navigate('appNavigation', {screen:'BottomTab',params:{screen:'HomeScreen'}});
    };
  return (
    <View style={appStyles.flexone}>
      <View style={[appStyles.thumbsUpBackBoxColor,appStyles.spacearound,appStyles.alignitemcenter,appStyles.flexone]}>
        <View style={[appStyles.thumbsUpCircle,appStyles.alignitemcenter]}>
            <Image source={Thumbsup}></Image>
        </View>
      </View>

      <View style={appStyles.flexone}>
        <ImageBackground source={BackgroundBlack.backgroundBlack}  style={appStyles.backgroundImage} >
          <View style={[appStyles.flexone,appStyles.spacearound]}>
            <CustomText style={[appStyles.fontBold,appStyles.fontsize4,appStyles.textColorWhite,appStyles.aligncenter]}>Thank You!</CustomText>
          </View>
        <View style={[appStyles.flexone,appStyles.spacearound,appStyles.marginleft, appStyles.marginright]}>
          <CustomText style={[appStyles.textColorWhite, appStyles.aligncenter, appStyles.fontsize2]}>Thanks for using our app, We hope</CustomText>
          <CustomText style={[appStyles.textColorWhite, appStyles.aligncenter, appStyles.fontsize2]}>you like it and use it again.</CustomText>
        </View>
        <View style={[appStyles.flexrow,appStyles.aligncenter,appStyles.margintop,appStyles.flexone]}>

            <TouchableOpacity style={appStyles.marginright3}>
                <Image source={fblogo} style={appStyles.fblogoStyle}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={instalogo} style={appStyles.instalogoStyle}></Image>
            </TouchableOpacity>
        </View>

        <View style={[appStyles.touchableButtonContainer,appStyles.flexone]}>
          <CustomButton text="Go Home" onPress={handleButtonPress} gradientWhite={true} styletouchableContainer={appStyles.touchableButton} styleGradientContainer={appStyles.gradientContainer}/>
        </View>
        </ImageBackground>
      </View>

    </View>
      
  );
};

export default ThankyouScreen;
