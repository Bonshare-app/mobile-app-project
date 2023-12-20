import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import TopHeader from "../../Comp/TopHeader";
import OtpScreen from "../../components/Otp/OtpScreen";

const Verification = ({ back }) => {
  return (
    <View>
      <TouchableOpacity onPress={back}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <View className=" h-[70%] space-y-5">
        <TopHeader
          header={"Verification"}
          content={
            "Enter the 4-digit code sent to your number ending with 2020"
          }
          moreClass={"w-full flex "}
          smallClass={"text-[14px]"}
        />
        <View className="pt-10 flex w-full items-center space-y-5">
          <OtpScreen inputHeight={39} inputWidth={40} containerWidth={205} />
          <View className="flex items-center space-y-8 mt-4">
          <View className="flex flex-row gap-2 ">
            <Text className="text-[#424256] text-[16px]">
              Didn't receive a code?
            </Text>
            <TouchableOpacity
              onPress={() => {
                console.log("resend");
              }}
            >
              <Text className="text- font-bold text-[16px]">Resend</Text>
            </TouchableOpacity>
          </View>
            <Text>or</Text>
            <View className="flex flex-row gap-2 ">
            
            <TouchableOpacity
              onPress={() => {
                console.log("resend to mail");
              }}
            >
              <Text className="text- font-bold text-[16px]">Send code to e-mail instead</Text>
            </TouchableOpacity>
          </View>
          </View>

        </View>
      </View>
    </View>
  );
};

export default Verification;
