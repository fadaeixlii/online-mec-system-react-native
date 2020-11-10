import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import EditProfile from "../components/profile/EditProfile";
import Icon from "../components/shared/Icon";
import Screen from "../components/shared/Screen";
// import EditProfile from './../components/profile/EditProfile';

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={require("../assets/uns.jpg")} />
          <TouchableOpacity onPress={() => {}} style={{ 
            //   marginLeft: 20,
              marginTop:20,
              alignSelf:"center"
           }}>
            <Icon name="settings" backgroundColor="tomato" />
          </TouchableOpacity>
        </View>

        <View style={styles.details}>
          <Text style={styles.title}>رضا افشون</Text>
          <Text style={styles.subTitle}>reza@gmail.com</Text>
          <Text style={styles.subTitle}>09101111111</Text>
          <Text style={styles.subTitle}>مرسدس بنز کلاس سی</Text>
          <View style={styles.wallet}>
            <View style={styles.cash}>
              <Text style={styles.money}>100000000000</Text>
              <Icon name="currency-rial" backgroundColor="green" />
              <TouchableOpacity onPress={() => {}}>
                <Icon name="cash-refund" backgroundColor="#6b7db3" />
              </TouchableOpacity>
            </View>
           
          </View>
        </View>
      </View>
        <EditProfile/>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 20,
    padding: 15,
    backgroundColor: "lightgray",
  },
  screen: {
    backgroundColor: "#f8f4f4",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 40,
  },
  details: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontFamily: "ih",
    fontSize: 20,
  },
  subTitle: {
    color: "#6e6969",
  },
  wallet: {
    // flexDirection: "row",
    width: "100%",
    padding: 10,
    alignItems: "center",
    // justifyContent: "flex-start",
    // backgroundColor: "lightblue",
  },
  cash: {
    flexDirection: "row",
    alignItems: "center",
  },
  money: {
    color: "black",
    fontSize: 18,
    borderRightColor: "green",
    borderRightWidth: 2,
    paddingRight: 10,
    marginRight: 10,
  },
});
