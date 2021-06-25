import useSWR from 'swr'
import axios from 'axios'

const { REACT_APP_API_TOKEN } = process.env

export const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${REACT_APP_API_TOKEN}`
      }
    })
    .then((res) => res.data)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, fetcher)
  return { data, isLoading: !error && !data, isError: error }
}
