
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { appStyles } from '../services/utilities/appstyle';
import CustomText from './customText';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';



const CustomTabBar = ({ navigation,homeWhite,homeBlack, accountWhite, accountBlack, }) => {

    const homeIconPress = () => {
        navigation.navigate('appNavigation', { screen: 'BottomTab',params:{screen:'HomeScreen'} });
        accountWhite=false;
        homeWhite=false;
    };
    const accountIconPress = () => {
        navigation.navigate('appNavigation', { screen: 'BottomTab', params:{screen:'AccountScreen'} })
    };

    return (
        <View>
        { (accountWhite && homeWhite) && (
        <View style={[appStyles.flexrow,appStyles.marginTop1]}>

            <View style={[appStyles.alignitemcenter,appStyles.spacearound,appStyles.flexone]}>
                <TouchableOpacity onPress={homeIconPress}>
                    <Image source={homeWhite} style={{width:responsiveWidth(7),height:responsiveWidth(7)}}/>
                    <CustomText style={[appStyles.marginTop1,appStyles.textColorWhite]}>{'Home'}</CustomText>
                </TouchableOpacity>
            </View>
            <View style={[appStyles.alignitemcenter,appStyles.spacearound,appStyles.flexone]}>
                <TouchableOpacity onPress={accountIconPress}>
                    <Image source={accountWhite} style={{width:responsiveWidth(7),height:responsiveWidth(7)}}/>
                    <CustomText style={[appStyles.marginTop1,appStyles.textColorWhite]}>{'Account'}</CustomText>
                </TouchableOpacity>
            </View>
            

        </View>
     ) }
     { (accountBlack && homeBlack ) && (
        <View style={[appStyles.flexrow,appStyles.marginTop1,{backgroundColor:'white'}]}>

            <View style={[appStyles.alignitemcenter,appStyles.spacearound,appStyles.flexone]}>
                <TouchableOpacity onPress={homeIconPress}>
                    <Image source={homeBlack} style={{width:responsiveWidth(7),height:responsiveWidth(7)}}/>
                    <CustomText style={[appStyles.marginTop1,appStyles.textColorBlack]}>{'Home'}</CustomText>
                </TouchableOpacity>
            </View>
            <View style={[appStyles.alignitemcenter,appStyles.spacearound,appStyles.flexone]}>
                <TouchableOpacity onPress={accountIconPress}>
                    <Image source={accountBlack} style={{width:responsiveWidth(7),height:responsiveWidth(7)}}/>
                    <CustomText style={[appStyles.marginTop1,appStyles.textColorBlack]}>{'Account'}</CustomText>
                </TouchableOpacity>
            </View>
            

        </View>
     ) }
     </View>
    );
};



export default CustomTabBar;

