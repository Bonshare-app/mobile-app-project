import { Image, StyleSheet, Text, View } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";
import TopHeader from "../../Comp/TopHeader";
import {
  Entypo,
  Feather,
  Ionicons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import React, { useState } from "react";
import Card from "../../components/Card";
import Images from "../../Images/Images";
import cardData from "../../../Data";
import Head from "./Head";

const Ride = ({ navigation }) => {
  // const Head = () => {
  //   return (
  //     <View className="w-full bg-white shadow-lg justify-between flex flex-row items-center h-16 p-2">
  //       <View className="flex flex-row gap-x-4 item-center  h-full px-2">
  //         <View className="h-14 py-  justify-center flex ">
  //           <Ionicons name="arrow-back-sharp" size={24} color="#121337" />
  //         </View>
  //         <View className="">
  //           <View className="flex flex-row gap-1   item-center ">
  //             <Text className="text-[20px]">Istanbul</Text>
  //             <MaterialIcons
  //               name="keyboard-arrow-right"
  //               size={24}
  //               color="black"
  //             />
  //             <Text className="text-[20px]">Ankara</Text>
  //           </View>
  //           <View>
  //             <Text className="text-[14px] text-[#424256]">
  //               Tomorrow, 15 March
  //             </Text>
  //           </View>
  //         </View>
  //       </View>
  //       <View className="">
  //         <Feather name="search" size={24} color="black" />
  //       </View>
  //     </View>
  //   );
  // };

  const lists = [
    {
      name: "Today",
      icon: "",
    },
    {
      name: "Verified",
      icon: "",
    },
    {
      name: "Closest",
      icon: "",
    },
    {
      name: "Cheapest",
      icon: "",
    },
  ];
  // console.log(lists);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredData, setFilteredData] = useState(cardData);
  const applyFilter = (filterIndex) => {
    setSelectedItem(filterIndex);

    // Implement your filtering logic here based on the selected filter
    switch (filterIndex) {
      // case 0: // Today
      //   setFilteredData(cardData.filter((data) => /* your filtering condition */));
      //   break;
      case 1: // Verified
        setFilteredData(cardData.filter((data) => data.badge === "Verified"));
        break;
      case 2: // Closest
        setFilteredData(cardData.filter((data) => data.badge === "Closest"));
        break;
      case 3: // Cheapest
        setFilteredData(cardData.filter((data) => data.badge === "Cheapest"));
        break;
      default:
        setFilteredData(cardData);
        break;
    }
  };
  return (
    <ScreenContainer style={styles.container}>
      <View className="py- bg-[#F4F4F6] h-full">
        <Head
          location1="Istanbul"
          location2="Ankara"
          date="Tomorrow, 15 March"
          onBackPress={() => {
            navigation.goBack()
            console.log("hi")
          }}
          
        />
        <View className="bg-white w-full my-1.5 py-2 flex flex-row items-center">
          <ScrollView horizontal={true}>
            <View className="flex flex-row gap-2 py-1 px-4 items-center ">
              <View className=" flex flex-row items-center ">
                <TouchableOpacity
                  // className="flex flex-row items-center border border-[#8A8A99] rounded-full px-3 py-1"
                  className={`${
                    selectedItem === null
                      ? "bg-[#2D8354]/40"
                      : "border-[#8A8A99] border"
                  } rounded-full w-ma py-1 px-2.5 flex flex-row items-center gap-x-1 `}
                  onPress={() => applyFilter(null)}
                >
                  <Ionicons name="filter" size={20} color="#424256" />
                  <Text className="text-[17px] text-[#424256]">All</Text>
                </TouchableOpacity>
              </View>
              <View className="w-[0.9px] h-full bg-gray-300 py-4"></View>
              {lists.map((item, id) => (
                <View key={id} className=" flex flex-row gap-x-1 mx-2">
                  <TouchableOpacity
                    className={`${
                      selectedItem === id
                        ? "bg-[#2D8354]/40"
                        : "border-[#8A8A99] border"
                    }  rounded-full w-ma py-1 px-2.5 flex flex-row items-center gap-x-1 `}
                    // onPress={() => setSelectedItem(id)}
                    onPress={() => applyFilter(id)}
                  >
                    {item.icon}
                    <Text className="text-[17px] text-[#424256]">
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                  {id === 0 && (
                    <View className="h-full w-[0.5px] bg-gray-300 mx-1 "></View>
                  )}
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View className="px-4">
          <Text className="text-[#121337] text-base">
            Found {cardData.length} rides
          </Text>
        </View>
        <ScrollView className="">
          <View className="px-2 py-1 mx-2 space-y-4 ">
            {filteredData.map((data, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate("tripdetails");
                }}
              >
                <Card moreClass={"py- rounded-2xl shadow-lg bg-white "}>
                  <View className="p-2 mx-2">
                    <View className="flex flex-row justify-between item-center">
                      <View className="flex flex-row items-center gaxp-x-2">
                        <Image source={Images.car} className=" bg-cover h-4" />
                        <Text className="text-base text-[#424256] mb-1">
                          {data.carName}
                        </Text>
                      </View>
                      <View className="bg-[#2D8354]/20 rounded-full px-2">
                        <Text className="text-base text-[#2D8354]">
                          {data.badge}
                        </Text>
                      </View>
                    </View>
                    <View className="flex flex-row gap-1 py-2">
                      <View className="h-36 ">
                        <View className="h-full  flex items-center ">
                          <View className="bg-red-600 rounded-full flex items-center justify-center h-4 w-4">
                            <View className="bg-white h-1.5 w-1.5 rounded-full"></View>
                          </View>
                          <View className="flex 1 h-24  lg:h-10  justify-center py-0.5 ">
                            <View className=" h-[100%]  w-[0.5px] space-y-1">
                              <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                              <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                              <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                              <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                              <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                              <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                              <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                              <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                            </View>
                          </View>
                          <View className="py-2">
                            <MaterialIcons
                              name="location-on"
                              size={16}
                              color="green"
                            />
                          </View>
                        </View>
                      </View>
                      <View className="h-32 px-2 flex-1 space-y-2 ">
                        <View className=" h-14 w-full justify-between   flex flex-row">
                          <View className="space-y-2">
                            <Text className="text-[#585858] text-sm">
                              Pick up
                            </Text>
                            <Text className="text-[#1C1C1C] text-base font-semibold">
                              {data.pickupLocation}
                            </Text>
                          </View>
                          <View className="self-end">
                            <Text className="text-[#1C1C1C]">
                              {data.pickupTime}
                            </Text>
                          </View>
                        </View>
                        <View className="w-full flex justify-end flex-row py-1">
                          <Text className="text-[#717171] text-sm">
                            {data.travelDuration}
                          </Text>
                        </View>
                        <View className="w-full justify-between flex flex-row">
                          <View className="space-y-1">
                            <Text className="text-[#585858] text-sm">
                              Drop off
                            </Text>
                            <Text className="text-[#1C1C1C] text-base font-semibold">
                              {data.dropoffLocation}
                            </Text>
                          </View>
                          <View className="self-end text-[#1C1C1C]">
                            <Text>{data.dropoffTime}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View className="px-2 py-3 flex flex-row gap-x-3">
                      <Text className="bg-[#E8ECFD] rounded-full w-32 text-center text-[#0F2D99] text-sm">
                        {data.routeMatch}
                      </Text>
                      <Text className="text-[#0B0C23] text-sm bg-[#F4F4F6]  rounded-full w-28 text-center">
                        {data.seatsLeft}
                      </Text>
                    </View>
                  </View>
                  <View className="w-full bg-gray-300 h-[0.5px]"></View>
                  <View className="w-full px-4 py-2  flex flex-row justify-between items-center">
                    <View className="flex flex-row gap-x-2">
                      <View className="relative  w-14 bg-white rounded-full">
                        <View className="rounded-full h-14 w-14 ">
                          <Image
                            source={`${data.driverImage}`}
                            className="h-full w-full"
                          />
                        </View>
                        <View className="absolute bottom-0 -right-2 z-10 h-  ">
                          <MaterialIcons
                            name="verified-user"
                            size={22}
                            color="#40B876"
                          />
                        </View>
                      </View>
                      <View className="space-y-1 ">
                        <Text className="text-[#1C1C1C] text-base font-bold">
                          {data.driverName}
                        </Text>
                        <View className="flex flex-row justify-between ">
                          <View className="flex flex-row item-center">
                            <Entypo name="star" size={14} color="#EFBC59" />
                            <Text className="text-xs text-[#424256]">
                              {data.driverRating}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View>
                      <Text className="text-[#1C1C1C] text-[20px] font-semibold">
                        {data.price}
                      </Text>
                    </View>
                  </View>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View className=" my-1 px-2 py-4 flex justify-center items-center w-full ">
          <View className="border rounded-full w-44 text-center flex flex-row items-center justify-center h-14 gap-x-3 bg-white border-[#A0A1B0]">
            <Octicons name="bell-fill" size={20} color="black" />
            <Text className="text-[#121337] text-base">Create alert</Text>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Ride;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    //   marginHorizontal: 22,
    //   marginVertical: 50,
  },
});
