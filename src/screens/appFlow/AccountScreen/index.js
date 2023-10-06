import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useCallback, useState } from 'react'
import { appStyles } from '../../../services/utilities/appstyle';
import CustomButton from '../../../components/customButton';
import AccountModal from '../../../components/Modal';
import { RightIcon, AccountBlack } from '../../../services/utilities/assets';
import { firebase} from '@react-native-firebase/firestore'; // Import Firestore
import {storage} from '@react-native-firebase/storage'; // Import Storage
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const AccountScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const user = firebase.auth().currentUser; // Get the authenticated user
  const imagesource = RightIcon.rightIcon;
  const accountblack = AccountBlack.accountBlack;

  const [imageSource, setImageSource] = useState(null);

  const openImageLibrary = () => {
    // Alert.alert("Image Library");
    let options = {
      storageOptions: {
        path: "image",
      },
    };

    launchImageLibrary(options, async (response) => {
      if (response && response.assets && response.assets.length > 0) {
        const imageUri = response.assets[0].uri;
  
        setImageSource(imageUri);
      } else {
        // Handle the case where the user canceled without selecting an image
        Alert.alert("User did not select an image.");
      }
    });
  }


  const data = [
    { id: '1', text: 'Edit Profile', image: imagesource },
    { id: '2', text: 'Share Your Feedback', image: imagesource },
    { id: '3', text: 'Terms of Service', image: imagesource },
    { id: '4', text: 'Privacy Policy', image: imagesource },
    { id: '5', text: 'About Us', image: imagesource },
    { id: '6', text: 'Logout', image: imagesource },
    // ... add more options
  ];

  const openModal = () => {
    setModalVisible(true);
    <AccountModal isVisible={modalVisible} closeModal={closeModal} />
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleButtonPress = () => {
    openModal();
  };

  return (
    <View>
      <AccountModal isVisible={modalVisible} closeModal={closeModal} navigation={navigation} option={data} backdropOpacity={0.7} accountScreenActive={true} />

      <View style={appStyles.touchableButtonContainer}>
        <TouchableOpacity onPress={openImageLibrary}>
          {imageSource ? (
            <Image source={{ uri: imageSource }} style={styles.userImage} />
          ) : (
            <Image source={accountblack} style={styles.userImage} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonPress}>
          <Text>Select Your Account Options</Text>
        </TouchableOpacity>
        {/* <CustomButton text="Lets go!" onPress={handleButtonPress}  /> */}

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  // ... other styles
});

export default AccountScreen;


