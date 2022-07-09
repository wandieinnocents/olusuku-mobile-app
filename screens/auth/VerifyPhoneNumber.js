// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
// expo linear gradient
import {LinearGradient} from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

import OTPInputView from '@twotalltotems/react-native-otp-input';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
 
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Clipboard from 'expo-clipboard';
// pages
import SetNewPassword from '../auth/SetNewPassword';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    'Require cycle:'
])

function VerifyPhoneNumber() {
  // navigation
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    {/* control scrolling  */}
      <ScrollView contentContainerStyle={styles.Scroll}>
        <View style={styles.flex_container}>
          {/* Header Linear Gradient */}
          <LinearGradient
          colors={['#2DC897','#76ED92' ]}
          style={styles.headerLinearGradient}
          start={{ x: 0.5, y: 0.8 }}
          end={{ x: 1, y: 0.6 }}
          
          >     
          <View style={styles.top_header_section}>
            <View style={styles.header_section_content}>
              <Text style={styles.header_text}>
              Please enter the 4-digit secret code sent to your Phone Number.
              </Text>
            </View>
          </View>
          </LinearGradient>


          {/* form_section */}
          <View style={styles.form_section}>
            {/* input with icon */}
            <View style={styles.inputContainer}>
             

              {/* <TextInput style={styles.input} placeholder="Enter Code.." /> */}
              <OTPInputView
                style={{width: '100%', height: 100 }}
                pinCount={4}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                })}
            />
              
            </View>

            {/* message */}
            {/* resendCodeMessageSectionContent */}
            <View >
            <Text style={ styles.resendCodeMessage } >If you don’t receive the code in 30 seconds tap Resend code below to resend it.</Text>
            </View>

            {/* Button Reset */}
            <TouchableOpacity
              onPress={() => navigation.navigate("SetNewPassword")}
              style={styles.btnContainer}
            >
              <Text style={styles.btnText}>VERIFY</Text>
            </TouchableOpacity>
            <View style={styles.containerFlexBox}>
              {/* <View style={styles.newUser}>
                  <Text style={{ color:'black' }}>New User ? </Text>
                </View> */}
              <View style={styles.leftInfo}>
                <Text style={{ color: "#000" }}>Didn't recieve it ? </Text>
              </View>
              <View style={styles.rightInfo}>
                <Text style={{ color: "#2DC897" }}>Resed Code</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // main container
  container: {
    flex: 1,
    backgroundColor: "#FB8686",
  },

  //scroll effect
  Scroll: {
    height: 700,
    // paddingVertical: 30,
  },

  // main_flex_container
  flex_container: {
    flex: 1,
  },

// Linear Gradient Header
  headerLinearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 5,
    height: "50%", 
    width: "100%",
  },

  // top_header_section
  top_header_section: {
    flex: 1,
    // justifyContent: "flex-end",
    position: "relative",
  },

//   Header section content
  header_section_content: {
    flex: 1,
    alignItems: "center",
    paddingVertical: "20%",
    // backgroundColor: "white",
  },

//   Header text
  header_text: {
    fontSize: 20,
    textAlign: "center",
    paddingLeft: 30,
    paddingRight: 30,
    color: "#fff",
  },

  //form_section
  form_section: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: "100%",
    height: "100%",
    // top - balance form section above.
    top: "30%",
    // top:150,
    position: "absolute",
    // elevation-shadow
    // elevation: 10
  },
  //form input with icon
  //main input container
  inputContainer: {
    justifyContent: "center",
    borderColor: "rgba(158, 150, 150, .5)",
    // borderBottomWidth: 1,
  },

  //input field
  input: {
    height: 50,
    left: 40,
    borderBottomColor: "grey",
    borderRadius: 20,
  },
  //text_input icon-left
  icon_left: {
    position: "absolute",
    left: 10,
  },
  //text_input icon-right
  icon_right: {
    position: "absolute",
    right: 10,
  },
  // login button
  btnContainer: {
    elevation: 5,
    backgroundColor: "#2DC897",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
  },

  //login Button text
  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  //container for alternative links //new_user reset..
  containerFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  // new user
  // newUser: {
  //   flex: 1,
  //   height: 30,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginRight: -30,
  // },
  // create account
  leftInfo: {
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: -40,
  },
  // reset account
  rightInfo: {
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -80,
  },
  //   Header section content
  resendCodeMessageSectionContent: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "white",
  },
//resend code message
resendCodeMessage: {
    fontSize: 15,
    textAlign: "center",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop:15,
    color: "#606060",
    // fontFamily:'Karla-Regular',
},

// OTP STYLING

borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },

// END OF OTP STYLING
  // background-color low opacity :  backgroundColor: "#000000a0",
});

export default VerifyPhoneNumber;
