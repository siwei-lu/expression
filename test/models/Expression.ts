import Expression from '../../src/models/Expression'
import { add, mul } from '../../src/utils/operation'

describe('Expression Model', () => {
  it('should returns a random postfix expression', () => {
    Expression.make().should.instanceOf(Expression)
  })

  it('should return the result of expr', () => {
    const infix = [1, add, 2, mul, 3]
    const expr = new Expression(infix)

    expr.postfix.should.eq('1 2 3 × +')
    expr.infix.should.eq('1 + 2 × 3')
    expr.result.should.eq(7)
  })
})