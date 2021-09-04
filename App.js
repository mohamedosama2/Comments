import React from "react";
import { StyleSheet, View } from "react-native";
import Comments from "./Comments";

export default function App() {
  return (
    <View style={styles.container}>
      <Comments />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
