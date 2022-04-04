import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Movie} from '../interfaces/movieInterface';
import MovieCard from './MovieCard';

interface Props {
  title?: string;
  movies: Movie[];
}

export default function MoviesHorizontalSlider({title, movies}: Props) {
  return (
    <View
      style={{
        height: title ? 260 : 230,
      }}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            marginLeft: 10,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MovieCard movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
