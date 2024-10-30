import { View, Text, Image, FlatList, Linking, Share } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const ActionButton = ({ business }) => {
  const actionButtonMenu = [
    {
      id: 1,
      name: "Call",
      icon: require("./../../assets/images/call.png"),
      url: "tel:" + business?.contact,
    },
    {
      id: 2,
      name: "Location",
      icon: require("./../../assets/images/pin.png"),
      url:
        "http://www.google.com/maps/search/?api=1&query=" + business?.address,
    },
    {
      id: 3,
      name: "Web",
      icon: require("./../../assets/images/web.png"),
      url: business?.website,
    },
    {
      id: 4,
      name: "Share",
      icon: require("./../../assets/images/share.png"),
      url: business?.website,
    },
  ];

  const onPressHandle = (item) => {
    if (item.name == "Share") {
      Share.share({
        message:
          business?.name +
          "\n Address:" +
          business.address +
          "\n Find more details on Prime Business App !",
      });
      return;
    }
    Linking.openURL(item.url);
  };

  return (
    <View className="bg-white p-5">
      <FlatList
        data={actionButtonMenu}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={index} onPress={() => onPressHandle(item)}>
            <Image
              source={item?.icon}
              className="w-[50] h-[50]"
              resizeMode="contain"
            />
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                textAlign: "center",
                marginTop: 3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ActionButton;
