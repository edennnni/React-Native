import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Projects({ projects = [] }) {
  if (!projects.length) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>No projects to show.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Projects</Text>
      {projects.map((p, idx) => (
        <View key={idx} style={styles.project}>
          <Text style={styles.projectTitle}>{p.title}</Text>
          {p.description ? <Text style={styles.projectDesc}>{p.description}</Text> : null}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: "700",
    marginVertical: 8,
  },
  project: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fafafa",
    borderRadius: 6,
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  projectDesc: {
    fontSize: 13,
    color: "#444",
    marginTop: 4,
  },
  empty: {
    padding: 16,
  },
  emptyText: {
    color: "#888",
  },
});