import React, { useEffect, useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { appStyles } from '../../services/utilities/appstyle';
import CustomInput from '../../components/customInputField';
import CustomButton from '../../components/customButton';
import CustomTabBar from '../../components/customTabBar';
import { AccountWhite, BackgroundBlack, Calendar, HomeWhite } from '../../services/utilities/assets/assets';
import { firebase } from '@react-native-firebase/firestore'; // Import Firestore

const homeWhite = HomeWhite.homeWhite;
const accountWhite = AccountWhite.accountWhite;
const EditProfileScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [vehicleMake, setVehicleMake] = useState('');
    const [vehicleModal, setVehicleModal] = useState('');
    const [vehicleYear, setVehicleYear] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehicleMileage, setVehicleMileage] = useState('');

    const handleBirthdayChange = (newBirthday) => {
        // Remove non-numeric characters
        const numericValue = newBirthday.replace(/\D/g, '');

        // Validate and format the input as DD/MM/YYYY
        if (numericValue.length <= 2) {
            setBirthday(numericValue);
        } else if (numericValue.length <= 4) {
            setBirthday(`${numericValue.slice(0, 2)}/${numericValue.slice(2)}`);
        } else if (numericValue.length <= 6) {
            setBirthday(`${numericValue.slice(0, 2)}/${numericValue.slice(2, 4)}/${numericValue.slice(4)}`);
        } else {
            const day = numericValue.slice(0, 2);
            const month = numericValue.slice(2, 4);
            const year = numericValue.slice(4, 8);

            // Validate month range (1 to 12)
            if (Number(month) >= 1 && Number(month) <= 12) {
                setBirthday(`${day}/${month}/${year}`);
            } else {
                // Invalid month, reset the input
                setBirthday('');
            }
        }
    };


    const handleVehicleMileageChange = (newMileage) => {
        // Extract numeric value
        const numericValue = parseInt(newMileage, 10);

        // Validate and limit the input
        const maxMileage = 9999999; // Maximum allowed mileage (7 digits)
        if (!isNaN(numericValue) && numericValue > 0 && numericValue <= maxMileage) {
            setVehicleMileage(numericValue.toString());
        } else {
            setVehicleMileage('');
        }
    };

    const handleButtonPress = async () => {
        // Check if all required fields are filled
        if (
            firstName.trim() === '' ||
            lastName.trim() === '' ||
            birthday.trim() === '' ||
            vehicleMake.trim() === '' ||
            vehicleModal.trim() === '' ||
            vehicleYear.trim() === '' ||
            vehicleColor.trim() === '' ||
            vehicleMileage.trim() === ''
        ) {
            // At least one required field is empty, show an error message
            Alert.alert('Missing Information', 'Please fill in all required fields.');
        } else {
            // All required fields are filled, proceed with additional checks
            const numericValue = vehicleYear.replace(/\D/g, ''); // Remove non-numeric characters
            const year = parseInt(numericValue, 10);

            // Validate the year range
            const currentYear = new Date().getFullYear();
            const minYear = 1900;
            const maxYear = currentYear + 1;

            if (!isNaN(year) && year >= minYear && year <= maxYear) {

                try {
                    const user = firebase.auth().currentUser; // Get the authenticated user

                    if (user) {
                        // Create an object with the updated user data
                        const updatedUserData = {
                            email:user.email,
                            firstName,
                            lastName,
                            birthday,
                            vehicleMake,
                            vehicleModal,
                            vehicleYear,
                            vehicleColor,
                            vehicleMileage,
                        };

                        // Update the user's document in Firestore
                        await firebase.firestore().collection('users').doc(user.uid).update(updatedUserData);
                        navigation.navigate('appNavigation', { screen: 'BottomTab',params:{screen:'HomeScreen'} });

                        // Show a success message
                        Alert.alert('Profile Updated', 'Your profile has been updated successfully.');
                    } else {
                        Alert.alert('Error', 'User not authenticated. Please log in.');
                    }
                } catch (error) {
                    console.error('Error updating profile:', error);
                    Alert.alert('Error', 'An error occurred while updating your profile.');
                }
                
            } else {
                // Year is invalid, show an error message
                Alert.alert('Invalid Year', 'Please enter a valid year between 1900 and the current year.');
            }
        }
    };

    return (
        <ImageBackground source={BackgroundBlack.backgroundBlack} style={appStyles.backgroundImage} >

            <ScrollView>
                <View style={appStyles.flexone}>
                    <View style={appStyles.marginTop1}>
                        <CustomInput
                            styleContainer={[appStyles.customInputContainer, appStyles.flexrow]}
                            styleInput={[appStyles.input]}
                            label="First Name"
                            placeholder="Mick"
                            value={firstName}
                            onChangeText={setFirstName} // Pass the function to update the email state
                            keyboardType="defauld"
                        />
                    </View>

                    <View style={appStyles.marginTop1}>
                        <CustomInput
                            styleContainer={[appStyles.customInputContainer, appStyles.flexrow]}
                            styleInput={[appStyles.input]}
                            label="Last Name"
                            placeholder="Mick"
                            value={lastName}
                            onChangeText={setLastName} // Pass the function to update the email state
                            keyboardType="defauld"
                        />
                    </View>
                    <View style={appStyles.marginTop1}>
                        <CustomInput
                            styleContainer={[appStyles.customInputContainer, appStyles.flexrow]}
                            styleInput={[appStyles.input]}
                            label="Birthday"
                            placeholder="DD/MM/YYYY"
                            value={birthday}
                            onChangeText={handleBirthdayChange}
                            keyboardType="numeric" // Use "numeric" keyboard type
                            source={Calendar.calendar}
                        />
                    </View>

                    <View style={appStyles.marginTop1}>
                        <CustomInput
                            styleContainer={[appStyles.customInputContainer, appStyles.flexrow]}
                            styleInput={[appStyles.input]}
                            label="Vehicle Make"
                            placeholder="Enter the make of your vehicle"
                            value={vehicleMake}
                            onChangeText={setVehicleMake}
                            keyboardType="default" // Use "numeric" keyboard type
                        />
                    </View>
                    <View style={appStyles.marginTop1}>
                        <CustomInput
                            styleContainer={[appStyles.customInputContainer, appStyles.flexrow]}
                            styleInput={[appStyles.input]}
                            label="Vehicle Modal"
                            placeholder="Enter modal of your vehicle"
                            value={vehicleModal}
                            onChangeText={setVehicleModal}
                            keyboardType="default"
                        />
                    </View>
                    <View style={appStyles.marginTop1}>
                        <CustomInput
                            styleContainer={[appStyles.customInputContainer, appStyles.flexrow]}
                            styleInput={[appStyles.input]}
                            label="Vehicle Year"
                            placeholder="Enter year of your vehicle"
                            value={vehicleYear}
                            onChangeText={setVehicleYear}
                            keyboardType="numeric" // Use "numeric" keyboard type
                            maxLength={4}
                        />
                    </View>
                    <View style={appStyles.marginTop1}>
                        <CustomInput
                            styleContainer={[appStyles.customInputContainer, appStyles.flexrow]}
                            styleInput={[appStyles.input]}
                            label="Vehicle Color"
                            placeholder="Enter color of your vehicle"
                            value={vehicleColor}
                            onChangeText={setVehicleColor}
                            keyboardType="default"
                        />
                    </View>
                    <View style={appStyles.marginTop1}>
                        <CustomInput
                            styleContainer={[appStyles.customInputContainer, appStyles.flexrow]}
                            styleInput={[appStyles.input]}
                            label="Vehicle Mileage"
                            placeholder="If unknown enter approximate"
                            value={vehicleMileage}
                            onChangeText={handleVehicleMileageChange}
                            keyboardType="numeric"
                            maxLength={7} // Set the maximum length to 7 digits
                        />
                    </View>


                    <View style={appStyles.touchableButtonContainer}>
                        <CustomButton text="Save Changes" onPress={handleButtonPress} gradientWhite={true} styletouchableContainer={appStyles.touchableButton} styleGradientContainer={appStyles.gradientContainer} />
                    </View>
                </View>

            </ScrollView>
            <CustomTabBar homeWhite={homeWhite} navigation={navigation} accountWhite={accountWhite} />
        </ImageBackground>
    );
};

export default EditProfileScreen;
