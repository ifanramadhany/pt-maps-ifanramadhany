import React, { useState, useCallback, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  TouchableHighlight,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import { Input, SocialIcon, SearchBar } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { fetchBreeds } from "../store/actions/dogAction";
import { UIActivityIndicator } from "react-native-indicators";
import { ItemBreed } from "./components";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function BreedDetailScreen({ navigation, route }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const dispatch = useDispatch();
  const { breeds, isLoading, isError } = useSelector((state) => state.dogState);
  const [loaderLoading, setLoaderLoading] = useState(false);

  // console.log(breeds);


  useEffect(() => {
    dispatch(fetchBreeds(route.params.dogName));
  }, []);

  const renderLoader = () => {
    return (
      <>
        <View style={styles.endedWrapperCardDog}></View>
        {loaderLoading ? (
          <View style={styles.loaderStyle}>
            <ActivityIndicator size="large" color="#2c3e50" />
          </View>
        ) : null}
      </>
    );
  };

  const renderDataEmpty = () => {
    if (breeds.length != 0 ) return null
    return (
      <View style={styles.dataEmpty}>
        <Text style={{fontSize: 21, fontStyle: 'italic', fontWeight: 'bold', color: '#0ACF83'}}>This Dog has no breed</Text>
      </View>
    )
  }

  const loadMoreItem = () => {
    setLoaderLoading(true);
    setTimeout(() => {
      setLoaderLoading(false);
    }, 1000);
  };

  

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={styles.backButton}>
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back-outline" size={30} color="#111827" />
        </TouchableOpacity>
      </View>
      <View style={styles.mainPopular}>
        <Text
          style={{
            fontSize: 30,
            marginLeft: 20,
            marginTop: 10,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Breeds of {route.params.dogName}
        </Text>
        <View></View>
        {isError ? (
          <View style={styles.whenError}>
            <Text style={{ fontSize: 20, color: "#DC2626" }}>
              Ooops! Something went wrong.
            </Text>
          </View>
        ) : null}
        {isLoading ? (
          <UIActivityIndicator color="#2c3e50" size={80} />
        ) : (
          <>
            {/* Item breed variant  */}
            <FlatList
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              style={styles.allCard}
              columnWrapperStyle={styles.row}
              data={breeds}
              renderItem={({ item }) => <ItemBreed item={item}></ItemBreed>}
              numColumns={2}
              keyExtractor={(item, index) => index}
              ListHeaderComponent={renderDataEmpty}
              ListFooterComponent={renderLoader}
              
            >
              <View style={styles.endedWrapperCardDog}></View>
            </FlatList>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dataEmpty: {
    // backgroundColor: 'green',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flex: 1,
    justifyContent: "flex-start",
  },
  loaderStyle: {
    marginVertical: 15,
    alignItems: "center",
  },
  whenError: {
    // backgroundColor: 'blue',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  endedWrapperCardDog: {
    // backgroundColor: "green",
    width: "100%",
    height: 20,
    marginTop: 15,
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
