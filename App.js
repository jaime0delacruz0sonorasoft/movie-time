import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import ImageScreen from "./screens/ImageScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerTintColor: 'white', 
          headerStyle:{backgroundColor: 'orange'}
        }
      }
        initialRouteName="App_to_Home">
        <Stack.Screen
          name="App_to_Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Home_to_Details"
          component={DetailsScreen}
        />
        <Stack.Screen
          name="Details_to_Details"
          component={DetailsScreen}
        />
        <Stack.Screen
          name="BigImageView"
          component={ImageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
