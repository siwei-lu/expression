import { Expr, Operation, ExprItem } from './types'
import { isGreat } from './operation'
import { toFixed } from './common'

export const _last = <T>(arr: T[]) => arr[arr.length - 1]

export function _compare(ops: Operation[], tmp: any[], current: ExprItem) {
  if (typeof current === 'number') {
    return tmp.push(current)
  }

  if (ops.length === 0 || isGreat(current, _last(ops))) {
    return ops.push(current)
  }

  tmp.push(ops.pop())
  _compare(ops, tmp, current)
}

export function calculate(postfix: Expr) {
  const tmp = []

  postfix.forEach(c => {
    if (typeof c === 'number') {
      tmp.push(c)
      return
    }

    const b = tmp.pop()
    const a = tmp.pop()
    tmp.push(c(a, b))
  })

  const result = tmp.pop()
  return toFixed(result)
}

export default function postfix(infix: Expr) {
  const ops: Operation[] = []
  const tmp = []

  infix.forEach(c => _compare(ops, tmp, c))
  return tmp.concat(ops.reverse())
}

