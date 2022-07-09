// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

  function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Text>RYDEX USER MOBILE</Text>
      <Text>Service to u..</Text>
     
      {/* <StatusBar style="auto" /> */}

    </View>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;