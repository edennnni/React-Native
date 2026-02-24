import { StatusBar } from "react-native-web";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Bird from "./src/Components/Bird";
import { useEffect } from "react";

  export default function App() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const birdLeft = screenWidth / 2 

  const Graviy = 0.6;

  let gameTimeId;

   const  obstacleWidth=60;
    const obstacleHeight=300;

    const gap=200;

    const [obstacleLeft, setObstacleLeft] = useState(screenWidth)
    const [obstacleMegHeight, setObstacleNegHeight] = useState(-Math.random() * 100)
    let obstacleTimeId;

    const [obstacleLeftTwo, setObstacleLeftTwo] = useState(screenWidth)
    const [obstacleMegHeightTwo, setObstacleNegHeightTwo] = useState(-Math.random() * 100)
    let obstacleTimeIdTwo;
    
    useEffect(() => {
      if (obstacleLeft > -obstacleWidth) {
        obstacleTimerId = setInterval(() => {
          setObstacleLeft(obstacleLeft => obstacleLeft - 5);
        }, 30);
        return () => {
          clearInterval(obstacleTimerId);
        };
      } else {
        setObstacleLeft(screenWidth);
        setObstacleNegHeight(-Math.random() * 100);
      }
    }, [obstacleLeft]);

    useEffect(() => {
      if (obstacleLeftTwo > -obstacleWidth) {
        obstacleTimerIdTwo = setInterval(() => {
          setObstacleLeftTwo(obstacleLeftTwo => obstacleLeftTwo - 5);
        }, 30);
        return () => {
          clearInterval(obstacleTimerIdTwo);
        };
      } else {
        setObstacleLeftTwo(screenWidth);
        setObstacleNegHeightTwo(-Math.random() * 100);
      }
    }, [obstacleLeftTwo]);

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
      <Obstacles
        COLOR="green"
        obstacleLeft={obstacleLeft}
        obstacleHeight={obstacleHeight}
        obstacleWidth={obstacleWidth}
        obstacleNegHeight={obstacleMegHeight}
      />
      <Obstacles
      COLOR="red"
        obstacleLeft={obstacleLeftTwo}
        obstacleHeight={obstacleHeight}
        obstacleWidth={obstacleWidth}
        obstacleNegHeight={obstacleMegHeightTwo}
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
