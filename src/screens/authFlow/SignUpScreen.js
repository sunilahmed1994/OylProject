import React, { useContext, useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { appStyles } from '../../services/utilities/appstyle';
import CustomInput from '../../components/customInputField';
import CustomButton from '../../components/customButton';
import CustomCheckbox from '../../components/customCheckBox';
import CustomTouchableText from '../../components/customTextTouchable';
import CustomText from '../../components/customText';
import { BackgroundBlack, Eye } from '../../services/utilities/assets/assets';
import { AuthContext } from '../../../src/navigation/authProvider';

const SignUpScreen = ({ navigation }) => {
    const { user } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Track password visibility
    const [isLoading, setLoading] = useState(false); // Add isLoading state
    const { register } = useContext(AuthContext);


    const handleTermsOfServicePress = () => {
        // if (isChecked) {
        const termsofservicelabel = 'Terms of Service';
        navigation.navigate('appNavigation', { screen: 'TermsPrivacyScreen', params: { headerlabel: termsofservicelabel } });
        // } else {
        //     Alert.alert('Please accept the terms and conditions.');
        // }
    };
    const handlePrivacyPolicyPress = () => {
        // if (isChecked) {
        const termsofservicelabel = 'Privacy Policy';
        navigation.navigate('appNavigation', { screen: 'TermsPrivacyScreen', params: { headerlabel: termsofservicelabel } });
        // } else {
        //     Alert.alert('Please accept the terms and conditions.');
        // }
    };
    const handleTogglePassword = () => {
        setShowPassword(!showPassword); // Toggle password visibility
    };

    const handleCheckChange = () => {

        setIsChecked(!isChecked);
    };


    const handleButtonPress = async () => {
        if (isChecked) {
            if (!isValidEmail(email)) {
                Alert.alert('Invalid Email', 'Please enter a valid email address.');
                return;
            } else if (!isValidPassword(password)) {
                Alert.alert('Invalid Password', 'Please enter a valid password.');
                return;
            }
            setLoading(true);
            const registerSuccessful = await register(email, password);
            if (registerSuccessful) {
                navigation.navigate('appNavigation', { screen: 'SetupProfileScreen' });
                Alert.alert('SignUp Successfully','Welcome', email);
                setLoading(false);
            } else {
                Alert.alert('This Email is Already in use by another account.');
                setLoading(false);
            }
            setLoading(false);
            // await register(email, password) ? navigation.navigate('appNavigation', { screen: 'SetupProfileScreen' }) : (Alert.alert('Registration Error', error.message),setLoading(false))



        }
    };
    // Password validation function
    const isValidPassword = (password) => {
        return password.trim() !== ''; // Check if the password is not empty
    };
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    return (
        <ImageBackground source={BackgroundBlack.backgroundBlack} style={appStyles.backgroundImage} >


            <View style={appStyles.flexone}>
                <View style={appStyles.margintop}>
                    <CustomInput
                        styleContainer={[appStyles.customInputContainer, appStyles.flexrow]}
                        styleInput={[appStyles.input]}
                        label="Email"
                        placeholder="micktason@email.com"
                        value={email}
                        onChangeText={setEmail} // Pass the function to update the email state
                        secureTextEntry={false}
                        keyboardType="email-address"
                    />
                </View>
                <View style={[appStyles.margintop]}>

                    <CustomInput
                        styleContainer={[appStyles.customInputContainer, appStyles.flexrow]}
                        styleInput={[appStyles.input]}
                        label="Password"
                        placeholder="*****************"
                        value={password}
                        onChangeText={setPassword}
                        keyboardType="default" // Specify numeric keyboard for phone number
                        secureTextEntry={!showPassword}
                        source={Eye.eye}
                        toggleImagePress={handleTogglePassword}
                    />

                </View>
                <View style={[appStyles.alignitemcenter, appStyles.flexrow, appStyles.margintop]}>

                    <CustomCheckbox
                        isChecked={isChecked}
                        onCheckChange={handleCheckChange}
                        tintcolor='#FFFFC8'
                    />
                    <CustomText style={appStyles.textColorWelcome}>I accept the </CustomText>
                    <CustomTouchableText text="Terms of Service" onPress={handleTermsOfServicePress} style={[appStyles.textColorWelcome, appStyles.fontBold]} />
                    <CustomText style={appStyles.textColorWelcome}> and</CustomText>
                    <CustomTouchableText text=" Privacy Policy" onPress={handlePrivacyPolicyPress} style={[appStyles.textColorWelcome, appStyles.fontBold]} />
                </View>

                <View style={appStyles.touchableButtonContainer}>
                    {isLoading ? (
                        <ActivityIndicator size="large" color="white" /> // Display loading indicator
                    ) : (
                        <CustomButton text="Lets go!" onPress={handleButtonPress} disabled={!isChecked} gradientWhite={true} styletouchableContainer={appStyles.touchableButton} styleGradientContainer={appStyles.gradientContainer} />
                    )}
                </View>
            </View>


        </ImageBackground>
    );
};

export default SignUpScreen;
