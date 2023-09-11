import React ,{Component, useState} from 'react';
import {  Image  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SetupProfileScreen from '../../screens/appFlow/SetupProfileScreen';
import HomeScreen from '../../screens/appFlow/HomeScreen';
import AccountScreen from '../../screens/appFlow/AccountScreen';
import EditProfileScreen from '../../screens/appFlow/EditProfileScreen';
import ThankyouScreen from '../../screens/appFlow/ThankyouScreen';
import TermsPrivacyScreen from '../../screens/appFlow/TermsPrivacyScreen';
import VehicleInfoScreen from '../../screens/appFlow/VehicleInfoScreen';
import PriceAndPaymentScreen from '../../screens/appFlow/PriceAndPaymentScreen';
import { AccountBlack, HomeBlack } from '../../services/utilities/assets/assets';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab() {
  
  return (
    // <>
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen name="HomeScreen" component={HomeScreen} 
        options={{ headerShown:false,
        tabBarLabel:'Home',
         tabBarIcon:({color,size})=>(
           <Image source={HomeBlack.homeBlack} style={{ tintColor: 'black', width: responsiveWidth(6), height: responsiveHeight(4) }}/>
         )
        }}/>

      <Tab.Screen name="AccountScreen" component={AccountScreen} 
      options={{
        
        headerShown:false,
        tabBarLabel:'Account',
        tabBarIcon:({color,size})=>(
          <Image source={AccountBlack.accountBlack} style={{ tintColor: 'black', width: responsiveWidth(6), height: responsiveHeight(4) }}/>
        )
        }} 
        // listeners={{
        //   tabPress: (e) => {
        //     // Prevent the default behavior of navigating to the screen
        //     e.preventDefault();
        //     openModal(); // Open the modal instead
           
        //   },
        // }}
        />
        
        
        
    </Tab.Navigator>
    
    //  </>
  );
}

const AppNavigation =({navigation})=> {
 
    return (
     
            <Stack.Navigator >
              <Stack.Screen name="SetupProfileScreen" component={SetupProfileScreen} options={{ headerTitle: 'Set Up Your Profile' }} />
              <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown:false }}/>
              <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ headerTitle: 'Edit Profile' }} />
              <Stack.Screen name="ThankyouScreen" component={ThankyouScreen} options={{ headerShown:false }} />
              <Stack.Screen name="TermsPrivacyScreen" component={TermsPrivacyScreen} options={{ headerShown:false }} />
              <Stack.Screen name="VehicleInfoScreen" component={VehicleInfoScreen} options={{ headerShown:false }} />
              <Stack.Screen name="PriceAndPaymentScreen" component={PriceAndPaymentScreen} options={{ headerShown:false }} />
            </Stack.Navigator>
       
    );

 
};

export default AppNavigation;
