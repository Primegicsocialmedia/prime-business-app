import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const PopularBusinessCard = ({ business }) => {
  return (
    <TouchableOpacity
      className="ml-5 p-5 bg-white rounded-2xl"
      onPress={() => router.push("/businessdetail/" + item?.id)}
    >
      <Image
        source={{ uri: business.imageUrl }}
        className="h-[130px] w-[200px] jusrounded-2xl"
      />

      <View className="mt-2 gap-1">
        <Text className="text-lg font-pbold">{business.name}</Text>
        <Text className="text-xs text-gray font-pregular">
          {business.address}
        </Text>

        <View className="flex flex-row justify-between">
          <View className="flex flex-row gap-1">
            <Image
              source={require("./../../assets/images/star.png")}
              className="w-[15] h-[15]"
            />
            <Text className="">4.5</Text>
          </View>
          <Text className="bg-secondary font-pregular text-white p-1 rounded-md text-[12px]">
            {business.category}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularBusinessCard;
