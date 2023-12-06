import React from "react";
import Trip from "../Trip";
import Home from "../Home";
import Available from "../../components/Available";
import {
  AntDesign,
  Ionicons,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.bottomBar,

        // tabBarLabelStyle: styles().title,
        headerShown: false,
        tabBarActiveTintColor: "#40B876",
        tabBarInactiveTintColor: "#8A8A99",
      }}
    >
      <Tab.Screen
        name="Ride"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Offer ride"
        component={Trip}
        options={{
          tabBarIcon: ({ color }) => (
            <Image source={require("../../../assets/drive.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="My rides"
        component={Available}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="clock" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Available}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={21} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="You"
        component={Available}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person-outline" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: "white",

    shadowOffset: { width: 0, height: 1 },
    shadowColor: "black",
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 1,
    position: "absolute",
    bottom: 0,
    borderWidth: 0.2,
    borderColor: "#ccc",

    // paddingTop: getStatusBarHeight() < 44 ? 10 : 22,
    // paddingBottom: getStatusBarHeight() < 44 ? 10 : 30,
    height: 90,
    paddingTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
