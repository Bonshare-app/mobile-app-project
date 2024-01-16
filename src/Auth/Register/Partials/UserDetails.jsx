import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import TopHeader from "../../../Comp/TopHeader";
import { AntDesign } from "@expo/vector-icons";
import Input from "../../../Comp/Input";
import { useState } from "react";

const UserDetails = ({ back, detail }) => {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (text) => {
    setFirstName(text);
    checkEmailInputVisibility(text, lastName);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
    checkEmailInputVisibility(firstName, text);
  };

  const checkEmailInputVisibility = (first, last) => {
    // Show email input only when both first name and last name are provided
    setShowEmailInput(first.trim() !== "" && last.trim() !== "");
  };
  return (
    <View>
      <TouchableOpacity onPress={back}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <TopHeader
        header={"What do we call you?"}
        content={"Use your name as appears in your documents"}
        moreClass={"w-full flex "}
        smallClass={"text-[14px]"}
      />
      <View className="pt-10 space-y-4 gap-y-4 flex ">
        {detail === "name" ? (
          <View className="space-y-5">
            <View >
              <Input
                placeholder={"First name"}
                handleChange={handleFirstNameChange}
              />
            </View>
            <View>
              <Input
                placeholder={"Last name"}
                handleChange={handleLastNameChange}
              />
            </View>
            <View></View>
          </View>
        ) : (
          <View>
            <Input
              placeholder={"Email"}
              handleChange={(text) => setEmail(text)}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default UserDetails;
