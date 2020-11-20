import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

import html_map from "./../../utils/HTMLmap";

class CustomMap extends React.Component {
    constructor({props}) {
        super(props);
        // this.map = React.createRef();
        this.state={
            latitude:null,
            longitude:null,
        }
      }

      _goToMyPosition = (lat, lon) => {
        this.refs['Map_Ref'].injectJavaScript(`
          mymap.setView([${lat}, ${lon}], 10)
          L.marker([${lat}, ${lon}]).addTo(mymap)
        `)
      }
      componentDidMount(){
          this.setState({latitude:this.props.lat,longitude:this.props.lon})
      }
 

  render() {
    const  lat=this.state.latitude ? this.state.latitude: 37.451381;
    const lon=this.state.longitude ? this.state.longitude:59.097879;
    return (
      <View style={styles.map}>
        <WebView source={{ html: html_map }} ref={'Map_Ref'} 
        injectedJavaScript={`
        mymap.setView([${lat}, ${lon}], 16)
        L.marker([${lat}, ${lon}]).addTo(mymap)
      
        `}
        />
      </View>
    );
  }
}


export default CustomMap;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 350,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
