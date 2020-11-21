import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Formik } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from "./CustomButton";

const OnlineMecForm = ({ handleSubmit, iconName, placeholder, newStyle ,close}) => {
  return (
    <View>
      <Formik
        initialValues={{ field: "" }}
        onSubmit={(values) =>{ handleSubmit(values);  }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <View style={[styles.container, newStyle]}>
              <TextInput
                style={[styles.text]}
                autoCorrect={false}
                //  name={field}
                placeholder={placeholder}
                placeholderTextColor="black"
                onChangeText={handleChange("field")}
                onBlur={handleBlur("field")}
                value={values.field}
                multiline={true}
                numberOfLines={5}
              />

              {iconName && (
                <MaterialCommunityIcons
                  name={iconName}
                  size={50}
                  color="#6e6969"
                  style={styles.icon}
                />
              )}
            </View>

            <CustomButton
              onPress={()=>{
                  handleSubmit();
                  close();
              }}
              title="فرستادن درخواست"
              color="#9999ff"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

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
    borderRadius: 5,
    flexDirection: "row",
    width: 280,
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
    width: "80%",
  },
  form: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnlineMecForm;
