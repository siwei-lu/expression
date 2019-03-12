import { Expr } from '../utils/types'
import postfix, { calculate } from '../utils/postfix'
import generate from '../utils/generate'

export default class Expression {
  private _infix: Expr
  private _postfix: Expr

  constructor(infix: Expr) {
    this._infix = infix
    this._postfix = postfix(infix)
  }

  get infix() {
    return this._infix.join(' ')
  }

  get postfix() {
    return this._postfix.join(' ')
  }

  get result() {
    return calculate(this._postfix)
  }

  static make() {
    const infix = generate()
    return new Expression(infix)
  }

  toString() {
    return this.infix
  }
}