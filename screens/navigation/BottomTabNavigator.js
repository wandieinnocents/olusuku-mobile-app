import React from "react";

import Home from "../home/Home";
// import History from "../history/History";
// import Profile from "../profile/Profile"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

function HomeNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

function ProfileNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

function HistoryNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
}



function RootTab() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeNav} />
        <Tab.Screen name="Profile" component={ProfileNav} />
        <Tab.Screen name="History" component={HistoryNav} />
      </Tab.Navigator>
    );
  }

  // export  {HomeNav ,HistoryNav ,ProfileNav};
  export  default RootTab;