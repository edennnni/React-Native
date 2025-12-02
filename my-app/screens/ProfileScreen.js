import React from "react";
import { ScrollView, SafeAreaView, StyleSheet } from "react-native";
import StudentInfo from "../components/StudentInfo";
import Projects from "../components/Projects";

export default function ProfileScreen() {
  const user = {
    fullName: "Jane Doe",
    position: "Frontend Developer",
    description: "Passionate about React Native and mobile UX. Loves clean code and good coffee.",
    profileImage: "https://i.pravatar.cc/150?img=47", // or require("../assets/my-photo.jpg")
  };

  const projects = [
    { title: "Student App", description: "A small React Native app to manage student data." },
    { title: "Portfolio", description: "Personal portfolio built with React." },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <StudentInfo
          fullName={user.fullName}
          position={user.position}
          description={user.description}
          profileImage={user.profileImage}
        />
        <Projects projects={projects} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: { paddingTop: 12 },
});