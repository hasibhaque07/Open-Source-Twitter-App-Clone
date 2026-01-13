import { useSSO } from "@clerk/clerk-expo";
import { useState } from "react";
import { Alert } from "react-native";

export const useSocialAuth = () => {
  const [loadingProvider, setLoadingProvider] = useState<
    null | "google" | "apple"
  >(null);
  const { startSSOFlow } = useSSO();

  const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple") => {
    const provider = strategy === "oauth_google" ? "google" : "apple";
    setLoadingProvider(provider);

    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.log("Error in social auth", err);
      Alert.alert(
        "Error",
        `Failed to sign in with ${provider}. Please try again.`
      );
    } finally {
      setLoadingProvider(null);
    }
  };

  return { loadingProvider, handleSocialAuth };
};

// import { useSSO } from "@clerk/clerk-expo";
// import { useState } from "react";
// import { Alert } from "react-native";

// export const useSocialAuth = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const { startSSOFlow } = useSSO();

//   const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple") => {
//     setIsLoading(true);
//     try {
//       const { createdSessionId, setActive } = await startSSOFlow({ strategy });
//       if (createdSessionId && setActive) {
//         await setActive({ session: createdSessionId });
//       }
//     } catch (err) {
//       console.log("Error in social auth", err);
//       const provider = strategy === "oauth_google" ? "Google" : "Apple";
//       Alert.alert(
//         "Error",
//         `Failed to sign in with ${provider}. Please try again.`
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { isLoading, handleSocialAuth };
// };
