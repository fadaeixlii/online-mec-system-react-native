import React from "react";
import { StyleSheet, View } from "react-native";

import OnlineMecFormEdit from "../forms/onlineMecFormEdit";

const EditProfile = () => {
  return (
    <View style={styles.content}>
      <OnlineMecFormEdit
        handleSubmit={() => {
          //handle change password
        }}
        iconName="onepassword"
        placeholder="کلمه عبور جدید"
      />

      <OnlineMecFormEdit
        handleSubmit={() => {
          //handle change email
        }}
        placeholder="ایمیل جدید"
        iconName="email"
      />

      <OnlineMecFormEdit
        handleSubmit={() => {
          //handle change car
        }}
        iconName="car"
        placeholder="مدل ماشین جدید"
      />

<OnlineMecFormEdit
        handleSubmit={()=>{
          //handle change phone
        }}
        iconName="phone"
        placeholder="شماره تلفن جدیدس"
      />
    </View>
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
    backgroundColor:"#e5f2ff",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderRadius:15,
    marginTop:20,
    padding:20
  },
});
