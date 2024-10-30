import { View, Text } from "react-native";
import React from "react";

const AboutBusiness = ({ business }) => {
  return (
    <View className="p-5 bg-white ">
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          fontSize: 20,
        }}
      >
        About
      </Text>
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          lineHeight: 20,
        }}
      >
        {business?.about}
      </Text>
    </View>
  );
};

export default AboutBusiness;
