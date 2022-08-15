import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import ProfilePicture from '"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"';
const DetailsScreen = ( {navigation, route} ) => {
    //const movie = route.params.movie;
    const [movieDetails, setMovieDetails] = useState(null);
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/bulbasaur');
        //xhr.open('GET', 'https://www.omdbapi.com/?apikey=1188fef1&t=star+wars&y=1977');
        xhr.send();
        xhr.onload = (U) => {
          if(xhr.status == 200)
          {
            let response = JSON.parse(xhr.response);
            setMovieDetails(response);
          }
          else{
            console.log(`HTTP Request Failed ${xhr.status}`);
          }
        }
      }, []
    );
    return (
      <View style={styles.mainView}>
        <img className="profile-photo" src={ProfilePicture} />
        <Text>{movieDetails == null ? "" : movieDetails.name}</Text>
        <Text>{movieDetails == null ? "" : movieDetails.order}</Text>
        
        {
           movieDetails != null && movieDetails.types.map (
            (obj)=> {
              return <Text>{obj == null ? "" : obj.type.name}</Text>
            }
          )
        }
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

export default DetailsScreen;