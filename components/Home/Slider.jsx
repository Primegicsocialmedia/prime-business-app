import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../configs/FirebaseConfig";
import { query, collection, getDocs } from "firebase/firestore";

const Slider = () => {
  useEffect(() => {
    GetSliderList();
  }, []);
  const [sliderList, setSliderList] = useState([]);

  const GetSliderList = async () => {
    setSliderList([]);
    const q = query(collection(db, "Slider"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setSliderList((prev) => [...prev, doc.data()]);
    });
  };
  return (
    <View>
      <Text className="text-xl pl-5 pt-5 mb-2 font-pbold">
        #Specials for you
      </Text>

      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="pl-4"
        renderItem={({ item, index }) => (
          <Image
            key={index}
            source={{ uri: item.imageUrl }}
            className="w-[300] h-[150] rounded-xl mr-4"
          />
        )}
      />
    </View>
  );
};

export default Slider;
