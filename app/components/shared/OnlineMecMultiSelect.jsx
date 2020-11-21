import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const OnlineMecMultiSelect = ({items,placeholder,min,max,setSelect}) => {
   const [isOpen, setisOpen] = useState(false);
  return (
    <View style={{height:isOpen ? 200 : 40}}>
      <DropDownPicker
        items={items}
        // defaultNull
        placeholder={placeholder}
        defaultValue="quchan"
        multiple={true}
        multipleText="%d items have been selected."
        min={min}
        max={max}
        containerStyle={{ height: 40, width: 280,    borderRadius:20 }}
        style={{backgroundColor: '#cce5ff'
    }}
        onChangeItem={(Item) => setSelect(Item.value)}
        onOpen={()=>setisOpen(true)}
        onClose={()=>setisOpen(false)}
      />
    </View>
  );
};

export default OnlineMecMultiSelect;

const styles = StyleSheet.create({
   

});
