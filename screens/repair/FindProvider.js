// import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

// expo linear gradient
import { LinearGradient } from "expo-linear-gradient";
import RepairProviderMap from "./maps/RepairProviderMap";
import RNTextArea from "@freakycoder/react-native-text-area";

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
// icons
// All Vector Icons //https://icons.expo.fyi/
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";

function FindProvider() {
  // navigation
  const navigation = useNavigation();
  // automobile category
  const [selectedAutomobileCategory, setSelectedAutomobileCategory] =
    useState();
  //problem category
  const [selectedProblemCategory, setSelectedProblemCategory] = useState();
  //    location - station or mobile
  const [selectedLocationCategory, setSelectedLocationCategory] = useState();

  return (
    <View style={styles.container}>
      {/* control scrolling  */}
      <ScrollView contentContainerStyle={styles.Scroll}>
        <View style={styles.flex_container}>
          {/* Header Linear Gradient */}
          <LinearGradient
            colors={["#4F8EF7", "#4F5EF1"]}
            style={styles.headerLinearGradient}
            start={{ x: 0.5, y: 0.9 }}
            end={{ x: 1, y: 0.5 }}
          >
            <View style={styles.top_header_section}>
              <View style={styles.header_section_content}>
                <Text style={styles.header_text}>
                  Find the near by Repair provider
                </Text>
                <Text style={styles.header_text}>"Faster and Convinient"</Text>
              </View>
            </View>
          </LinearGradient>

          {/* form_section */}
          <View style={styles.form_section}>
            {/* SELECT VEHICLE OR MOTORBIKE */}
            <View style={styles.inputContainer}>
              <Picker
                style={styles.input_dropdown}
                selectedValue={selectedAutomobileCategory}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedAutomobileCategory(itemValue)
                }
              >
                <Picker.Item label="Car / Motorcycle Repair" value="Unknown" />
                <Picker.Item label="Car" value="Car" />
                <Picker.Item label="MotorCycle" value="MotorCycle" />
              </Picker>
              {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left}>
                <Ionicons name="car" color="#4F8EF7" />
              </Text>
            </View>

            {/* SELECT CATEGORY TO FIX */}
            <View style={styles.inputContainer}>
              <Picker
                style={styles.input_dropdown}
                selectedValue={selectedProblemCategory}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedProblemCategory(itemValue)
                }
              >
                <Picker.Item label="What do you need fixed " value="Unknown" />
                <Picker.Item label="Brakes" value="Breaks" />
                <Picker.Item label="Change Piston" value="ChangePiston" />
                <Picker.Item label="Engine Oil" value="Engine Oil" />
                <Picker.Item
                  label="Replacing Clutch Plates"
                  value="replaceClutch"
                />
                <Picker.Item label="Change seats" value="changeSeats" />
                <Picker.Item label="Fix head lamp" value="headlammp" />
                <Picker.Item label="New side mirrors" value="side mirros" />
              </Picker>
              {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left}>
                <Ionicons name="person" color="#4F8EF7" />
              </Text>
            </View>

            {/* SELECT MOBILE / STATION */}
            <View style={styles.inputContainer}>
              <Picker
                style={styles.input_dropdown}
                selectedValue={selectedLocationCategory}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLocationCategory(itemValue)
                }
              >
                <Picker.Item label="Station / Mobile Service" value="Unknown" />
                <Picker.Item label="Going to station" value="Station" />
                <Picker.Item label="Mobile Service" value="Mobile" />
              </Picker>
              {/* Field icon - replace with icon  */}
              <Text style={styles.icon_left}>
                <Ionicons name="location" color="#4F8EF7" />

              </Text>
            </View>

            {/* DESCRIPTION */}
            <View style={styles.inputContainer}>
              <RNTextArea
                style={{ height: 100, alignItems: "center" }}
                maxCharLimit={100}
                placeholderTextColor="gray"
                exceedCharCountColor="#990606"
                placeholder={"Tell us more what you facing ..."}
                // onChangeText={(text: string) => console.log("Text: ", text)}
              />
            </View>

            {/* FIND PROVIDER BUTTON */}
            <TouchableOpacity
              onPress={() => {navigation.navigate("RepairProviderMap")}}
              style={styles.btnContainer}
            >
              <View style={styles.containerFlexBox}>
                <View >
                  <AntDesign name="checkcircle" size={24} color="#fff" />
                </View>

                <View >
                  <Text style={styles.btnText}>FIND PROVIDER</Text>
                </View>
              </View>
            </TouchableOpacity>
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

  // Linear Gradient Header
  headerLinearGradient: {
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 5,
    height: "50%",
    width: "100%",
  },

  //Header section content
  header_section_content: {
    flex: 1,
    alignItems: "center",
    paddingVertical: "10%",
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
    top: "20%",
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

  underlinePickerHeader: {
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
    color: "grey",

    borderRadius: 20,
  },

  //text_input icon-left
  icon_left: {
    position: "absolute",
    left: 10,
  },

  icon_left_dropdown: {
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
    alignItems: "center",
  },

  //  button
  btnContainer: {
    elevation: 5,
    backgroundColor: "#4F8EF7",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
  },

  // Button text
  btnText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
    alignSelf: "center",
    textTransform: "uppercase",
  },

  //container for buton with icon
  containerFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    // marginTop: 10,
  },

  
  // background-color low opacity :  backgroundColor: "#000000a0",
});

export default FindProvider;
