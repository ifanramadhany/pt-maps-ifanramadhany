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
import { ItemDog } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { fetchDogs, clearAllSearch, searchByName } from "../store/actions/dogAction";
import { UIActivityIndicator } from "react-native-indicators";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function DogCategory({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const dispatch = useDispatch();
  const { dogs, isLoading, isError } = useSelector((state) => state.dogState);
  const [loaderLoading, setLoaderLoading] = useState(false);

  // console.log(dogs);

  const [searchData, setSearchData] = useState({
    search_by_name: "",
  });

  const onChangeSearchData = (val, key) => {
    const newObj = { ...searchData };
    newObj[key] = val;
    setSearchData(newObj);
  };

  const searchDataByNameHandler = () => {
    // console.log(searchData.search_by_name);
    dispatch(searchByName(searchData.search_by_name))
  };

  const clearSearchHandler = () => {
    dispatch(clearAllSearch());
    setSearchData({
      search_by_name: "",
    });
  };

  useEffect(() => {
    dispatch(fetchDogs());
  }, []);

  //<View style={styles.endedWrapperCardDog}></View>

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
          <View activeOpacity={0.7} style={styles.inputSearch}>
            <Input
              inputContainerStyle={{ borderBottomWidth: 0 }}
              inputStyle={{ fontSize: 15 }}
              placeholder="Search Dog"
              placeholderTextColor="#9CA3AF"
              value={searchData.search_by_name}
              onChangeText={(val) => onChangeSearchData(val, "search_by_name")}
              leftIcon={
                <TouchableOpacity onPress={searchDataByNameHandler}>
                  <FontAwesome
                    name="search"
                    size={24}
                    color="#9CA3AF"
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
              }
              rightIcon={
                <TouchableOpacity onPress={clearSearchHandler}>
                  <FontAwesome
                    name="times"
                    size={24}
                    color="#9CA3AF"
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
              }
            />
          </View>
        </View>
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
            {/* Item dog  */}
            <FlatList
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              style={styles.allCard}
              contentContainerStyle={{ display: "flex", alignItems: "center" }}
              data={dogs}
              renderItem={({ item, index }) => (
                <ItemDog
                  item={item}
                  id={index + 1}
                  navigation={navigation}
                ></ItemDog>
              )}
              keyExtractor={(item, index) => index}
              ListFooterComponent={renderLoader}
              onEndReached={loadMoreItem}
              onEndReachedThreshold={0}
            ></FlatList>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
