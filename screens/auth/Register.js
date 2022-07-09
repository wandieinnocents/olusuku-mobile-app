// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
// import RNPickerSelect from "react-native-picker-select";
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
import Login from './Login'
// All Vector Icons //https://icons.expo.fyi/
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
// date picker
import DatePicker from 'react-native-datepicker';

function Register() {
  // navigation helper
  const navigation = useNavigation();
  // onselect dropdown picker
  const [selectedCategory, setSelectedCategory] = useState();
  // set date picker 
  const [date, setDate] = useState('09-10-1990');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.Scroll}>
        <View style={styles.flex_container}>
          {/* image section */}
          <View style={styles.top_image_section}>
            <ImageBackground
              source={require("../../assets/auth/signup.jpg")}
              style={styles.image_properties}
            ></ImageBackground>

          </View>

          {/* form_section */}
          <View style={styles.form_section}>
            {/* FIRST NAME*/}
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="First Name" />
              {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left}>
                <Icon name="ios-person" color="#4F8EF7" />
              </Text>

              <Text style={styles.icon_right}>
                {/* <Icon name="ios-book" color="#4F8EF7" />   */}
              </Text>
            </View>

            {/* LAST NAME*/}
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Last Name" />
              {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left}>
                <Icon name="ios-person" color="#4F8EF7" />
              </Text>

              <Text style={styles.icon_right}>
                {/* <Icon name="ios-book" color="#4F8EF7" />   */}
              </Text>
            </View>

            {/* EMAIL*/}
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Email" />
              {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left}>
              
                <MaterialCommunityIcons name="email-multiple-outline"  color="#4F8EF7" />
              </Text>

              <Text style={styles.icon_right}>
                {/* <Icon name="ios-book" color="#4F8EF7" />   */}
              </Text>
            </View>

            {/* PHONE NUMBER */}
            <View style={styles.inputContainer}>
              {/* icon left*/}
              <Text style={styles.icon_left}>
                <Icon name="call" color="#4F8EF7" />
              </Text>

              {/* input field */}
              <TextInput style={styles.input} placeholder="Phone Number" />
              {/* icon right */}
              {/* <Text style={styles.icon_right}>
                <Icon name="eye" color="#4F8EF7" />
              </Text> */}
            </View>

            {/* SELECT CATEGORY */}
            <View style={styles.inputContainer}>
            
              <Picker
              style={styles.input_dropdown}
              selectedValue={selectedCategory}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedCategory(itemValue)
              }>
              <Picker.Item  label="Select Car/Motorcycle" value="Unknown" />
              <Picker.Item label="Car" value="Car" />
              <Picker.Item label="MotorCycle" value="MotorCycle" />
            </Picker>

              {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left}>
              <Ionicons name="options" color="#4F8EF7" />
              </Text>

            </View>

            {/* MODEL */}
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Model" />
              {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left}>
                <AntDesign name="medium-monogram"  color="#4F8EF7" />
              </Text>

              <Text style={styles.icon_right}>
                {/* <Icon name="ios-book" color="#4F8EF7" />   */}
              </Text>
            </View>

            {/* ID NO */}
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Vehicle ID Number" />
              {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left}>
              <FontAwesome5 name="car" color="#4F8EF7" />
              </Text>

              <Text style={styles.icon_right}>
                {/* <Icon name="ios-book" color="#4F8EF7" />   */}
              </Text>
            </View>

            {/* LICENCE PLATE NUMBER */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Licence Plate Number"
              />
              {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left}>
               
                <FontAwesome5 name="car" color="#4F8EF7" />
              </Text>

              <Text style={styles.icon_right}>
                {/* <Icon name="ios-book" color="#4F8EF7" />   */}
              </Text>
            </View>

            {/* DATE OF BIRTH  */}
            <View style={styles.inputContainer}>
            {/* date picker  */}
            <DatePicker
                style={styles.input}
                date={date}
                mode="date" //date //time //date time
                placeholder="select date"
                format="DD/MM/YYYY"
                minDate="01-01-1550"
                maxDate="01-01-3099"
                confirmBtnText="Confirm"

                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'relative',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                    display:'none'
                  },

                  dateInput: {
                    // borderColor : "gray",
                    alignItems: "flex-start",
                    marginTop:10,
                    borderWidth: 0,
                    // borderBottomWidth: 1,

                  },

                  placeholderText: {
                    fontSize: 15,
                    color: "gray"

                  },

                  dateText: {
                    fontSize: 15,
                    color: "gray"
                  }

                }}

                onDateChange={(date) => {

                  setDate(date);

                }}

                />

              {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left}>
               
                <MaterialIcons name="date-range"color="#4F8EF7" />
              </Text>

              <Text style={styles.icon_right}>
                {/* <Icon name="ios-book" color="#4F8EF7" />   */}
              </Text>
            </View>

            {/* Button Login */}
            <TouchableOpacity
              // onPress={onPress}
              style={styles.btnContainer}
            >
              <Text style={styles.btnText}>REGISTER</Text>
            </TouchableOpacity>

            {/* newuser / reset / create account */}
            <View style={styles.containerFlexBox}>
              <View style={styles.createAccount}>
                <Text style={{ color: "#4F8EF7" }}>
                  Already have an Account{" "}
                </Text>
              </View>

              <View style={styles.resetAccount}>
                <Text 
                onPress={() => navigation.navigate("Login")}
                style={{ color: "red" }}>Login</Text>
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
    paddingVertical: 10,
    width: "100%",
    height: "100%",
    // top - balance form section above.
    top: "15%",
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
    borderBottomWidth: 0.7,
  },

  underlinePickerHeader :{
    justifyContent: "center",
    borderColor: "rgba(158, 150, 150, .5)",
    borderBottomWidth: 4,
  },

  //input field
  input: {
    height: 50,
    left: 40,
    borderBottomColor: "grey",
    borderRadius: 20,
  },

  // Input dropdown
  input_dropdown: {
    height: 50,
    left: 30,
    borderBottomColor: "grey",
    color:"grey",

    borderRadius: 20,
  },

 
   //text_input icon-left
   icon_left: {
    position: "absolute",
    left: 10,
  },

  icon_left_dropdown:{
    position: "absolute",
    left: 10,
  },
  //text_input icon-right
  icon_right: {
    position: "absolute",
    right: -20,
  },

  //dropdown
  drop_down: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
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



export default Register;
