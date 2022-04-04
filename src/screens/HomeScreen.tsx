import {View, ActivityIndicator, Dimensions} from 'react-native';
import React from 'react';
import {useMovies} from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {ScrollView} from 'react-native-gesture-handler';
import MoviesHorizontalSlider from '../components/MoviesHorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export default function HomeScreen() {
  const {
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upComingMovies,
    isLoading,
  } = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{top: top + 20}}>
        {/* Main Carousel */}
        <View style={{height: 440}}>
          <Carousel
            data={nowPlayingMovies}
            renderItem={({item, index}) => <MovieCard movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        {/* Popular Carousel */}
        <MoviesHorizontalSlider title="Popular" movies={popularMovies} />
        <MoviesHorizontalSlider title="Top Rated" movies={topRatedMovies} />
        <MoviesHorizontalSlider title="Upcoming" movies={upComingMovies} />
      </View>
    </ScrollView>
  );
}
