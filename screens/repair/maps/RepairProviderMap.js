import React, { useState, useRef } from "react";
// navigation
import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import react native cores
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

// import svg
import SvgUri from "react-native-svg-uri";
// import maps
import MapView, { Marker, mapRef, PROVIDER_GOOGLE } from "react-native-maps";

// repair provider map main component
function RepairProviderMap() {
  // navigation
  const navigation = useNavigation();
  //create a Hook to store our region data.
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 1,
  });
  //create a Hook to store our region data.
  const speficicRegion = {
    latitude:  0.347596,
    longitude: 32.582520,
    latitudeDelta: 0,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      {/* Map View */}
      {/* Current location marker */}

      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        zoomEnabled
        style={styles.map}
        initialRegion={speficicRegion}
        onRegionChangeComplete={(region) => setRegion(region)}
      >

        <Marker
          // coordinates 
          coordinate={speficicRegion}
          // pinColor="purple"
          title={"Wandie Innocent"}
          description={"Sofware Developer"}
        >
          {/* Marker icon  */}
          <View style={{ paddingBottom: 10 }}>
            <Image
              source={require("../../../assets/repair/user-profile.png")}
              style={{ width: 55, height: 58 }}
              resizeMode="center"
              resizeMethod="resize"
            />
          </View>
        </Marker>

        

        {/* Mobile - marker for nearby location */}
        <Marker
          // coordinates
          coordinate={{
            latitude: 0.3335,
            longitude: 32.5675,
          }}
          // marker oop-up parameters
          // pinColor="purple"
          title={"Hema Auto - $44"}
          description={"Engine Servicing"}
        >
          {/* Marker icon  */}
          <View style={{ paddingBottom: 10 }}>
            <Image
              source={require("../../../assets/repair/car.png")}
              style={{ width: 45, height: 50 }}
              resizeMode="center"
              resizeMethod="resize"
            />
          </View>
        </Marker>

        {/* Mobile - marker for nearby location */}

        <Marker
          // coordinates
          coordinate={{
            latitude: 0.3580,
            longitude: 32.5806,
          }}
          // marker oop-up parameters
          // pinColor="purple"
          title={"Gear Liver - $4"}
          description={"Gear liver replacement"}
        >
          {/* Marker icon  */}
          <View style={{ paddingBottom: 10 }}>
            <Image
              source={require("../../../assets/repair/car.png")}
              style={{ width: 45, height: 50 }}
              resizeMode="center"
              resizeMethod="resize"
            />
          </View>
        </Marker>


        

        {/* Mobile - marker for nearby location */}

        <Marker
          // coordinates
          coordinate={{
            latitude: 0.3380,
            longitude: 32.5806,
          }}
          // marker oop-up parameters
          // pinColor="purple"
          title={"Break Pads - $4"}
          description={"Break pads replacement"}
        >
          {/* Marker icon  */}
          <View style={{ paddingBottom: 10 }}>
            <Image
              source={require("../../../assets/repair/car.png")}
              style={{ width: 45, height: 50 }}
              resizeMode="center"
              resizeMethod="resize"
            />
          </View>
        </Marker>

        {/* Stationary - marker for nearby location */}

        <Marker
          // coordinates
          coordinate={{
            latitude: 0.3380,
            longitude: 32.5896,
          }}
          // marker oop-up parameters
          // pinColor="purple"
          title={"Oil - $20"}
          description={"Stationary"}
        >
          {/* Marker icon  */}
          <View style={{ paddingBottom: 10 }}>
            <Image
              source={require("../../../assets/repair/stationcar.png")}
              style={{ width: 45, height: 50 }}
              resizeMode="center"
              resizeMethod="resize"
            />
          </View>
        </Marker>

        {/* Stationary - marker for nearby location */}

        <Marker
          // coordinates
          coordinate={{
            latitude: 0.3480,
            longitude: 32.5896,
          }}
          // marker oop-up parameters
          // pinColor="purple"
          title={"Clutch - $3"}
          description={"Clutch Replacement"}
        >
          {/* Marker icon  */}
          <View style={{ paddingBottom: 10 }}>
            <Image
              source={require("../../../assets/repair/stationcar.png")}
              style={{ width: 45, height: 50 }}
              resizeMode="center"
              resizeMethod="resize"
            />
          </View>
        </Marker>

        {/* Stationary - marker for nearby location */}
        
        <Marker
          // coordinates
          coordinate={{
            latitude: 0.3599,
            longitude: 32.5998,
          }}
          // marker oop-up parameters
          // pinColor="purple"
          title={"Clutch - $3"}
          description={"Clutch Replacement"}
        >
          {/* Marker icon  */}
          <View style={{ paddingBottom: 10 }}>
            <Image
              source={require("../../../assets/repair/stationcar.png")}
              style={{ width: 45, height: 50 }}
              resizeMode="center"
              resizeMethod="resize"
            />
          </View>
        </Marker>
      </MapView>
    </View>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  // Main container
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  // Fill the map whole view
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default RepairProviderMap;
