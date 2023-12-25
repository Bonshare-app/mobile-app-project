import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import TopHeader from "../../../Comp/TopHeader";
import OtpScreen from "../../../components/Otp/OtpScreen";

const OtpVerification = ({ onPress, back, login }) => {
  return (
    <View>
      {login === "login" ? (
        <View>
          <TouchableOpacity onPress={back}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <View className=" h-[70%] space-y-5">
            <TopHeader
              header={"Verification"}
              content={
                "Enter the 4-digit code sent to your number ending with **23"
              }
              moreClass={"w-full flex items-center text-center"}
              smallClass={"text-center text-[16px]"}
            />
            <View className=" space-y-4 w-full flex items-center">
              <OtpScreen
                inputHeight={64}
                inputWidth={65}
                containerWidth={300}
              />
              <View className="flex flex-row gap-2 ">
                <Text className="text-[#424256] text-[16px]">
                  Didn't receive a code?
                </Text>
                <Text className="text-[#8A8A99] text-[16px]">01:23</Text>
              </View>
            </View>
            <View className="w-full flex flex-row  gap-x-3 justify-center items-center">
              <TouchableOpacity
                onPress={() => console.log("whatsapp")}
                className="bg-[#E7E7EB] flex flex-row items-center gap-x-1 rounded-full py-1 px-2 "
              >
                <Ionicons name="logo-whatsapp" size={20} color="black" />
                <Text className="text-[14px] text-[#424256]">
                  Send via whatsApp
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("whatsapp")}
                className="bg-[#E7E7EB] flex flex-row items-center gap-x-1 rounded-full py-1 px-2"
              >
                <Ionicons name="logo-whatsapp" size={20} color="black" />
                <Text className="text-[14px] text-[#424256]">
                  Send via email
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <TouchableOpacity onPress={back}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <View className=" h-[70%] space-y-5">
            <TopHeader
              header={"Verification"}
              content={
                "Enter the 4-digit code sent to your number ending with **23"
              }
              moreClass={"w-full flex items-center text-center"}
              smallClass={"text-center text-[16px]"}
            />
            <View className=" space-y-4 w-full flex items-center">
              <OtpScreen
                inputHeight={64}
                inputWidth={65}
                containerWidth={300}
              />
              <View className="flex flex-row gap-2 ">
                <Text className="text-[#424256] text-[16px]">
                  Didn't receive a code?
                </Text>
                <Text className="text-[#8A8A99] text-[16px]">01:23</Text>
              </View>
            </View>
            <View className="w-full flex flex-row  gap-x-3 justify-center items-center">
              <TouchableOpacity
                onPress={() => console.log("whatsapp")}
                className="bg-[#E7E7EB] flex flex-row items-center gap-x-1 rounded-full py-1 px-2 "
              >
                <Ionicons name="logo-whatsapp" size={20} color="black" />
                <Text className="text-[14px] text-[#424256]">
                  Send via whatsApp
                </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
        onPress={() => console.log("whatsapp")}
        className="bg-[#E7E7EB] flex flex-row items-center gap-x-1 rounded-full py-1 px-2"
      >
        <Ionicons name="logo-whatsapp" size={16} color="black" />
      <Text className="text-[14px] text-[#424256]">Send via email</Text>
      </TouchableOpacity> */}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default OtpVerification;
