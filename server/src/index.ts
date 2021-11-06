import express from 'express'
import cors from 'cors'

import { isInputValid } from './common/utils'
import { getLinkPower } from './link'

const port = process.env.PORT || 9000
const app = express()
app.use(cors())

app.get('/', (req: any, res) => {
  res.send('more-most-power-link')
})

app.get('/link', (req: any, res) => {
  const x = req.query.x
  const y = req.query.y
  const xIsValid = isInputValid(x)
  const yIsValid = isInputValid(y)
  const inputsValid = xIsValid && yIsValid
  inputsValid ? res.send(getLinkPower(x, y)) : res.send('nono')
})

app.listen(port, () => {
  console.log(`More Most Power Link started on ${port}.`)
})
