import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {MovieFullData, Genre} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';
import {FlatList} from 'react-native-gesture-handler';

interface Props {
  movieFull: MovieFullData;
  cast: Cast[];
}

export default function MovieDetails({movieFull, cast}: Props) {
  return (
    <View>
      {/* Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.horizontalDetailsCont}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text>{movieFull.vote_average}</Text>
          <Text style={styles.genreText}>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        {/*History */}
        <Text style={styles.subTitle}>History</Text>
        <Text style={styles.content}>{movieFull.overview}</Text>
        {/*Burdget */}
        <Text style={styles.subTitle}>Budget</Text>
        <Text style={styles.content}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      {/* Casting */}
      <View style={styles.castContainer}>
        <Text style={[styles.subTitle, styles.detailsContainer]}>Cast</Text>
        <FlatList
          style={styles.castList}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 20,
  },
  horizontalDetailsCont: {
    flexDirection: 'row',
  },
  genreText: {
    marginLeft: 5,
  },
  subTitle: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
  },
  castContainer: {
    marginTop: 10,
    marginBottom: 100,
  },
  castList: {
    marginTop: 10,
    height: 70,
  },
});
