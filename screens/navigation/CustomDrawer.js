import React from "react";
import { View, StyleSheet, Share } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

function CustomDrawer(props) {
  //handle navigation
  const navigation = useNavigation();
  // Create constant to share the app
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "App link",
        message:
          "Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en",
        url: "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      {/* scrollable drawer  */}
      <DrawerContentScrollView style={styles.container} {...props}>
        <View style={styles.drawerContent}>
          {/* user information */}
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginBottom: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://picsum.photos/200/300?grayscale'",
                }}
                size={50}
              />
            </View>

            <View>
              <Title style={styles.title}>Dr. Tendo</Title>
              <Caption style={styles.caption}>+256-751-002-222</Caption>
            </View>
          </View>
        </View>

        {/* Section containing Drawer Items */}
        <Drawer.Section style={styles.drawerSection}>
          {/* Navigate to Main home Screen*/}
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={() => {
              navigation.navigate("Rydex");
            }}
          />

          {/* Navigate to Profile Screen  */}
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-circle-outline" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              navigation.navigate("Profile");
            }}
          />

          {/* Navigate to Main History Screen*/}
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="clock-time-two-outline" color={color} size={size} />
            )}
            label="History"
            onPress={() => {
              navigation.navigate("History");
            }}
          />

          {/* Navigate to Support Screen*/}
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="phone-in-talk" color={color} size={size} />
            )}
            label="Support"
            onPress={() => {
              navigation.navigate("Support");
            }}
          />

          {/* Navigate to About Screen*/}
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="notebook" color={color} size={size} />
            )}
            label="About"
            onPress={() => {
              navigation.navigate("About");
            }}
          />

          {/* Navigate to Settings Screen*/}
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="shield-account-outline" color={color} size={size} />
            )}
            label="Settings"
            onPress={() => {
              navigation.navigate("Settings");
            }}
          />

          {/* Invite user to the app*/}
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="share-variant" color={color} size={size} />
            )}
            label="Share"
            onPress={onShare}
          />
        </Drawer.Section>
      </DrawerContentScrollView>

      {/* Signout Section*/}
      <Drawer.Section style={styles.drawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 80,
  },
  drawerContent: {
    flex: 1,
    backgroundColor: "#1D4AB4",
  },
  userInfoSection: {
    paddingLeft: 40,
    paddingTop: 30,
  },
  title: {
    fontSize: 16,
    marginTop: -70,
    paddingLeft: 65,
  },
  caption: {
    fontSize: 12,
    marginBottom: -15,
    paddingLeft: 65,
    lineHeight: 14,
    color: "white",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
