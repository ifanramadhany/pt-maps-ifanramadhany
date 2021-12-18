import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";

export default function ItemBreed({item}) {

  return (
    <>
      <View
        style={styles.wrapperCardDog}
      >
        <View style={styles.dogName}>
          <Text numberOfLines={1} style={{ fontSize: 20 }}>
          {item}
          </Text>
        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  dogName: {
    // backgroundColor: 'blue',
    width: "75%",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  wrapperCardDog: {
    backgroundColor: "#fff",
    width: "45%",
    height: 50,
    marginTop: 16,
    marginHorizontal: 9.5,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
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
