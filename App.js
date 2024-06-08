import React from "react";
import { StyleSheet, View , StatusBar } from "react-native";
import Main from "./src/components/Main/";
import Title from "./src/components/title/";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor="#000"
        barStyle="light-content"
      />
      <Title />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 80,
  },
});
