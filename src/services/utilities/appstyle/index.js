import { StyleSheet } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"


export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flexone:{
        flex:1
    },
    flextwo:{
        flex:2.2
    },
    flexthree:{
        flex:3
    },
    flex4:{
        flex:4
    },
    flex5:{
        flex:5,
    },
    flex6:{
        flex:6,
    },
    backgroundwhite:{
        backgroundColor:'white',
    },
    marginleft4:{
        marginLeft:responsiveWidth(4),
    },
    marginleft3:{
        marginLeft:responsiveWidth(3),
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch' or 'contain'
      
    },

    loginHeaderImageView: {
        flex: 1,
        justifyContent: 'space-around',
        alignSelf: 'center',

    },
    pullinfo: {
        marginBottom: responsiveHeight(1.5),
        color: 'black',
        alignSelf: 'center',
        fontSize: responsiveFontSize(1.5),
        fontWeight:'bold',
    },
    textColorWelcome: {
        marginBottom: responsiveHeight(1.5),
        color: '#FFFFC8',
        alignSelf: 'center',
        fontSize: responsiveFontSize(1.8),

    },
    customInputContainer: {
        borderRadius: responsiveWidth(4),
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(5),
        backgroundColor: '#FFFFC8',
        alignItems:'center'
    },
    customInputLikeContainer: {
        borderRadius: responsiveWidth(3),
        margin: responsiveHeight(1.5),
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(5),
        borderBottomWidth:responsiveWidth(0.05),
        borderRightWidth:responsiveWidth(0.05),
        backgroundColor: '#F7F7F7',
        alignItems:'center'
    },
    label: {
        marginTop: responsiveHeight(1),
        fontSize: responsiveFontSize(2),
        marginLeft: responsiveWidth(3),
        color: 'black',
    },
    input: {
        marginLeft: responsiveWidth(3),
        fontWeight: 'bold',
        color: 'black', 
    },
    searchInput2: {
        marginLeft: responsiveWidth(3),
        fontWeight: 'bold',
        color: 'black',
        marginTop:responsiveHeight(-5),
    },
    smallInput2: {
      marginLeft: responsiveWidth(3),
      fontWeight: 'bold',
      color: 'black',
      marginTop:responsiveHeight(-5),
  },
    inputText2: {
        marginLeft: responsiveWidth(3),
        color: 'black',
        margin: responsiveHeight(1),
    },
    cardInputContainer: {
        borderRadius: responsiveWidth(4),
        width:responsiveWidth(25),
        height:responsiveHeight(15),
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(5),
        backgroundColor: '#FFFFFF',
        alignItems:'center',
        borderColor: '#ccc',
        borderRightWidth: 1, // Add a border between items
    },
    cardPicContainer: {
        borderRadius: responsiveWidth(4),
        width:responsiveWidth(23),
        height:responsiveHeight(12),
        marginLeft: responsiveWidth(6),
        backgroundColor: '#FFFFFF',
        justifyContent:'space-around',
        alignItems:'center',
        borderColor: '#FFFFC88C',
        borderRightWidth: 1, // Add a border between items
    },
    cardInput: {
        alignSelf:'center',
        fontSize:responsiveFontSize(6),
        marginBottom:responsiveWidth(6),
        color: 'black',
    },
    searchInput: {
        width:responsiveWidth(80),
        height:responsiveHeight(6),
        borderRadius: responsiveWidth(2),
        margin: responsiveHeight(1.5),
        // marginLeft: responsiveWidth(5),
        // marginRight: responsiveWidth(5),
        backgroundColor: '#F7F7F7',
        marginBottom:responsiveHeight(1),
    },
    smallInput1: {
      width:responsiveWidth(20.5),
      height:responsiveHeight(6),
      borderRadius: responsiveWidth(2),
      margin: responsiveHeight(1.5),
      backgroundColor: '#F7F7F7',
      marginBottom:responsiveHeight(1),
  },
    fontBold: {
        fontWeight: 'bold',
    },
    touchableText: {
        flexDirection: 'row',
        marginTop: responsiveHeight(1.5),
        justifyContent: 'flex-end',
        marginRight: responsiveWidth(8)
    },
    touchableButton: {
        width: responsiveWidth(70),
        height: responsiveHeight(8),
    },
    touchableButtonText: {
        color: '#000000',
        fontSize: responsiveFontSize(2),
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    touchableBlackButtonText: {
        color: '#FFFFFF',
        fontSize: responsiveFontSize(2),
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    touchableButtonContainer: {
        marginTop: responsiveHeight(4),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:responsiveHeight(2),
    },
    gradientContainer: {
        width: responsiveWidth(70),
        height: responsiveHeight(8),
        borderRadius: responsiveWidth(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallTouchableButtonContainer: {
        marginTop: responsiveHeight(1.5),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:responsiveHeight(1.5),
    },
    smallGradientContainer: {
        width: responsiveWidth(30),
        height: responsiveHeight(6),
        borderRadius: responsiveWidth(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    margintop: {
        marginTop: responsiveHeight(3),
    },
    marginTop1:{
        marginTop: responsiveHeight(1),
    },
    margintop2:{
        marginTop: responsiveHeight(2),
    },
    marginleft: {
        marginLeft: responsiveWidth(6),
    },
    marginright:{
        marginRight:responsiveWidth(6),
    },
    marginright1:{
      marginRight:responsiveWidth(1),
  },
    marginright3:{
        marginRight:responsiveWidth(3),
    },
    margintop4:{
        marginTop:responsiveHeight(4),
    },
    margintop5:{
        marginTop:responsiveHeight(5),
    },
    margintop6:{
        marginTop:responsiveHeight(6),
    },
    marginleft7: {
        marginLeft: responsiveWidth(7),
    },
    marginright7:{
        marginRight:responsiveWidth(7),
    },
    
    checkBox: {
        marginBottom: responsiveHeight(1),
        marginLeft: responsiveWidth(2),
        //color:'#FFFFC8',
        borderColor:'#FFFFC8',
        borderRadius:responsiveWidth(10),
    },
    homeHeaderImage:{
        position:'absolute',
        height:'100%',
        width:'100%',
        borderBottomLeftRadius:responsiveWidth(15),
        borderBottomRightRadius:responsiveWidth(15),

    },
    homeHeaderImageView:{
        alignItems:'center',
        justifyContent:'center',
        height:responsiveHeight(25),
        borderBottomLeftRadius:responsiveWidth(15),
        borderBottomRightRadius:responsiveWidth(15),
    },
    textColorWhite:{
        color:'white',
    },
    textColorBlack:{
        color:'black',
    },
    aligncenter:{
        alignSelf:'center',
    },
    alignitemcenter:{
        alignItems:'center',
    },
    fontsize3:{
        fontSize:responsiveFontSize(3),
    },
    calendarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      fontsize4:{
        fontSize:responsiveFontSize(4),
      },
      fontsize3point5:{
        fontSize:responsiveFontSize(3.5),
      },
      fontsize2:{
        fontSize:responsiveFontSize(2.5),
      },
      fontsizetwo:{
        fontSize:responsiveFontSize(2),
      },
      fontsize1:{
        fontSize:responsiveFontSize(1.5),
      },
      fontsize1_2:{
        fontSize:responsiveFontSize(1.2),
      },
      spacearound:{
        justifyContent:'space-around'
      },
      flexrow:{
        flexDirection:'row'  
      },
      flexend:{
        justifyContent:'flex-end'  
      },
      listTextLength:{
        width:responsiveWidth(80),
      },
      thumbsUpBackBoxColor:{
        backgroundColor:'#FFFFC8',
      },
      thumbsUpCircle:{
        width:responsiveWidth(40), 
        height:responsiveWidth(40),
        backgroundColor:'white', 
        borderRadius:responsiveWidth(50)
      },
      fblogoStyle:{
        width:responsiveWidth(20), 
        height:responsiveWidth(20),
      },
      instalogoStyle:{
        width:responsiveWidth(18), 
        height:responsiveWidth(18),
      },
      colonView:{
        width:responsiveWidth(3), 
        height:responsiveWidth(3),
        borderRadius:responsiveWidth(10),
        backgroundColor:'black',
      },
      am:{
        width:responsiveWidth(11),
        height:responsiveWidth(11),
        backgroundColor:'#FFFFFF',
        borderWidth:responsiveWidth(0.2),
        borderTopLeftRadius:responsiveWidth(2),
        borderTopRightRadius:responsiveWidth(2),
        
      },
      pm:{
        width:responsiveWidth(11),
        height:responsiveWidth(11),
        backgroundColor:'#FFFFFF',
        borderWidth:responsiveWidth(0.2),
        borderBottomLeftRadius:responsiveWidth(2),
        borderBottomRightRadius:responsiveWidth(2),
      },
      borderDownWidth:{
        borderBottomWidth:responsiveWidth(1),
      },
      modalVehicleAdded:{
        backgroundColor:'black',
        borderTopLeftRadius: responsiveWidth(8),
        borderTopRightRadius:responsiveWidth(8),
      },
      justifycontent:{
        justifyContent:'center',
      },
      backgroundFFFFC8:{
        backgroundColor:'#FFFFC8',
      },
      width70:{
        width:responsiveWidth(70),
      },
      marginbottom4:{
        marginBottom:responsiveHeight(4),
      },
      marginbottom3:{
        marginBottom:responsiveHeight(3),
      },
      marginbottom2:{
        marginBottom:responsiveHeight(2),
      },
      bottomrightradius:{
        borderBottomRightRadius:responsiveWidth(15),
      },
      bottomleftradius:{
        borderBottomLeftRadius:responsiveWidth(15),
      },
      toprightradius:{
        borderTopRightRadius:responsiveWidth(15),
      },
      topleftradius:{
        borderTopLeftRadius:responsiveWidth(15),
      },
      text87:{
        fontSize:responsiveFontSize(10),
      },
      padding20:{
        padding:responsiveHeight(3),
      },
      padding10:{
        padding:responsiveHeight(2),
      },
      modalListImagestyle:{ 
        width: responsiveWidth(2), 
        height: responsiveHeight(2), 
        marginRight: responsiveHeight(1) 
      },
      bottomModalView1:{
        justifyContent: 'flex-end', 
        alignItems: 'stretch'
      },
      accountModalView2:{
         backgroundColor: '#FFFFFF', 
         borderTopLeftRadius: responsiveWidth(10), 
         borderTopRightRadius: responsiveWidth(10) 
      },
      locationModalView1:{
        justifyContent: 'center', 
        alignItems: 'center',
      },
      
      locationModalView2:{
        backgroundColor: '#FFFFFF', 
        alignItems: 'center',
        borderRadius:responsiveWidth(4),
        height:responsiveHeight(30),
        width:responsiveWidth(90),
     },
     oilModalView2:{
        backgroundColor: '#FFFFFF', 
        alignItems: 'center',
        borderRadius:responsiveWidth(4),
        height:responsiveHeight(60),
        width:responsiveWidth(90),
     },
     paymentModalView2:{
        backgroundColor: '#FFFFFF', 
        alignItems: 'center',
        borderRadius:responsiveWidth(4),
        height:responsiveHeight(60),
        width:responsiveWidth(90),
        
     },
     oilModalTextStyle:{
      borderTopWidth:responsiveWidth(0.1),
      width:responsiveWidth(90),
      alignItems:'center',
     },
     oilModalListTextStyle:{
      width:responsiveWidth(95),
      marginLeft:responsiveWidth(-6),
     },
     paymentmodalimageview:{
      marginTop: responsiveHeight(-6), 
      backgroundColor: 'black', 
      borderRadius: responsiveWidth(10), 
      width: responsiveWidth(20), 
      height: responsiveWidth(20), 
      alignItems: 'center', 
      justifyContent: 'space-around' 
     },
     item: {
      height: responsiveHeight(15),
      margin: responsiveHeight(1),
      marginLeft: responsiveWidth(2),
      padding: responsiveWidth(5),
      borderRightWidth: 1, // Add a border between items
      borderColor: '#ccc',
      borderRadius: responsiveWidth(5),
      minWidth: responsiveWidth(28), // Adjust the width as needed
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF'
    },
    CalendarViews_text: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      margin: responsiveHeight(0.5),
      color: '#444444'
    },
    selectedDay: {
      backgroundColor: '#FFFFC8', // Set background color for Selected Day
    },
     
})