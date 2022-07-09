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
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// add svg icons
import SvgUri from "react-native-svg-uri";
// import maps
import MapView, {
  Marker,
  mapRef,
  PROVIDER_GOOGLE,
  Polyline,
} from "react-native-maps";
// react native maps directions
import MapViewDirections from "react-native-maps-directions";

function History() {
  // navigation
  const navigation = useNavigation();

  //create a Hook to store our region data.
  const speficicRegion = {
    latitude: 0.349899,
    longitude: 32.58992,
    latitudeDelta: 0,
    longitudeDelta: 0.0421,
  };
  // ORIGIN DESTINATION DIRECTIONS API COOORDINATES
  const [coordinates] = useState([
    {
      // source
      latitude: 0.359899,
      longitude: 32.59999,
    },
    {
      // destination
      latitude: 0.357596,
      longitude: 32.5685,
    },
  ]);
  // Google maps API Key
  const GOOGLE_MAPS_APIKEY = "AIzaSyDM05_YraUnxhHPEEIWISj97WJ5yN9TxLA";

  return (
    <View style={styles.container}>
      {/* control scrolling  */}
      <ScrollView contentContainerStyle={styles.Scroll}>
        <View style={styles.flex_container}>
          {/* Map Section - history */}

          <View style={styles.top_image_section}>
            <MapView
              ref={mapRef}
              provider={PROVIDER_GOOGLE}
              zoomEnabled
              style={styles.map}
              initialRegion={{
                // initial region coordinates
                latitude: coordinates[0].latitude,
                longitude: coordinates[0].longitude,
                latitudeDelta: 0.0622,
                longitudeDelta: 0.0121,
              }}
            >
              {/* Origin marker */}
              <Marker
                // coordinates
                coordinate={coordinates[0]}
                // props
                title={"Wandie Innocent"}
                description={"Software Developer"}
              />
              {/* Destination marker */}
              <Marker
                coordinate={coordinates[1]}
                // props 
                title={"10$"}
                description={"Service Provider"}
                //pincolor
                pinColor="purple"
              />
              <Polyline
                coordinates={coordinates}
                strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                strokeColors={["#7F0000"]}
                strokeWidth={6}
              />

              {/* BETTER DIRECTIONS API , FOR THEM TO WORK ENABLE BILLING ON CONSOLE.GOOGLE DASHBOARD */}
              {/* <MapViewDirections
                origin={coordinates[0]}
                destination={coordinates[1]}
                // fetch api key
                apikey={GOOGLE_MAPS_APIKEY} 
                strokeWidth={4}
                strokeColor="#111111"
              /> */}
            </MapView>
          </View>

          {/* End of history Map section */}

          {/* Lower_section */}
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

            {/* History Item */}
            <View style={styles.historyContainerFlexBox}>
              <View style={styles.iconHistory}>
                <FontAwesome name="history" size={24} color="#4F8EF7" />
              </View>
              <View style={styles.descriptionHistory}>
                <Text style={{ color: "#000" }}>Brake Replacement </Text>
                <Text style={{ color: "#000" }}>
                  Replacing brakes for cars..
                </Text>
              </View>
              <TouchableOpacity
                // onPress={onPress}
                style={styles.arrorRightHisotry}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <View>
                  <AntDesign name="arrowright" size={24} color="#4F8EF7" />
                </View>
              </TouchableOpacity>
            </View>
            {/* History Item */}

            {/* History Item */}
            <View style={styles.historyContainerFlexBox}>
              <View style={styles.iconHistory}>
                <FontAwesome name="history" size={24} color="#4F8EF7" />
              </View>
              <View style={styles.descriptionHistory}>
                <Text style={{ color: "#000" }}>Body Fixing </Text>
                <Text style={{ color: "#000" }}>
                  Replacing brakes for cars..
                </Text>
              </View>
              <TouchableOpacity
                // onPress={onPress}
                style={styles.arrorRightHisotry}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <View>
                  <AntDesign name="arrowright" size={24} color="#4F8EF7" />
                </View>
              </TouchableOpacity>
            </View>
            {/* History Item */}

            {/* History Item */}
            <View style={styles.historyContainerFlexBox}>
              <View style={styles.iconHistory}>
                <FontAwesome name="history" size={24} color="#4F8EF7" />
              </View>
              <View style={styles.descriptionHistory}>
                <Text style={{ color: "#000" }}>Wheel Replacement </Text>
                <Text style={{ color: "#000" }}>
                  Replacing brakes for cars..
                </Text>
              </View>
              <TouchableOpacity
                // onPress={onPress}
                style={styles.arrorRightHisotry}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <View>
                  <AntDesign name="arrowright" size={24} color="#4F8EF7" />
                </View>
              </TouchableOpacity>
            </View>
            {/* History Item */}

            {/* History Item */}
            <View style={styles.historyContainerFlexBox}>
              <View style={styles.iconHistory}>
                <FontAwesome name="history" size={24} color="#4F8EF7" />
              </View>
              <View style={styles.descriptionHistory}>
                <Text style={{ color: "#000" }}>Head lamp </Text>
                <Text style={{ color: "#000" }}>
                  Replacing brakes for cars..
                </Text>
              </View>
              <TouchableOpacity
                // onPress={onPress}
                style={styles.arrorRightHisotry}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <View>
                  <AntDesign name="arrowright" size={24} color="#4F8EF7" />
                </View>
              </TouchableOpacity>
            </View>
            {/* History Item */}

            {/* History Item */}
            <View style={styles.historyContainerFlexBox}>
              <View style={styles.iconHistory}>
                <FontAwesome name="history" size={24} color="#4F8EF7" />
              </View>
              <View style={styles.descriptionHistory}>
                <Text style={{ color: "#000" }}>Shock Failure </Text>
                <Text style={{ color: "#000" }}>
                  Replacing brakes for cars..
                </Text>
              </View>
              <TouchableOpacity
                // onPress={onPress}
                style={styles.arrorRightHisotry}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <View>
                  <AntDesign name="arrowright" size={24} color="#4F8EF7" />
                </View>
              </TouchableOpacity>
            </View>
            {/* History Item */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // main container
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },

  // Fill the map whole view
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 300,
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
    height: "50%",
    width: "100%",
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

  // top_header_section
  top_header_section: {
    flex: 1,
    position: "relative",
  },

  //   Header section content
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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    width: "100%",
    // top - balance form section above.
    top: "30%",
    height: "100%",
    position: "absolute",
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
    elevation: 4,
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

  // reset account
  arrorRightHisotry: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default History;
