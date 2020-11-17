import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import EditProfile from "../components/profile/EditProfile";
import Profile from "../components/profile/Profile";
import Screen from "../components/shared/Screen";

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Profile/>
        <EditProfile/>
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 20,
    padding: 15,
    // backgroundColor: "lightgray",
    justifyContent:"center",
  },
  screen: {
    backgroundColor: "#f8f4f4",
  },
 
  
});
