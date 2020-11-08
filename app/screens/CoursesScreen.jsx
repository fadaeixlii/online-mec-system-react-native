import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
import GetLocation from "react-native-get-location";
import Constants from "expo-constants";
// import {Location,Permissions} from 'expo';
// import {Permissions} from "expo-permissions";
// import {Location} from 'expo-location';
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { useState, useEffect } from "react";

const Map = () => {
  const [location, setLocation] = useState({
  coords:
    {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  
  });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      console.log("error");
      setErrorMsg(
        "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      );
    } else {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          console.log("errorr2");
        }

        let locatio = await Location.getCurrentPositionAsync({});
        setLocation(locatio);
        console.log(location);
      })();
    }
  },[]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const onRegionChange=(region)=> {
    this.setState({ region });
  }
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={onRegionChange}
        mapStyle={styles.mapStyle}
      />
      {/* <Text style={styles.paragraph}>{text}</Text> */}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
