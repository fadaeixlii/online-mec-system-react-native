import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SingleReq = ({ id, status, requestType, date }) => {
  let reqType;
  if (requestType === "mec") reqType = "مکانیک";
  else if (requestType === "opr") reqType = "اپراتور";
  else if (requestType === "crn") reqType = "جرثغیل";
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: status ? "#deff97" : "#ffff99" },
      ]}
    >
      <View style={styles.row}>
        <Text style={styles.text}>درخواست {reqType}</Text>
        <Text style={styles.subtext}>{date}</Text>
      </View>
      <View style={styles.row}>
    <Text style={styles.text}>شماره پیگیری: {id}</Text>
        <Text style={styles.subtext}>
          {status ? "به اتمام رسیده" : "در حال انجام"}
        </Text>
      </View>
    </View>
  );
};

export default SingleReq;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#deff97",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderRadius: 20,
    flexDirection: "column",
    width: "100%",
    height: 80,
    marginVertical: 10,
    padding: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    fontFamily: "ih",
    fontWeight: "bold",
  },
  subtext: {
    fontFamily: "ih",
    fontStyle: "italic",
  },
});
