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
// vector icons
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

// add svg icons
import SvgUri from "react-native-svg-uri";
// pages
import FindProvider from "../repair/FindProvider";
import FuelProviderCategory from "../fuel/FuelProviderCategory";
import SendMessage from "../message/SendMessage";
import AudioRecord from "./AudioRecord";
// expo linear gradient
import { LinearGradient } from "expo-linear-gradient";

// images = uri: 'https://reactnative.dev/img/tiny_logo.png';

function MedicalCategory({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.Scroll}>
        <View style={styles.flex_container}>
          <ImageBackground
            source={require("../../assets/mainmenu/medical.png")}
            style={styles.image_properties}
          ></ImageBackground>

          {/* menuItemsSection  */}
          <View style={styles.menuItemsSection}>
            <View>
              <Text
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  fontSize: 15,
                  color: "#707072",
                }}
              >
                Chose Audio or Message
              </Text>
              <View
                style={{
                  borderColor: "rgba(158, 150, 150, .5)",
                  borderBottomWidth: 0.9,
                  marginTop: 7,
                }}
              ></View>
            </View>
            {/* Main menu flex box container - row 2 */}
            <View style={styles.menuItemsFlexboxContainer}>
              {/* Record Menu  */}

              <View style={styles.recordMenu}>
                <TouchableOpacity
                  onPress={() => { navigation.navigate("AudioRecord")}}
                  style={{ alignItems: "center" }}
                >
                  {/* Icon */}

                  <MaterialCommunityIcons
                    name="microphone"
                    size={40}
                    color="#fff"
                  />
                  {/* Menu name */}
                  <Text style={{ color: "#fff", fontSize: 15 }}>Record</Text>

                  {/* arrow  */}
                  <AntDesign
                    style={styles.menuArrowIcon}
                    name="arrowright"
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
              {/* Message parts Menu */}
              <View style={styles.messageMenu}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("SendMessage");
                  }}
                  style={{ alignItems: "center" }}
                >
                  {/* Icon */}
                  <AntDesign name="message1" size={30} color="#4F8EF7" />

                  {/* Menu name */}
                  <Text style={styles.menuItemTex}>Message </Text>

                  {/* arrow  */}
                  <AntDesign
                    style={styles.menuArrowIcon}
                    name="arrowright"
                    size={24}
                    color="#4F8EF7"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* End of flex box section  - row 2*/}
          </View>
          {/* End of menuItemsSection */}
        </View>
      </ScrollView>
    </View>
  );
}

// medical menu style sheet
const styles = StyleSheet.create({
  // main container
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  //scroll effect
  Scroll: {
    height: 600,
    // paddingVertical: 30,
  },

  // main flex container
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
  // Linear Gradient Header
  headerLinearGradient: {
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 5,
    height: "50%",
    width: "100%",
  },

  //   Header section content
  header_section_content: {
    flex: 1,
    alignItems: "center",
    paddingVertical: "20%",
    // backgroundColor: "white",
  },

  // Header text
  header_text: {
    fontSize: 20,
    textAlign: "center",
    paddingLeft: 30,
    paddingRight: 30,
    color: "#fff",
  },

  //menu items flex section
  menuItemsSection: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 50,
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

  // Rotate shape
  rotateShape: {
    flex: 1,
    backgroundColor: "#fff",
    // borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // paddingHorizontal: 60,
    marginTop: 20,
    height: "100%",
    width: "100%",
    top: "28%",
    // left: 0,
    right: -35,
    position: "absolute",
    transform: [{ rotate: "-6deg" }],
    // elevation: 10
  },

  //main menu flex box container
  menuItemsFlexboxContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  // record menu section
  recordMenu: {
    flex: 1,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4F8EF7",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.47,
    shadowRadius: 4.65,
    elevation: 15,
  },

  // message  menu section
  messageMenu: {
    flex: 1,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.47,
    shadowRadius: 4.65,
    elevation: 15,
  },
  // menuIcon
  menuIcon: {
    marginBottom: 10,
  },
  // menu arrow icon
  menuArrowIcon: {
    marginTop: 5,
  },
  // menu item text
  menuItemTex: {
    color: "#000",
    fontSize: 15,
    padding: 5,
  },
});

export default MedicalCategory;
