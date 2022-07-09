// import all the components we are going to use
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator  from './screens/navigation/StackNavigator';


const App = () => {
  return (
    <>
      <NavigationContainer>
            <StackNavigator/> 
      </NavigationContainer>
    </>
  );
};

export default App;



