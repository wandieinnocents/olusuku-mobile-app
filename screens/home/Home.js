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
  Share,
} from "react-native";
// vector icons
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
// add svg icons
import SvgUri from "react-native-svg-uri";
// pages
import FindProvider from "../repair/FindProvider";
import MedicalCategory from "../medical/MedicalCategory";
import FuelProviderCategory from "../fuel/FuelProviderCategory";
import SpareCategory from "../spares/SpareCategory";

// images = uri: 'https://reactnative.dev/img/tiny_logo.png';

function Home({ navigation }) {
  // Handle App sharing
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "App link",
        message:
          "Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en",
        url: "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.Scroll}>
        <View style={styles.flex_container}>
          {/* top image section */}
          <View style={styles.top_image_section}>
            <ImageBackground
              source={require("../../assets/olusuku/b.png")}
              style={styles.image_properties}
            ></ImageBackground>
          </View>
          {/* End of top image section */}

          {/* shape rotate */}
          <View style={styles.rotateShape}></View>
          {/* end rotate shape  */}

          {/* menuItemsSection  */}
          <View style={styles.menuItemsSection}>
            {/* Main menu flex box container - row 1 */}

            <View style={styles.menuItemsFlexboxContainer}>
              {/* Repair Menu  */}

              <View style={styles.repairMenu}>
                <TouchableOpacity
                  // link to find provider
                  // onPress={() => {
                  //   navigation.navigate("FindProvider");
                  // }}
                  style={{ alignItems: "center" }}
                >
                  {/* Icon */}

                  <Image
                    style={{ width: 60, height: 60 }}
                    source={require("../../assets/olusuku/shopicon.png")}
                  />

                  {/* Menu name */}
                  <Text style={styles.menuItemTex}>Catalogue </Text>

                  {/* arrow  */}
                  <AntDesign
                    style={styles.menuArrowIcon}
                    name="arrowright"
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>

              {/* Fuel Menu */}
              <View style={styles.fuelMenu}>
                <TouchableOpacity
                  // onPress={() => {
                  //   navigation.navigate("FuelProviderCategory");
                  // }}
                  style={{ alignItems: "center" }}
                >
                  {/* Icon */}
                  <Image
                    style={{ width: 60, height: 60 }}
                    source={require("../../assets/olusuku/callicon.png")}
                  />

                  {/* Menu name */}
                  <Text style={styles.menuItemTex}>Support </Text>

                  {/* arrow  */}
                  <AntDesign
                    style={styles.menuArrowIcon}
                    name="arrowright"
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* End of flex box section  - row 1*/}

            

            {/* End of flex box section  - row 2*/}
          </View>
          {/* End of menuItemsSection */}
        </View>
      </ScrollView>
      {/* Floating action button */}
      <TouchableOpacity 
      style={styles.floatingAcionButton}
      onPress={onShare}
      >
        <Entypo
          style={styles.menuArrowIcon}
          name="share"
          size={30}
          color="#fff"
        />
      </TouchableOpacity>
      
      {/* End of floating action button */}
    </View>
  );
}

// stylesheet
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
  //menu items flex section
  menuItemsSection: {
    flex: 1,
    backgroundColor: "#fff",
    // borderTopLeftRadius: 100,
    // borderTopRightRadius: 100,
    paddingHorizontal: 60,
    // paddingVertical: 20,
    // backgroundColor:'gray',
    height: "100%",
    width: "100%",
    // top - balance form section above.
    top: "50%",
    // top:150,
    position: "absolute",
    // transform: [{ rotate: '-10deg' }]
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
    top: "38%",
    // left: 0,
    right: -30,
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

  // repair menu section
  repairMenu: {
    flex: 1,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: -40,
    backgroundColor: "#1D4AB4",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // elevation: 20,
  },

  // fuelMenu section
  fuelMenu: {
    flex: 1,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: -80,
    marginLeft: 20,
    backgroundColor: "#3DB5B2",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  // medical menu section
  medicalMenu: {
    flex: 1,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: -40,
    backgroundColor: "#FFB382",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  // spareParts  menu section
  sparePartsMenu: {
    flex: 1,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: -80,
    marginLeft: 20,
    backgroundColor: "#000",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
    color: "#fff",
    fontSize: 20,
  },
  // floating action button
  floatingAcionButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#1D4AB4",
    borderRadius: 100,
  },

  // background-color low opacity :  backgroundColor: "#000000a0",
});

export default Home;
