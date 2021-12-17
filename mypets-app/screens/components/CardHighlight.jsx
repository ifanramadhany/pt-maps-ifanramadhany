import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


export default function CardHighlight() {
  return (
    <>
      <View style={styles.ItemContentHighLight}>
        <View style={styles.ItemContentHighLightLeft}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              marginLeft: 18,
              marginBottom: 10,
            }}
          >
            Jakarta Pet Expo 2022
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#0ACF83", marginLeft: 18, marginRight: 10 }}>
              Buy Ticket Now
            </Text>
            <Icon
              name="arrow-forward-outline"
              size={24}
              color="#0ACF83"
              style={{ marginRight: 10 }}
            />
          </View>
        </View>
        <View style={styles.ItemContentHighLightRight}>
          <Image
            style={styles.imgHighLight}
            resizeMode="contain"
            source={require("../../assets/pet-expo.png")}
          ></Image>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ItemContentHighLightLeft: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
    width: '50%'
  },
  ItemContentHighLightRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
    width: '50%'
  },
  ItemContentHighLight: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 15,
    width: 350,
    backgroundColor: 'white',
    height: 175,
    marginRight: 13,
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 3,
  },
  imgHighLight: {
    height: 140,
    width: 140,
    // backgroundColor: 'white'
  },
})
