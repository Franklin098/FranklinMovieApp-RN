import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useMovieDetails} from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

export interface DetailScreenProps
  extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const {height: screenHeight} = Dimensions.get('screen');

export default function DetailScreen({route, navigation}: DetailScreenProps) {
  const movie = route.params;
  const imageURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const {isLoading, cast, movieFullData} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri: imageURL}} style={styles.posterImage} />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={35} color="grey" style={{marginTop: 20}} />
      ) : (
        <MovieDetails movieFull={movieFullData!} cast={cast} />
      )}
      {/*Close Button */}
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon color="white" name="arrow-back-outline" size={50} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 30,
    left: 20,
  },
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
