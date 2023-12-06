import React from "react";
import { StyleSheet, Text as TextRN } from "react-native";

const Text = ({
  color,
  size,
  bold,
  medium,
  semibold,
  light,
  center,
  children,
  style,
  ...rest
}) => {
  return (
    <TextRN
      style={[styles(color, bold, light, medium, semibold, center).text, style]}
    >
      {children}
    </TextRN>
  );
};

export default Text;
const styles = (color, bold, light, medium, semibold, center) =>
  StyleSheet.create({
    text: {
      color: color ? color : "#000",
      textAlign: center ? "center" : null,
      fontFamily: semibold
        ? "Roboto_500Medium"
        : bold
        ? "Roboto_700Bold"
        : light
        ? "Roboto_300Light"
        : "Roboto_400Regular",
    },
  });
