import React from "react";
import { StyleSheet, View } from "react-native";
import Main from "./src/components/Main/";
import Title from "./src/components/title/";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 80,
  },
});
