import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Button from "../../Comp/Button";

import { useNavigation } from "@react-navigation/native";
import ImagePick from "../../Comp/SelectPicker";
import SelectInput from "./Partials/SelectInput";
// import Header from "../../Comp/Header";
import TopHeader from "../../Comp/TopHeader";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import OtpVerification from "./Partials/OtpVerification";
import Verification from "./Verification";
import UserDetails from "./Partials/UserDetails";

const Register = ({ navigation }) => {
  // const navigation = useNavigation();
  const [stage, setStage] = useState(1);
  const [label, setLabel] = useState("Next");
  const [footer, setFooter]=useState([
    "Already have an account?",
    "Already registered?",
    "Already registered?",
    "Not registered?",
  ])

  const handleClick = () => {
    if (stage === 1) {
      setStage(2);
      setLabel("Verify");
      // setFooter("Already registered?")
    } else if (stage === 2) {
      setStage(3);
      setLabel("Next");
      // setFooter("Already registered?")
    } else {
      setStage(4);
      // setFooter("Not registered?")
      setLabel("Next");
      navigation.navigate("login")
    }
  };
  const handleBack = () => {
    // setStage((prev) => prev - 1);
    setStage((prev) => Math.max(prev - 1, 1));
  };
  return (
    <View className=" bg-white h-full justify-between flex p-4">
      {stage === 1 ? (
        <View className="p-4">
          <View className="bg-re pt-4">
            <TopHeader
              moreClass={"w-full flex  items-center"}
              content={"We’ll text you a code to verify your phone"}
              header={"Enter your phone number "}
            />
          </View>
          <View className="flex flex-row my-2  w-full">
            <SelectInput />
          </View>
        </View>
      ) : stage === 2 ? (
        <OtpVerification back={handleBack}/>
      ) : stage === 3 ? (
        // <Verification back={handleBack}/>
        <UserDetails back={handleBack} detail={"name"}/>

      ) : (
        <UserDetails back={handleBack} detail={"email"}/>
      )}
      <View className="space-y-0.5 w-full flex items-center">
        <Button label={label} onPress={handleClick} isMain={true} />
        <View className="flex flex-row gap-1">
          <Text>{footer[stage - 1]}</Text>
          <TouchableOpacity
            className={``}
            onPress={() => {
              navigation.navigate("login");
            }}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
