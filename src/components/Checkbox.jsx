import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Checkbox from 'expo-checkbox';

const CustomCheckbox = ({ isChecked, onValueChange, style }) => {
  return (
    <View >
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={onValueChange}
        />
      </View>
    </View>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
    borderRadius: 50,
  },
});
