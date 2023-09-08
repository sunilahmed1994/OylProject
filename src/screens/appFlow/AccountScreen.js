import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React, {useState} from 'react'
import { appStyles } from '../../services/utilities/appstyle';
import CustomButton from '../../components/customButton';
import AccountModal from '../../components/Modal';

const AccountScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const imagesource=require('../../../src/assets/icons/Iconright.png');
    
    const data = [
      { id: '1', text: 'Edit Profile', image:imagesource  },
      { id: '2', text: 'Share Your Feedback', image: imagesource },
      { id: '3', text: 'Terms of Service', image: imagesource},
      { id: '4', text: 'Privacy Policy', image: imagesource},
      { id: '5', text: 'About Us', image: imagesource},
      { id: '6', text: 'Logout', image: imagesource},
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
            <AccountModal isVisible={modalVisible} closeModal={closeModal} navigation={navigation} option={data} backdropOpacity={0.7} accountScreenActive={true}/>
            <Text>AccountScreen</Text>
            <View style={appStyles.touchableButtonContainer}>
                <TouchableOpacity onPress={handleButtonPress}>
                    <Image source={require('../../../src/assets/icons/accountblack.png')}></Image>
                </TouchableOpacity>
                {/* <CustomButton text="Lets go!" onPress={handleButtonPress}  /> */}

            </View>
        </View>
    )
}

export default AccountScreen;


