import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomBUtton2 = ({
  backgroundColor,
  width,
  height,
  title,
  subtitle,
  color,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor, width, height }]}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
      <Text style={[styles.suntext, { color }]}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

export default CustomBUtton2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4b647d",
    width: 50,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,

    borderRadius: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "ih",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  suntext: {
    fontFamily: "ih",
    color: "#fff",
    fontSize: 10,
  },
});
