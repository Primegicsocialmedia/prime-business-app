import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const BusinessListCard = ({ business }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      className="p-2 m-3 rounded-2xl bg-[#fff] flex flex-row gap-3"
      onPress={() => router.push("/businessdetail/" + business.id)}
    >
      <Image
        source={{ uri: business.imageUrl }}
        style={{
          width: 120,
          height: 120,
          borderRadius: 15,
          resizeMode: "contain",
        }}
      />
      <View className="flex-1 g-2">
        <Text className="text-lg font-pbold">{business.name}</Text>
        <Text className="text-gray font-pregular text-sm">
          {business.address}
        </Text>
        <View className="flex flex-row gap-2">
          <Image
            source={require("./../../assets/images/star.png")}
            className="w-[15] h-[15]"
          />
          <Text className="">4.5</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessListCard;
