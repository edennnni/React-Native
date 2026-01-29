import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";

const Home = () => {
  return (
    <View style={styles.container}>
      <Swiper
        backgroundColor="#fff"
        style={styles.swiper}
        showsPagination
        dotColor="#999"
        activeDotColor="#007AFF"
      >
        <View style={styles.slide}>
          <Image
            source={require("../../assets/image1.png")}
            style={styles.slideImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../../assets/image1.jpg")}
            style={styles.slideImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../../assets/image1.jpg")}
            style={styles.slideImage}
            resizeMode="cover"
          />
        </View>
      </Swiper>
      <View style={styles.IconsContainer}>
        <Icon name="cellphone" size={30} color="#000" />
        <Icon name="home" size={30} color="#000" />
        <Icon name="account" size={30} color="#000" />
      </View>
      <View>
        <Icon name="tablet" iconText="Tablet" size={30} color="#000" />
        <Icon name="laptop" iconText="Laptop" size={30} color="#000" />
        <Icon name="desktop-mac" iconText="Desktop" size={30} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  IconsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  swiper: {
    flex: 1,
    height: 300,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  slideImage: {
    width: "90%",
    height: "90%",
    borderRadius: 10,
  },
});


export default Home;