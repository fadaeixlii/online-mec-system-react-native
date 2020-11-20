import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Formik } from "formik";
import Icon from "../shared/Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const OnlineMecFormEdit = ({ handleSubmit, iconName,placeholder,newStyle }) => {
  return (
    <View>
      <Formik
        initialValues={{ field: "" }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <View style={[styles.container,newStyle]}>
              <TextInput
                style={[styles.text]}
                autoCorrect={false}
                //  name={field}
                placeholder={placeholder}
                placeholderTextColor="royalblue"
                onChangeText={handleChange("field")}
                onBlur={handleBlur("field")}
                value={values.field}
              />

              {iconName && (
                <MaterialCommunityIcons
                  name={iconName}
                  size={20}
                  color="#6e6969"
                  style={styles.icon}
                />
              )}
            </View>
            <Icon
              name="arrow-left-bold-outline"
              backgroundColor={newStyle? newStyle.backgroundColor:"#6b8fb3"}
              onPress={handleSubmit}
              title="Submit"
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
    borderRadius: 20,
    flexDirection: "row",
    width: "90%",
    marginVertical: 10,
    padding: 15,
    marginRight:10,
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
  form:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
  }
});

export default OnlineMecFormEdit;
