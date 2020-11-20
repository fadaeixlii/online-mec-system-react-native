import React, { useState, useEffect } from "react";
import {
  Platform,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import CustomMap from "./Map";
import Icon from "./Icon";

export default function GetLatLon() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [Rerender, setRerender] = useState(true);

  useEffect(() => {
    //   console.log("render");
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

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }
  }, []);
  const updateLocation = () => {
    setRerender(!Rerender);
    update();
  };

  let text = "Waiting..";
  let t2, lat, lon;
  const update = () => {
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
      t2 = JSON.parse(text);
      lat = t2.coords.latitude;
      lon = t2.coords.longitude;
    }
    //   console.log("lat");
  };
  update();
  return (
    <>
      {text !== "Waiting.." ? (
        <>
          <View style={{ zIndex: 1 }}>
            <CustomMap lon={lon} lat={lat} />
          </View>
          <TouchableOpacity onPress={updateLocation} style={styles.myloc}>
            <Icon name="crosshairs-gps" backgroundColor="#4b647d" />
          </TouchableOpacity>
        </>
      ) : null}
    </>
  );
}

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
  myloc: {
    position: "absolute",
    top: 290,
    left: 20,
    zIndex: 3,
  },
});
