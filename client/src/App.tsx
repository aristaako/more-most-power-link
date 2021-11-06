import React, { ReactElement, useState } from 'react'

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { getMostPowerLinkStations } from './api'
import {
  ErrorProps,
  InputProps,
  InputsProps,
  PowerButtonProps,
  StationArrayOrNull,
  StationInfoProps
} from './common/types'

const title = 'More Most Power Link'
const subtitle =
  'Find out which link station has the strongest signal power at given point.'

function Titles() {
  return (
    <Grid container direction="column" item>
      <Grid item>
        <Typography variant="h1" component="h1">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2" component="h2">
          {subtitle}
        </Typography>
      </Grid>
    </Grid>
  )
}

function Input({ label, inputKey, onChange, value }: InputProps) {
  return (
    <TextField
      id={`input-${inputKey}`}
      label={label}
      onChange={(event) => onChange(inputKey, event.target.value)}
      required
      type="number"
      value={value}
    />
  )
}

function Inputs({ coordinates, onChange }: InputsProps) {
  const x = coordinates.x
  const y = coordinates.y
  return (
    <Grid container direction="row" item justifyContent="center" spacing={8}>
      <Grid item>
        <Input
          label="x-coordinate"
          inputKey="x"
          onChange={onChange}
          value={x}
        />
      </Grid>
      <Grid item>
        <Input
          label="y-coordinate"
          inputKey="y"
          onChange={onChange}
          value={y}
        />
      </Grid>
    </Grid>
  )
}

function PowerButton({ onClick }: PowerButtonProps) {
  return (
    <Grid item>
      <Button id="find-out-power-button" onClick={onClick} variant="contained">
        Find out
      </Button>
    </Grid>
  )
}

function StationInfo({ coordinates, stations }: StationInfoProps) {
  const point = `${coordinates.x},${coordinates.y}`
  if (!stations) {
    return <React.Fragment />
  } else {
    let searchResult
    if (stations.length == 0) {
      searchResult = `No link station within reach for point ${point}`
    } else {
      const bestStation = stations[0]
      const bestStationCoordinates = `${bestStation.x},${bestStation.y}`
      const bestStationPower = bestStation.power
      searchResult = `Best link station for point ${point} is ${bestStationCoordinates} with power ${bestStationPower}`
    }
    return (
      <Grid item>
        <Typography id="search-result" variant="body1">
          {searchResult}
        </Typography>
      </Grid>
    )
  }
}

function Error({ error }: ErrorProps) {
  const noErrors = !error || error == ''
  if (!noErrors) {
    return (
      <Grid item>
        <Alert severity="error">{error}</Alert>
      </Grid>
    )
  } else {
    return <React.Fragment />
  }
}

function App(): ReactElement {
  const [coordinates, setCoordinates] = useState({ x: '0', y: '0' })
  const [error, setError] = useState('')
  const [stations, setStations] = useState<StationArrayOrNull>(null)

  const handleButtonClick = async () => {
    const x = coordinates.x
    const y = coordinates.y
    const pathParams = `?x=${x}&y=${y}`
    const response = await getMostPowerLinkStations(pathParams)
    if (response.status == 200) {
      const stations = response.stations
      if (stations) {
        setError('')
        setStations(stations)
      }
    } else {
      setStations(null)
      const errorMessage = response.error || ''
      errorMessage == ''
        ? setError('Could not get station information.')
        : setError(`Could not get station information: ${errorMessage}.`)
    }
  }

  const handleCoordinateChange = (coordinateKey: string, value: string) => {
    const newCoordinates = { ...coordinates, [coordinateKey]: value }
    setError('')
    setStations(null)
    setCoordinates(newCoordinates)
  }

  return (
    <Grid container direction="row">
      <Grid alignItems="center" container direction="column" item spacing={8}>
        <Titles />
        <Inputs coordinates={coordinates} onChange={handleCoordinateChange} />
        <PowerButton onClick={handleButtonClick} />
        <StationInfo coordinates={coordinates} stations={stations} />
        <Error error={error} />
      </Grid>
    </Grid>
  )
}

export default App
