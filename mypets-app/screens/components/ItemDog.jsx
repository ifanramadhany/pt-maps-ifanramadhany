import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import { ModalDetail } from ".";

export default function ItemDog({ item, id, navigation }) {
  const [modalDetail, setModalDetail] = useState(false);
  const modalDetailClose = () => setModalDetail(false);

  return (
    <>
      <TouchableOpacity
        style={styles.wrapperCardDog}
        onPress={() => setModalDetail(true)}
      >
        <View style={styles.dot}>
          <View style={styles.wrapperId}>
            <Text style={{ color: "white" }}>{id}</Text>
          </View>
        </View>
        <View style={styles.dogName}>
          <Text numberOfLines={1} style={{ fontSize: 20 }}>
            {item}
          </Text>
        </View>
      </TouchableOpacity>

      {/* modal detail */}
      <ModalDetail
        item={item}
        modalDetail={modalDetail}
        modalDetailClose={modalDetailClose}
        navigation={navigation}
      />
    </>
  );
}

const styles = StyleSheet.create({
  wrapperId: {
    height: 30,
    width: 30,
    backgroundColor: "#0ACF83",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    // backgroundColor: 'green',
    width: "11%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    marginLeft: 3,
  },
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
    width: "100%",
    height: 50,
    marginTop: 16,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
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
