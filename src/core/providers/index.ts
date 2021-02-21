const { REACT_APP_API_ENDPOINT } = process.env

export const PopularMovies = (params: number, query?: string) => {
  return `${REACT_APP_API_ENDPOINT}discover/movie?sort_by=popularity.desc&page=${params}`
}
export const SearchMovies = (params: number, query: string) => {
  return `${REACT_APP_API_ENDPOINT}search/movie?query=${query}&page=${params}`
}

export const getMovie = (id: string) => {
  return `${REACT_APP_API_ENDPOINT}movie/${id}?append_to_response=release_dates`
}

export const getSimilar = (id: number) => {
  return `${REACT_APP_API_ENDPOINT}movie/${id}/similar`
}

export const getCast = (id: number) => {
  return `${REACT_APP_API_ENDPOINT}movie/${id}/credits`
}

export const getTrailer = (id: number) => {
  return `${REACT_APP_API_ENDPOINT}movie/${id}/videos`
}
