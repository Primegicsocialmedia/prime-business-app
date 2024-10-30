import { View, Text, Image, Alert, ToastAndroid } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { useUser } from "@clerk/clerk-expo";

const Intro = ({ business }) => {
  const router = useRouter();
  const { user } = useUser();

  const onDelete = () => {
    Alert.alert(
      "Do you want to delete?",
      "Do you really want to delete this business?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "Destructive",
          onPress: () => deleteBusiness(),
        },
      ]
    );
  };

  const deleteBusiness = async () => {
    console.log("Delete Business");
    await deleteDoc(doc(db, "BusinessList", business?.id));
    router.back();
    ToastAndroid.show("Business Deleted!", ToastAndroid.LONG);
  };

  return (
    <View>
      <View className="absolute z-10 flex flex-row justify-between w-[100%] p-5">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={40} color="white" />
        </TouchableOpacity>

        <Ionicons name="heart-outline" size={40} color="#fff" />
      </View>
      <Image
        source={{ uri: business?.imageUrl }}
        style={{
          width: "100%",
          height: 340,
        }}
      />
      <View className="flex flex-row bg-white p-5 -mt-5 rounded-t-3xl justify-between ">
        <View className="p-5 -mt-5 bg-white rounded-t-3xl">
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 26,
            }}
          >
            {business?.name}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 18,
            }}
          >
            {business?.address}
          </Text>
        </View>
        {user?.primaryEmailAddress?.emailAddress == business?.userEmail && (
          <TouchableOpacity onPress={() => onDelete()}>
            <Ionicons name="trash" size={40} color="red" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Intro;
