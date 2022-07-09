// import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

// expo linear gradient
import { LinearGradient } from "expo-linear-gradient";
import PhoneInput from "react-native-phone-number-input";
import VerifyPhoneNumber  from "./VerifyPhoneNumber";

import {
  SafeAreaView,
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

function ForgotPassword() {
  // Phone number with picker
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef < PhoneInput > null;

  // navigation 
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* control scrolling  */}
      <ScrollView contentContainerStyle={styles.Scroll}>
        <View style={styles.flex_container}>
          {/* Header Linear Gradient */}
          <LinearGradient
            colors={["#EB6A9F", "#FAA7B3"]}
            style={styles.headerLinearGradient}
            start={{ x: 0.5, y: 0.9 }}
            end={{ x: 1, y: 0.5 }}
          >
            <View style={styles.top_header_section}>
              <View style={styles.header_section_content}>
                <Text style={styles.header_text}>
                  Enter the phone number associated with this account to reset
                  it.
                </Text>
              </View>
            </View>
          </LinearGradient>

          {/* form_section */}
          <View style={styles.form_section}>
            {/* input with icon */}
            <View style={styles.inputContainer}>
              <Text style={styles.icon_left}>
                <Icon name="call" color="#4F8EF7" />
              </Text>
              {/* <TextInput style={styles.input} placeholder="Phone Number" /> */}
              {/* Country code selector */}
              <PhoneInput
                useRef={phoneInput}
                defaultValue={value}
                defaultCode="UG"
                onChangeFormattedText={(text) => {
                  setValue(text);
                }}
                // withDarkTheme
                // withShadow
                autoFocus
              />
              {/* End Country code selector */}

              {/* <Text style={styles.icon_right}>
                <Icon name="ios-book" color="#4F8EF7" />  
              </Text> */}
            </View>

            {/* Button Reset */}
            <TouchableOpacity
              // onPress={() => {
              // const checkValid = phoneInput.current?.isValidNumber();
              // setValid(checkValid ? checkValid : false);
              // }}
              style={styles.btnContainer}
            >
              <Text 
              onPress={() => navigation.navigate("VerifyPhoneNumber")}
              style={styles.btnText}>RESET</Text>
            </TouchableOpacity>
            <View style={styles.containerFlexBox}>
              {/* <View style={styles.newUser}>
                  <Text style={{ color:'black' }}>New User ? </Text>
                </View> */}
              <View style={styles.leftInfo}>
                <Text style={{ color: "#000" }}>Check Your Phone for the </Text>
              </View>
              <View style={styles.rightInfo}>
                <Text style={{ color: "#4F8EF7" }}>Reset Code</Text>
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
    alignItems: "center",
    justifyContent: "center",
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
    // top - balance form section above.
    top: "30%",
    height: "100%",
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
    borderBottomWidth: 1,
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
    backgroundColor: "#EB6A9F",
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

  // background-color low opacity :  backgroundColor: "#000000a0",
});

export default ForgotPassword;
