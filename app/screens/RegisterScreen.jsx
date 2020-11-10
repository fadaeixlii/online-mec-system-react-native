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
  fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
  phoneNumber: Yup.string()
    .required("این فیلد الزامی می باشد"),
    
  password: Yup.string()
    .required("این فیلد الزامی می باشد")
    .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد"),
  passwordConfirmation: Yup.string()
    .required("تکرار کلمه عبور الزامی می باشد")
    .oneOf([Yup.ref("password"), null], "کلمه های عبور باید یکسان باشند"),
});

const RegisterScreen = ({ navigation }) => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <ToplearnForm
        initialValues={{
          fullname: "",
          phoneNumber: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate("Register2");
        }}
        validationSchema={validationSchema}
      >
        <ToplearnFormField
          placeholder="نام کاربری"
          autoCorrect={false}
          icon="account-circle"
          name="fullname"
          placeholderTextColor="royalblue"
        />
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
          autoCorrect={false}
          icon="onepassword"
          name="password"
          placeholderTextColor="royalblue"
          secureTextEntry
        />
        <ToplearnFormField
          placeholder="تکرار کلمه عبور"
          autoCorrect={false}
          icon="onepassword"
          name="passwordConfirmation"
          placeholderTextColor="royalblue"
          secureTextEntry
        />
        <View style={{ width: "60%" }}>
          <SubmitButton title="ثبت نام" />
        </View>
      </ToplearnForm>
    </Screen>
  );
};

export default RegisterScreen;

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
