import React, { useState, useCallback } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, RefreshControl, TouchableHighlight, Pressable, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
import { Input, SocialIcon, SearchBar } from "react-native-elements";
import { ButtonCategories, CardHighlight, CardPopular } from './components';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function HomeScreen({navigation}) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const categories = [
    {
      id: 1,
      ctgry: "Dog",
    },
    {
      id: 2,
      ctgry: "Cat",
    },
    {
      id: 3,
      ctgry: "Hamster",
    },
    {
      id: 4,
      ctgry: "Rabbit",
    },
    {
      id: 5,
      ctgry: "Bird",
    }
  ]

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        >
        <View style={styles.logo}>
          <View style={{marginLeft: 15}}>
            <Ionicons
              name="menu-outline"
              size={30}
              color="#111827"
            />
          </View>
          <View>
            <Text
              style={styles.myPets}
              
            >
              MyPets
            </Text>
          </View>
          <View style={{marginRight: 15}}>
            <Image
              style={styles.imgUser}
              resizeMode="cover"
              source={{
                uri: "https://images.unsplash.com/photo-1531256456869-ce942a665e80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
              }}
            >
            </Image>
          </View>
        </View>

        <View style={styles.hiUser}>
          <View>
            <Text style={{fontSize: 16, marginLeft: 18}}>
              Hi, Andrea
            </Text>
          </View>
          <View style={{marginLeft: 18}}>
            <Text style={{fontSize: 29, fontWeight: 'bold'}}>
              What are you looking for today?
            </Text>
          </View>
          <View>
            <TouchableOpacity activeOpacity={0.7} style={styles.inputSearch} onPress={() => navigation.navigate("SignIn")}>
              <Input
                disabled={true}
                inputContainerStyle={{ borderBottomWidth: 0}}
                inputStyle={{fontSize: 15}}
                placeholder="Search Pet Food"
                placeholderTextColor="#9CA3AF"
                leftIcon={
                  <FontAwesome
                    name="search"
                    size={24}
                    color="#9CA3AF"
                    style={{ marginRight: 10 }}
                  />
                }
              />
              </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.pets}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{display: 'flex', alignItems: 'center', marginLeft: 10}}
              horizontal={true}
            >
              {
                categories.map(item => {
                  return (
                    <ButtonCategories 
                    key={item.id}
                    item={item}
                    navigation={navigation}
                    ></ButtonCategories>
                  )
                })
              }
              
              
            </ScrollView>
          </View>
          <View style={styles.contentHighlight}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{display: 'flex', alignItems: 'center', marginLeft: 20}}
              horizontal={true}
            >
              <CardHighlight></CardHighlight>
              <CardHighlight></CardHighlight>
              <CardHighlight></CardHighlight>
              
              
            </ScrollView>
          </View>
          <View style={styles.popularProducts}>
            <Text style={{fontSize: 15, marginLeft: 19}}>
              Popular Products
            </Text>
            <Text style={{color: '#6B7280', fontSize: 14, marginRight: 20}}>
                See All
            </Text>
          </View>
          <View style={styles.contentPopular}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{display: 'flex', alignItems: 'center', marginLeft: 20}}
              horizontal={true}
            >
              <CardPopular></CardPopular>
              <CardPopular></CardPopular>
              <CardPopular></CardPopular>
            </ScrollView>
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  myPets: {
    // backgroundColor: 'green',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#0ACF83'
  },
  pets: {
    width: '100%',
    height: '12%',
    // backgroundColor: 'blue'
  },
  contentHighlight: {
    width: '100%',
    height: '36%',
    backgroundColor: '#E5E7EB'
  },
  popularProducts: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '7%',
    backgroundColor: '#E5E7EB'
  },
  contentPopular: {
    width: '100%',
    height: '45%',
    // backgroundColor: 'red',
  },
  inputSearch: {
    // backgroundColor: "blue",
    width: "90%",
    borderRadius: 15,
    borderColor: '#9CA3AF',
    borderWidth: 1,
    height: 50,
    marginHorizontal: 18,
    marginBottom: 124,
    marginTop: 20
  },
  imgUser: {
    height: 40,
    width: 40,
    borderRadius: 150,
    // backgroundColor: 'white'
  },
  content: {
    display: 'flex',
    height: '67%',
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#E5E7EB'
  },  
  hiUser: {
    height: '23%',
    width: '100%',
    // backgroundColor: 'blue'
  },  
  logo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '10%',
    width: '100%',
    // backgroundColor: 'yellow'
  },  
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
  }
})
