
import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { appStyles } from '../../services/utilities/appstyle';
import CustomText from '../../components/customText';
import CustomInput from '../../components/customInputField';
import CustomTouchableText from '../../components/customTextTouchable';
import CustomButton from '../../components/customButton';
import AccountModal from '../../components/Modal';
import { LocationDot, DownIcon, BackgroundBlack } from '../../services/utilities/assets/assets';

const locationIcon = LocationDot.locationDot;
const iconDown = DownIcon.downIcon;

const HomeScreen = ({ navigation }) => {
  const [selectedOilOption, setSelectedOilOption] = useState('Please select oil type from here                                (All Oil High Quality Synthetic) ');
  const [locationValue, setLocationValue] = useState('Please enter your address');
  const [selectedDayData, setSelectedDayData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [amBackgroundColor, setAmBackgroundColor] = useState('white');
  const [pmBackgroundColor, setPmBackgroundColor] = useState('white');
  const [selectedDay, setSelectedDay] = useState(null); // Track the selected day


  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [location, setLocation] = useState(false);
  const [oil, setOil] = useState(false);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const oilOption = [
    { id: '1', text: '0W-20', },
    { id: '2', text: '5W-20', },
    { id: '3', text: '5W-30', },
    { id: '4', text: '10W-30', },
    { id: '5', text: '10W-40', },
    // ... add more options
  ];

  const handleSelectedOilOption = (option) => {
    setSelectedOilOption(option);
  };
  const handleLocationSubmit = (newLocationValue) => {
    setLocationValue(newLocationValue);
    closeModal();
  };
  const openModal = () => {
    setModalVisible(true);
    <AccountModal isVisible={modalVisible} closeModal={closeModal} />
  };

  const closeModal = () => {
    setModalVisible(false);
    setOil(false);
    setLocation(false);
  };
  const handleHoursChange = (newHours) => {
    // Extract numeric value
    const numericValue = parseInt(newHours, 10);

    // Validate and limit the input
    const maxHours = 11; // Maximum allowed mileage (7 digits)
    if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= maxHours) {
      setHours(numericValue.toString());
    } else {
      setHours('');
    }
  };
  const handleAmPress = () => {
    setSelectedOption('AM');
    setAmBackgroundColor('#FFFFC8'); // Change to the desired background color
    setPmBackgroundColor('white'); // Reset the PM background color
  };
  const handlePmPress = () => {
    setSelectedOption('PM');
    setAmBackgroundColor('white'); // Reset the AM background color
    setPmBackgroundColor('#FFFFC8'); // Change to the desired background color
  };
  const locationIconPress = () => {
    openModal();
    setLocation(true);

  };
  const downIconPress = () => {
    openModal();
    setOil(true);
  };
  const handleButtonPress = () => {
    navigation.navigate('appNavigation', { screen: 'VehicleInfoScreen' })
  };

  const handleMinutesChange = (newMinutes) => {
    // Extract numeric value
    const numericValue = parseInt(newMinutes, 10);

    // Validate and limit the input
    const maxMinutes = 59; // Maximum allowed mileage (7 digits)
    if (!isNaN(numericValue) && numericValue > 0 && numericValue <= maxMinutes) {
      setMinutes(numericValue.toString());
    } else {
      setMinutes('');
    }
  };
  const handleDayPress = (item) => {
    // Update the selected day when a day is pressed
    setSelectedDay(item.id);

    setSelectedDayData({
      // set the selected day here in format of monday 11 september
      day: item.day,
      date: item.date,
      month: item.month,

    });
    console.log(selectedDayData)
  };

  // Generate real-time calendar data
  const generateCalendarData = () => {
    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthofYears = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDayIndex = currentDate.getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    const newData = [];
    for (let i = currentDayIndex; i < currentDayIndex + daysInMonth; i++) {
      const dayIndex = i - currentDayIndex;
      let day = '';

      // if (dayIndex === 0) {
      //   day = 'Today';

      // } else if (dayIndex === 1) {
      //   day = 'Tomorrow';
      // } else {
      day = daysOfWeek[(currentDayIndex + dayIndex) % 7];
      // }

      const date = currentDate.getDate();
      const month = monthofYears[currentDate.getMonth()]; // Add 1 because months are zero-indexed

      newData.push({ id: String(i), date, day, month, });
      currentDate.setDate(currentDate.getDate() + 1); // Increment the date
    }

    setData(newData);
  };


  // Call the data generation function once when the component mounts
  useEffect(() => {
    generateCalendarData();
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={appStyles.homeHeaderImageView}>
          <Image source={BackgroundBlack.backgroundBlack} style={appStyles.homeHeaderImage} />
          <CustomText style={[appStyles.fontBold, appStyles.textColorWhite, appStyles.fontsize3]}>Schedule a Time</CustomText>
        </View>

        <View style={appStyles.aligncenter}>
          <CustomText style={[appStyles.fontsize3, appStyles.fontBold, appStyles.textColorBlack]}>Please Enter Details</CustomText>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={appStyles.flexrow}>
          {data.map((item) => (
            <TouchableOpacity key={item.id} style={[appStyles.item, item.id === selectedDay && appStyles.selectedDay,]} onPress={() => handleDayPress(item)}>
              <CustomText style={appStyles.CalendarViews_text}>{item.day}</CustomText>
              <CustomText style={appStyles.CalendarViews_text}>{item.date}</CustomText>
              <CustomText style={appStyles.CalendarViews_text}>{item.month}</CustomText>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View>
          <CustomText style={[appStyles.marginleft, appStyles.textColorBlack, appStyles.marginTop1, appStyles.fontBold]}>Enter Time</CustomText>
        </View>
        <View style={appStyles.flexrow}>
          <View style={appStyles.marginTop1}>
            <CustomInput
              styleContainer={[appStyles.cardInputContainer, appStyles.flexrow]}
              styleInput={appStyles.cardInput}
              placeholder={'05'}
              value={hours}
              onChangeText={handleHoursChange}
              keyboardType="numeric"
              maxLength={2}
            />
          </View>

          <View style={[appStyles.margintop]}>
            <View style={[appStyles.colonView, appStyles.margintop]} />
            <View style={[appStyles.colonView, appStyles.margintop2]} />
          </View>

          <View style={appStyles.marginTop1}>
            <CustomInput
              styleContainer={[appStyles.cardInputContainer, appStyles.flexrow]}
              styleInput={appStyles.cardInput}
              placeholder={'00'}
              value={minutes}
              onChangeText={handleMinutesChange}
              keyboardType="numeric"
              maxLength={2}
            />
          </View>
          <View style={[appStyles.marginleft, appStyles.margintop2]}>
            <View style={[appStyles.am, appStyles.alignitemcenter, appStyles.spacearound, { backgroundColor: amBackgroundColor }]}>
              <CustomTouchableText text='AM' style={[appStyles.fontsize2, appStyles.textColorBlack]} onPress={handleAmPress} />
            </View>
            <View style={[appStyles.pm, appStyles.alignitemcenter, appStyles.spacearound, { backgroundColor: pmBackgroundColor }]}>
              <CustomTouchableText text='PM' style={[appStyles.fontsize2, appStyles.textColorBlack]} onPress={handlePmPress} />
            </View>
          </View>
        </View>
        <View style={[appStyles.marginTop1,]}>
          <CustomInput
            styleContainer={[appStyles.customInputLikeContainer, appStyles.flexrow,]}
            styleInput={[appStyles.input]}
            inputtext2={appStyles.inputText2}
            source={locationIcon}
            toggleImagePress={locationIconPress}
            label="Enter Location"
            value={locationValue}
            onChangeText={null}
          />
          {location && <AccountModal
            isVisible={modalVisible}
            closeModal={closeModal}
            navigation={navigation}
            locationModal={true}
            transparent={true}
            locationValue={locationValue}
            onLocationSubmit={handleLocationSubmit} // Pass the callback function
          />}
        </View>
        <View >
          <CustomInput
            styleContainer={[appStyles.customInputLikeContainer, appStyles.flexrow,]}
            styleInput={[appStyles.input]}
            inputtext2={appStyles.inputText2}
            source={iconDown}
            toggleImagePress={downIconPress}
            label="Oil type"
            value={selectedOilOption}
            onChangeText={null}
          />
          {oil && <AccountModal
            isVisible={modalVisible}
            closeModal={closeModal}
            navigation={navigation}
            oilModal={true}
            locationModal={false}
            transparent={true}
            oilOption={oilOption}
            onOilOptionSelect={handleSelectedOilOption}
          />}
        </View>
        <View style={appStyles.touchableButtonContainer}>
          <CustomButton text="Lock it in!" onPress={handleButtonPress} gradientWhite={true} styletouchableContainer={appStyles.touchableButton} styleGradientContainer={appStyles.gradientContainer} />
        </View>
      </ScrollView>
    </View>
  );
};


export default HomeScreen;

