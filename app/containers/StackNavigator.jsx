import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen, LoginScreen, RegisterScreen } from "../screens";
import TabsNavigator from "./TabsNavigator";
import RegisterScreen2 from "./../screens/RegisterScreen2";

const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Register2" component={RegisterScreen2} />
      <Stack.Screen name="Home" component={TabsNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
