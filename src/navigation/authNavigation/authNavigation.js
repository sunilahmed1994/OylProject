import React  from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/authFlow/LoginScreen';
import SignUpScreen from '../../screens/authFlow/SignUpScreen';


const Stack = createNativeStackNavigator();

const AuthNavigation =()=> {
 
    return (
     
         
            <Stack.Navigator >
              <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerTitle: 'Create Account' }} />
            </Stack.Navigator>
         
      
    );
  
 
};

export default AuthNavigation;
