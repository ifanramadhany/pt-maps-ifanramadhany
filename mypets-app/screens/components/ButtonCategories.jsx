import React, { useState } from "react";
import { Text, StyleSheet, TouchableHighlight } from 'react-native'

export default function ButtonCategories({navigation, item}) {
  const [ isPress, setIsPress ] = useState(false);

  return (
    <TouchableHighlight
      underlayColor="#0ACF83"
      style={isPress ? styles.itemPetsActive : styles.itemPets}
      onPress={() => navigation.navigate("DogCategory")}
      onPressIn={() => setIsPress(true)}
      onPressOut={() => setIsPress(false)}
    >
      <Text style={isPress ? styles.buttonPress : styles.buttonNormal}>
        {item.ctgry}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  buttonPress: {
    color: 'white',
    fontSize: 14
  },  
  buttonNormal: {
    color: '#6B7280',
    fontSize: 14
  },
  itemPetsActive: {
    marginHorizontal: 10,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0ACF83',
    paddingHorizontal: 25,
    height: 35,
    backgroundColor: '#0ACF83'
  },
  itemPets: {
    marginHorizontal: 10,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: '#9CA3AF',
    height: 35,
    backgroundColor: '#E5E7EB'
  },
  
})
