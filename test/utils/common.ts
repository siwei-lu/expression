import { isFloat, toFixed, range } from '../../src/utils/common'

describe('Common Util', () => {
  it('should returns true if the number is a float', () => {
    isFloat(20).should.false
    isFloat(20.1).should.true
  })

  it('should returns a number holds 2 decimal places', () => {
    toFixed(2).should.eq(2)
    toFixed(2.1).should.eq(2.1)
    toFixed(2.21).should.eq(2.21)
    toFixed(2.214).should.eq(2.21)
    toFixed(2.216).should.eq(2.22)
  })

  it('should returns an array with ordered number', () => {
    const arr = range(1, 3)
    arr.should.length(2)
    arr.toString().should.eq('1,2')
  })
})