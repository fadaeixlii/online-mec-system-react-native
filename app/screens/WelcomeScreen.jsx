import React from "react";
import CustomButton from "../components/shared/CustomButton";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../assets/bg1.jpg")}
            style={styles.background}
            blurRadius={3}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/logo.png")}
                    style={styles.logo}
                />
                <Text style={styles.firstText}>
                    کمک سریع , راحت و مطمین با همراه مکانیک
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    title="ورود"
                    color="#ff9999"
                    onPress={() => navigation.navigate("Login")}
                />
                <CustomButton
                    color="#6b7db3"
                    title="ثبت نام"
                    onPress={() => navigation.navigate("Register")}
                />
            </View>
        </ImageBackground>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        width: "100%",
        padding: 20,
    },
    firstText: {
        fontFamily: "ih",
        fontSize: 20,
        top: 25,
        color: "#fff",
    },
    logo: {
        width: 260,
        height: 300,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
});
