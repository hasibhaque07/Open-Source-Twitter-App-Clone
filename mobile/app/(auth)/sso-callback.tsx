// mobile/app/(auth)/sso-callback.tsx
import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

export default function SSOCallback() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(tabs)"} />;
  }
}
