import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

const Bird = (props) => {
  return (
    <View style={[styles.bird, props.style]} />
  );
};

const styles = StyleSheet.create({
  bird: {
    width: 30,
    height: 30,
    backgroundColor: "yellow",
    borderRadius: 15,
  },
});

export default Bird;