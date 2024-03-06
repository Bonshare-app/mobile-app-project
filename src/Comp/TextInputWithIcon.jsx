// TextInputWithIcon.js

import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose any icon library you prefer

const TextInputWithIcon = ({ onFocus,iconName, placeholder, ...textInputProps }) => {
   
  return (
    <View style={styles.container} className="h-full w-full">
      
      <TextInput
        // style={styles.input}
        onFocus={onFocus}
        className="border-b w-full"
        placeholder={placeholder} // Set the placeholder text dynamically
        {...textInputProps}
      />
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    // borderBottomWidth: 1,
    borderBottomColor: '#000', // Change the color as needed
    // paddingVertical: 0,
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    // flex: 1,
    fontSize: 16,
    padding: 0,
    margin: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
};

export default TextInputWithIcon;
