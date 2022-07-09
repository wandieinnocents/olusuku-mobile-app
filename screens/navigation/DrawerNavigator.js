import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import Home from "../home/Home";
import Profile from "../profile/Profile";
import History from "../History";
import Support from "../Support";
import About from "../about/About";
import Settings from "../Settings";

// create navigation drawer
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      {/* Home */}
      <Drawer.Screen name="Home" component={Home} />
      {/* Profile */}
      <Drawer.Screen name="Profile" component={Profile} />
      {/* History */}
      <Drawer.Screen
        name="History"
        component={History}
        options={{ tabBarBadge: 3 }}
      />
      {/* Support  */}
      <Drawer.Screen
        name="Support"
        component={Support}
        options={{ tabBarBadge: 3 }}
      />
      {/* About */}
      <Drawer.Screen name="About" component={About} />
      {/* Settings  */}
      <Drawer.Screen
        name="Settings"
        options={{ tabBarBadge: 3 }}
        component={Settings}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
