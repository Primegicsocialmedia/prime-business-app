import { View, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import Intro from "../../components/BusinessDetail/Intro";
import ActionButton from "../../components/BusinessDetail/ActionButton";
import AboutBusiness from "../../components/BusinessDetail/AboutBusiness";
import Reviews from "../../components/BusinessDetail/Reviews";

const BusinessDetail = () => {
  const { businessid } = useLocalSearchParams();
  const [business, setBusiness] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetBusinessDeatailById();
  }, []);

  /**
   * Used to get BusinessDtail by Id
   */

  const GetBusinessDeatailById = async () => {
    setLoading(true);
    const docRef = doc(db, "BusinessList", businessid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setBusiness({ id: docSnap.id, ...docSnap.data() });
      setLoading(false);
    } else {
      //docSnap.data() will be undefined in this case
      console.log("No such document");
      setLoading(false);
    }
  };
  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={"purple"}
          style={{ marginTop: "70%" }}
        />
      ) : (
        <View>
          <Intro business={business} />

          <ActionButton business={business} />
          <AboutBusiness business={business} />
          <Reviews business={business} />
        </View>
      )}
    </ScrollView>
  );
};

export default BusinessDetail;
