
import React, { useState, useEffect, useContext } from 'react';
import { View, Image, ScrollView, Alert, ImageBackground } from 'react-native';
import { appStyles } from '../../../services/utilities/appstyle';
import CustomText from '../../../components/customText';
import CustomInput from '../../../components/customInputField';
import CustomButton from '../../../components/customButton';
import CustomCheckbox from '../../../components/customCheckBox';
import AccountModal from '../../../components/Modal';
import CustomTabBar from '../../../components/customTabBar';
import { HomeBlack, AccountBlack, TickIcon, WhiteImage, BackgroundBlack } from '../../../services/utilities/assets';
import { AuthContext } from '../../../navigation/authProvider';
import { firebase } from '@react-native-firebase/firestore';

const homeBlack = HomeBlack.homeBlack;
const accountBlack = AccountBlack.accountBlack;
const tickIcon = TickIcon.tickIcon;

const VehicleInfoScreen = ({ navigation }) => {
    const { user } = useContext(AuthContext);
    const [vehicleYear, setVehicleYear] = useState('');
    const [vehicleMake, setVehicleMake] = useState('');
    const [vehicleModal, setVehicleModal] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehicleMileage, setVehicleMileage] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


    // Function to fetch vehicle data from Firestore
    const fetchVehicleData = async () => {
        try {
            //   const user = firebase.auth().currentUser; // Get the authenticated user

            if (user) {
                const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();

                if (userDoc.exists) {
                    const userData = userDoc.data();

                    // Check if the user has vehicle data
                    if (userData.vehicleYear && userData.vehicleMake && userData.vehicleModal && userData.vehicleColor && userData.vehicleMileage) {
                        setVehicleYear(userData.vehicleYear);
                        setVehicleMake(userData.vehicleMake);
                        setVehicleModal(userData.vehicleModal);
                        setVehicleColor(userData.vehicleColor);
                        setVehicleMileage(userData.vehicleMileage);
                    } else {
                        Alert.alert('No Vehicle Data', 'There is no vehicle data for this user.');
                    }
                } else {
                    Alert.alert('User Not Found', 'User data not found in Firestore.');
                }
            } else {
                Alert.alert('Error', 'User not authenticated. Please log in.');
            }
        } catch (error) {
            console.error('Error fetching vehicle data:', error);
            Alert.alert('Error', 'An error occurred while fetching vehicle data.');
        }
    }

    const openModal = () => {
        setModalVisible(true);
        <AccountModal isVisible={modalVisible} closeModal={closeModal} />
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    const handleCheckChange = () => {

        setIsChecked(!isChecked);


    };
    const handleButtonPress = async () => {
        // Check if all required fields are filled
        if (
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

                    if (user) {
                        
                        // Create an object with the updated user data
                        const updatedUserData = {
                            
                            vehicleMake:vehicleMake,
                            vehicleModal:vehicleModal,
                            vehicleYear:vehicleYear,
                            vehicleColor:vehicleColor,
                            vehicleMileage:vehicleMileage,
                            
                        };
                        // Update the user's document in Firestore
                        await firebase.firestore().collection('users').doc(user.uid).update(updatedUserData);  
                        openModal();

                    }


                } catch (error) {
                    Alert.alert('Firestore Error', 'An error occurred while storing data in Firestore.');
                }

            } else {
                // Year is invalid, show an error message
                Alert.alert('Invalid Year', 'Please enter a valid year between 1900 and the current year.');
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

    useEffect(() => {
        if (isChecked) {
            fetchVehicleData();
        }
        if (!isChecked) {
            setVehicleYear('');
            setVehicleMake('');
            setVehicleModal('');
            setVehicleColor('');
            setVehicleMileage('');
        }
    }, [isChecked])


    return (
        <ImageBackground source={WhiteImage.whiteImage} style={appStyles.backgroundImage} >
            <ScrollView>
                <View style={appStyles.homeHeaderImageView}>
                    <Image source={BackgroundBlack.backgroundBlack} style={appStyles.homeHeaderImage} />
                    <CustomText style={[appStyles.fontBold, appStyles.textColorWhite, appStyles.fontsize3]}>Vehicle Info</CustomText>
                </View>

                <View style={appStyles.aligncenter}>
                    <CustomText style={[appStyles.fontsize3, appStyles.fontBold, appStyles.textColorBlack]}>Please Enter Details</CustomText>
                </View>



                <View style={[appStyles.marginTop1,]}>
                    <CustomInput
                        styleContainer={[appStyles.customInputLikeContainer, appStyles.flexrow,]}
                        styleInput={[appStyles.input]}
                        label="Vehicle Year"
                        placeholder='Enter the year of your Vehicle'
                        value={vehicleYear}
                        onChangeText={setVehicleYear}
                        keyboardType='numeric'
                    />

                    <CustomInput
                        styleContainer={[appStyles.customInputLikeContainer, appStyles.flexrow,]}
                        styleInput={[appStyles.input]}
                        label="Vehicle Make"
                        placeholder='Enter the make of your Vehicle'
                        value={vehicleMake}
                        onChangeText={setVehicleMake}
                        keyboardType='default'
                    />
                    <CustomInput
                        styleContainer={[appStyles.customInputLikeContainer, appStyles.flexrow,]}
                        styleInput={[appStyles.input]}
                        label="Vehicle Modal"
                        placeholder='Enter the modal of your Vehicle'
                        value={vehicleModal}
                        onChangeText={setVehicleModal}
                        keyboardType='default'
                    />
                    <CustomInput
                        styleContainer={[appStyles.customInputLikeContainer, appStyles.flexrow,]}
                        styleInput={[appStyles.input]}
                        label="Vehicle Color"
                        placeholder='Enter the color of your Vehicle'
                        value={vehicleColor}
                        onChangeText={setVehicleColor}
                        keyboardType='default'
                    />
                    <CustomInput
                        styleContainer={[appStyles.customInputLikeContainer, appStyles.flexrow]}
                        styleInput={[appStyles.input]}
                        label="Vehicle Mileage"
                        placeholder="If unknown enter approximate"
                        value={vehicleMileage}
                        onChangeText={handleVehicleMileageChange}
                        keyboardType="numeric"
                        maxLength={7} // Set the maximum length to 7 digits
                    />

                </View>

                <View style={[appStyles.alignitemcenter, appStyles.flexrow, appStyles.margintop]}>
                    <CustomCheckbox
                        isChecked={isChecked}
                        onCheckChange={handleCheckChange}
                    />
                    <CustomText style={appStyles.pullinfo}>Pull info from profile here</CustomText>

                </View>
                <View style={appStyles.touchableButtonContainer}>
                    <CustomButton text="ADD" onPress={handleButtonPress} gradientBlack={true} styletouchableContainer={appStyles.touchableButton} styleGradientContainer={appStyles.gradientContainer} />
                    <AccountModal
                        isVisible={modalVisible}
                        closeModal={closeModal}
                        navigation={navigation}
                        tickImage={tickIcon}
                        vehicleAdded={'Vehicle has been added \n successfully! One step \n left!'}
                        backdropOpacity={0.7}
                    />
                </View>

            </ScrollView>
            <CustomTabBar accountBlack={accountBlack} homeBlack={homeBlack} navigation={navigation} />
        </ImageBackground>
    );
};


export default VehicleInfoScreen;

