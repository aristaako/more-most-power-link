import axios from 'axios'

import { MostPowerLinkStationData } from '../common/types'

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:9000'

export const getMostPowerLinkStations = async (
  pathParams: string
): Promise<MostPowerLinkStationData> => {
  return axios
    .get(`${API_URL}/link${pathParams}`)
    .then((response) => {
      const status = 200
      const stations = response.data
      return { stations, status }
    })
    .catch((error) => {
      return { error: error.message, status: 500 }
    })
}
