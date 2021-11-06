type Coordinates = {
  x: string
  y: string
}

type InputOnChangeFunction = (coordinateKey: string, value: string) => void

export interface ErrorProps {
  error: string
}

export interface InputProps {
  inputKey: string
  label: string
  onChange: InputOnChangeFunction
  value?: string
}

export interface InputsProps {
  coordinates: Coordinates
  onChange: InputOnChangeFunction
}

export interface PowerButtonProps {
  onClick: () => void
}

export interface StationInfoProps {
  coordinates: Coordinates
  stations: StationArrayOrNull
}

export type MostPowerLinkStationData = {
  stations?: Station[]
  error?: string
  status: number
}

export type Station = {
  distance: number
  name: string
  power: number
  reach: number
  x: number
  y: number
}

export type StationArrayOrNull = Station[] | null
