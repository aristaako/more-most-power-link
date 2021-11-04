import {
  calculateDistanceBetweenPoints,
  calculateDistanceBetweenPointAndStation,
  calculateStationPowerForPoint
} from '../../src/link'

describe('calculateDistanceBetweenPoints', () => {
  const x1 = 0
  const y1 = 0
  const x2 = 100
  const y2 = 100
  const x3 = 15
  const y3 = 10
  it('should calculate the distance between two x,y points', async () => {
    expect(calculateDistanceBetweenPoints(x1, y1, x2, y2)).toBe(141.4)
    expect(calculateDistanceBetweenPoints(x1, y1, x1, y1)).toBe(0)
    expect(calculateDistanceBetweenPoints(x1, y1, x2, y1)).toBe(100)
    expect(calculateDistanceBetweenPoints(x1, y1, x3, y3)).toBe(18)
    expect(calculateDistanceBetweenPoints(x2, y2, x3, y3)).toBe(123.8)
  })
})

describe('calculateDistanceBetweenPointAndStation', () => {
  const x1 = 0
  const y1 = 0
  const x2 = 20
  const y2 = 20
  const station = { x: 18, y: 18, distance: 0, reach: 0 }
  it('should calculate the distance between x,y point and a station', async () => {
    expect(calculateDistanceBetweenPointAndStation(x1, y1, station)).toBe(25.5)
    expect(calculateDistanceBetweenPointAndStation(x2, y2, station)).toBe(2.8)
  })
})

describe('calculateStationPowerForPoint', () => {
  const station1 = { x: 0, y: 0, distance: 18, reach: 18 }
  const station2 = { x: 0, y: 0, distance: 0, reach: 5 }
  const station3 = { x: 0, y: 0, distance: 6, reach: 5 }
  const station4 = { x: 0, y: 0, distance: 2, reach: 0 }
  it('should calculate the distance between x,y point and a station', async () => {
    expect(calculateStationPowerForPoint(station1)).toBe(0)
    expect(calculateStationPowerForPoint(station2)).toBe(25)
    expect(calculateStationPowerForPoint(station3)).toBe(0)
    expect(calculateStationPowerForPoint(station4)).toBe(0)
  })
})
