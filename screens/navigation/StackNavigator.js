import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import RootTab from "./BottomTabNavigator";
import AppIntro from "../appintro/AppIntro";
// auth screens
import Login from "../auth/Login";
import Register from "../auth/Register";
import ForgotPassword from "../auth/ForgotPassword";
import SetNewPassword from "../auth/SetNewPassword";
import VerifyPhoneNumber from "../auth/VerifyPhoneNumber";
import Home from "../home/Home";
import ContactSupport  from "../support/ContactSupport";
import SendMessage from "../message/SendMessage";
import About from "../about/About";
import Settings from "../Settings";
import Support from "../Support";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

//Create Navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Draw = createDrawerNavigator();

//Wrap Home, History and Profile in Bottom Drawer Navigator

function WrapInBottomNav() {
  return (
    //Add styling to Bottom Navigation
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "#1D4AB4",
        tabBarStyle: {
          height: 55,
          backgroundColor: "#4F8EF7",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" color="#fff" size={25} />
          ),
        }}
      />
     
     
    </Tab.Navigator>
  );
}

//Wrap Main  and other screens in Drawer Navigator
function WrapInDrawerTab() {
  return (
    <Draw.Navigator drawerContent={(props) => <CustomDrawer />}>
      {/* <Draw.Screen name="Main" component={Home} /> */}
      <Draw.Screen name="Rydex" component={WrapInBottomNav} />
      {/* <Draw.Screen name="Profile" component={Profile} /> */}
      {/* <Draw.Screen name="History" component={History} /> */}
      <Draw.Screen name="Support" component={SendMessage} />
      <Draw.Screen name="About" component={About} />
      <Draw.Screen name="Settings" component={Settings} />
    </Draw.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <Stack.Navigator>
    {/* App intro  */}
      <Stack.Screen
        name="App Intro"
        options={{ headerShown: false }}
        component={AppIntro}
      ></Stack.Screen>

      {/* Login navigation */}
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      ></Stack.Screen>

      {/* Register navigator */}
      <Stack.Screen
        name="Register"
        options={{ headerShown: false }}
        component={Register}
      ></Stack.Screen>


      

      {/* Contact Support */}
      <Stack.Screen
        name="ContactSupport"
        options={{
          headerShown: true,
          title: "Support",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        component={ContactSupport}
      ></Stack.Screen>


  
      {/* Send Message */}
      <Stack.Screen
        name="SendMessage"
        options={{
          headerShown: true,
          title: "Send Message",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        component={SendMessage}
      ></Stack.Screen>


     
{/* Forgot password  */}
      <Stack.Screen
        name="ForgotPassword"
        options={{ headerShown: false }}
        component={ForgotPassword}
      ></Stack.Screen>

      {/* Set new password */}
      <Stack.Screen
        name="SetNewPassword"
        options={{ headerShown: false }}
        component={SetNewPassword}
      ></Stack.Screen>
      <Stack.Screen
        name="VerifyPhoneNumber"
        options={{ headerShown: false }}
        component={VerifyPhoneNumber}
      ></Stack.Screen>
      {/* Home screen */}
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={WrapInDrawerTab}
      ></Stack.Screen>

      <Stack.Screen name="Drawer" component={DrawerNavigator}/>
      <Stack.Screen name="Tab" component={RootTab} />

 

</Stack.Navigator>
  );
};

function DrawerNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App Intro"
        options={{ headerShown: false }}
        component={AppIntro}
      ></Stack.Screen>
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      ></Stack.Screen>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={WrapInDrawerTab}
      ></Stack.Screen>

      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Tab" component={RootTab} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
