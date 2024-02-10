import React, { useMemo, useRef, useState, useCallback } from "react";
import { Image, Modal, Pressable, ScrollView, Text, View } from "react-native";
import Head from "./Head";
import Card from "../../components/Card";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import Images from "../../Images/Images";
import Button from "../../Comp/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";

const TripDetails = ({ navigation }) => {
  const [showStops, setShowStops] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [stage, setStage] = useState(1);
  const toggleStops = () => {
    setShowStops(!showStops);
  };

  return (
    <View className="space-y-2 h-full">
      <Head title="Trip details" onBackPress={() => navigation.goBack()} />
      <ScrollView style={{ flex: 1 }}>
        <View className="space-y-2">
          <View className="space-y-">
            <Card moreClass={`bg-white px-4 flex flex-col w-full  `}>
              {/* <Text>hi</Text> */}
              <View className="flex w-full justify-center flex-row">
                <View className="flex flex-row gap-x-2 items-center h-12">
                  <Text className="text-[#0B0C23] text-2xl font-medium">
                    Istanbul
                  </Text>
                  <AntDesign name="arrowright" size={24} color="black" />
                  <Text className="text-[#0B0C23] text-2xl font-medium">
                    Ankara
                  </Text>
                </View>
              </View>
              <View className="flex flex-row justify-center items-center gap-x-2 h-10 ">
                <Text className="text-[#424256] text-base">
                  Tomorrow, 15 March
                </Text>
                <View className="h-1 w-1 rounded-full bg-gray-400"></View>
                <Text className="text-[#424256] text-base">23km</Text>
                <View className="h-1 w-1 rounded-full bg-gray-400"></View>
                <Text className="text-[#424256] text-base">2h 30m</Text>
              </View>
              <View className="bg-[#F4F4F6] rounded-xl mx-3 h-34 my-2 p-2 flex items-start ">
                <View className="flex flex-row gap-x-2">
                  <View className="h-full  flex items-center ">
                    <View className="bg-red-600 rounded-full flex items-center justify-center h-4 w-4">
                      <View className="bg-white h-1.5 w-1.5 rounded-full"></View>
                    </View>
                    <View
                      className={`${
                        showStops ? "h-36  lg:h-10" : "h-20  lg:h-10"
                      } flex 1  justify-center py-0.5 `}
                    >
                      <View className=" h-[100%]  w-[0.5px] space-y-1">
                        <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                        <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                        <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                        <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                        <View className="h-[10%]  border-[0.5px] border-green-500 space-y-1">
                          {showStops && (
                            <View className="h-6 -translate-y-10">
                              <View className=" h-[100%]  w-[0.5px] spac">
                                <View className="-translate-x-2 bg-[#121337] rounded-full flex items-center justify-center h-4 w-4">
                                  <View className="bg-white h-1.5 w-1.5 rounded-full"></View>
                                </View>
                                <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                                <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                                <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                                {/* <View className="h-[10%]  border-[0.5px] border-green-500"></View> */}
                              </View>
                            </View>
                          )}
                          {showStops && (
                            <View className="h-6 -translate-y-8">
                              <View className=" h-[100%]  w-[0.5px] spac">
                                <View className="-translate-x-2 bg-[#121337] rounded-full flex items-center justify-center h-4 w-4">
                                  <View className="bg-white h-1.5 w-1.5 rounded-full"></View>
                                </View>
                                <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                                <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                                <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                                {/* <View className="h-[10%]  border-[0.5px] border-green-500"></View> */}
                              </View>
                            </View>
                          )}
                        </View>

                        <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                        <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                        <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                        {/* <View className="h-[10%]  border-[0.5px] border-green-500"></View> */}
                        {/* <View className="h-[10%]  border-[0.5px] border-green-500"></View> */}

                        {/* <View className="h-[10%]  border-[0.5px] border-green-500"></View>
                    <View className="h-[10%]  border-[0.5px] border-green-500"></View> */}
                      </View>
                    </View>
                    <View className="py-">
                      <MaterialIcons
                        name="location-on"
                        size={16}
                        color="green"
                      />
                    </View>
                  </View>
                  <View className="w-full flex-1 space-y-3">
                    <View className="flex flex-row justify-between w-full items-center h-10">
                      <View>
                        <Text className="text-[#585858] textsm">Pick up</Text>
                        <Text className="text-[#1C1C1C] font-medium text-sm">
                          2 lane City hall street
                        </Text>
                      </View>
                    </View>
                    {showStops && (
                      <View className="space-y-2.5">
                        <Text>Location 1</Text>
                        <Text>Location 2</Text>
                        {/* ... other locations ... */}
                      </View>
                    )}
                    <Pressable
                      onPress={toggleStops}
                      className=" rounded-full h-8 bg-white flex flex-row w-24 items-center justify-center"
                    >
                      <Text>2 stops</Text>
                      <View className="">
                        <MaterialIcons
                          name={
                            showStops
                              ? "keyboard-arrow-up"
                              : "keyboard-arrow-down"
                          }
                          size={24}
                          color="#8A8A99"
                        />
                      </View>
                    </Pressable>
                    <View className="flex flex-row justify-between items-center">
                      <View>
                        <Text className="text-[#585858] text-sm">Drop off</Text>
                        <Text className="text-[18px] text-[#1C1C1C] font-medium">
                          Block 4, Caffe Couture{" "}
                        </Text>
                      </View>
                      <View className="">
                        <MaterialIcons
                          name="keyboard-arrow-right"
                          size={24}
                          color="#8A8A99"
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Card>
          </View>
          <View>
            <Card moreClass={""}>
              <View className="bg-white px-4 flex flex-row justify-between items-center py-2">
                <View>
                  <Text className="text-[#424256] text-base font-normal">
                    Price for 1 passenger
                  </Text>
                  <Text className="text-2xl font-bold">47 TL</Text>
                </View>
                <View className="">
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={30}
                    color="#8A8A99"
                  />
                </View>
              </View>
            </Card>
          </View>
          <View>
            <Card moreClass={`bg-white space-y-4 py-2`}>
              <Text className="px-4 font-medium text-[#0B0C23] text-base">
                Driver detail
              </Text>
              <View className="flex flex-row justify-between items-center px-4">
                <View className="flex flex-row gap-x-1">
                  <View className="relative w-20">
                    <View className="h-14 w-14 ">
                      <Image
                        source={`${Images.person1}`}
                        className="h-full w-full"
                      />
                    </View>
                    <View className="absolute z-10 right-3 bottom-0">
                      <MaterialIcons
                        name="verified-user"
                        size={26}
                        color="#40B876"
                      />
                    </View>
                  </View>

                  <View className=" flex-1 flex flex-row justify-between">
                    <View>
                      <Text className="text-[#1C1C1C] text-base font-medium">
                        Micheal
                      </Text>
                      <View className="flex flex-row justify-between ">
                        <View className="flex flex-row item-center">
                          <Entypo name="star" size={14} color="#EFBC59" />
                          <Text className="text-xs text-[#424256]">
                            4.3 (23)
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View className="">
                      <MaterialIcons
                        name="keyboard-arrow-right"
                        size={30}
                        color="#8A8A99"
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="flex flex-row justify-between items-center px-4">
                <View className="flex flex-row gap-x-1">
                  <View className="relative w-20">
                    <View className="h-14 w-14 p-2 bg-gray-300 rounded-full  flex flex-row items-center justify-center">
                      <Image source={Images.car} />
                    </View>
                  </View>

                  <View className=" flex-1 flex flex-row justify-between">
                    <View>
                      <Text className="text-[#121337] text-base font-medium">
                        Toyota Camry 2018 - Blue
                      </Text>
                      <Text className="text-sm text-[#424256]">ABJ00123KG</Text>
                    </View>
                    <View className="">
                      <MaterialIcons
                        name="keyboard-arrow-right"
                        size={30}
                        color="#8A8A99"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Card>
          </View>
          <View>
            <Card moreClass={`bg-white space-y-4 py-2`}>
              <Text className="px-4  font-medium text-[#0B0C23] text-base">
                Passengers
              </Text>
              <View className="flex flex-row justify-between items-center px-4">
                <View className="flex flex-row gap-x-1">
                  <View className="relative w-20">
                    <View className="h-14 w-14 ">
                      <Image
                        source={Images.person1}
                        className="h-full w-full"
                      />
                    </View>
                    <View className="absolute z-10 right-3 bottom-0">
                      <MaterialIcons
                        name="verified-user"
                        size={26}
                        color="#40B876"
                      />
                    </View>
                  </View>

                  <View className=" flex-1 flex flex-row justify-between">
                    <View>
                      <Text className="text-[#1C1C1C] text-base font-medium">
                        Samantha Haris
                      </Text>
                      <Text className="text-[#424256] text-sm">
                        Istanbul - Kashmir
                      </Text>
                    </View>
                    <View className="">
                      <MaterialIcons
                        name="keyboard-arrow-right"
                        size={30}
                        color="#8A8A99"
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View className="flex flex-row justify-between items-center px-4">
                <View className="flex flex-row gap-x-1">
                  <View className="relative w-20">
                    <View className="h-14 w-14 ">
                      <Image
                        source={Images.person2}
                        className="h-full w-full"
                      />
                    </View>
                    <View className="absolute z-10 right-3 bottom-0">
                      <MaterialIcons
                        name="verified-user"
                        size={26}
                        color="#40B876"
                      />
                    </View>
                  </View>

                  <View className=" flex-1 flex flex-row justify-between">
                    <View>
                      <Text className="text-[#1C1C1C] text-base font-medium">
                        Samantha Haris
                      </Text>
                      <Text className="text-[#424256] text-sm">
                        Istanbul - Ankara
                      </Text>
                    </View>
                    <View className="">
                      <MaterialIcons
                        name="keyboard-arrow-right"
                        size={30}
                        color="#8A8A99"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Card>
          </View>
          <View>
            <Card moreClass={"py-"}>
              <View className="bg-white px-4 space-y-4 py-4">
                <Text className="text-[#0B0C23] text-base font-medium">
                  Driver preference
                </Text>
                <View className="flex flex-row gap-x-3">
                  <View className="bg-white border rounded-full w-max px-2 xl-px-6  py-2 h-14 flex-row flex justify-center items-center">
                    <Text className="text-[#232323] text-base font-medium">
                      Moderate talking
                    </Text>
                  </View>
                  <View className="bg-white border rounded-full w-max px-2 xl-px-6 py-2 h-14 flex-row flex justify-center items-center">
                    <Text className="text-[#232323] text-base font-medium">
                      No smoking
                    </Text>
                  </View>
                  <View className="bg-white border rounded-full w-max px-4 xl-px-6  py-2 h-14 flex-row flex justify-center items-center">
                    <Text className="text-[#232323] text-base font-medium">
                      No pets
                    </Text>
                  </View>
                </View>
                <View>
                  <Text className="text-[#0B0C23] text-base font-medium">
                    Driver’s message
                  </Text>
                  <Text className="text-[#424256] text-base">
                    I like people that are honest, speak moderately, respectful
                    and sincere. Please feel free to ask me any question during
                    the journey.{" "}
                  </Text>
                </View>
              </View>
            </Card>
          </View>
          <View>
            <Card>
              <View className="bg-white px-4 py-2">
                <View className=" flex flex-row items-center gap-x-1 ">
                  <Ionicons name="card" size={34} color="#40B876" />
                  <Text className="text-sm text-[#0B0C23]">Card</Text>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={24}
                    color="black"
                  />
                </View>
                <View className=" w-full">
                  <Button
                    label={"Continue"}
                    onPress={() => setModalVisible(true)}
                  />
                </View>
              </View>
            </Card>
          </View>
        </View>
      </ScrollView>

      {/* Fare breakdown */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="h-full flex bg-gray-300/60 flex-col justify-end">
          {stage === 1 ? (
            <View className="bg-white h-[25%] rounded-t-3xl">
              <View className="h-full px-4 py-1">
                <View className="w-full  flex flex-row relative">
                  <Text className="text-2xl text-[#0B0C23] mx-auto font-bold">
                    Fare breakdown
                  </Text>
                  <Pressable
                    onPress={() => setStage(2)}
                    className="absolute right-0 top-0.5"
                  >
                    <AntDesign name="close" size={24} color="#424256" />
                    {/* <EvilIcons name="close" size={24} color="#424256" style={{fontWeight:"bold"}} /> */}
                  </Pressable>
                </View>
                <View className="my-5 space-y-3">
                  <View className="flex flex-row justify-between">
                    <Text className="text-base text-[#424256]">Ride fare</Text>
                    <Text className="text-base text-[#0B0C23]">102 TL</Text>
                  </View>
                  <View className="flex flex-row justify-between">
                    <Text className="text-base text-[#424256]">Promo</Text>
                    <Text className="text-base text-[#0B0C23]">2 TL</Text>
                  </View>
                  <View className="flex flex-row justify-between">
                    <Text className="text-base text-[#424256]">Discount</Text>
                    <Text className="text-base text-[#0B0C23]">0 TL</Text>
                  </View>
                  <View className="w-full bg-gray-200 h-[0.5px]"></View>
                  <View className="flex flex-row justify-between">
                    <Text className="text-base text-[#424256]">Total</Text>
                    <Text className="text-xl font-cold text-[#0B0C23]">
                      100 TL
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <View className="h-[40%] bg-white rounded-3xl">
              <View className="h-full  py-1">
                <View className="w-full  flex flex-row relative px-4">
                  <Text className="text-2xl text-[#0B0C23] mx-auto font-bold">
                    Payment options
                  </Text>
                  <Pressable
                    onPress={() => {
                      setStage(1);
                      setModalVisible(false);
                    }}
                    className="absolute right-2 top-0.5"
                  >
                    <AntDesign name="close" size={24} color="#424256" />
                  </Pressable>
                </View>
                <View className="my-5 bg-red-900 h-full">
                  <View>
                    <View
                      className="flex flex-row w-full justify-between px-4
                   "
                    >
                      <View className="flex flex-row gap-2 items-center">
                        <View className="h-12 w-12 flex flex-row items-center justify-center bg-[#ECF8F1] rounded-full">
                          <FontAwesome5
                            name="wallet"
                            size={24}
                            color="#2D8354"
                          />
                        </View>
                        <Text className="text-[#0B0C23] text-base font-semibold">
                          Wallet
                        </Text>
                      </View>
                      <Text></Text>
                    </View>
                  </View>
                  <View className="w-full h-[0.5px] bg-gray-500">
                    <Text>3</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default TripDetails;
