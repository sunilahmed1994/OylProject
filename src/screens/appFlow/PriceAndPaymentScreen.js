import React, { useState } from 'react';
import { View,  Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { appStyles } from '../../services/utilities/appstyle';
import CardPicHolder from '../../components/cardPicHolder';
import CustomText from '../../components/customText';
import AccountModal from '../../components/Modal';
import CustomTabBar from '../../components/customTabBar';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { AccountBlack, AffirmPay, AndroidPay, ApplePay, BackIcon, BackgroundBlack, BitPay, HomeBlack, KlarnaPay, StripePay } from '../../services/utilities/assets/assets';

const homeBlack = HomeBlack.homeBlack;
const accountBlack = AccountBlack.accountBlack;
const backArrow = BackIcon.backIcon;
const bitpay = BitPay.bitPay;
const affirmpay = AffirmPay.affermPay;
const klarnapay = KlarnaPay.klarnaPay;
const stripe = StripePay.stripePay;
const androidpay = AndroidPay.androidPay;
const applepay = ApplePay.applePay;

const PriceAndPaymentScreen = ({ route, navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
        <AccountModal isVisible={modalVisible} closeModal={closeModal} />
      };
    
      const closeModal = () => {
        setModalVisible(false);
      };

    const handleBackPress = () => {
        navigation.navigate('appNavigation', { screen: 'VehicleInfoScreen' });

    };
    const handleStripePress = () => {
        openModal();

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

                    <CustomText style={[appStyles.fontsize2, appStyles.marginleft, appStyles.fontBold, appStyles.textColorBlack]}>Select Price & Payment Method</CustomText>

                </View>
            </View>

            <View style={[appStyles.flex4, appStyles.alignitemcenter]}>
                <View style={[appStyles.flexone, appStyles.margintop4, appStyles.width70, appStyles.backgroundFFFFC8, appStyles.toprightradius, appStyles.topleftradius]}>

                </View>
                <View style={[appStyles.flex5, appStyles.backgroundwhite, appStyles.width70]}>
                    <CustomText style={[appStyles.textColorBlack, appStyles.fontsize1_2, appStyles.aligncenter, appStyles.margintop2]}>YOUR OYL AND FYLTER CHANGE WILL BE</CustomText>
                    <View style={[appStyles.flexrow, appStyles.aligncenter, appStyles.marginTop1]}>
                        <View>
                            <CustomText style={[appStyles.textColorBlack, appStyles.fontsize4, appStyles.aligncenter, appStyles.fontBold]}>$</CustomText>
                        </View>
                        <View>
                            <CustomText style={[appStyles.textColorBlack, appStyles.text87, appStyles.aligncenter, appStyles.fontBold]}>87</CustomText>
                        </View>
                    </View>
                    <CustomText style={[appStyles.textColorBlack, appStyles.fontsize1_2, appStyles.aligncenter]}>THIS WILL HAVE YOUR ROLLIN FOR 10,000 MILES-</CustomText>
                    <CustomText style={[appStyles.textColorBlack, appStyles.fontsize1_2, appStyles.aligncenter]}>SHOOT WE'LL EVEN TOP OFF YOUR WASHER FLUID</CustomText>
                    <CustomText style={[appStyles.textColorBlack, appStyles.fontsize1_2, appStyles.aligncenter]}>AND AIR UP YOUR TIRES</CustomText>

                </View>
                <View style={[appStyles.flexone, appStyles.backgroundFFFFC8, appStyles.width70, appStyles.marginbottom2, appStyles.bottomleftradius, appStyles.bottomrightradius]}>
                </View>

                <CustomText style={[appStyles.textColorWhite, appStyles.fontsizetwo, appStyles.aligncenter, appStyles.fontBold,appStyles.marginbottom2]}>Payment Methods</CustomText>
            </View>

            <View style={[appStyles.flextwo,]}>
                <View style={[appStyles.flexone, appStyles.alignitemcenter, appStyles.flexrow,appStyles.aligncenter]}>
                    <CardPicHolder style={[appStyles.cardPicContainer,appStyles.marginright1]} toggleImagePress={handleStripePress} source={stripe}/>
                    <CardPicHolder style={[appStyles.cardPicContainer,appStyles.marginright1]} toggleImagePress={handleStripePress} source={androidpay}/>
                    <CardPicHolder style={[appStyles.cardPicContainer,appStyles.marginright1]} toggleImagePress={handleStripePress} source={applepay}/>
                </View>
                <View style={[appStyles.flexone, appStyles.alignitemcenter, appStyles.flexrow,appStyles.aligncenter]}>
                    <CardPicHolder style={[appStyles.cardPicContainer,appStyles.marginright1]} toggleImagePress={handleStripePress} source={bitpay}/>
                    <CardPicHolder style={[appStyles.cardPicContainer,appStyles.marginright1]} toggleImagePress={handleStripePress} source={affirmpay}/>
                    <CardPicHolder style={[appStyles.cardPicContainer,appStyles.marginright1]} toggleImagePress={handleStripePress} source={klarnapay}/>
                </View>
                <AccountModal isVisible={modalVisible} closeModal={closeModal} navigation={navigation} paymentModal={true} backdropOpacity={0.7} transparent={true}/>

            </View>
            
          <CustomTabBar accountBlack={accountBlack} homeBlack={homeBlack} navigation={navigation}/>
          
        </ImageBackground>
    );
};

export default PriceAndPaymentScreen;