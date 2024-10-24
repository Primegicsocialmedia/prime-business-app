import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const LoginScreen = () => {
  return (
    <View>
      <View className="flex items-center mt-[100]">
        <Image
          source={require("./../assets/images/login.png")}
          className="w-[220px] h-[450px] "
          style={{ borderWidth: 6, borderRadius: 20, borderColor: "#000" }}
        />
      </View>
      <View className="bg-white p-5 -mt-5">
        <Text
          className="text-[30px] text-center"
          style={{ fontFamily: "outfit-bold" }}
        >
          Your Ultimate{" "}
          <Text className="text-PRIMARY ">Community Directory </Text>App
        </Text>
        <Text
          className="text-base text-center my-4 text-GRAY"
          style={{ fontFamily: "outfit" }}
        >
          Find your favourite business near you and post your own business to
          your community
        </Text>
      </View>
      <TouchableOpacity className="bg-PRIMARY p-4 rounded-full mt-5">
        <Text
          className="text-center text-white"
          style={{ fontFamily: "outfit" }}
        >
          Lets get started{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
