import React from "react";
import Constans from "expo-constants";
import { ImageBackground, StyleSheet } from "react-native";

const Screen = ({ children, style }) => {
  return (
    <ImageBackground
      source={require("./../../assets/bg.jpg")}
    //   blurRadius={3}
      style={[styles.screen, style]}
      imageStyle={{opacity:0.1}}
    >   
      {children}
    </ImageBackground>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    marginTop: Constans.statusBarHeight,
    flex: 1,
    
  },
});
