import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import EditProfile from "../components/profile/EditProfile";
import Profile from "../components/profile/Profile";
import SingleReq from "../components/profile/singleRequest";
import Screen from "../components/shared/Screen";
import Requests from "../components/profile/requests";
import AddCash from "../components/forms/addCash";

const AccountScreen = () => {
  const [enableEdit, setEnableEdit] = useState(false);
  const [enableAddCash, setenableAddCash] = useState(false);
  const [requests, setRequests] = useState([
    {
      date: "10/8/99",
      id: "12230",
      requestType: "mec",
      status: 1,
    },
    {
      date: "11/8/99",
      id: "15230",
      requestType: "opr",
      status: 1,
    },
    {
      date: "28/8/99",
      id: "12360",
      requestType: "crn",
      status: 0,
    },
    {
      date: "10/8/99",
      id: "14232",
      requestType: "mec",
      status: 1,
    },
    {
      date: "27/8/99",
      id: "15530",
      requestType: "mec",
      status: 0,
    },
    {
      date: "10/8/99",
      id: "14552",
      requestType: "opr",
      status: 1,
    },
    {
      date: "28/8/99",
      id: "22360",
      requestType: "crn",
      status: 0,
    },
    {
      date: "10/8/99",
      id: "24232",
      requestType: "mec",
      status: 1,
    },
    {
      date: "27/8/99",
      id: "25530",
      requestType: "mec",
      status: 0,
    },
    {
      date: "10/8/99",
      id: "24552",
      requestType: "opr",
      status: 1,
    },
  ]);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Profile
          setEnableEdit={setEnableEdit}
          enableEdit={enableEdit}
          enableAddCash={enableAddCash}
          setenableAddCash={setenableAddCash}
        />
        {enableEdit ? <EditProfile /> : null}
        {enableAddCash ? <AddCash /> : null}
        <Requests requests={requests} />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginVertical: 20,
    padding: 15,
    justifyContent: "center",
    flex: 1,
  },
  screen: {
    backgroundColor: "#f8f4f4",
  },
});
