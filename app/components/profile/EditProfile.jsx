import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "../shared/Icon";
import ToplearnFormField from "./../forms/ToplearnFormField";
import { SubmitButton } from "./../forms";
import * as Yup from "yup";
import { Formik } from "formik";


const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().required("این فیلد الزامی می باشد"),
  password: Yup.string()
    .required("این فیلد الزامی می باشد")
    .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد"),
});

const EditProfile = () => {
  // const { handleSubmit } = useFormikContext();

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Formik
          initialValues={{phoneNumber:""}}
          onSubmit={()=>{}}
          // validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <>
              <ToplearnFormField
                placeholder="تعویض شماره تلفن"
                autoCorrect={false}
                keyboardType="numeric"
                icon="phone"
                name="phoneNumber"
                placeholderTextColor="#6b7db3"
              />
              <TouchableOpacity onPress={handleSubmit}>
                <Icon name="arrow" backgroundColor="#6b7db3" />
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>

      <View style={styles.content}>
        <Formik
          initialValues={{password1:"",password2:""}}
          onSubmit={()=>{}}
          // validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <>
              <Text>تعویض کلمه عبور</Text>
              <ToplearnFormField
                placeholder="کلمه عبور"
                autoCompleteType="password"
                autoCorrect={false}
                icon="onepassword"
                name="password1"
                placeholderTextColor="royalblue"
                secureTextEntry
              />
              <ToplearnFormField
                placeholder="کلمه  عبور جدید"
                autoCompleteType="password"
                autoCorrect={false}
                icon="onepassword"
                name="password2"
                placeholderTextColor="royalblue"
                secureTextEntry
              />
              <View style={{ width: "60%" }}>
                <SubmitButton title="تعویض کلمه عبور" />
              </View>
            </>
          )}
        </Formik>
      </View>

      <View style={styles.container}>
        <Formik
          initialValues={{phoneNumber:''}}
          onSubmit={()=>{}}
          // validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <>
              <ToplearnFormField
                placeholder="تعویض مدل ماشین"
                autoCorrect={false}
                icon="car"
                name="phoneNumber"
                placeholderTextColor="#6b7db3"
              />
              <TouchableOpacity onPress={handleSubmit}>
                <Icon name="arrow" backgroundColor="#6b7db3" />
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>

      <View style={styles.container}>
        <Formik
          initialValues={{changeEmail:''}}
          onSubmit={()=>{}}
          // validationSchema={validationSchema}
        >
          {({ handleSubmit }) => (
            <>
              {" "}
              <ToplearnFormField
                placeholder="تعویض ایمیل"
                autoCorrect={false}
                icon="email"
                name="changeEmail"
                placeholderTextColor="#6b7db3"
              />
              <TouchableOpacity onPress={handleSubmit}>
                <Icon name="arrow" backgroundColor="#6b7db3" />
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </React.Fragment>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  constainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
});
