import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { GeneralStyles } from "../css/GeneralTheme";
import {
  AntDesign,
  FontAwesome,
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Settings = ({ navigation }) => {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.Scroll}>
        <View style={styles.profile_section}>
          {/* Header Linear Gradient */}
          <LinearGradient
            colors={["#4F8EF7", "#4F5EF1"]}
            style={styles.headerLinearGradient}
            start={{ x: 0.5, y: 0.9 }}
            end={{ x: 1, y: 0.5 }}
          >
            {/*Header Section*/}
            <View>
              <Text style={styles.header_text}>Settings</Text>
            </View>
          </LinearGradient>
        </View>

        {/*outer container*/}
        <View style={styles.outer_container}>
          <View style={styles.settingsBorderContainer}>
            <View style={styles.header_section_content}>
              <Text style={styles.title}>Manage your Settings</Text>
            </View>

            {/* History Item */}
            <View style={styles.historyContainerFlexBox}>
              <View style={styles.iconHistory}>
                <SimpleLineIcons
                  name="location-pin"
                  size={18}
                  color="#4F8EF7"
                />
              </View>
              <View style={styles.descriptionHistory}>
                <Text style={{ color: "grey", fontSize: 16 }}>Location </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("HistoryDetails");
                }}
                style={styles.arrorRightHisotry}
              >
                <View>
                  <AntDesign name="arrowright" size={24} color="#4F8EF7" />
                </View>
              </TouchableOpacity>
            </View>

            {/* History Item */}
            <View style={styles.historyContainerFlexBox}>
              <View style={styles.iconHistory}>
                <MaterialIcons name="payment" size={18} color="#4F8EF7" />
              </View>
              <View style={styles.descriptionHistory}>
                <Text style={{ color: "grey", fontSize: 16 }}>Payments </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("HistoryDetails");
                }}
                style={styles.arrorRightHisotry}
              >
                <View>
                  <AntDesign name="arrowright" size={24} color="#4F8EF7" />
                </View>
              </TouchableOpacity>
            </View>

            {/* History Item */}
            <View style={styles.historyContainerFlexBox}>
              <View style={styles.iconHistory}>
                <MaterialCommunityIcons
                  name="two-factor-authentication"
                  size={18}
                  color="#4F8EF7"
                />
              </View>
              <View style={styles.descriptionHistory}>
                <Text style={{ color: "grey", fontSize: 16 }}>
                  2Factor Authentication{" "}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("HistoryDetails");
                }}
                style={styles.arrorRightHisotry}
              >
                <View>
                  <AntDesign name="arrowright" size={24} color="#4F8EF7" />
                </View>
              </TouchableOpacity>
            </View>

            {/* History Item */}
            <View style={styles.historyContainerFlexBox}>
              <View style={styles.iconHistory}>
                <MaterialCommunityIcons
                  name="file-document-edit-outline"
                  size={18}
                  color="#4F8EF7"
                />
              </View>
              <View style={styles.descriptionHistory}>
                <Text style={{ color: "grey", fontSize: 16 }}>Reciepts </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("HistoryDetails");
                }}
                style={styles.arrorRightHisotry}
              >
                <View>
                  <AntDesign name="arrowright" size={24} color="#4F8EF7" />
                </View>
              </TouchableOpacity>
            </View>

            {/* History Item */}
            <View style={styles.historyContainerFlexBox}>
              <View style={styles.iconHistory}>
                <MaterialIcons
                  name="notifications-on"
                  size={18}
                  color="#4F8EF7"
                />
              </View>
              <View style={styles.descriptionHistory}>
                <Text style={{ color: "grey", fontSize: 16 }}>
                  Notifications{" "}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("HistoryDetails");
                }}
                style={styles.arrorRightHisotry}
              >
                <View>
                  <AntDesign name="arrowright" size={24} color="#4F8EF7" />
                </View>
              </TouchableOpacity>
            </View>

            {/* Manage Cars */}
            <View style={styles.historyContainerFlexBox}>
              <View style={styles.iconHistory}>
                <MaterialIcons
                  name="directions-car"
                  size={18}
                  color="#4F8EF7"
                />
              </View>
              <View style={styles.descriptionHistory}>
                <Text style={{ color: "grey", fontSize: 16 }}>
                  Manage Cars{" "}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("HistoryDetails");
                }}
                style={styles.arrorRightHisotry}
              >
                <View>
                  <AntDesign name="arrowright" size={24} color="#4F8EF7" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // Linear Gradient Header
  headerLinearGradient: {
    alignItems: "center",
    justifyContent: "center",
    // borderBottomLeftRadius:50,
    // borderBottomRightRadius:50,
    height: "40%",
    width: "100%",
  },
  Scroll: {
    height: 700,
    backgroundColor: "#fff",
  },
  //   Header text
  header_text: {
    fontSize: 20,
    textAlign: "left",
    marginLeft: -180,
    // marginTop:10,
    color: "#fff",
  },
  //Header section content
  header_section_content: {
    // flex: 1,
    alignItems: "center",
    paddingVertical: "6%",
    marginTop: 1,
  },
  title: {
    fontSize: 16,
    color: "grey",
  },
  //form_section
  form_section: {
    flex: 1,
    backgroundColor: "green",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    borderColor: "green",
    paddingHorizontal: 30,
    width: "90%",
    height: "10%",
    // top - balance form section above.
    top: "100%",
    left: "5%",
    // position: 'absolute',
  },

  //form section container
  form_section_container: {
    // marginTop:10,
    // paddingTop:-100
  },

  //Manage settings heading
  heading: {
    fontFamily: "sans",
    fontSize: 18,
    // marginTop:"10"
  },
  //container for alternative links //new_user reset..
  historyContainerFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    marginTop: 15,
    backgroundColor: "#fefffe",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 2,
    // position:"relative"
  },
  //new user
  iconHistory: {
    flex: 1,
    alignItems: "center",
  },
  // create account
  descriptionHistory: {
    flex: 3,
  },

  //outer container
  outer_container: {
    marginTop: -190,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
  },
  // edit profile border area
  settingsBorderContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#fefffe",
    borderWidth: 1,
    borderColor: "#fefffe",
    // height: 300,
    marginTop: 20,
    // paddingHorizontal:20,
    elevation: 3,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    padding: 20,
  },
});
