import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const Input = ({ placeholder, onInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (text) => {
    setInputValue(text);
    onInputChange(text);
  };
  return (
    <View className="w-full border rounded-md p-2 h-14 border-[#6D6D6D]">
      <TextInput
        placeholder={placeholder}
        value={inputValue}
        onChangeText={handleChange}
        className="h-full placeholder:text-[#6D6D6D]"
      />
      
    </View>
  );
};

export default Input;
