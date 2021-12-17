import React from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";

export default function CardPopular() {
  return (
    <>
      <View style={styles.ItemContentPopular}>
        <View style={styles.imgPopular}>
          <Image
            style={styles.imgPopularInside}
            resizeMode="contain"
            source={require("../../assets/dog-food.png")}
          ></Image>
        </View>
        <View style={styles.titlePopular}>
          <Text style={{ fontSize: 15, marginLeft: 8 }}>Drools Puppy Nutrition</Text>
        </View>
        <View style={styles.pricePopular}>
          <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 8 }}>
            USD 350
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imgPopular: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    // backgroundColor: 'green'
  },
  titlePopular: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: '15%',
    // backgroundColor: 'yellow'
  },
  pricePopular: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '15%',
    // backgroundColor: 'orange'
  },
  ItemContentPopular: {
    display: 'flex',
    borderRadius: 15,
    width: 166,
    backgroundColor: 'white',
    height: 210,
    marginRight: 13,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 3,
  },
  imgPopularInside: {
    height: 130,
    width: 130,
    // backgroundColor: 'white'
  },
})