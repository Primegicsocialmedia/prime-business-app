import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link, Redirect } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

export default function Index() {
  const { user } = useUser();

  return (
    <View>
      {!user ? (
        <Redirect href={"/login/LoginScreen"} />
      ) : (
        <Redirect href={"/(tabs)/home"} />
      )}
    </View>
  );
}
