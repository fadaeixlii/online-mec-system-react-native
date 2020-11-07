import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import GetLocation from 'react-native-get-location'

const Map = () => {
 
    GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
    .then(location => {
        console.log(location);
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    });

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
