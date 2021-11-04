import axios from 'axios'

import { MostPowerLinkStationData } from '../common/types'

const API_URL = 'http://localhost:9000/link'

export const getMostPowerLinkStations = async (
  pathParams: string
): Promise<MostPowerLinkStationData> => {
  return axios
    .get(`${API_URL}${pathParams}`)
    .then((response) => {
      const status = 200
      const stations = response.data
      return { stations, status }
    })
    .catch((error) => {
      return { error: error.message, status: 500 }
    })
}
