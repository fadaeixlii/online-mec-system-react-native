import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomBUtton2 = ({
  backgroundColor,
  width,
  height,
  title,
  subtitle,
  color,
  subtitle2,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor, width, height }]} onPress={handlePress}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
      {subtitle ? <Text style={[styles.suntext, { color }]}>{subtitle}</Text> : null}
      {subtitle2 ? <Text style={[styles.suntext, { color ,marginBottom:0}]}>{subtitle2}</Text> : null}
      
    </TouchableOpacity>
  );
};

export default CustomBUtton2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4b647d",
    width: 50,
    padding: 20,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 6,
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
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  suntext: {
    fontFamily: "ih",
    color: "#fff",
    fontSize: 10,
    marginBottom:3,
  },
});
