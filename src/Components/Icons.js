import react from 'react';
import { View, Text, Stylesheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Icons = (props) => {
    return (
        <div>
            <MaterialCommunityIcons name={props.name} size={props.size} color={props.color} />
        </div>
    );
};

const styles = StyleSheet.create({
    IconsWrapper: {
        backgroundColor: "#ad4646ff",
        width: 100%,
        height: 100%,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    IconsContainer: {
        alignItems: 'center',
        width: 60,
        height: 60,
    },
    IconsText: {
        color: "#fff",
        fontSize: 12,
        marginTop: 4,
    }
});


export default Icons;