import map from 'lodash/map'
import toNumber from 'lodash/toNumber'

import { roundTo, squared } from '../common/utils'
import { Station } from '../common/types'
import { getStations } from '../db'

export const calculateDistanceBetweenPoints = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
) => {
  const horizontalDistance = x1 - x2
  const verticalDistance = y1 - y2
  const horizontalDistanceSquared = squared(horizontalDistance)
  const verticalDistanceSquared = squared(verticalDistance)
  const distancesSum = horizontalDistanceSquared + verticalDistanceSquared
  const distance = Math.sqrt(distancesSum)
  const distanceRounded = roundTo(distance, 1)
  return distanceRounded
}

export const calculateDistanceBetweenPointAndStation = (
  x: number,
  y: number,
  station: Station
) => {
  const xStation = station.x
  const yStation = station.y
  return calculateDistanceBetweenPoints(x, y, xStation, yStation)
}

export const calculateStationPowerForPoint = (station: Station) => {
  const power =
    station.distance > station.reach
      ? 0
      : squared(station.reach - station.distance)
  return power
}

const addDistanceToPointTo = (stations: Station[], x: number, y: number) => {
  const stationsWithDistances = map(stations, (station: Station) => {
    return {
      ...station,
      distance: calculateDistanceBetweenPointAndStation(x, y, station)
    }
  })
  return stationsWithDistances
}

const addPowerForPointTo = (stations: Station[]) => {
  const stationsWithDistances = map(stations, (station: Station) => {
    return {
      ...station,
      power: calculateStationPowerForPoint(station)
    }
  })
  return stationsWithDistances
}

export const getLinkPower = (x: string, y: string) => {
  const pointX = toNumber(x)
  const pointY = toNumber(y)
  const stations = getStations()
  const stationsWithDistancesToPoint = addDistanceToPointTo(
    stations,
    pointX,
    pointY
  )
  const stationsWithPowerForPoint = addPowerForPointTo(
    stationsWithDistancesToPoint
  )
  const inRangeStations = stationsWithPowerForPoint.filter(
    (station: Station) => {
      return station.power > 0
    }
  )
  return inRangeStations
}
