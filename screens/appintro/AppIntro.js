
import * as React from 'react';

import Login from '../auth/Login';
import Register from '../auth/Register';
import SetNewPassword from '../auth/SetNewPassword';
import Home from '../home/Home';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import AppIntroSlider from 'react-native-app-intro-slider';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VerifyPhoneNumber from '../auth/VerifyPhoneNumber';
import ForgotPassword from '../auth/ForgotPassword';

const Stack = createNativeStackNavigator();
const AppIntro = () => {
  const [showRealApp, setShowRealApp] = React.useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };


  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
           
        {/* <Image style={ styles.introImageStyle} source={item.image} /> */}
        {/* <Image style={[slides. ? styles.image : styles.introImageStyle]} source={item.image} /> */}
        {slides[2] ? (
        <Image style={styles.introImageStyle } source={item.image} />)
        :(
          <Image style={styles.image} source={item.image} />)}
        
        <Text style={styles.introTextStyle}>{item.text}</Text>
        
      </View>
    );
  };

  const nxtButton = () =>{
    return(
      <View style={styles.buttonCircle}>
        <AntDesign name="arrowright" size={24} color="#f5429b" />
      </View>
    )

  }

  return (
    <>
      {showRealApp ? (
            <Home/>
      ) : (
        <AppIntroSlider 
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          renderNextButton={nxtButton}
          
        />
      )}
    </>
  );
};


export default AppIntro;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  arrowRedColor:{color:"#fff"},
  arrowBlueColor:{color:"#42d1f5"},
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
 introImageStyle: {
    width: 150,
    height: 150,
    marginTop:"50%",

  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 80,
    marginBottom:90
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 26,
    fontWeight: 'bold',
  },
  buttonCircle: {
    width: 88,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  
  image:{
    flex:1,
    justifyContent:'center',
    width:400,
    height: 400,
    resizeMode: 'stretch'
  },
  gradientRed:{
  backgroundColor:'red'
  }
});

// Slide Data
const slides = [
  {
    key: 's1',
    text: 'FRESH FOODS & HERBS \n\n Get Fresh x organic Foods and  \n Herbs To your Kitchen Door \n with convinience.',
    title: '',
    image:require('../../assets/olusuku/orange.png'),
    backgroundColor: '#e96c16',
    // backgroundColor:styles.gradientRed,
    elevation: 20,
    shadowColor: '#e96c16',
  },
  {
    key: 's2',
    title: '',
    text: 'GROWN ORGANICALLY \n\n Get foods and herbs that are \n organicaly grown with \n  only natural inputs',
    image:require('../../assets/olusuku/apple.png'),
    backgroundColor: '#cf3034',
  },
  {
    key: 's3',
    text: ' HOW IT WORKS \n\n You can Signup on the app \n Visit the catalogue \n and shop',
    image: require('../../assets/olusuku/cart.png'),
    backgroundColor: '#b04f99',
    // imageStyle: styles.image,
  
  }
];
