import React from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import Screen from "./../components/shared/Screen";
import {
    ToplearnForm,
    ToplearnFormField,
    SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .required("این فیلد الزامی می باشد"),
    password: Yup.string()
        .required("این فیلد الزامی می باشد")
        .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد"),
});

const LoginScreen = ({ navigation }) => {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <ToplearnForm
                initialValues={{ phoneNumber: "", password: "" }}
                onSubmit={() => navigation.navigate("Home")}
                // validationSchema={validationSchema}
            >
                <ToplearnFormField
                    placeholder="شماره تلفن"
                    autoCorrect={false}
                    keyboardType="numeric"
                    icon="phone"
                    name="phoneNumber"
                    placeholderTextColor="royalblue"
                />
                <ToplearnFormField
                    placeholder="کلمه عبور"
                    autoCompleteType="password"
                    autoCorrect={false}
                    icon="onepassword"
                    name="password"
                    placeholderTextColor="royalblue"
                    secureTextEntry
                />
                <View style={{ width: "60%" }}>
                    <SubmitButton title="ورود کاربر" />
                </View>
            </ToplearnForm>
        </Screen>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    logo: {
        width: 270,
        height: 200,
        marginTop: 20,
        marginBottom: 40,
    },
});
