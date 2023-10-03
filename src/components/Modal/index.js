import React, { useState, useContext } from 'react';
import { Modal, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { appStyles } from '../../services/utilities/appstyle';
import CustomButton from '../customButton';
import CustomText from '../customText';
import CustomInput from '../customInputField';
import { LocationIcon, DownIcon, TickIcon, Payment } from '../../services/utilities/assets';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { AuthContext } from '../../navigation/authProvider';

const AccountModal = ({ 
  isVisible, 
  closeModal, 
  navigation, 
  option, 
  tickImage, 
  vehicleAdded = "", 
  transparent, 
  accountScreenActive, 
  locationModal = false, 
  oilModal = false, 
  paymentModal = false, 
  oilOption, 
  onLocationSubmit,
  onOilOptionSelect,
}) => {
  const iconDown = DownIcon.downIcon;
  const tickimage = TickIcon.tickIcon;
  const locationModalIcon = LocationIcon.locationIcon;
  const paymenticon = Payment.paymentIcon;

  const { logout } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [locationValue, setLocationValue] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [paymentDoneModalShow, setPaymentDoneModalShow] = useState(false);
  const [oilModalShow, setOilModalShow] = useState(oilModal);
  const [year, setYear] = useState('');
  const [locationModalShow, setLocationModalShow] = useState(locationModal);
  // console.log("oil modal is", oilModal, "location modal is", locationModal);
  const [cvv, setCvv] = useState('');

  const data = option;
  const oildata = oilOption;
  const vehicleAddedContinue = () => {
    closeModal();
    navigation.navigate('appNavigation', { screen: 'PriceAndPaymentScreen' });
  }
  const paymentDoneContinue = () => {
    
    closeModal();
    navigation.navigate('appNavigation', { screen: 'ThankyouScreen' });
  }
  const handleOilButtonDownPress = () => {
    setOilModalShow(false);
    oilModal = false;
    closeModal();

    // setModalVisible(false);

  }
  const handleSubmitLocationButtonPress = () => {
    console.log("Sent ");
    setLocationModalShow(true);
    onLocationSubmit(locationValue);
    closeModal();
    

  }
  const handleSaveButtonPress = () => {
    // closeModal();
    setPaymentDoneModalShow(true);

  }

  const handleOptionPress = (id) => {
    if (id === '1') {
      // Perform action for Option 1
      closeModal();
      navigation.navigate('appNavigation', { screen: 'EditProfileScreen' });
    } else if (id === '2') {

      // Perform action for Option 2
      closeModal();
      navigation.navigate('appNavigation', { screen: 'ThankyouScreen' });
    } else if (id === '3') {
      const termsofservicelabel = 'Terms of Service';
      // Perform action for Option 3
      closeModal();
      navigation.navigate('appNavigation', { screen: 'TermsPrivacyScreen', params: { headerlabel: termsofservicelabel } });
    } else if (id === '4') {
      const termsofservicelabel = 'Privacy Policy';
      // Perform action for Option 3
      closeModal();
      navigation.navigate('appNavigation', { screen: 'TermsPrivacyScreen', params: { headerlabel: termsofservicelabel } });
    } else if (id === '5') {
      // Perform action for Option 3
      closeModal();
      navigation.navigate('appNavigation', { screen: 'ThankyouScreen' });
    } else if (id === '6') {
      // Perform action for Option 3
      closeModal();
      logout();
      navigation.navigate('authNavigation', { screen: 'LoginScreen' });
    }
    // Add more conditions as needed
  };
  const handleOilOptionPress = (id) => {
    const selectedOption = oilOption.find((option) => option.id === id);
    if (selectedOption) {
      onOilOptionSelect(selectedOption.text);
    }
    closeModal();
  };
  // const handleOilOptionPress = (id) => {
  //   if (id === '1') {
  //     // Perform action for Option 1
  //     console.log(id.text)
  //     closeModal();
  //   } else if (id === '2') {

  //     // Perform action for Option 2
  //     closeModal();
  //   } else if (id === '3') {
  //     closeModal();
  //     // Perform action for Option 3
  //   } else if (id === '4') {
  //     closeModal();
  //     // Perform action for Option 3
  //   } else if (id === '5') {
  //     // Perform action for Option 3
  //     closeModal();
  //   }
  //   // Add more conditions as needed
  // };

  const renderItem = ({ item }) => (

    <TouchableOpacity style={[appStyles.padding20, appStyles.alignitemcenter, appStyles.flexrow]} onPress={() => handleOptionPress(item.id)}>
      <CustomText style={[appStyles.listTextLength, appStyles.textColorBlack]}>{item.text}</CustomText>
      <Image source={item.image} style={appStyles.modalListImagestyle} />
    </TouchableOpacity>

  );
  const renderOilItem = ({ item }) => (
    <View >
      <TouchableOpacity style={[appStyles.padding10, appStyles.flexrow]} onPress={() => handleOilOptionPress(item.id)}>
        <View style={[appStyles.oilModalTextStyle]}>
          <CustomText style={[appStyles.listTextLength, appStyles.textColorBlack]}>{item.text}</CustomText>
        </View>
        {/* <Image source={item.image} style={appStyles.modalListImagestyle} /> */}
      </TouchableOpacity>
    </View>
  );
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={transparent}
      onRequestClose={closeModal}
      backdropOpacity={0.7}
      onBackdropPress={closeModal}
    // style={{ justifyContent: 'flex-end', margin: 0, }}
    >
      <View style={[appStyles.flexone,{backgroundColor:'rgba(0, 0, 0, 0.7)'}]}>
        {vehicleAdded.length !== 0 && (
          <View style={[appStyles.flexone, appStyles.bottomModalView1]}>

            <View style={[appStyles.modalVehicleAdded]}>
              <Image source={tickImage} style={[appStyles.aligncenter, appStyles.margintop6]} />

              <CustomText style={[appStyles.textColorWhite, appStyles.fontsize3point5, appStyles.fontBold, appStyles.aligncenter, appStyles.marginleft7, appStyles.marginright7, appStyles.margintop]}>{vehicleAdded}</CustomText>

              <View style={[appStyles.touchableButtonContainer, appStyles.marginbottom3]}>
                <CustomButton text="CONTINUE" onPress={vehicleAddedContinue} gradientWhite={true} styletouchableContainer={appStyles.touchableButton} styleGradientContainer={appStyles.gradientContainer} />
              </View>
            </View>

          </View>
        )}
        {accountScreenActive && (
          <View style={[appStyles.flexone, appStyles.bottomModalView1]}>
            <View style={appStyles.accountModalView2}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ marginLeft: 15, }}
              />
            </View>
          </View>
        )}

        {(locationModal) && (

          <View style={[appStyles.flexone, appStyles.locationModalView1]}>
            <View style={appStyles.locationModalView2}>
              <View style={appStyles.paymentmodalimageview}>
                <Image source={locationModalIcon} />
              </View>
              <CustomText style={[appStyles.textColorBlack, appStyles.marginTop1, appStyles.fontsize2]}>{"Add Location"}</CustomText>
              <CustomInput
                styleContainer={[appStyles.searchInput, appStyles.margintop2]}
                styleInput={[appStyles.searchInput2]}
                placeholder="Search here"
                value={locationValue}
                onChangeText={setLocationValue}
                keyboardType="default"
              />

              <CustomButton text="Submit" onPress={handleSubmitLocationButtonPress} gradientBlack={true} styleGradientContainer={appStyles.smallGradientContainer} styletouchableContainer={appStyles.smallTouchableButtonContainer} />

            </View>
          </View>
        )}
        {(paymentModal && !paymentDoneModalShow) && (
          <View style={[appStyles.flexone, appStyles.locationModalView1]}>

            <View style={appStyles.paymentModalView2}>
              <View style={appStyles.paymentmodalimageview}>
                <Image source={paymenticon} />
              </View>
              <CustomText style={[appStyles.textColorBlack, appStyles.marginTop1, appStyles.fontsize2]}>{"Add New Details"}</CustomText>
              <CustomText style={[appStyles.textColorBlack, appStyles.marginTop1, appStyles.fontsizetwo]}>{"Please enter your Payment Details"}</CustomText>
              <CustomInput
                styleContainer={[appStyles.searchInput, appStyles.margintop6]}
                styleInput={[appStyles.searchInput2]}
                placeholder="Card holder name"
                value={cardHolderName}
                onChangeText={setCardHolderName}
                keyboardType="default"
              />
              <CustomInput
                styleContainer={[appStyles.searchInput, appStyles.marginTop1]}
                styleInput={[appStyles.searchInput2]}
                placeholder="Number of card"
                value={cardNumber}
                onChangeText={setCardNumber}
                keyboardType="numeric"
              />
              <CustomText style={[appStyles.textColorBlack, appStyles.marginTop1, appStyles.fontsize1_2, { marginLeft: responsiveWidth(-65) }]}>{"VALID THRU"}</CustomText>
              <View style={appStyles.flexrow}>
                <CustomInput
                  styleContainer={[appStyles.smallInput1, appStyles.marginTop1]}
                  styleInput={[appStyles.smallInput2]}
                  placeholder="MM"
                  value={month}
                  onChangeText={setMonth}
                  keyboardType="numeric"
                  maxLength={2}
                />
                <CustomText style={[appStyles.textColorBlack, appStyles.marginTop1, appStyles.fontsize3point5]}>{"/"}</CustomText>
                <CustomInput
                  styleContainer={[appStyles.smallInput1, appStyles.marginTop1]}
                  styleInput={[appStyles.smallInput2]}
                  placeholder="YY"
                  value={year}
                  onChangeText={setYear}
                  keyboardType="numeric"
                  maxLength={4}
                />
                <View style={appStyles.marginleft4}>
                  <CustomInput
                    styleContainer={[appStyles.smallInput1, appStyles.marginTop1]}
                    styleInput={[appStyles.smallInput2]}
                    placeholder="CVV"
                    value={cvv}
                    onChangeText={setCvv}
                    keyboardType="numeric"
                    maxLength={3}
                  />
                </View>
              </View>
              <CustomButton text="Save" onPress={handleSaveButtonPress} gradientBlack={true} styleGradientContainer={appStyles.smallGradientContainer} styletouchableContainer={appStyles.smallTouchableButtonContainer} />

            </View>
          </View>
        )}

        {paymentDoneModalShow && (
          <View style={[appStyles.flexone, appStyles.bottomModalView1]}>

            <View style={[appStyles.modalVehicleAdded]}>
              <Image source={tickimage} style={[appStyles.aligncenter, appStyles.margintop6]} />

              <CustomText style={[appStyles.textColorWhite, appStyles.fontsize3point5, appStyles.fontBold, appStyles.aligncenter, appStyles.marginleft7, appStyles.marginright7, appStyles.margintop]}>{'Congratulations!'}</CustomText>
              <CustomText style={[appStyles.textColorWhite, appStyles.fontsize3, appStyles.aligncenter, appStyles.marginleft7, appStyles.marginright7, appStyles.margintop]}>{'We will see you on'}</CustomText>
              <CustomText style={[appStyles.textColorWhite, appStyles.fontsize2, appStyles.aligncenter, appStyles.marginleft7, appStyles.marginright7]}>{'[DATE SCHEDULED]'}</CustomText>

              <View style={[appStyles.touchableButtonContainer, appStyles.marginbottom3]}>
                <CustomButton text="CONTINUE" onPress={paymentDoneContinue} gradientWhite={true} styletouchableContainer={appStyles.touchableButton} styleGradientContainer={appStyles.gradientContainer} />
              </View>
            </View>

          </View>
        )}
        {(oilModal) && (
          <View style={[appStyles.flexone, appStyles.locationModalView1]}>

            <View style={[appStyles.oilModalView2,]}>
              <CustomInput
                styleContainer={[appStyles.customInputLikeContainer, appStyles.flexrow, { width: responsiveWidth(90) }]}
                styleInput={[appStyles.input]}
                inputtext2={appStyles.inputText2}
                source={iconDown}
                toggleImagePress={handleOilButtonDownPress}
                label="Oil type"
                value='Please select oil type from here                                (All Oil High Quality Synthetic) '
                onChangeText={null}
              />
              <View style={[appStyles.oilModalTextStyle, { borderTopWidth: 0, marginBottom: responsiveWidth(0.5) }]}>
                <CustomText style={[appStyles.textColorBlack, appStyles.marginTop1, appStyles.fontsize2]}>{"Manufacturer Recommendation"}</CustomText>
              </View>
              <View style={appStyles.oilModalTextStyle}>
                <CustomText style={[appStyles.textColorBlack, appStyles.marginTop1, appStyles.fontsize2]}>{"------OR------"}</CustomText>
              </View>
              <View style={appStyles.oilModalListTextStyle}>
                <FlatList
                  data={oildata}
                  renderItem={renderOilItem}
                  keyExtractor={item => item.id}
                  style={[{ marginLeft: 15, }]}
                />
              </View>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default AccountModal;
