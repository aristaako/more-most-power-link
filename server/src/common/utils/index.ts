import isEmpty from 'lodash/isEmpty'
import isNaN from 'lodash/isNaN'
import isNumber from 'lodash/isNumber'
import toNumber from 'lodash/toNumber'
import round from 'lodash/round'

export const isInputValid = (input: string) => {
  const inputIsEmpty = isEmpty(input)
  if (inputIsEmpty) {
    return false
  }
  const inputNumber = toNumber(input)
  const inputIsValidNumber = isNumber(inputNumber) && !isNaN(inputNumber)
  return inputIsValidNumber
}

export const roundTo = (numberToRound: number, precision: number) => {
  const rounded = round(numberToRound, precision)
  return rounded
}

export const squared = (input: number) => {
  const squared = input * input
  const squaredAndRounded = roundTo(squared, 2)
  return squaredAndRounded
}
