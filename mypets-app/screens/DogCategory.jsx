import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import { Input, SocialIcon, SearchBar } from "react-native-elements";

export default function DogCategory({ navigation }) {

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={styles.backButton}>
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Ionicons name="chevron-back-outline" size={30} color="#111827" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.mainPopular}>
        <Text style={{ fontSize: 22, marginLeft: 20, marginTop: 10 }}>
          Pets
        </Text>
        <Text
          style={{
            fontSize: 30,
            marginLeft: 20,
            marginTop: 10,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Dog Category
        </Text>
        <View>
          <View
            activeOpacity={0.7}
            style={styles.inputSearch}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Input
              disabled={true}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              inputStyle={{ fontSize: 15 }}
              placeholder="Search Dog"
              placeholderTextColor="#9CA3AF"
              leftIcon={
                <FontAwesome
                  name="search"
                  size={24}
                  color="#9CA3AF"
                  style={{ marginRight: 10 }}
                />
              }
              rightIcon={
                <FontAwesome
                  name="times"
                  size={24}
                  color="#9CA3AF"
                  style={{ marginRight: 10 }}
                />
              }
            />
          </View>
        </View>
        <ScrollView
          style={styles.allCard}
          contentContainerStyle={{ display: "flex", alignItems: "center" }}
        >
          <TouchableOpacity style={styles.wrapperCardDog}></TouchableOpacity>
          <TouchableOpacity style={styles.wrapperCardDog}></TouchableOpacity>
          <TouchableOpacity style={styles.wrapperCardDog}></TouchableOpacity>
          <TouchableOpacity style={styles.wrapperCardDog}></TouchableOpacity>
          <TouchableOpacity style={styles.wrapperCardDog}></TouchableOpacity>
          <TouchableOpacity style={styles.wrapperCardDog}></TouchableOpacity>
          <TouchableOpacity style={styles.wrapperCardDog}></TouchableOpacity>
          <TouchableOpacity style={styles.wrapperCardDog}></TouchableOpacity>
          <TouchableOpacity style={styles.wrapperCardDog}></TouchableOpacity>
          <View style={styles.endedWrapperCardDog}></View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapperCardDog: {
    backgroundColor: "#fff",
    width: "85%",
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
  endedWrapperCardDog: {
    width: "85%",
    height: 20,
    marginTop: 15,
  },
  inputSearch: {
    // backgroundColor: "blue",
    width: "90%",
    borderRadius: 15,
    borderColor: "#9CA3AF",
    borderWidth: 1,
    height: 50,
    marginHorizontal: 18,
    marginBottom: 15,
  },
  containerCard: {
    backgroundColor: "yellow",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 6,
    marginTop: 18,
  },
  allCard: {
    backgroundColor: "#E5E7EB",
    width: "100%",
    height: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  mainPopular: {
    // backgroundColor: "pink",
    width: "100%",
    height: "91%",
  },
  backButton: {
    // backgroundColor: 'blue',
    width: "100%",
    // marginTop: 10,
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
});
