import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export default function MovieCard({movie, height = 420, width = 300}: Props) {
  const imageURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <View style={{width, height, marginHorizontal: 8}}>
      <View style={styles.cardContainer}>
        <Image source={{uri: imageURL}} style={styles.posterImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  posterImage: {
    flex: 1,
    borderRadius: 18,
  },
});
