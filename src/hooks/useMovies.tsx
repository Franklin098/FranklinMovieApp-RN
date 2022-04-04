import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBResponse, Movie} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlayingMovies: Movie[];
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  upComingMovies: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlayingMovies: [],
    popularMovies: [],
    topRatedMovies: [],
    upComingMovies: [],
  });

  const getMovies = async () => {
    try {
      const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
      const popularPromise = movieDB.get<MovieDBResponse>('/popular');
      const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
      const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');

      const allResponses = await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);

      setMoviesState({
        nowPlayingMovies: allResponses[0].data.results,
        popularMovies: allResponses[1].data.results,
        topRatedMovies: allResponses[2].data.results,
        upComingMovies: allResponses[3].data.results,
      });
    } catch (error) {
      console.log('Error while getting now_playing movies from API', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
