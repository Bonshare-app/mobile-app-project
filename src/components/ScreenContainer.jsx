import React, { Component } from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Platform,
  SafeAreaView,
} from "react-native";
const ScreenContainer = ({ style, color, children }) => {
  return (
    <SafeAreaView style={[styles(color).statusBarBackground, style]}>
      {children}
    </SafeAreaView>
  );
};

const styles = (color) =>
  StyleSheet.create({
    statusBarBackground: {
      flex: 1,
      backgroundColor: color,
      paddingTop: 40,
    },
  });

export default ScreenContainer;
