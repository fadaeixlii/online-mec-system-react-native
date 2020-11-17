import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import Icon from "./../shared/Icon";
import { Image } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={require("../../assets/uns.jpg")} />
        <TouchableOpacity
          onPress={() => {}}
          style={{
            //   marginLeft: 20,
            marginTop: 20,
            alignSelf: "center",
          }}
        >
          <Icon name="settings" backgroundColor="tomato" />
        </TouchableOpacity>
      </View>

      <View style={styles.details}>
        <Text style={styles.title}>مصطفی صدر زاده</Text>
        <Text style={styles.subTitle}>mostafa@gmail.com</Text>
        <Text style={styles.subTitle}>09101111111</Text>
        <Text style={styles.subTitle}>مرسدس بنز کلاس سی</Text>
        <View style={styles.wallet}>
          <View style={styles.cash}>
            <Text style={styles.money}>100000000000</Text>
            <Icon name="currency-rial" backgroundColor="green" />
            <TouchableOpacity style={{marginLeft:5}} onPress={() => {}}>
              <Icon name="cash-refund" backgroundColor="#6b7db3" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#e5f2ff",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    padding:10,
    borderRadius:15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 40,
  },
  details: {
    width: "70%",
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
