// import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

// expo linear gradient
import { LinearGradient } from "expo-linear-gradient";
import PhoneInput from "react-native-phone-number-input";

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

// add svg icons
import SvgUri from "react-native-svg-uri";
import style from "react-native-datepicker/style";
import ContactSupport from "../support/ContactSupport";
// modal
import Modal from "react-native-modal";
// send message
import SendMessage from "../message/SendMessage";

function HistoryDetails() {
  // navigation
  const navigation = useNavigation();
  //call modal
  const [isModalVisible, setModalVisible] = useState(false);
  // toggle modal
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // call
  const makeCall = (number) => {
    const args = {
      number: number, // String value with the number to call
      prompt: true, // Optional boolean property. Determines if the user should be prompt prior to the call
    };
    call(args).catch(console.error);
  };

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
                <Text style={styles.header_text}>History Details</Text>
              </View>
            </View>
          </LinearGradient>

          {/* lower_section */}
          <View style={styles.lower_section}>
            {/* History Item */}
            <View style={styles.historyContainerFlexBox}>
              <View style={styles.iconHistory}>
                <FontAwesome name="history" size={24} color="#4F8EF7" />
              </View>
              <View style={styles.descriptionHistory}>
                <Text style={{ color: "#000" }}>Repair </Text>
                <Text style={{ color: "#000" }}>
                  Replacing brakes for cars..
                </Text>
              </View>

              <View>
                <Text style={{ paddingRight: 10 }}> $100 </Text>
              </View>
            </View>
            {/* History Item */}

            {/* historyContentSection */}
            <View style={styles.historyContentSection}>
              {/* Content */}
              <View style={styles.descriptionHistoryDetails}>
                <Text style={styles.contentText}>
                  Requested at : 10am on 5th May 2022{" "}
                </Text>
                <Text style={styles.contentTextTwo}>
                  Kampala , road - Nakasero Aha Tower
                </Text>
                {/* Border bottom */}
                <View style={styles.borderBottomLine}></View>
              </View>
              {/* Content */}
              <View style={styles.descriptionHistoryDetails}>
                <Text style={styles.contentText}>
                  Requested at : 10am on 5th May 2022{" "}
                </Text>
                <Text style={styles.contentTextTwo}>
                  Kampala , road - Nakasero Aha Tower
                </Text>
                {/* Border bottom */}
                <View style={styles.borderBottomLine}></View>
              </View>

              {/* Content */}
              <View style={styles.descriptionHistoryDetails}>
                <Text style={styles.contentText}>
                  Requested at : 10am on 5th May 2022{" "}
                </Text>
                <Text style={styles.contentTextTwo}>
                  Kampala , road - Nakasero Aha Tower
                </Text>
                {/* Border bottom */}
                <View style={styles.borderBottomLine}></View>

                {/* Contact support button */}
                <TouchableOpacity
                  onPress={toggleModal}
                  style={styles.btnContainer}
                >
                  <Text style={styles.btnText}>CONTACT SUPPORT</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* End of historyContentSection */}
          </View>

          {/* Modal Calling feature */}
          <View style={{ flex: 1 }}>
            {/* <Button title="Show modal" onPress={toggleModal} /> */}

            <Modal
              isVisible={isModalVisible}
              onBackdropPress={() => setModalVisible(false)}
            >
              <View style={styles.modalPhoneCall}>
                {/* Modal Icon */}
                <View style={styles.modalIconsFlexContainer}>
                  <View style={styles.modalIcon}>
                    <Entypo name="help-with-circle" size={60} color="#2DC897" />
                  </View>
                </View>

                {/* Modal text */}
                <Text style={styles.modalText}>
                  You have reached Customer Support!
                </Text>
                <Text style={styles.modalTextTwo}>
                  Click to Tell us your concern !
                </Text>
                {/* Border bottom */}
                <View style={styles.borderBottomLine}></View>

                {/* Modal Buttons Container */}
                <View style={styles.modalButtonsContainer}>
                  {/* modal button close  */}

                  {/* close2 */}
                  <TouchableOpacity
                    onPress={toggleModal}
                    style={styles.modalButtonClose}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <MaterialIcons name="cancel" size={24} color="#fff" />
                      <Text style={styles.btnTextOther}>cancel</Text>
                    </View>
                  </TouchableOpacity>
                  {/* close2 */}
                  {/* Modal button sms */}
                  <TouchableOpacity
                    onPress={() => {
                      // Linking.openURL("tel:+256706382817");
                      navigation.navigate("SendMessage");
                    }}
                    style={styles.modalButtonMessage}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Entypo name="message" size={24} color="#fff" />

                      <Text style={styles.btnTextOther}>Message</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                {/* End of Modal Buttons container */}
              </View>
            </Modal>
          </View>
          {/* End of modal calling feature */}
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
  historyContentSection: {
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
  descriptionHistoryDetails: {
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

  // background-color low opacity :  backgroundColor: "#000000a0",
});

export default HistoryDetails;
