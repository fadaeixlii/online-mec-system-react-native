import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OnlineMecFormEdit from './onlineMecFormEdit'

const AddCash = () => {
    return (
        <View style={styles.content}>
        <Text>مبلغ مورد نظر برای اضافه کردن به کیف پول</Text>
        <OnlineMecFormEdit
          handleSubmit={() => {
            //handle change password
          }}
          newStyle={{backgroundColor:"#2fff72"}}
          iconName="onepassword"
          placeholder="مبلغ به ریال"
        />
        </View>
    )
}

export default AddCash

const styles = StyleSheet.create({
    content: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#eeffcb",
        width: "100%",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    
        elevation: 4,
        borderRadius:15,
        marginTop:20,
        padding:20
      },
})
