import React from "react";
import { Text, ActivityIndicator, TouchableOpacity } from "react-native";

const Button = ({
  isBold,
  variant,
  pressed,
  text,
  mv,
  mh,
  mt,
  mb,
  style,
  textStyle,
  loading,
}) => {
  return (
    <TouchableOpacity
      onPress={pressed}
      style={{
        width: "80%",
        height: 56,
        borderWidth: variant == "outline" ? 2 : 0,
        borderRadius: "30%",
        borderColor: variant == "outline" ? "#40B876" : "transparent",
        backgroundColor: variant === "outline" ? "transparent" : "#40B876",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      }}
    >
      {!loading ? (
        <Text
          style={{
            fontSize: 16,
            lineHeight: 28,
            color: variant === "outline" ? "#40B876" : "#FFFFFF",

            ...textStyle,
          }}
        >
          {text}
        </Text>
      ) : (
        <ActivityIndicator color={variant == "outline" ? "#3E94DE" : "#fff"} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
