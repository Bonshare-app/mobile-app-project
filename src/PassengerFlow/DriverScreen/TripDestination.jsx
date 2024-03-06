import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import TopHeader from "../../Comp/TopHeader";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { tcolors } from "../../components/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenContainer from "../../components/ScreenContainer";

const TripDestination = ({ navigation }) => {
  const locations = [
    {
      id: 1,
      name2: "Mersin",
      name: "Istanbul",
      address: "14 Abaji close, Gar...",
    },
    {
      id: 2,
      name2: "Istanbul",
      name: "İzmir",
      address: "14 Abaji close, Gar...",
    },
    {
      id: 3,
      name2: "Bursa",
      name: "Samsun",
      address: "14 Abaji close, Gar...",
    },
    {
      id: 4,
      name2: "İzmir",
      name: "Samsun",
      address: "14 Abaji close, Gar...",
    },
    {
      id: 5,
      name2: "Istanbul",
      name: "Samsun",
      address: "14 Abaji close, Gar...",
    },
  ];
  const Item = ({ title }) => (
    <View>
      <SimpleLineIcons name="location-pin" size={24} color="black" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <View className=" h-full bg-white">
      <View className="w-full " style={styles.container}>
        <View className=" my-2 py-2 px-4 w-full flex flex-row items-center ">
          <Pressable onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="window-close"
              size={30}
              color="black"
            />
          </Pressable>
          <View className="mx-auto">
            <Text className="text-xl font-semibold">Your destination</Text>
          </View>
        </View>
        <View className="flex flex-row items-center mx-2">
          <View className="my-4  px-6 flex-1 ">
            <View className="border border-[#A0A1B0] rounded-lg h-14 flex flex-row items-center px-2 gap-x-1">
              <Ionicons name="location" size={20} color={tcolors.secondary} />

              <TextInput
                className=" flex-1 placeholder:text-[#8A8A99] text-xl"
                placeholder="Going to"
                onSubmitEditing={()=>navigation.navigate("routes")}

              />
              <Pressable onPress={() => navigation.goBack()}>
                <Ionicons name="close-circle" size={24} color="#8A8A99" />
              </Pressable>
            </View>
          </View>
        </View>
        <View className="mx-6   ">
          <Pressable
            className="w-[205px] space-x-2 gap-x-2  rounded-full my-2 border flex-row flex border-[#EBEBEF] item-center py-2"
            onPress={() => navigation.navigate("yourdestination")}
          >
            <Ionicons name="image-outline" size={30} color="#40B876" />
            <Text className="text-2xl text-[#121337]">Your location</Text>
          </Pressable>
        </View>
      </View>
      <View className="my-3  w-full">
        <View className="mx-6">
          <Text className="text-[#0B0C23] text-xl font-medium">Recent locations</Text>
        </View>
        <ScreenContainer>
          <View className="my-4">
            {locations.map((item, id) => (
              <View className="border-b h-20  w-full " key={id}>
                <View className="mx-6 flex py-3 flex-row items-center space-x-2 w-full">
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
                      <Feather name="arrow-right" size={24} color="black" />
                    </View>
                    <View>
                      <Text className="text-2xl">{item.name2}</Text>
                      <Text>{item.address}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScreenContainer>
      </View>
    </View>
  );
};

export default TripDestination;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 12, // Android shadow
  },
});
