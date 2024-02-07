import { StyleSheet, Text, View } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";
import TopHeader from "../../Comp/TopHeader";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";

const Ride = () => {
  const Head = () => {
    return (
      <View className="w-full bg-white shadow-lg justify-between flex flex-row items-center h-16 p-2">
        <View className="flex flex-row gap-x-4 item-center  h-full px-2">
          <View className="h-14 py-  justify-center flex ">
            <Ionicons name="arrow-back-sharp" size={24} color="#121337" />
          </View>
          <View className="">
            <View className="flex flex-row gap-1   item-center ">
              <Text className="text-[20px]">Istanbul</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
              <Text className="text-[20px]">Ankara</Text>
            </View>
            <View>
              <Text className="text-[14px] text-[#424256]">
                Tomorrow, 15 March
              </Text>
            </View>
          </View>
        </View>
        <View className="">
          <Feather name="search" size={24} color="black" />
        </View>
      </View>
    );
  };
  return (
    <ScreenContainer style={styles.container}>
      <View className="py- bg-[#F4F4F6] h-full">
        {/* <Text>Ride</Text> */}
        <Head />
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
