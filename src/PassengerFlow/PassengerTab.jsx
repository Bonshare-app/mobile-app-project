import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import QuickRide from "./PsScreens/QuickRide";
import CityToCity from "./PsScreens/CityToCity";
import { tcolors } from "../components/theme";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const PsgTabs = createBottomTabNavigator();

const PassengerTab = () => {
  return (
    <PsgTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: tcolors.secondary,
        tabBarInactiveTintColor: "gray",
      }}
    >
      <PsgTabs.Screen
        name="Quick ride"
        component={QuickRide}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome5
              name="car-alt"
              color={props.color}
              size={props.size}
            />
          ),
        }}
      />
      <PsgTabs.Screen
        name="City to city"
        component={CityToCity}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome5 name="route" color={props.color} size={props.size} />
          ),
        }}
      />
      <PsgTabs.Screen
        name="Chats"
        component={QuickRide}
        options={{
          tabBarIcon: (props) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              color={props.color}
              size={props.size}
            />
          ),
        }}
      />
      <PsgTabs.Screen
        name="Profile"
        component={QuickRide}
        options={{
          tabBarIcon: (props) => (
            <Ionicons
              name="person-outline"
              color={props.color}
              size={props.size}
            />
          ),
        }}
      />
    </PsgTabs.Navigator>
  );
};

export default PassengerTab;

const styles = StyleSheet.create({});
