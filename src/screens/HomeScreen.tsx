import {View, ActivityIndicator, Dimensions} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {useMovies} from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {ScrollView} from 'react-native-gesture-handler';
import MoviesHorizontalSlider from '../components/MoviesHorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors';
import {getImageColors} from '../helpers/getImageColors';
import {GradientContext} from '../context/GradientContext';

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

  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const snapMovie = nowPlayingMovies[index];
    const imageURL = `https://image.tmdb.org/t/p/w500/${snapMovie.poster_path}`;
    const [primary = 'transparent', secondary = 'transparent'] =
      await getImageColors(imageURL);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlayingMovies.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlayingMovies]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
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
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>

          {/* Popular Carousel */}
          <MoviesHorizontalSlider title="Popular" movies={popularMovies} />
          <MoviesHorizontalSlider title="Top Rated" movies={topRatedMovies} />
          <MoviesHorizontalSlider title="Upcoming" movies={upComingMovies} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
