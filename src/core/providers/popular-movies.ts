const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env

export const PopularMovies = (params: number) => {
  // console.log(REACT_APP_API_ENDPOINT)
  return `${REACT_APP_API_ENDPOINT}discover/movie?sort_by=popularity.desc&page=${params}`
}
export const SearchMovies = (query: string) => {
  // console.log(REACT_APP_API_ENDPOINT)
  return `${REACT_APP_API_ENDPOINT}search/multi?query=${query}`
  // return `${REACT_APP_API_ENDPOINT}discover/movie?sort_by=popularity.desc&page=${params}`
}

export const getMovie = (id: string) => {
  // console.log(REACT_APP_API_ENDPOINT)
  return `${REACT_APP_API_ENDPOINT}movie/${id}`
  // return `${REACT_APP_API_ENDPOINT}search/multi?query=${query}`
  // return `${REACT_APP_API_ENDPOINT}discover/movie?sort_by=popularity.desc&page=${params}`
}
