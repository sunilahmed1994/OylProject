import React, { useEffect, useState } from 'react';
import { View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { appStyles } from '../../services/utilities/appstyle';
import CustomText from '../../components/customText';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { BackIcon, BackgroundBlack } from '../../services/utilities/assets/assets';


const backArrow = BackIcon.backIcon;

const TermsPrivacyScreen = ({ route, navigation }) => {

  const { headerlabel } = route['params'];
  console.log(headerlabel);

  const handleBackPress = () => {
    // navigation.navigate('appNavigation', {screen:'BottomTab'});
    navigation.goBack();

  };
  return (
    <ImageBackground source={BackgroundBlack.backgroundBlack} style={appStyles.backgroundImage} >

      <View style={[{ backgroundColor: 'white', height: responsiveHeight(10) }, appStyles.flexrow,]}>
        <View style={[appStyles.spacearound, appStyles.marginleft]}>
          <TouchableOpacity onPress={handleBackPress}>
            <Image source={backArrow} style={{ height: responsiveWidth(4), width: responsiveWidth(4) }} />
          </TouchableOpacity>
        </View>
        <View style={[appStyles.spacearound, appStyles.marginleft]}>

          <CustomText style={[appStyles.fontsize2, appStyles.marginleft, appStyles.fontBold, appStyles.textColorBlack]}>{headerlabel}</CustomText>

        </View>
      </View>
      <ScrollView>
        <View style={appStyles.flexone}>
          <CustomText style={[appStyles.textColorWelcome, appStyles.marginleft3, appStyles.margintop, appStyles.marginright3]}>Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris</CustomText>
          <CustomText style={[appStyles.textColorWelcome, appStyles.marginleft3, appStyles.margintop, appStyles.marginright3]}>Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.</CustomText>
          <CustomText style={[appStyles.textColorWelcome, appStyles.marginleft3, appStyles.margintop, appStyles.marginright3]}>Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo.</CustomText>
          <CustomText style={[appStyles.textColorWelcome, appStyles.marginleft, appStyles.margintop, appStyles.marginright3]}>Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.</CustomText>
          <CustomText style={[appStyles.textColorWelcome, appStyles.marginleft3, appStyles.margintop, appStyles.marginright3]}>Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris</CustomText>
          <CustomText style={[appStyles.textColorWelcome, appStyles.marginleft3, appStyles.margintop, appStyles.marginright3]}>Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim.</CustomText>
        </View>
      </ScrollView>

    </ImageBackground>
  );
};

export default TermsPrivacyScreen;