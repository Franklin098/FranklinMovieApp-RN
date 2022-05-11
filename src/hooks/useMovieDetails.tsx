import {useState, useEffect} from 'react';
import {MovieFullData} from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFullData?: MovieFullData;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFullData: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFullData>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [movieDetailsResp, castResp] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setState({
      isLoading: false,
      movieFullData: movieDetailsResp.data,
      cast: castResp.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
