import React, { useState } from "react";

import { StyleSheet } from "react-native";

import Screen from "./../components/shared/Screen";
import GetLatLon from "./../components/shared/GetLocation";
import { View } from "native-base";
import CustomBUtton2 from "../components/shared/CustomBUtton2";
import CustomModal from "../components/shared/modal";
import GetAddressFromUserForm from "./../components/forms/GetAddressFromUserForm";
import Carousel from 'react-native-snap-carousel'; 
import { scrollInterpolator, animatedStyles } from './../utils/animtions';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);



const Map = () => {
  const [index, setIndex] = useState(0);
  const [modalVisible, setmodalVisible] = useState(false);
  const [sliderInfo, setsliderInfo] = useState([
    {
      address:{
        title:"درخواست مکانیک با آدرس",
        subtitle:"(هزینه ۱۰,۰۰۰)",
        subtitle2:"با وارد کردن آدرس",
        handlePress:() => {
          setmodalVisible(true);
        },
      },
      gps:{
        title:"درخواست مکانیک با GPS",
        subtitle:"(هزینه ۱۰,۰۰۰) تومان",
        subtitle2:"نیاز به اینترنت",
        handlePress:() => {}
      }
    },
    {
      address:{
        title:"درخواست جرثغیل با آدرس",
        subtitle:"(هزینه ۱۵,۰۰۰)",
        subtitle2:"با وارد کردن آدرس",
        handlePress:() => {
          setmodalVisible(true);
        },
      },
      gps:{
        title:"درخواست مکانیک با GPS",
        subtitle:"(هزینه ۱۵,۰۰۰) تومان",
        subtitle2:"نیاز به اینترنت",
        handlePress:() => {}
      }
    }


  ])


  const itemInSlider=({address,gps})=>(
    <View style={styles.btncontainer}>
           
            <CustomBUtton2
              backgroundColor="#ff9999"
              color="black"
              title={address.title}
              subtitle={address.subtitle}
              subtitle2={address.subtitle2}
              handlePress={address.handlePress}
            />
            <CustomBUtton2
              backgroundColor="#ff9999"
              color="black"
              title={gps.title}
              subtitle={gps.subtitle}
              subtitle2={gps.subtitle2}
              handlePress={gps.handlePress}
            />
          </View>
  )
  return (
    <Screen>
      <View style={styles.main}>
        <GetLatLon />
        <View style={styles.container}>
         

        <Carousel
          // ref={(c) => this.carousel = c}
          data={sliderInfo}
          renderItem={itemInSlider}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => setIndex(index)}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true} 
          loop={true}         
        />

          <CustomModal modalVisible={modalVisible}>
            <GetAddressFromUserForm setmodalVisible={setmodalVisible} />
          </CustomModal>
        </View>
      </View>
    </Screen>
  );
};

export default Map;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: "100%",
    // backgroundColor: "#fff",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: "100%",
    height: 200,
  },
  btncontainer:{
    flexDirection:'row',
    marginTop:10,
    justifyContent:"space-around"
  },
  carouselContainer: {
    marginTop: 50
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue'
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
