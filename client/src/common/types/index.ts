type Coordinates = {
  x: string
  y: string
}

//TODO: milloin käytetään typeä ja milloin interfacea?

export type ErrorProps = {
  error: string
}

type InputOnChangeFunction = (coordinateKey: string, value: string) => void

export type InputProps = {
  inputKey: string
  label: string
  onChange: InputOnChangeFunction
  value?: string
}

export type InputsProps = {
  coordinates: Coordinates
  onChange: InputOnChangeFunction
}

export type MostPowerLinkStationData = {
  stations?: Station[]
  error?: string
  status: number
}

export type PowerButtonProps = {
  onClick: () => void
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

export type StationInfoProps = {
  coordinates: Coordinates
  stations: StationArrayOrNull
}
