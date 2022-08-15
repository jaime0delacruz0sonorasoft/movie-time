import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ( {navigation} ) => {

    return (
      <View style={styles.mainView}>
        <Text>Home Screen</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home_to_Details",{movie: {
              title:        "Star Wars",
              release:       1977,
              screenNumber:  1
            }} )}}>            
            <View>
              <Text>Star Wars</Text>
              </View>  
            </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home_to_Details",{movie: {
              title:          "Pokémon",
              release:         2018,
              screenNumber:    1
            }} )}}>    
            <View>
              <Text>Pokémon</Text>
              </View>               
            </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home_to_Details",{movie: {
              title:          "Naruto",
              release:         1999,
              screenNumber:    1
            }} )}}>              
            <View>
              <Text>Naruto</Text>
              </View>     
            </TouchableOpacity>
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default HomeScreen;