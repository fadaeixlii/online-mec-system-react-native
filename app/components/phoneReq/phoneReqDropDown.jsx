import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const PhoneReqDropDown = () => {
  const [phoneReqType, setPhoneReqType] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>انتخاب نوع درخواست</Text>
      <DropDownPicker
        items={[
          { label: "درخواست تلفنی از اپراتور", value: "opr" },
          { label: "درخواست جرثغیل", value: "crn" },
          { label: "درخواست جرثغیل1", value: "crn1" },
          { label: "درخواست جرثغیل2", value: "crn2" },
          { label: "درخواست جرثغیل3", value: "crn3" },
          { label: "درخواست جرثغیل4", value: "crn4" },
        ]}
        // defaultNull
        placeholder="نوع درخواست خود را انتخاب کنید"
        defaultValue="opr"
        multiple={true}
        multipleText="%d items have been selected."
        min={0}
        max={2}
        containerStyle={{ height: 40, width: "100%" }}
        onChangeItem={(Item) => setPhoneReqType(Item.value)}
      />
    </View>
  );
};

export default PhoneReqDropDown;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
