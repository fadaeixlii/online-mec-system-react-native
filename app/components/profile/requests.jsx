import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import SingleReq from './singleRequest';

const Requests = ({requests}) => {
    const renderItem = ({ item }) => (
        <SingleReq id={item.id} date={item.date} requestType={item.requestType} status={item.status}/>
      );
    return (
        <FlatList
        data={requests}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    )
}

export default Requests

