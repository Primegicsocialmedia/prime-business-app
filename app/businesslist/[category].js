import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";

const BusinesslistByCategory = () => {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
    getBusinessList();
  }, []);

  /**
   * Use to get business list by category
   */
  const getBusinessList = async () => {
    setLoading(true);
    setBusinessList([]);
    const q = query(
      collection(db, "BusinessList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setBusinessList((prev) => [...prev, { id: doc?.id, ...doc.data() }]);
    });
    setLoading(false);
  };

  return (
    <View>
      {businessList?.length > 0 && loading == false ? (
        <FlatList
          data={businessList}
          onRefresh={getBusinessList}
          refreshing={loading}
          renderItem={({ item, index }) => (
            <BusinessListCard business={item} key={index} />
          )}
        />
      ) : loading ? (
        <ActivityIndicator
          className="mt-[60%]"
          size={"large"}
          color={"#7F57F1"}
        />
      ) : (
        <Text className="text-gray text-center mt-[50%] text-xl font-pbold">
          No Business found
        </Text>
      )}
    </View>
  );
};

export default BusinesslistByCategory;
