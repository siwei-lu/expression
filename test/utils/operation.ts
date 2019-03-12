import operation, { add, sub, mul, div } from '../../src/utils/operation'

describe('Operation Util', () => {
  it('should returns an operation function by id', () => {
    operation('+').should.eq(add)
    operation('-').should.eq(sub)
    operation('×').should.eq(mul)
    operation('÷').should.eq(div)
  })

  it('should returns the result of two numbers', () => {
    add(1, 3).should.eq(4)
    sub(4, 1).should.eq(3)
    mul(2, 3).should.eq(6)
    div(6, 3).should.eq(2)
  })
})