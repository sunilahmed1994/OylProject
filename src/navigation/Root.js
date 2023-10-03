import React ,{ useState, useEffect , useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigation from './appNavigation';
import AuthNavigation from './authNavigation';
import { AuthContext } from './authProvider';
import auth from '@react-native-firebase/auth';



const Stack = createNativeStackNavigator();

const Root =()=>{
    const {user, setUser}= useContext(AuthContext);
    const [initializing, setInitializing]= useState(true);
    // Handle user state changes
  const onAuthStateChanged= (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }
    useEffect(() => {

        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
        
    }, [])
    if(initializing) return null;
    
 
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='authNavigation' screenOptions={{headerShown:false}}>
             
              <Stack.Screen name="authNavigation" component={AuthNavigation}  />
              
              <Stack.Screen name="appNavigation" component={AppNavigation} />
              
            </Stack.Navigator>
            
        </NavigationContainer>
      
    );
 
 
};

export default Root;
