import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { authorize } from "react-native-app-auth";

const OIDC_CONFIG = {
  issuer: "https://accounts.google.com",
  clientId:
    "451923530993-rquf590ndjclm4vih3bf27rq59dfm7gj.apps.googleusercontent.com",
  redirectUrl:
    "com.googleusercontent.apps.451923530993-rquf590ndjclm4vih3bf27rq59dfm7gj:/oauth2redirect/google",
  scopes: ["openid", "profile"],
};

export default function App() {
  const [token, setToken] = useState(null);

  const loginWithOIDC = async () => {
    try {
      const result = await authorize(OIDC_CONFIG);
      setToken(result);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    setToken(null);
  }

  return (
    <View style={styles.container}>
      {token === null ? (
        <Text onPress={loginWithOIDC}>Login with OIDC</Text>
      ) : (
        <Text onPress={logout}>Logout</Text>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
