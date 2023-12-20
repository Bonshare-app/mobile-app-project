import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import TopHeader from "../../../Comp/TopHeader";
import { AntDesign } from "@expo/vector-icons";
import Input from "../../../Comp/Input";

const UserDetails = ({ back }) => {
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
        <View>
          <Input placeholder={"First name"} />
        </View>
        <View>
          <Input placeholder={"Last name"} />
        </View>
      </View>
    </View>
  );
};

export default UserDetails;
