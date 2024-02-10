// import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ onPress, loading, label }) => {
  return (
    <View className="w-full h-14 flex flex-row justify-center">

    <TouchableOpacity
      onPress={onPress}
      className={`bg-[#40B876] h-full w-[100%] rounded-full flex-row flex justify-center items-center`}
    >
      {!loading ? <Text className={`text-white text-xl`}>{label}</Text> : <ActivityIndicator />}
    </TouchableOpacity>
    </View>
  );
};

export default Button;
