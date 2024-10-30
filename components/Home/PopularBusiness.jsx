import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import PopularBusinessCard from "./PopularBusinessCard";

const PopularBusiness = () => {
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    GetBusinessList();
  }, []);

  const GetBusinessList = async () => {
    setBusinessList([]);
    const q = query(collection(db, "BusinessList"), limit(10));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev) => [...prev, { id: doc.id, ...doc.data() }]);
    });
  };

  const router = useRouter();

  return (
    <View>
      <View className="p-4 flex justify-between flex-row mt-4">
        <Text className="text-lg font-pbold">Popular Business</Text>
        <Text className="text-black">View All</Text>
      </View>
      <FlatList
        data={businessList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <PopularBusinessCard business={item} key={index} />
        )}
      />
    </View>
  );
};

export default PopularBusiness;
