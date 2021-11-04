import { Station } from '../common/types'
import ldMap from 'lodash/map'

const station1 = { x: 0, y: 0, reach: 10 }
const station2 = { x: 20, y: 20, reach: 5 }
const station3 = { x: 10, y: 0, reach: 12 }
const stations = [station1, station2, station3]

const addNameForStations = (station: Station) => {
  const name = `${station.x},${station.y}`
  return { ...station, name }
}

export const getStations = () => {
  const stationsWithNames = ldMap(stations, addNameForStations)
  return stationsWithNames
}
