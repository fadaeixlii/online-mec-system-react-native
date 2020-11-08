import React, { useState, useEffect } from "react";
import { Platform, Dimensions, Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import { MapView } from "react-native-maps";

const SelectMap = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      setErrorMsg(
        "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      );
    } else {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
        }

        let locatio = await Location.getCurrentPositionAsync({});
        setLocation(locatio);
        console.log(location);
      })();
    }
  });

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {/* <Text style={styles.paragraph}>{text}</Text> */}
    </View>
  );
};

export default SelectMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
