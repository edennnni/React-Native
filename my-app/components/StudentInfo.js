import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function StudentInfo({ fullName, position, description, profileImage }) {
  const imageSource =
    profileImage && typeof profileImage === "string"
      ? { uri: profileImage }
      : profileImage || require("../assets/avatar-placeholder.png"); // add a local placeholder at this path if you want

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{fullName}</Text>
        <Text style={styles.position}>{position}</Text>
        {description ? <Text style={styles.description}>{description}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginRight: 12,
    backgroundColor: "#eee",
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  position: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#333",
  },
});