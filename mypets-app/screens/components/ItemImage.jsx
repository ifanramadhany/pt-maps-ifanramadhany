import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Modal } from "react-native";

export default function ItemBreed({ item }) {
  return (
    <>
      <View style={styles.wrapperCardDog}>
        <Image
          style={styles.imageCard}
          resizeMode="contain"
          source={{
            uri: item,
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageCard: {
    width: "90%",
    height: "100%",
    borderRadius: 12
  },
  wrapperCardDog: {
    backgroundColor: "#fff",
    width: "100%",
    height: 280,
    marginTop: 16,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
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
