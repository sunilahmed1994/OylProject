import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Image, ImageBackground, Alert, ActivityIndicator } from 'react-native';
import { appStyles } from '../../services/utilities/appstyle';
import CustomInput from '../../components/customInputField';
import CustomButton from '../../components/customButton';
import CustomTouchableText from '../../components/customTextTouchable';
import { OYLLogo, BackgroundBlack, Eye } from '../../services/utilities/assets/assets';
import { AuthContext } from '../../../src/navigation/authProvider';
import { firebase } from '@react-native-firebase/firestore';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Track password visibility
  const [existingUsers, setExistingUsers] = useState([]); // To store existing user data
  const [userExists, setUserExists] = useState(false);
  const [isLoading, setLoading] = useState(false); // Add isLoading state
  const { login, isLoggedIn, logout } = useContext(AuthContext);

  const handleTextPress = () => {
    setLoading(false);
    navigation.navigate('authNavigation', { screen: 'SignUpScreen' });
  };


  const handleButtonPress = async () => {
    if (!isValidEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    } else if (!isValidPassword(password)) {
      Alert.alert('Invalid Password', 'Please enter a valid password.');
    } else {
      setLoading(true);
      const loginSuccessful = await login(email, password);
      console.log("login successful", loginSuccessful);
      if (loginSuccessful) {
        navigation.navigate('appNavigation', { screen: 'BottomTab',params:{screen:'HomeScreen'} });
        Alert.alert('Welcome', email);
        Alert.alert('Error Occured');
        setLoading(false);
      }
      setLoading(false);
      //  {  login(email, password) ? (navigation.navigate('appNavigation', { screen: 'SetupProfileScreen' }), Alert.alert('Welcome', email),setLoading(false)) : (Alert.alert('Error Occured'));}


    }

  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };
  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidPassword = (password) => {
    return password.trim() !== ''; // Check if the password is not empty
  };
  // const fetchExistingUsers = async () => {
  //   try {
  //     const usersCollection = firebase.firestore().collection('users');
  //     const snapshot = await usersCollection.get();
  //     const usersData = snapshot.docs.map(doc => doc.data());
  //     setExistingUsers(usersData);
  //   } catch (error) {
  //     console.error('Error fetching existing users:', error);
  //   }
  // };
  useEffect(() => {
    // fetchExistingUsers();
    logout();
    // loadSavedCredentials();
  }, []);
  return (
    <View style={appStyles.flexone}>
      <ImageBackground source={BackgroundBlack.backgroundBlack} style={appStyles.backgroundImage} >


        <View style={appStyles.loginHeaderImageView}>
          <Image
            source={OYLLogo.OYLLogo}
          />
        </View>

        <View style={{ flex: 1.3 }}>
          <Text style={[appStyles.textColorWelcome]}>Enter your Email & Password to log in!</Text>
          <CustomInput
            styleContainer={[appStyles.customInputContainer, appStyles.flexrow]}
            styleInput={[appStyles.input]}
            label="Email"
            placeholder="micktason@email.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address" // Specify numeric keyboard for phone number
            secureTextEntry={false}
          />
          <View style={appStyles.marginTop1}>
            <CustomInput
              styleContainer={[appStyles.customInputContainer, appStyles.flexrow]}
              styleInput={[appStyles.input]}
              label="Password"
              placeholder="Enter your Password"
              value={password}
              onChangeText={setPassword}
              keyboardType="default" // Specify numeric keyboard for phone number
              secureTextEntry={!showPassword}
              source={Eye.eye}
              toggleImagePress={handleTogglePassword}
            />
          </View>
          <View style={appStyles.touchableText}>
            <Text style={[appStyles.textColorWelcome]}>Do not have an account?</Text>
            <CustomTouchableText text="Create" onPress={handleTextPress} style={[appStyles.textColorWelcome, appStyles.fontBold]} />
          </View>
          <View style={appStyles.touchableButtonContainer}>
            {isLoading ? (
              <ActivityIndicator size="large" color="white" /> // Display loading indicator
            ) : (
              <CustomButton text="LUBE ME UP!" onPress={handleButtonPress} gradientWhite={true} styletouchableContainer={appStyles.touchableButton} styleGradientContainer={appStyles.gradientContainer} />
            )}
          </View>
        </View>

      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
