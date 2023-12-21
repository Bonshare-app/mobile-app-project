import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import placeholder from "../../../../assets/images/images.png"
import { CountryPicker } from "react-native-country-codes-picker";

const SelectInput = () => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [countryFlag, setCountryFlag] = useState("");
  const [hasSelection, setHasSelection] = useState(false);
  const holder = () => {
    return (
      <View>
        <Text>+96</Text>
      </View>
    );
    // label: "+96",
    // value: "india",
    // icon: () => <Image source={Images.img2} resizeMode="contain" />,
  };
  return (
    <View className=" w-full h-14 flex gap-x- flex-row items-center rounded-lg p-3 border border-[#6D6D6D]">
      <TouchableOpacity
        className="w-[25%] h-full "
        onPress={() => setShow(true)}
        // style={{
        //   width: "80%",
        //   height: 60,
        //   backgroundColor: "white",
        //   padding: 10,
        // }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 20,
          }}
        >
          {hasSelection ? (
            <>
              {countryFlag} {countryCode}
            </>
          ) : (
            <View className="flex flex-row items-center gap-y-1 gap-x-2">
              <Image source={`${placeholder}`} resizeMode="cover" style={{height:15, width:15}}/>
              <Text>+93</Text>
            </View>
          )}
          {/* {countryFlag} {countryCode} */}
        </Text>
      </TouchableOpacity>
      <View className="flex-1   h-full px-2 ">
        <TextInput />
      </View>

      <CountryPicker
        show={show}
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setCountryFlag(item.flag);
          setShow(false);
          setHasSelection(true);
        }}
      />
    </View>
  );
};

export default SelectInput;
{
  /* <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}

        theme="DARK"
        mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
      /> */
}
