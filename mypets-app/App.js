import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn, SignUp, HomeScreen, DogCategory, BreedDetailScreen, ImageDetailScreen } from "./screens";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DogCategory" component={DogCategory} />
          <Stack.Screen name="BreedDetailScreen" component={BreedDetailScreen} />
          <Stack.Screen name="ImageDetailScreen" component={ImageDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
