import React, { useState } from "react";
import { FontAwesome } from "react-native-vector-icons";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import { BlurView } from "expo-blur";

export default function ModalDetail({
  item,
  modalDetail,
  modalDetailClose,
  navigation
}) {
  return (
    <Modal animationType="fade" transparent={true} visible={modalDetail}>
      <BlurView tint="dark" intensity={70} style={styles.centeredViewDetail}>
        <View style={styles.modalViewDetail}>
          <View style={styles.wrapperButtonCloseModal}>
            <TouchableOpacity onPress={modalDetailClose}>
              <FontAwesome
                name="times"
                size={24}
                color="#334155"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.formDetail}>
            <View style={{ marginVertical: 5 }}>
              <Text
                style={{
                  fontSize: 21,
                  fontStyle: "italic",
                  marginLeft: 10,
                  marginBottom: 3,
                }}
              >
                Variant
              </Text>
              <View style={styles.wrapperDetailTitle}>
                <Text style={{ fontSize: 18, margin: 5, color: "#4B5563" }}>
                  {item}
                </Text>
              </View>
            </View>
            <View style={{ marginVertical: 5 }}>
              <Text
                style={{
                  fontSize: 21,
                  fontStyle: "italic",
                  marginLeft: 10,
                  marginBottom: 3,
                }}
              >
                Dog Description
              </Text>
              <View style={styles.wrapperDetailDescription}>
                <Text style={{ fontSize: 18, margin: 5, color: "#4B5563" }}>
                  The {item} is a mixed breed dog–a cross between the Chihuahua
                  and Affenpinscher dog breeds. Petite, sassy, and highly
                  energetic, these pups inherited some of the best traits from
                  both of their parents.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonsDetail}>
            <TouchableOpacity
              style={styles.buttonCloseDetailModal}
              onPress={() => navigation.navigate("BreedDetailScreen", {dogName: item})}
            >
              <Text style={{ fontSize: 21, color: "white" }}>Breed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonCloseDetailModal}
              onPress={() => navigation.navigate("ImageDetailScreen", {dogName: item})}
            >
              <Text style={{ fontSize: 21, color: "white" }}>Images</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrapperDetailDescription: {
    width: "100%",
  },
  wrapperDetailTitle: {
    width: "100%",
  },
  buttonCloseDetailModal: {
    backgroundColor: "#0ACF83",
    height: 40,
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperButtonCloseModal: {
    // backgroundColor: "yellow",
    height: "7%",
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  formDetail: {
    // backgroundColor: "blue",
    height: "83%",
  },
  buttonsDetail: {
    // backgroundColor: 'green',
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  centeredViewDetail: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  modalViewDetail: {
    height: 380,
    width: "85%",
    margin: 20,
    backgroundColor: "#f3f4f6",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
