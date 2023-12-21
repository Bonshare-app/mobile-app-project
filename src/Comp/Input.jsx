import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const Input = ({ placeholder, onInputChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (text) => {
    setInputValue(text);
    // onInputChange(text);
    if (typeof onInputChange === 'function') {
      onInputChange(text);
    }
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View className={` ${isFocused || inputValue ? `border-[#40B876]` : `border-[#6D6D6D]`} w-full border rounded-md p-2 h-14 `}>
      <TextInput
        placeholder={placeholder}
        value={inputValue}
        onChangeText={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="h-full placeholder:text-[#6D6D6D]"
      />
      
    </View>
  );
};

export default Input;
