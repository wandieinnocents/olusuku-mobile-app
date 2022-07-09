// import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

// expo linear gradient
import { LinearGradient } from "expo-linear-gradient";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
// icons
import Icon from "react-native-vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
<FontAwesome name="whatsapp" size={24} color="black" />;

// add svg icons
import SvgUri from "react-native-svg-uri";
import style from "react-native-datepicker/style";
import ContactSupport from "../support/ContactSupport";


function About() {
  // navigation
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* control scrolling  */}
      <ScrollView contentContainerStyle={styles.Scroll}>
        <View style={styles.flex_container}>
          {/* Header Linear Gradient */}
          <LinearGradient
            colors={["#4F8EF7", "#8F9BC7"]}
            style={styles.headerLinearGradient}
            start={{ x: 0.5, y: 0.9 }}
            end={{ x: 1, y: 0.5 }}
          >
            {/* Header section */}
            <View style={styles.top_header_section}>
              <View style={styles.header_section_content}>
                <Text style={styles.header_text}>About</Text>
              </View>
            </View>
          </LinearGradient>

          {/* lower_section */}
          <View style={styles.lower_section}>
            {/* aboutContentSection */}
            <View style={styles.aboutContentSection}>
              {/* Content */}
              <View style={styles.descriptionAboutDetails}>
                <Text style={styles.contentText}>
                  Requested at : 10am on 5th May 2022
                </Text>
                <Text style={styles.contentTextTwo}>
                  Kampala , road - Nakasero Aha Tower
                </Text>
                {/* Border bottom */}
                <View style={styles.borderBottomLine}></View>
              </View>
              {/* Content */}
              <View style={styles.descriptionAboutDetails}>
                <Text style={styles.contentText}>
                  Requested at : 10am on 5th May 2022
                </Text>
                <Text style={styles.contentTextTwo}>
                  Kampala , road - Nakasero Aha Tower
                </Text>
                {/* Border bottom */}
                <View style={styles.borderBottomLine}></View>
              </View>

              {/* Content */}
              <View style={styles.descriptionAboutDetails}>
                <Text style={styles.contentText}>Version</Text>
                <Text style={styles.contentTextTwo}>v1.0</Text>
                {/* Border bottom */}
                <View style={styles.borderBottomLine}></View>

                {/* Social Icons container */}

                <View style={styles.socialIconsContainer}>
                  <View style={styles.iconOne}>
                    <Entypo
                      name="facebook-with-circle"
                      size={40}
                      color="#4F8EF7"
                    />
                  </View>
                  <View style={styles.iconTwo}>
                    <Entypo
                      name="twitter-with-circle"
                      size={40}
                      color="#4F8EF7"
                    />
                  </View>
                  <View style={styles.iconThree}>
                    <Entypo name="youtube-with-circle" size={40} color="red" />
                  </View>
                  <View style={styles.iconFour}>
                    <FontAwesome name="whatsapp" size={40} color="green" />
                  </View>
                </View>

                {/* Contact and social icons */}
              </View>
            </View>

            {/* End of aboutContentSection */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// stylesheet
const styles = StyleSheet.create({
  // main container
  container: {
    flex: 1,
  },

  //scroll effect
  Scroll: {
    height: 700,
  },

  // main_flex_container
  flex_container: {
    flex: 1,
  },

  // Linear Gradient Header
  headerLinearGradient: {
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
    width: "100%",
  },

  // top_header_section
  top_header_section: {
    flex: 1,
    position: "relative",
  },

  // Header section content
  header_section_content: {
    flex: 1,
    alignItems: "center",
    paddingVertical: "15%",
  },

  //Header text
  header_text: {
    fontSize: 20,
    textAlign: "center",
    paddingLeft: 30,
    paddingRight: 30,
    color: "#fff",
  },

  //lower_section
  lower_section: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: "100%",
    top: "20%",
    height: "100%",
    position: "absolute",
  },

  //container for alternative links //new_user reset..
  historyContainerFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    marginTop: 1,
    backgroundColor: "#fefffe",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 4,
  },

  //icon history
  iconHistory: {
    flex: 1,
    alignItems: "center",
  },

  // Description History
  descriptionHistory: {
    flex: 3,
  },

  // Arrow right history
  arrorRightHisotry: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // Content section hisotry details
  aboutContentSection: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#fefffe",
    borderWidth: 1,
    borderColor: "#fefffe",
    height: 300,
    marginTop: 20,
    elevation: 3,
  },

  //text content description
  descriptionAboutDetails: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
  },

  // border bottom
  borderBottomLine: {
    // width: 126,
    borderColor: "#bfc7c1",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderStyle: "solid",
    marginTop: 3,
  },

  // content text
  contentText: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
  // content text 2
  contentTextTwo: {
    marginTop: 5,
    color: "#000",
  },

  //   Button container
  btnContainer: {
    elevation: 5,
    backgroundColor: "#EB6A9F",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 15,
  },

  //   Button text
  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  btnTextOther: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 3,
    alignSelf: "center",
    textTransform: "uppercase",
  },

  //   modal
  modalPhoneCall: {
    backgroundColor: "#fff",
    padding: 15,
    alignContent: "center",
    borderRadius: 30,
  },
  // modal text
  modalText: {
    paddingTop: 15,
    paddingBottom: 5,
    fontSize: 17,
    alignContent: "center",
    textAlign: "center",
  },

  modalTextTwo: {
    fontSize: 15,
    paddingBottom: 5,
    alignContent: "center",
    textAlign: "center",
  },

  //   modal button container
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  // modal button close
  modalButtonClose: {
    flex: 1,
    elevation: 5,
    backgroundColor: "#EB6A9F",
    borderRadius: 30,
    color: "#000",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 15,
  },

  // modal button call
  modalButtonMessage: {
    flex: 1,
    elevation: 5,
    backgroundColor: "#2DC897",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 15,
    marginLeft: 20,
  },

  //   Fle icon container
  modalIconsFlexContainer: {
    flexDirection: "row",
  },
  //   ModalIcon
  modalIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  // Social Icons
  socialIconsContainer: {
    flexDirection: "row",
    // backgroundColor: "#000",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  //icon one
  iconOne: {
    flex: 1,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  //icon two
  iconTwo: {
    flex: 1,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  //icon three
  iconThree: {
    flex: 1,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  //icon four
  iconFour: {
    flex: 1,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  // background-color low opacity :  backgroundColor: "#000000a0",
});

export default About;
