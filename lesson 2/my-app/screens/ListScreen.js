import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const students = [
  { name: "Eden", surname: "Rocha", age: "17" },
  { name: "Kaylen", surname: "Tyler", age: "15" },
  { name: "Ellie", surname: "Mcclure", age: "17" },
  { name: "Journey", surname: "Blackburn", age: "16" },
];

const ListScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>List of Students</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Text style={styles.textStyle}>
            {item.name} {item.surname} — Age {item.age}
          </Text>



        )}
      />
      <TouchableOpacity>
        <text style={styles.btnText}>Click Here</text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    marginVertical: 5,
  },
  btnText:{
    color:"White",
    textAlign:"center",
    fontSize:25,
    fontWeight:"bold",
  },
  touchableBtn:{
    backgroundColor:"purple",
    marginVertical:15,
    paddingVertical:20,
    borderRadius:6,
    marginHorizontal:20,
  }
});

export default ListScreen;
