import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

import Ionicons from "@expo/vector-icons/Ionicons";

const Header = () => {
  const { user } = useUser();
  return (
    <View className="p-5 pt-5 bg-primary">
      <View className="flex flex-row items-center gap-[10px]">
        <Image
          source={{ uri: user?.imageUrl }}
          className="w-[45] h-[45] rounded-full"
        />
        <View>
          <Text className="text-white">Welcome</Text>
          <Text
            className="text-base text-white font-plight"
           
          >
            {user?.fullName}
          </Text>
        </View>
      </View>
      {/* Search Bar */}
      <View className="flex flex-row gap-3 items-center p-2 my-3 rounded-lg mt-4 bg-white">
        <Ionicons name="search" size={24} color="#7F57F1" />
        <TextInput placeholder="Search..." className='font-plight'/>
      </View>
    </View>
  );
};

export default Header;
