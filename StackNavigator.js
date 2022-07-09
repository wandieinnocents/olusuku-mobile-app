import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import ForgotPassword from './screens/auth/ForgotPassword';
import SetNewPassword from './screens/auth/SetNewPassword';
import AppIntro from './screens/appintro/AppIntro';
import Home from './screens/home/Home';
import VerifyPhoneNumber from './screens/auth/VerifyPhoneNumber';


const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
      <Stack.Navigator>
          <Stack.Screen 
          name="AppIntro" 
          component={AppIntro}
          // remove header title
          options={{ headerShown: false, }}
          ></Stack.Screen>

          <Stack.Screen name="Login" 
            component={Login}
            options={{ headerShown: false,  }}
          ></Stack.Screen>

          <Stack.Screen name="Register"
           component={Register}
           options={{ headerShown: false, }}
           >

           </Stack.Screen>
          <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPassword}
          options={{ headerShown: true, headerTitle:'Forgot Password' }}
          
          ></Stack.Screen>
          
          <Stack.Screen 
          name="SetNewPassword" 
          component={SetNewPassword}
          options={{ headerShown: true, headerTitle:'Change Password' }}
          >

          </Stack.Screen>
          
          <Stack.Screen 
          name="VerifyPhoneNumber" 
          component={VerifyPhoneNumber}
          options={{ headerShown: true, headerTitle: 'Verify Phone' }}
          
          ></Stack.Screen>

          <Stack.Screen name="Home" component={Home}></Stack.Screen>
          
      </Stack.Navigator>    
    );
};


export {MainStackNavigator};