import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const CategoryItem = ({ category, onCategoryPress }) => {
  return (
    <TouchableOpacity onPress={() => onCategoryPress(category)}>
      <View className="p-3 rounded-full mr-3 bg-secondary">
        <Image source={{ uri: category.icon }} className="w-[40] h-[40]" />
      </View>
      <Text className="text-[12px] text-center mr-3 mt-1 font-pregular">
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
