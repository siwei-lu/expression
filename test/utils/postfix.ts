import postfix, { calculate } from '../../src/utils/postfix'
import { add, mul } from '../../src/utils/operation'

describe('Postfix Util', () => {
  it('should returns the postfix expression of a infix expression', () => {
    const infix = [1, add, 2, mul, 3]
    const expected = [1, 2, 3, mul, add]
    const actual = postfix(infix)

    actual.every((v, i) => v === expected[i]).should.true
  })

  it('should returns the result of a postfix expression', () => {
    const expr = [1, 2, 3, mul, add]
    calculate(expr).should.eq(7)
  })
})