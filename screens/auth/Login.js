// import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

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
import Home from './../home/Home'
import Register from './Register'
import ForgotPassword  from "./ForgotPassword";


// images = uri: 'https://reactnative.dev/img/tiny_logo.png';

function Login() {
  // phone number with code 
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

// navigation
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.Scroll}>
        <View style={styles.flex_container}>
          {/* image section */}
          {/* <View style={styles.top_image_section}>
            <ImageBackground
              source={require("../../assets/auth/repair.png")}
              style={styles.image_properties}
            ></ImageBackground>
          </View> */}

          {/* form_section */}
          <View style={styles.form_section}>
            {/* input with icon */}
            <View style={styles.inputContainer}>
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


              {/* Field icon - replace with icon  */}
              {/* <Text style={styles.icon_left}>
                <Icon name="call" color="#4F8EF7" />
              </Text> */}

              <Text style={styles.icon_right}>
                {/* <Icon name="ios-book" color="#4F8EF7" />   */}
              </Text>
            </View>

            {/* input with icon */}
            <View style={styles.inputContainer}>
              {/* icon left*/}
              <Text style={styles.icon_left}>
                <Icon name="ios-person" color="#4F8EF7" />
              </Text>

              {/* input field */}
              <TextInput style={styles.input} placeholder="**********" />
              {/* icon right */}
              <Text style={styles.icon_right}>
                <Icon name="eye" color="#4F8EF7" />
              </Text>
            </View>

            {/* Button Login */}
            <TouchableOpacity
              // onPress={onPress}
              style={styles.btnContainer}
              onPress = {() => {navigation.navigate("Home")}}
            >
              <Text style={styles.btnText}>LOGIN</Text>
            </TouchableOpacity>

            {/* newuser / reset / create account */}
            <View style={styles.containerFlexBox}>
              {/* <View style={styles.newUser}>
                  <Text style={{ color:'black' }}>New User ? </Text>
                  
                </View> */}

               


              <View style={styles.createAccount}>
                <Text 
                onPress = {() => {navigation.navigate("Register")}}
                style={{ color: "#4F8EF7" }}>Create Account </Text>
              </View>

              <View style={styles.resetAccount}>
                <Text 
                onPress = {() => {navigation.navigate("ForgotPassword")}}
                style={{ color: "red" }}>Forgot Password ?</Text>
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
    backgroundColor: "#fff",
  },

  //scroll effect
  Scroll: {
    height: 700,
    // paddingVertical: 30,
  },

  // flex_user
  flex_container: {
    flex: 1,
  },
  // top_image_section
  top_image_section: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
  },

  // top_section image background
  image_properties: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: "50%",
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
    backgroundColor: "#4F8EF7",
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
  createAccount: {
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: -40,
  },

  // reset account
  resetAccount: {
    flex: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -80,
  },

  // background-color low opacity :  backgroundColor: "#000000a0",
});

export default Login;
