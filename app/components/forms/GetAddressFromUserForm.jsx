import React,{useState} from "react";
import { StyleSheet, Text, View,Dimensions } from "react-native";
import OnlineMecMultiSelect from "../shared/OnlineMecMultiSelect";
import OnlineMecForm from './../shared/onlineMecForm';

const GetAddressFromUserForm = ({setmodalVisible}) => {

const handleModalVisible=()=>{
    setmodalVisible(false);
}
const [citySelects, setCitySelects] = useState([]);
  const [items, setItems] = useState([
    {
      label:"درگز",
      value:"dargaz"
    },
    {
      label:"قوچان",
      value:"quchan"
    },
    {
      label:"مشهد",
      value:"mashhad"
    },
    {
      label:"نیشابور",
      value:"neyshaboor"
    },
    {
      label:"بوجنورد",
      value:"bojnord"
    },
    {
      label:"تهران",
      value:"tehran"
    },
    {
      label:"کرج",
      value:"karaj"
    },
    {
      label:"گرگان",
      value:"gorgan"
    },
  ]);
  return (
    <View style={styles.constainer}>
      <Text style={styles.text}>کجا هستی؟ ادرسشو بنویس برامون</Text>
       <OnlineMecMultiSelect
        items={items}
        placeholder="دوتا از شهر های نزدیکت رو انتخاب کن"
        min={1}
        max={2}
        // defaultValue="quchan"
        setSelect={setCitySelects}
       />
      <OnlineMecForm
        handleSubmit={() => {
            //Post address
        }}
        close={handleModalVisible}
        iconName="routes"
        placeholder="ادرس مکان"
      />
    
    </View>
  );
};

export default GetAddressFromUserForm;

const styles = StyleSheet.create({
  constainer: {
    width: "80%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    left: (Dimensions.get('window').width / 2) - 160,
    top:(Dimensions.get('window').height / 2) -200,
    backgroundColor:"#e5f2ff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderRadius:30,
  },
  text:{
      fontWeight:'bold',
      fontSize:18,
      fontFamily:"yekan",
      color:"grey",
      marginBottom:5,
  }
});
