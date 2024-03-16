import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useRef, useMemo, useCallback, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";
import { tcolors } from "../../components/theme";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MapViewDirections from "react-native-maps-directions";
import CustomCheckbox from "../../components/Checkbox";
import Button from "../../Comp/Button";

const Routes = ({ navigation }) => {
  const origin = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };
  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  const [isChecked, setChecked] = useState(false);
  const [isCheckedArray, setCheckedArray] = useState([false, false, false]);
  // const [selectedPaymentOption, setSelectedPaymentOption] = useState("A");
  // const handleCheckboxChange = (index) => {
  //   const newArray = [...isCheckedArray];
  //   newArray[index] = !newArray[index];
  //   setCheckedArray(newArray);
  // };
  const handleCheckboxChange = (index) => {
    const routeOptions = ["A", "B", "C"];
    const selectedOption = routeOptions[index];
    const newArray = isCheckedArray.map((_item, idx) => idx === index);
    setCheckedArray(newArray);

    // Log the selected payment option
    // setSelectedPaymentOption(selectedOption);
    console.log("Selected Payment Option:", selectedOption);
  };

  const onRegionChange = (region) => {
    console.log(region);
  };
  const api = "AIzaSyBGL5i6B51hnevK_LeLcPJwaXWIXOEZ1Gs";

  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={origin}
        onRegionChange={onRegionChange}
        style={styles.mapStyle}
        apiKey={api}
        provider={PROVIDER_GOOGLE}
      >
        <Marker coordinate={origin} />
        <MapViewDirections
          origin={origin}
          destination={destination}
          strokeColor="hotpinks"
          strokeWidth={3}
          apikey={api}
        />
      </MapView>

      {/* <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          {QkIcons.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[styles.cardStyle, { borderWidth: index === 0 ? 1 : 0 }]}
              >
                {item.icon()}
                <View>
                  <Text style={{ fontSize: 20, fontWeight: "600" }}>
                    {item.text}
                  </Text>
                  {item.text2 !== "" ? (
                    <Text style={{ fontSize: 16 }}>{item.text2}</Text>
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </BottomSheet> */}
      <View className="h-[32%]  bg-[#39A368] rounded-t-[40px]">
        <View className=" h-[10%]    ">
          <View className="flex flex-row w-full justify-center items-center gap-x-2">
            <Text className="text-white text-xl font-medium">Istanbul</Text>
            <AntDesign name="arrowright" size={24} color="white" />
            <Text className="text-white text-xl font-medium">Ankara</Text>
          </View>
        </View>
        <View className="bg-white h-[90%] rounded-t-[40px] w-full">
          <View className="w-full flex justify-center flex-row items-center py-2">
            <Text className="text-xl font-medium text-[#0B0C23]">
              {/* routes will you take? */}
              Which of this routes will you take?
            </Text>
          </View>
          <View className="mx-4 mb-2">
            <View className="flex flex-row items-center justify-between border-b py-1">
              <View className="flex items-center">
                <Text className="text-[#424256]">Route A</Text>
                <Text className="text-xl">1h 54m</Text>
              </View>
              <CustomCheckbox
              
                isChecked={isCheckedArray[0]}
                onValueChange={() => handleCheckboxChange(0)}
              />
            </View>
            <View className="flex flex-row items-center justify-between border-b py-1">
              <View className="flex items-center">
                <Text className="text-[#424256]">Route B</Text>
                <Text className="text-xl">1h 54m</Text>
              </View>
              <CustomCheckbox
                
                isChecked={isCheckedArray[1]}
                onValueChange={() => handleCheckboxChange(1)}
              />
            </View>
            <View className="flex flex-row items-center justify-between py-1">
              <View className="flex items-center">
                <Text className="text-[#424256]">Route C</Text>
                <Text className="text-xl">1h 54m</Text>
              </View>
              <CustomCheckbox
              
                isChecked={isCheckedArray[2]}
                onValueChange={() => handleCheckboxChange(2)}
              />
            </View>
            <View className="w-full my-2">

            <Button
              label={"Next"}
              onPress={() => navigation.navigate("AddStopOvers")}
            />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Routes;

const styles = StyleSheet.create({
  floatingDialogBox: {
    width: "80%",
    maxWidth: 300,
    height: 60,
    backgroundColor: "#FFFFFF",
    position: "absolute",
    zIndex: 2,
    bottom: 280,
    left: 10,
    borderRadius: 10,
  },
  profilePopSection: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 4,
    paddingHorizontal: 4,
    gap: 4,
  },
  completionBar: {
    height: 5,
    flex: 1,
  },
  btmShet: {
    width: 200,
    height: 200,
    zIndex: 4,
    backgroundColor: "gray",
    position: "absolute",
    bottom: 0,
  },
  mapStyle: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F9F9F9",
    // alignItems: 'center',
  },
  cardStyle: {
    borderWidth: 1,
    marginTop: 10,
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
    borderRadius: 10,
    borderColor: "gray",
  },
});
