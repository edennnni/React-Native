import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

const Item = ({ item }) => {
    return (
            <View style={styles.cardContainer}>
                <Image
                    source={{ uri: item.imageUrl }}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.category}>{item.category}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        marginBottom: 8,
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 8,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 4,
    },
    category: {
        fontSize: 14,
        color: "#666",
    },
    description: {
        fontSize: 12,
        color: "#999",
    },
    price: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
        marginTop: 8,
    },
});

export default Item;