import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ToplearnTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.text} {...otherProps} />
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color="#6e6969"
                    style={styles.icon}
                />
            )}
        </View>
    );
};

export default ToplearnTextInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#cce5ff",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        borderRadius: 20,
        flexDirection: "row",
        width: "90%",
        marginVertical: 10,
        padding: 15,
    },
    icon: {
        marginLeft: 10,
        alignSelf: "center",
    },
    text: {
        fontSize: 18,
        fontFamily: "yekan",
        color: "#0c0c0c",
        textAlign: "center",
        width: "90%",
    },
});
