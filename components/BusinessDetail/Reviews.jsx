import {
  View,
  Text,
  TextInput,
  Button,
  ToastAndroid,
  FlatList,
  Image,
} from "react-native";
import { useState } from "react";
import React from "react";
import { Rating } from "react-native-ratings";
import { TouchableOpacity } from "react-native";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { useUser } from "@clerk/clerk-expo";

const Reviews = ({ business }) => {
  const [rating, setRating] = useState(4);
  const [userInput, setUserInput] = useState();
  const { user } = useUser();
  const onSubmit = async () => {
    const docRef = doc(db, "BusinessList", business.id);
    await updateDoc(docRef, {
      reviews: arrayUnion({
        rating: rating,
        comment: userInput,
        userName: user?.fullName,
        userImage: user?.imageUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      }),
    });

    ToastAndroid.show("Comment Added Sucessfully !", ToastAndroid.BOTTOM);
  };
  return (
    <View className="p-5 bg-white">
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          fontSize: 20,
        }}
      >
        Reviews
      </Text>
      <View>
        <Rating
          showRating={false}
          imageSize={25}
          onFinishRating={(rating) => setRating(rating)}
          style={{ paddingVertical: 10 }}
        />
        <TextInput
          placeholder="Write your comment"
          numberOfLines={4}
          onChangeText={(value) => setUserInput(value)}
          className="border-[1px]  border-gray p-2 rounded-lg items-start "
          style={{ textAlignVertical: "top" }}
        />
        <TouchableOpacity
          className="p-2 bg-secondary rounded-md mt-3"
          disabled={!userInput}
          onPress={() => onSubmit()}
        >
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 16,
              color: "black",
              textAlign: "center",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>

      {/* Display previous Reviews       */}

      <View>
        {business?.reviews?.map((item, index) => (
          <View
            key={index}
            className="flex flex-row gap-2 items-center  border-[1px] p-[10px] border-PRIMARY rounded-2xl mt-[10px]"
          >
            <Image
              source={{ uri: item?.userImage }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 99,
              }}
            />
            <View className="flex gap-1">
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                }}
              >
                {item.userName}
              </Text>
              <Rating
                imageSize={20}
                ratingCount={item.rating}
                style={{
                  alignItems: "flex-start",
                }}
              />
              <Text>{item.comment}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Reviews;
