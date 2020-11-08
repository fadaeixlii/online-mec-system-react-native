import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableHighlight,
} from "react-native";
import Icon from "../components/shared/Icon";
import Screen from "../components/shared/Screen";

const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require("../assets/uns.jpg")}
                />
                <View style={styles.details}>
                    <Text style={styles.title}>یونس قربانی</Text>
                    <Text style={styles.subTitle}>younes.gh@chmail.ir</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {}}
                    style={{ alignSelf: "center", marginLeft: 20 }}
                >
                    <Icon name="settings" backgroundColor="tomato" />
                </TouchableOpacity>
            </View>
        </Screen>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 20,
        padding: 15,
    },
    screen: {
        backgroundColor: "#f8f4f4",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 40,
    },
    details: {
        marginLeft: 10,
        justifyContent: "center",
    },
    title: {
        fontFamily: "ih",
        fontSize: 20,
    },
    subTitle: {
        color: "#6e6969",
    },
});
