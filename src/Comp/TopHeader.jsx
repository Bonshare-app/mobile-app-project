// import { View, Text } from 'react-native'
// import React from 'react'

// const Header = ({newClass,header,content}) => {
//   return (
//     <View classsName={`${newClass} gap-3 my-2 flex w-full bg-red-500 border`}>
//       <Text classsName="font-bold text-[#232323] text-2xl">{header}</Text>
//       <Text classsName="text-[#585858]">{content}</Text>
//     </View>
//   )
// }

// export default Header
import { View, Text } from "react-native";
import React from "react";

const TopHeader = ({ header, content, moreClass,smallClass }) => {
  return (
    <View className={`w-full ${moreClass}`}>
      <Text className="font-medium text-2xl text-[#232323]">{header}</Text>
      <Text className={`text-[#585858] text-[16px] ${smallClass}`}>{content}</Text>
    </View>
  );
};

export default TopHeader;
