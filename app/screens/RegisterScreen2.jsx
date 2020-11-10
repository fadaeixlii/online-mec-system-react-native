import React from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import Screen from "../components/shared/Screen";
import {
  ToplearnForm,
  ToplearnFormField,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  carModel: Yup.string().required("مدل ماشین الزامی ست"),
  email: Yup.string().email("ایمیل معتبر نمی باشد"),
});

const RegisterScreen2 = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <ToplearnForm
        initialValues={{
          carModel: "",
          email: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate("Welcome");
        }}
        validationSchema={validationSchema}
      >
        <ToplearnFormField
          placeholder="نام وسیله نقلیه"
          autoCorrect={false}
          icon="account-circle"
          name="carModel"
          placeholderTextColor="royalblue"
        />
        <ToplearnFormField
          placeholder="ایمیل کاربری(اختیاری)"
          autoCompleteType="email"
          autoCorrect={false}
          keyboardType="email-address"
          icon="email"
          name="email"
          placeholderTextColor="royalblue"
        />

        <View style={{ width: "60%" }}>
          <SubmitButton title="ثبت نام" />
        </View>
      </ToplearnForm>
    </Screen>
  );
};

export default RegisterScreen2;

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
