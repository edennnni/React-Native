import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";

const Obstacles = (props) => {
    const {
        obstaclesWidth,
        gap,
        obstacleLeft,
        obstacleHeight,
        color,
    } = props;
    return(
        <View style={[styles.obstacle, {
            width: props.obstaclesWidth,
            height: props.obstacleHeight,
            left: props.obstacleLeft,
            backgroundColor: props.color,
        }]}
        />
    )
        return(
        <View style={[styles.obstacle, {
            width: props.obstaclesWidth,
            height: props.obstacleHeight,
            left: props.obstacleLeft,
            backgroundColor: props.color,
        }]}
        />
    )
};
export default Obstacles;