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
import FindProvider from "../repair/FindProvider";
// repair provider map
import RepairProviderMap from "../repair/maps/RepairProviderMap";
import FuelProviderCategory from "../fuel/FuelProviderCategory";
import MedicalCategory from "../medical/MedicalCategory";
import SpareCategory from "../spares/SpareCategory";
import FuelMap from "../fuel/maps/FuelMap";
import MobileFuelMap from "../fuel/maps/MobileFuelMap";

import Home from "../home/Home";
import Profile from "../profile/Profile";
import History from "../history/History";
import HistoryDetails from "../history/HistoryDetails";
import ContactSupport  from "../support/ContactSupport";
import SendMessage from "../message/SendMessage";
import About from "../about/About";
import Settings from "../Settings";
import Support from "../Support";
import EditProfile from "../profile/EditProfile";
import AudioRecord from "../medical/AudioRecord";
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
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="history" color="#fff" size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              color="#fff"
              size={25}
            />
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
      <Draw.Screen name="Profile" component={Profile} />
      <Draw.Screen name="History" component={History} />
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

      {/* Record Audio */}
      <Stack.Screen
        name="AudioRecord"
        options={{
          headerShown: true,
          title: "Audio Record",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        component={AudioRecord}
      ></Stack.Screen>

      {/* Show repair provider form */}
      <Stack.Screen
        name="FindProvider"
        options={{
          headerShown: true,
          title: "Find Provider",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        component={FindProvider}
      ></Stack.Screen>

      {/* Repair providers map */}
      <Stack.Screen
        name="RepairProviderMap"
        options={{
          headerShown: true,
          title: "Repair Providers",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        component={RepairProviderMap}
      ></Stack.Screen>

      {/* Medical category options */}
      <Stack.Screen
        name="MedicalCategory"
        options={{
          headerShown: true,
          title: "Medical Category",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        component={MedicalCategory}
      ></Stack.Screen>
      {/* History Details */}
      <Stack.Screen
        name="HistoryDetails"
        options={{
          headerShown: true,
          title: "History Details",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        component={HistoryDetails}
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


      {/* Chose fuel provider category */}
      <Stack.Screen
        name="FuelProviderCategory"
        options={{
          headerShown: true,
          title: "Fuel Category",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        component={FuelProviderCategory}
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


      <Stack.Screen
        name="SpareCategory"
        options={{
          headerShown: true,
          title: "Spare Category",
          headerStyle: {
            backgroundColor: "#fff",
          },
        }}
        component={SpareCategory}
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

      {/* Fuel Stations */}
      <Stack.Screen
        name="Fuel Stations"
        options={{ headerShown: true }}
        component={FuelMap}
      ></Stack.Screen>

      {/* Fuel Stations */}
      <Stack.Screen
        name="Mobile Fuel Delivery"
        options={{ headerShown: true }}
        component={MobileFuelMap}
      ></Stack.Screen>
      <Stack.Screen name="Drawer" component={DrawerNavigator}/>
      <Stack.Screen name="Tab" component={RootTab} />

    {/* Edit  profile */}
    <Stack.Screen
    name="Edit Profile"
    options={{ headerShown: true }}
    component={EditProfile}
    ></Stack.Screen>

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
