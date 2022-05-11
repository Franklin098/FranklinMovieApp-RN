import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movieInterface';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DetailScreenProps} from '../screens/DetailScreen';
import {DetailScreenNavigationProp} from '../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export default function MovieCard({movie, height = 420, width = 300}: Props) {
  const imageURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const navigation = useNavigation<DetailScreenNavigationProp>();

  return (
    <TouchableOpacity
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 6,
      }}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailScreen', movie)}>
      <View style={styles.cardContainer}>
        <Image source={{uri: imageURL}} style={styles.posterImage} />
      </View>
    </TouchableOpacity>
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
