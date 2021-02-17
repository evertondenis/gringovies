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
  // const { data, error } = useSWR<Data, Error>(url, async (url) => {
  //   const response = await api.get(url)

  //   return response.data
  // })

  // return { data, isLoading: !error && !data, isError: error }
  const { data, error } = useSWR<Data, Error>(url, fetcher)
  return { data, isLoading: !error && !data, isError: error }
}

// export function useFetch<Data, Error>(url: string) {
//   const { data, error } = useSWR<Data, Error>(url, fetcher)
//   return { data, isLoading: !error && !data, isError: error }
// }

// window.ENVIRONMENT_CONFIG = {
//   baseUrl: 'https://realwavecore-dev.gateway.zup.me/crm/v1/',
//   appId: 'sample_segment',
//   appFingerPrint: 'ccf7490814',
//   appKey: 'c702755043e60135bfe5021e75abe44c',
//   channelId: '13f11433-0ab6-450c-a08d-e38938679de1',
//   keycloak: 'https://keycloak-dev.apirealwave.io/auth'
// }
