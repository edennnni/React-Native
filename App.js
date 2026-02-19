import { StatusBar } from "react-native-web";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Bird from "./src/Components/Bird";

  export default function App() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const birdLeft = screenWidth / 2 

  const Graviy = 0.6;

  let gameTimeId;

  useEffect(() => {
    if (birdBottom > 0) {
      gameTimeId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - Graviy);
      }, 30);
    }
    return () => {
      clearInterval(gameTimeId);
    };
  }, [birdBottom]);

  return (
    <View style={styles.container}>
      <Bird
        birdBottom={birdBottom}
        birdLeft={birdLeft}
      />
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

}
