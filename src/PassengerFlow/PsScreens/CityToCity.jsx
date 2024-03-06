import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Pressable,
} from "react-native";
import React, { useRef, useMemo, useCallback, useState } from "react";
import MapView from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";
import { tcolors } from "../../components/theme";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Button2 from "../../components/Button2";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import TextInputWithIcon from "../../Comp/TextInputWithIcon";
const CityToCity = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [mySwitch, setMySwitch] = useState("find ride");
  const [tpDate, setTpDate] = useState("dd-mm-yy");
  const [countBtn, setCountBtn] = useState(true);
  const [numUsers, setNumUsers] = useState(1);
  const bottomSheetRef = useRef(null);

  const ltbottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["50%"], []);

  const lTsnapPoints = useMemo(() => ["34%"], []);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    console.log(moment(date).format("D MMMM YYYY"));
    setTpDate(`${moment(date).format("ddd, MMM D")}`);
    hideDatePicker();
  };

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  // callbacks
  const lThandleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  const locations = [
    {
      id: 1,
      icon: () => (
        <SimpleLineIcons name="location-pin" size={24} color="black" />
      ),
      name: "Istanbul",
      address: "14 Abaji close, Gar...",
    },
    {
      id: 2,
      icon: () => (
        <SimpleLineIcons name="location-pin" size={24} color="black" />
      ),
      name: "İzmir",
      address: "14 Abaji close, Gar...",
    },
    {
      id: 3,
      icon: () => (
        <SimpleLineIcons name="location-pin" size={24} color="black" />
      ),
      name: "Samsun",
      address: "14 Abaji close, Gar...",
    },
  ];
  const topArr = [
    {
      text: "Find ride",
      icon: () => <Ionicons name="search" size={20} color={"gray"} />,
      onPress: () => setMySwitch("find ride"),
    },
    {
      text: "Offer ride",
      icon: () => (
        <MaterialCommunityIcons name="steering" size={20} color="gray" />
      ),
      onPress: () => setMySwitch("offer ride"),
    },
  ];

  const locationData = [
    {
      // text:'18, 34704 Ataşehir, İstanbul, Türkiye',
      text: () => (
        <TextInputWithIcon placeholder="18, 34704 Ataşehir, İstanbul, Türkiye" />
      ),

      icon: () => (
        <MaterialCommunityIcons
          name="record-circle"
          size={24}
          color="#EE462F"
        />
      ),
    },
    {
      // text:'18, 34704 Ataşehir, İstanbul, Türkiye',
      icon: () => (
        <Ionicons name="location" size={20} color={tcolors.secondary} />
      ),
    },
  ];

  const addUser = () => {
    setCountBtn(true);
    setNumUsers((num) => num + 1);
  };

  const subUser = () => {
    setCountBtn(false);
    if (numUsers > 1) {
      setNumUsers((num) => num - 1);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -200} // Adjust this value as needed
    >
      <View style={{ flex: 1 }}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.mapStyle}
        ></MapView>

        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <View style={styles.switchyTab}>
              {topArr.map((item, index) => {
                return (
                  <Pressable
                    key={index}
                    style={
                      mySwitch === item.text.toLowerCase()
                        ? styles.tbTypeContainer
                        : styles.notCurrentflow
                    }
                    onPress={item.onPress}
                  >
                    {item.icon()}
                    <Text style={{ fontSize: 16 }}>{item.text}</Text>
                  </Pressable>
                );
              })}
            </View>
            {mySwitch === "find ride" ? (
              <>
                <View className="flex flex-row items-center gap-x-2 w-full h-10">
                  <MaterialCommunityIcons
                    name="record-circle"
                    size={24}
                    color="#EE462F"
                  />
                  <View className="flex  flex-1">
                    <TextInputWithIcon
                      placeholder="18, 34704 Ataşehir, İstanbul, Türkiye"
                      onFocus={() => navigation.navigate("destination")}
                    />
                  </View>
                </View>
                <View className="flex flex-row items-center gap-x-2 w-full h-10">
                  <Ionicons
                    name="location"
                    size={20}
                    color={tcolors.secondary}
                  />

                  <Pressable
                    className="flex  flex-1"
                    onPress={() => navigation.navigate("destination")}
                  >
                    <TextInputWithIcon placeholder="18, 34704 Ataşehir, İstanbul, Türkiye" />
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Left */}
                  <TouchableOpacity
                    onPress={() => showDatePicker()}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="calendar-month-outline"
                      size={24}
                      color="black"
                    />

                    <Text
                      style={{
                        borderBottomWidth: 1,
                        fontSize: 14,
                        width: "50%",
                      }}
                    >
                      {tpDate}
                    </Text>
                  </TouchableOpacity>
                  {/* Right */}
                  <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 8,
                    }}
                  >
                    <MaterialIcons
                      name="person-outline"
                      size={28}
                      color="black"
                      style={{}}
                    />

                    <Text
                      style={{
                        borderBottomWidth: 1,
                        fontSize: 14,
                        width: "50%",
                      }}
                    >
                      {numUsers}
                    </Text>
                  </TouchableOpacity>
                </View>

                <Button2
                  onPress={() => navigation.navigate("ride")}
                  text={"Search a ride and prices"}
                />
              </>
            ) : (
              <View>
                <View className="my-4">
                  <View className="bg-[#A0A1B0] border border-[#A0A1B0] rounded-lg h-14 flex flex-row items-center px-2 gap-x-1">
                    <View className="">
                      <Ionicons
                        name="location"
                        size={20}
                        color={tcolors.secondary}
                      />
                    </View>

                    <TextInput
                      className=" flex-1 placeholder:text-[#9D9D9D] text-xl h-full "
                      placeholder="Where are you leaving from? "
                      onFocus={() => navigation.navigate("location")}

                    />
                  </View>
                  <View className="my-4">
                    {locations.map((item, id) => (
                      <View className=" h-20  w-full " key={id}>
                        <View className="mx-4 flex py-3 flex-row items-center space-x-2 w-full">
                          <SimpleLineIcons
                            name="location-pin"
                            size={24}
                            color="black"
                          />
                          <View className="flex flex-row gap-x-6 w-full ">
                            <View>
                              <Text className="text-2xl">{item.name}</Text>
                              <Text>{item.address}</Text>
                            </View>
                            <View>
                              <Feather
                                name="arrow-right"
                                size={24}
                                color="black"
                              />
                            </View>
                            <View>
                              <Text className="text-2xl">{item.name}</Text>
                              <Text>{item.address}</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            )}
          </View>
        </BottomSheet>

        {/* Date time */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          minimumDate={new Date()}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        {/* Passenger Counter */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={{ flex: 1, backgroundColor: "rgba(128, 128, 128, 0.5)" }}
          >
            {/* Small Sheet */}
            <BottomSheet
              ref={ltbottomSheetRef}
              index={0}
              snapPoints={lTsnapPoints}
              onChange={lThandleSheetChanges}
            >
              <View style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Select seats
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                    paddingHorizontal: 40,
                  }}
                >
                  <TouchableOpacity onPress={() => subUser()}>
                    <AntDesign
                      name="minuscircleo"
                      size={40}
                      color={countBtn ? "gray" : tcolors.secondary}
                    />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 38 }}>{numUsers}</Text>
                  <TouchableOpacity onPress={() => addUser()}>
                    <Ionicons
                      name="add-circle-outline"
                      size={46}
                      color={countBtn ? tcolors.secondary : "gray"}
                    />
                  </TouchableOpacity>
                </View>
                <Button2 text={"Done"} onPress={() => setModalVisible(false)} />
              </View>
            </BottomSheet>
          </View>
        </Modal>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CityToCity;

const styles = StyleSheet.create({
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
  centerText: {
    textAlign: "center",
  },
  switchyTab: {
    backgroundColor: "#c0c0c0",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    padding: 5,
    flexDirection: "row",
  },
  tbTypeContainer: {
    backgroundColor: tcolors.white,
    width: "52%",
    height: 40,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  notCurrentflow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
});
