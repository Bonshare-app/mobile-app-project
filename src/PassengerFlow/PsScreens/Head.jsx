import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

export const Head = ({
  location1,
  location2,
  date,
  onBackPress,
  onSearchPress,
  title,
}) => {
  return (
    <View className="w-full bg-white shadow-lg justify-between flex flex-row items-center h-16 p-2">
      <View className="flex flex-row gap-x-2 item-center  h-full px-2">
        <Pressable onPress={onBackPress} className="">
          <View className="h-14 py-  justify-center">
            <Ionicons name="arrow-back-sharp" size={30} color="#121337" />
          </View>
        </Pressable>

        <View className="">
          {location1 && location2 && (
            <View className="flex flex-row gap-1   item-center ">
              <Text className="text-[20px]">{location1}</Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
              <Text className="text-[20px]">{location2}</Text>
            </View>
          )}
          {date && (
            <View>
              <Text className="text-[14px] text-[#424256]">{date}</Text>
            </View>
          )}
        </View>
        {title && (
          <View className=" flex flex-row items-center ">
            <Text className="text-[22px] text-[#0B0C23]/60  font-medium">
              {title}
            </Text>
          </View>
        )}
      </View>
      {onSearchPress && typeof onSearchPress === "function" && (
        <View className="">
          <Feather
            name="search"
            size={24}
            color="black"
            onPress={onSearchPress}
          />
        </View>
      )}
    </View>
  );
};

export default Head;
