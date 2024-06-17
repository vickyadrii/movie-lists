export type Movie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type User = {
  avatar: {
    gravatar: {
      hash: string;
    };
    tmdb: {
      avatar_path: string;
    };
  };
  id: number;
  include_adult: boolean;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  username: string;
};

export type WatchlistRequest = {
  media_type: string;
  media_id: number;
  watchlist: boolean;
};

export type FavoriteRequest = {
  media_type: string;
  media_id: number;
  watchlist: boolean;
};
