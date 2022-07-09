import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function FuelMap() {
    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 1,
      });
  return (
    <View style={styles.container}>
        <MapView 
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{ 
            latitude:  0.347596,
            longitude: 32.582520,
            latitudeDelta: 0,
            longitudeDelta: 0.0421,
          }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-end",
        alignItems: "center",
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
});
