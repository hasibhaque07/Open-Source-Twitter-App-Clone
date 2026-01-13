import { useSocialAuth } from "@/hooks/useSocialAuth";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const { handleSocialAuth, loadingProvider } = useSocialAuth();

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 px-8 justify-between">
        <View className="flex-1 justify-center">
          {/* DEMO IMAGE */}
          <View className="items-center mb-10">
            <Image
              source={require("../../assets/images/twitter.png")}
              className="size-72"
              resizeMode="contain"
            />
          </View>

          <View className="flex-col gap-2">
            {/* GOOGLE SIGNIN BTN */}
            <TouchableOpacity
              className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6"
              onPress={() => handleSocialAuth("oauth_google")}
              disabled={
                loadingProvider === "google" || loadingProvider === "apple"
              }
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
              }}
            >
              {/* {loadingProvider === "google" ? (
                <ActivityIndicator size="small" color="#4285F4" />
              ) : (
                <View className="flex-row items-center justify-center">
                  <Image
                    source={require("../../assets/images/google.png")}
                    className="size-10 mr-3"
                    resizeMode="contain"
                  />
                  <Text className="text-black font-medium text-base">
                    Continue with Google
                  </Text>
                </View>
              )} */}

              <View className="flex-row items-center justify-center">
                {loadingProvider === "google" && (
                  <ActivityIndicator
                    size="small"
                    className="mr-3"
                    color="#4285F4"
                  />
                )}
                <Image
                  source={require("../../assets/images/google.png")}
                  className="size-10 mr-3"
                  resizeMode="contain"
                />
                <Text className="text-black font-medium text-base">
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>

            {/* APPLE SIGNIN ICON */}
            <TouchableOpacity
              className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6"
              onPress={() => handleSocialAuth("oauth_apple")}
              disabled={
                loadingProvider === "google" || loadingProvider === "apple"
              }
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 2,
                elevation: 2,
              }}
            >
              <View className="flex-row items-center justify-center">
                {loadingProvider === "apple" && (
                  <ActivityIndicator
                    size="small"
                    className="mr-3"
                    color="#000"
                  />
                )}
                <Image
                  source={require("../../assets/images/apple.png")}
                  className="size-8 mr-3"
                  resizeMode="contain"
                />
                <Text className="text-black font-medium text-base">
                  Continue with Apple
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Terms and Privacy */}
          <Text className="text-center text-gray-500 text-xs leading-4 mt-6 px-2">
            By signing up, you agree to our{" "}
            <Text className="text-blue-500">Terms</Text>
            {", "}
            <Text className="text-blue-500">Privacy Policy</Text>
            {", and "}
            <Text className="text-blue-500">Cookie Use</Text>.
          </Text>
        </View>
      </View>
    </View>
  );
}
