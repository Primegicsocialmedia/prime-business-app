import { View, Text,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
;

const LogInScreen = () => {

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/(tabs)/home", {
            scheme: "myapp",
          }),
        });

      if (createdSessionId) {
        //setActive!({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);




  return (
<SafeAreaView className=" bg-primary  h-full  ">
<ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View>
       <View className="flex items-center mt-[100]">
        <Image
          source={require("./../../assets/images/Prime_Business_App_Homepage_Image.jpeg")}
          className="w-[220px] h-[450px] "
          style={{ borderWidth: 6, borderRadius: 20, borderColor: "#000" }}
        />
      </View>
      <View className="bg-primary p-5 -mt-5">
        <Text
          className="text-[30px] text-center font-pbold text-white"
          
        >
          Your Ultimate{" "}
          <Text className="text-secondary ">Community Business Directory </Text>App
        </Text>
        <Text
          className="text-base text-center my-4 text-white"
          
        >
          Find your favourite business near you and post your own business to
          your community
        </Text>
      </View>
      <TouchableOpacity
        className="bg-secondary p-4 rounded-full "
        onPress={onPress}
      >
        <Text
          className="text-center text-xl text-white font-pregular "
         
        >
          Lets get started{" "}
        </Text>
      </TouchableOpacity>
    </View>
   </ScrollView>
   <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

export default LogInScreen

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();
