import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AccountScreen, PhoneReq } from "../screens";
import Map from "../screens/CoursesScreen";
import SelectMap from "./../screens/SelectMap";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "mecCraneReq") {
            iconName = focused ? "wrench" : "wrench-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "account-circle" : "account-circle-outline";
          } else if (route.name === "phoneReq") {
            iconName = "phone-classic";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        activeBackgroundColor: "lightcyan",
        labelStyle: {
          fontFamily: "ih",
          fontSize: 13,
        },
      }}
    >
      <Tab.Screen
        name="phoneReq"
        component={PhoneReq}
        options={{
          tabBarLabel: "درخواست های تلفنی",
        }}
      />
      <Tab.Screen
        name="mecCraneReq"
        component={Map}
        options={{
          tabBarLabel: "درخواست مکانیک و جرثغیل",
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "اکانت من",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
