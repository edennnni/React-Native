import { StatusBar } from "react-native-web";
import { Dimensions, StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import Bird from "./src/Components/Bird";
import Obstacles from "./src/Components/Obstacles";
import { useEffect, useState } from "react";

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
      
    const [birdBottom, setBirdBottom] = useState(screenHeight / 2)
      const [isGameOver, setIsGameOver] = useState(false)
      const [score, SetScore] = useState(0)

    const gameOver=() => {
      setIsGameOver(true)
      clearInterval(gameTimeId)
      clearInterval(obstacleTimeId)
      clearInterval(obstacleTimeIdTwo)
    }


    const Jump = () => {
      if (!isGameOver && (birdBottom < screenHeight)) {
        setBirdBottom(birdBottom => birdBottom + 50);
      }
    }


    useEffect(() => {
      if (obstacleLeft > -obstacleWidth) {
        obstacleTimeId = setInterval(() => {
          setObstacleLeft(obstacleLeft => obstacleLeft - 5);
        }, 30);
        return () => {
          clearInterval(obstacleTimeId);
        };
      } else {
        setObstacleLeft(screenWidth);
        setObstacleNegHeight(-Math.random() * 100);
      }
    }, [obstacleLeft]);

     
    useEffect(() => {
      if (obstacleLeftTwo > -obstacleWidth) {
        obstacleTimeIdTwo = setInterval(() => {
          setObstacleLeftTwo(obstacleLeftTwo => obstacleLeftTwo - 5);
        }, 30);
        return () => {
          clearInterval(obstacleTimeIdTwo);
        };
      } else {
        SetScore(score => score + 1)
        setObstacleLeftTwo(screenWidth);
        setObstacleNegHeightTwo(-Math.random() * 100);
      }
    }, [obstacleLeftTwo]);

    useEffect(() => {
      if (
        (birdBottom < obstacleHeight + obstacleMegHeight || birdBottom > obstacleHeight + obstacleMegHeight + gap) &&
        obstacleLeft < birdLeft + 30 &&
        obstacleLeft + obstacleWidth > birdLeft
      ) {
        gameOver();
      }
    }, [birdBottom, obstacleLeft, obstacleMegHeight]);

    useEffect(() => {
      if (
        (birdBottom < obstacleHeight + obstacleMegHeightTwo ||
         birdBottom > obstacleHeight + obstacleMegHeightTwo + gap) &&
        obstacleLeftTwo < birdLeft + 30 &&
        obstacleLeftTwo + obstacleWidth > birdLeft
      ) {
        gameOver();
      }
    }, [birdBottom,
       obstacleLeftTwo,
       obstacleMegHeightTwo,
       obstacleMegHeight,
       obstacleLeft,
       isGameOver]);

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
    <TouchableWithoutFeedback onPress={Jump}>
    <View style={styles.container}>
      <Text style={styles.score}>{score}</Text> 
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  score:{
    position:"absolute",
    top:50,
    fontSize:24,
    fontWeight:"bold",
    zIndex:10
  }
});
