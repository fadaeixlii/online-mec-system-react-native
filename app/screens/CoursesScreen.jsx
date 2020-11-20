import React from "react";

import { StyleSheet } from "react-native";

import Screen from "./../components/shared/Screen";
import GetLatLon from "./../components/shared/GetLocation";
import { View } from "native-base";
import CustomBUtton2 from "../components/shared/CustomBUtton2";

const Map = () => {
  return (
    <Screen>
      <View style={styles.main}>
        <GetLatLon />
        <View style={styles.container}>
          <CustomBUtton2
            backgroundColor="#ff9999"
            color="black"
            title="درخواست مکانیک با آدرس"
            subtitle="(هزینه ۱۰,۰۰۰)"
            subtitle2="با وارد کردن آدرس"
            handlePress={()=>{}}
          />
           <CustomBUtton2
            backgroundColor="#ff9999"
            color="black"
            title="درخواست مکانیک با GPS"
            subtitle="(هزینه ۱۰,۰۰۰) تومان"
            subtitle2="نیاز به اینترنت"
            handlePress={()=>{}}
          />
        </View>
      </View>
    </Screen>
  );
};

export default Map;

const styles = StyleSheet.create({
  main:{
    flex:1,
    height:"100%",
    backgroundColor: "#fff",
  },
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: "100%",
    height: 200,
  },
});
