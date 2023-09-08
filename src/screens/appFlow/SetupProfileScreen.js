import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { appStyles } from '../../services/utilities/appstyle';
import CustomInput from '../../components/customInputField';
import CustomButton from '../../components/customButton';
import { BackgroundBlack, Calendar } from '../../services/utilities/assets/assets';
import { AuthContext } from '../../navigation/authProvider';
import { firebase } from '@react-native-firebase/firestore';



const SetupProfileScreen = ({ navigation }) => {
    const { logout, user } = useContext(AuthContext)
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
    // useEffect(() => {
    //     console.log(user.uid)
    //     // loadSavedCredentials();
    //   }, []);
    const handleButtonPress = async () => {
        // logout();
        //    Check if all required fields are filled
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
                // Year is valid, you can proceed with navigation

                try {
                    // Reference to the Firestore collection for users
                    const usersCollection = firebase.firestore().collection('users');

                    // Create a user data object
                    const userData = {
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

                    // Add the user data to Firestore
                    await usersCollection.doc(user.uid).set(userData);

                    navigation.navigate('appNavigation', { screen: 'BottomTab' });
                } catch (error) {
                    Alert.alert('Firestore Error', 'An error occurred while storing data in Firestore.');
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
                        <CustomButton text="Done" onPress={handleButtonPress} gradientWhite={true} styletouchableContainer={appStyles.touchableButton} styleGradientContainer={appStyles.gradientContainer} />
                    </View>
                </View>

            </ScrollView>
        </ImageBackground>
    );
};

export default SetupProfileScreen;
