import express from 'express'
import cors from 'cors'

import { isInputValid } from './common/utils'
import { getLinkPower } from './link'

const app = express()
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
)

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

app.listen(9000, () => {
  console.log('More Most Power Link started on 9000.')
})
