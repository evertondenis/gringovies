const { REACT_APP_API_ENDPOINT } = process.env

export const PopularMovies = (params: number) => {
  return `${REACT_APP_API_ENDPOINT}discover/movie?sort_by=popularity.desc&page=${params}`
}
export const SearchMovies = (query: string) => {
  return `${REACT_APP_API_ENDPOINT}search/multi?query=${query}`
}

export const getMovie = (id: number) => {
  return `${REACT_APP_API_ENDPOINT}movie/${id}?append_to_response=release_dates`
}
