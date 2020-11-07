import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import GetLocation from 'react-native-get-location';

// import {Location,Permissions} from 'expo';
import {Permissions} from "expo-permissions";
import {Location} from 'expo-location';
import { useState,useEffect } from 'react';

const Map = () => {

    const [errorPer, setErrorPer] = useState("");    
    const [userLocation, setuserLocation] = useState();
    useEffect(() => {
        _getLocation();
      });
    
    const _getLocation = async()=>{
        const {status } = await Permissions.askAsync(Permissions.LOCATION);

        if(status !== "granted"){
            console.log("not grated");
            setErrorPer("permission not be ok");
        }
       
        const userLocation= Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        
        setuserLocation(userLocation);
    }



    // GetLocation.getCurrentPosition({
    //     enableHighAccuracy: true,
    //     timeout: 15000,
    // })
    // .then(location => {
    //     console.log(location);
    // })
    // .catch(error => {
    //     const { code, message } = error;
    //     console.warn(code, message);
    // });

    const state={
        loading: true,
        region: {
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
      }};
    // const region=getInitialState();
    return (   
    <View style={styles.container}>
        <MapView style={styles.mapStyle}
              initialRegion={state.region}
              showsUserLocation={true}
            // onRegionChange={onRegionChange}
        >
              <MapView.Marker
                coordinate={{ "latitude": state.region.latitude,   
                "longitude": state.region.longitude }}
                title={"Your Location"}
                draggable
             />

        </MapView>
      </View> );
}
 
export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
