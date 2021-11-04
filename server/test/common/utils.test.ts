import { isInputValid, roundTo, squared } from '../../src/common/utils'

describe('isInputValid', () => {
  it('should return true when input is valid', async () => {
    expect(isInputValid('2')).toBe(true)
    expect(isInputValid('354')).toBe(true)
  })

  it('should return false when input is not valid', async () => {
    expect(isInputValid('')).toBe(false)
    expect(isInputValid(null)).toBe(false)
    expect(isInputValid('boat')).toBe(false)
    expect(isInputValid('4boat')).toBe(false)
    expect(isInputValid('boat6')).toBe(false)
  })
})

describe('roundTo', () => {
  it('should return given number without decimals', async () => {
    expect(roundTo(2.599, 0)).toBe(3)
    expect(roundTo(2.5, 0)).toBe(3)
    expect(roundTo(2.123, 0)).toBe(2)
    expect(roundTo(2, 0)).toBe(2)
    expect(roundTo(2.1, 0)).toBe(2)
  })
  it('should return given number with one decimal', async () => {
    expect(roundTo(2.5999, 1)).toBe(2.6)
    expect(roundTo(2.5455, 1)).toBe(2.5)
    expect(roundTo(2.2, 1)).toBe(2.2)
    expect(roundTo(2.13, 1)).toBe(2.1)
    expect(roundTo(2.901, 1)).toBe(2.9)
  })
  it('should return given number with two decimals', async () => {
    expect(roundTo(2.5999, 2)).toBe(2.6)
    expect(roundTo(2.5455, 2)).toBe(2.55)
    expect(roundTo(2.12, 2)).toBe(2.12)
    expect(roundTo(2.19, 2)).toBe(2.19)
    expect(roundTo(2.091, 2)).toBe(2.09)
  })
  it('should return given number with more than two decimals', async () => {
    expect(roundTo(2.59999, 3)).toBe(2.6)
    expect(roundTo(2.12, 4)).toBe(2.12)
    expect(roundTo(2.1190963, 5)).toBe(2.1191)
  })
})

describe('squared', () => {
  it('should return the given number squared', async () => {
    expect(squared(2)).toBe(4)
    expect(squared(7)).toBe(49)
    expect(squared(3.7)).toBe(13.69)
  })
})
