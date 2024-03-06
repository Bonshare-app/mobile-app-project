import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ScreenContainer from "../../components/ScreenContainer";
import MapView from "react-native-maps";
import Button from "../../Comp/Button";

const YourLocationMap = ({navigation}) => {
  return (
    <View className="h-full ">
      <View>
        <View
          className=" h-14 px-4 w-full flex flex-row items-center "
          style={styles.container}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={24}
              color="black"
            />
          </Pressable>
          {/* <View className="mx-auto">
            <Text className="text-xl font-semibold">Your location</Text>
          </View> */}
        </View>
        <View className="px-4" style={styles.container}>
          <View className="space-y-2">
            <Text className="text-[#0B0C23] font-semibold text-2xl">
              Where in Istanbul would you like to pick your passengers?
            </Text>
            <Text className="text-[#424256] text-lg">
              Specify a popular location so that your passengers know where to
              find you.
            </Text>
          </View>
          <View>
            <View className="border border-[#A0A1B0] rounded-lg h-14 flex flex-row items-center my-3 px-2 gap-x-1">
              <TextInput
                className=" flex-1 placeholder:text-[#8A8A99] text-xl"
                placeholder="eg caffe bistro"
                onKeyPress={()=>navigation.navigate("tripdestination")}
              />
            </View>
          </View>
        </View>
      </View>
      <ScreenContainer>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.mapStyle}
        ></MapView>
        <View className="my-4 w-full flex flex-row items-center justify-center">
          <View className="w-[90%]">
            <Button label={"Next"} isMain={false} />
          </View>
        </View>
      </ScreenContainer>
    </View>
  );
};

export default YourLocationMap;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 40 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 12, // Android shadow
  },
  mapStyle: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    flex: 1,
  },
});
